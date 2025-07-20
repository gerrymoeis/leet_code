/**
 * @param {string[][]} paths
 * @return {string[][]}
 */
function convertToTrie(paths) {
  const trie = [
      { char: 'root', marked: false, isEndOfPath: false, children: {} }
    ]
    for (const path of paths) {
      let currentIndex = 0
      for (let i = 0; i < path.length; i++) {
        const folder = path[i]
        let currentNode = trie[currentIndex]
        
        if (!currentNode.children[folder]) {
          currentNode.children[folder] = trie.length
          trie.push({ char: folder, marked: false, isEndOfPath: false, children: {} })
        }
        
        currentIndex = currentNode.children[folder]
        
        if (i === path.length - 1) {
          trie[currentIndex].isEndOfPath = true
        }
      }
    }
  return trie
}

function markDuplicates(trie, nodeIndex, seenStructures) {
    const currentNode = trie[nodeIndex]
    const childrenStructures = []
    
    // First, recursively process all children
    for (const [folderName, childIndex] of Object.entries(currentNode.children)) {
      const childStructure = markDuplicates(trie, childIndex, seenStructures)
      childrenStructures.push(`${folderName}:${childStructure}`)
    }
    
    // Sort to ensure consistent representation
    childrenStructures.sort()
    const structureKey = childrenStructures.join(',')
    
    // Only consider nodes with children as potential duplicates
    // Empty folders (no children) are not considered for duplication
    if (childrenStructures.length > 0) {
      if (seenStructures.has(structureKey)) {
        // Mark both the current node and the previously seen node
        const originalNodeIndices = seenStructures.get(structureKey)
        originalNodeIndices.push(nodeIndex)
        
        // Mark all nodes with this structure
        for (const idx of originalNodeIndices) {
          markSubtree(trie, idx)
        }
      } else {
        seenStructures.set(structureKey, [nodeIndex])
      }
    }
    
    return structureKey
}

function markSubtree(trie, nodeIndex) {
    const node = trie[nodeIndex]
    node.marked = true
    
    // Recursively mark all children
    for (const childIndex of Object.values(node.children)) {
      markSubtree(trie, childIndex)
    }
}

function reconstructPaths(trie, nodeIndex, currentPath, results) {
    const currentNode = trie[nodeIndex]
    
    if (currentNode.marked) {
      return
    }
    
    if (currentNode.char !== 'root') {
      currentPath.push(currentNode.char)
    }
    
    if (currentNode.isEndOfPath) {
      results.push([...currentPath])
    }
    
    for (const childIndex of Object.values(currentNode.children)) {
      reconstructPaths(trie, childIndex, currentPath, results)
    }
    
    if (currentNode.char !== 'root') {
      currentPath.pop()
    }
}

var deleteDuplicateFolder = function(paths) {
    const trie = convertToTrie(paths)  // Fixed: added const
    
    const seenStructures = new Map()  // Fixed: added const
    markDuplicates(trie, 0, seenStructures)
    
    const results = []
    reconstructPaths(trie, 0, [], results)
    
    return results
};

// Test cases
const tests = [
    [["abc"]],
    [["a"],["c"],["d"],["a","b"],["c","b"],["d","a"]],
    [["a"],["c"],["a","b"],["c","b"],["a","b","x"],["a","b","x","y"],["w"],["w","y"]],
    [["a","b"],["c","d"],["c"],["a"]]
]

for (const test of tests) {  // Fixed: added const
  console.log("Input:", test)
  console.log("Output:", deleteDuplicateFolder(test))
  console.log("---")
}   