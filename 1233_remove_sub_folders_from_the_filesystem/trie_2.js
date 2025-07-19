// Trie Node class
class TrieNode {
    constructor() {
        this.children = new Map(); // Map to store child nodes
        this.isEnd = false;        // Flag to mark if this node represents end of a folder path
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    // Insert a folder path into the trie
    insert(path) {
        const parts = path.split('/').filter(part => part !== ''); // Remove empty strings from split
        let current = this.root;
        
        for (const part of parts) {
            if (!current.children.has(part)) {
                current.children.set(part, new TrieNode());
            }
            current = current.children.get(part);
            
            // If we encounter a folder that's already marked as end,
            // it means current path is a subfolder of an existing folder
            if (current.isEnd) {
                return false; // This path is a subfolder, don't insert
            }
        }
        
        current.isEnd = true;
        return true; // Successfully inserted
    }
}

var removeSubfolders = function(folder) {
    // Sort folders to ensure parent folders are processed before their subfolders
    folder.sort();
    
    const trie = new Trie();
    const result = [];
    
    for (const path of folder) {
        // Only add to result if it's not a subfolder of existing folders
        if (trie.insert(path)) {
            result.push(path);
        }
    }
    
    return result;
};

// Example usage and test cases
console.log("Test Case 1:");
console.log(removeSubfolders(["/a","/a/b","/c/d","/c/d/e","/c/f"]));
// Expected: ["/a","/c/d","/c/f"]

console.log("\nTest Case 2:");
console.log(removeSubfolders(["/a","/a/b/c","/a/b/d"]));
// Expected: ["/a"]

console.log("\nTest Case 3:");
console.log(removeSubfolders(["/a/b/c","/a/b/ca","/a/b/d"]));
// Expected: ["/a/b/c","/a/b/ca","/a/b/d"]