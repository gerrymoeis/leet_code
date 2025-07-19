class TrieNode {
    constructor() {
        // 'children' will be a map where keys are folder names (e.g., "a")
        // and values are the next TrieNode.
        this.children = {};
        
        // 'path' will store the full folder path (e.g., "/a/b") if this node
        // marks the end of a folder. Otherwise, it's null.
        this.path = null;
    }
}

/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    const root = new TrieNode();

    // 1. BUILD THE TRIE
    for (const f of folder) {
        // Split the path into components. "/a/b" -> ["", "a", "b"]
        // We ignore the first empty string.
        const parts = f.split('/').slice(1);
        
        let currentNode = root;
        for (const part of parts) {
            // If the child node for this part doesn't exist, create it.
            if (!currentNode.children[part]) {
                currentNode.children[part] = new TrieNode();
            }
            // Move down to the next node in the path.
            currentNode = currentNode.children[part];
        }
        // Mark the end of this path by storing the full folder string.
        currentNode.path = f;
    }

    // 2. TRAVERSE THE TRIE WITH DFS TO FIND ROOT FOLDERS
    const result = [];
    
    function dfs(node) {
        // If the current node represents a complete folder...
        if (node.path !== null) {
            // This is a root folder. Add it to our results.
            result.push(node.path);
            // CRITICAL: Do not explore its children, because they are all sub-folders.
            // By returning here, we effectively prune the search.
            return;
        }
        
        // If this node is just an intermediate path (not a full folder),
        // continue the search on all its children.
        for (const childNode in node.children) {
            dfs(node.children[childNode]);
        }
    }
    
    // Start the search from the root.
    dfs(root);
    
    return result;
};