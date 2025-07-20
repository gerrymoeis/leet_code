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
      for (let i=0; i < path.length; i++) {
        const folder = path[i]
        let currentNode = trie[currentIndex]
        
        if (!currentNode.children[folder]) {
          currentNode.children[folder] = trie.length
          trie.push({ char: folder, marked: false, isEndOfPath:false, children: {} })
        }
        
        currentIndex = currentNode.children[folder]
        
        if (i === path.length-1) {
          trie[currentIndex].isEndOfPath = true
        }
      }
    }
  return trie
}

function toHash(str) {
  let hash = 0
  for (let i=0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - 5) + char
    hash |= 0
  }
  return hash
}

function markDuplicates(trie, nodeIndex, seenHashes) {
    const currentNode = trie[nodeIndex]
    const childrenHashes = []
    
    if (currentNode.children) {
      for (const currentIndex of Object.values(currentNode.children)) {
        const childHash = markDuplicates(trie, currentIndex, seenHashes)
        childrenHashes.push(childHash)
      }
    }
    
    childrenHashes.sort((a,b) => a-b)
    const structureKey = childrenHashes.join(',')
    
    if (structureKey.length > 0) {
      const structureHash = toHash(structureKey)
      
      if (seenHashes.has(structureHash)) {
        const originalNodeIndex = seenHashes.get(structureHash)
        trie[originalNodeIndex].marked = true
        currentNode.marked = true
      }
      else {
        seenHashes.set(structureHash, nodeIndex)
      }
    }
    
    const fullKey = currentNode.char + '(' + structureKey + ')'
    return toHash(fullKey)
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
    
    for (const currentIndex of Object.values(currentNode.children)) {
      reconstructPaths(trie, currentIndex, currentPath, results)
    }
    
    if (currentNode.char !== 'root') {
      currentPath.pop()
    }
}

var deleteDuplicateFolder = function(paths) {
    const trie = convertToTrie(paths)
    
    const seenHashes = new Map()
    markDuplicates(trie, 0, seenHashes)
    
    const results = []
    reconstructPaths(trie, 0, [], results)
    
    return results
};

tests = [
    [["abc"]],
    [["a"],["c"],["d"],["a","b"],["c","b"],["d","a"]],
    [["a"],["c"],["a","b"],["c","b"],["a","b","x"],["a","b","x","y"],["w"],["w","y"]],
    [["a","b"],["c","d"],["c"],["a"]]
]

for (test of tests) {
  console.log(deleteDuplicateFolder(test))
}