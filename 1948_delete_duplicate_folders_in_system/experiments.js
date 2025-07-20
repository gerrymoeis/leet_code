/**
 * @param {string[][]} paths
 * @return {string[][]}
 */
var deleteDuplicateFolder = function(paths) {
    // Test case paths = [["a"],["c"],["a","b"],["c","b"],["a","b","x"],["a","b","x","y"],["w"],["w","y"]]
    // 1. Setup variable and Convert to Trie
    trie = convertToTrie(paths)
    results = []
    
    // 2. Identify marked object
    
    // 3. Push valid sub array into the results array in the expected format
    // Expected Output Test Case: results = [["c"],["c","b"],["a"],["a","b"]]
    
    return results
};

// Experiments
// 1st Thought Process
// var deleteDuplicateFolder = function(paths) {
//     // 1. Performing paths -> trie, modifying paths array to trie data structure
//     // (is this correct?, or is this less efficient than creating new variable)

//     // 2. After paths already become trie, we loop through it from the last element
//     for (let i=paths.length-1; i >=0; i--) {
//       // 3. Performing check of duplicate folder using Trie O(1) operation process

//       if (paths[i]) {
//         // 4. If we see some duplicate folder, we immediately delete it from the array
//       }
//     }

//     // 5. Return paths that already cleaned from duplicate folder
//     return paths
// };

// 2nd Thought Process
// var deleteDuplicateFolder = function(paths) {
//     // 1. Performing paths -> trie, modifying paths array to trie data structure
//     // (is this correct?, or is this less efficient than creating new variable)
//     paths = []
   
//     // 2. Define new variable marked
//     marked = []
   
//     // 3. After paths already become trie, we loop through it
//     for (let i=0; i < paths; i++) {
//       // 4. Performing check of duplicate/identical folder/subfolder
     
//       if (paths[i]) {
//         // 5. If we see some duplicate folder, we add it to the marked array
//       }
//     }
   
//     // 6. We loop through marked array and delete duplicate from paths array
   
//     // 7. Return paths that already cleaned from duplicate folder
//     return paths
// };