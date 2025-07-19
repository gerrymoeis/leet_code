/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    if (folder.length <= 1) return folder
    folder.sort()
    
    let parent = folder[0]
    let folders = [parent]
    for (let i=1; i < folder.length; i++) {
      if (!folder[i].startsWith(parent + "/")) {
        parent = folder[i]
        folders.push(parent)
      }
    }
    return folders
};

let a = removeSubfolders(["/a","/a/b","/c/d","/c/d/e","/c/f"])
let b = removeSubfolders(["/a","/a/b/c","/a/b/d"])
let c = removeSubfolders(["/a/b/c","/a/b/ca","/a/b/d"])
let d = removeSubfolders(["/c/f", "/c/d/e", "/c/d", "/a/b", "/a"])
let e = removeSubfolders(["/a/b/c", "/a", "/c/d"])
let f = removeSubfolders(["/a", "/a/b", "/a/b/c", "/a/c", "/a/c/d", "/a/c/d/e", "/b", "/b/a", "/b/c", "/b/c/a", "/b/c/d", "/c", "/c/a", "/c/a/b", "/c/a/b/d", "/c/a/c", "/c/d", "/c/d/a", "/ca", "/d", "/d/e", "/d/e/f", "/d/f", "/z", "/z/a", "/z/a/b", "/z/b", "/zb", "/za", "/a/ca", "/a/cb", "/b/ca", "/b/cb"])
console.log(a,"\n",b,"\n",c,"\n",d,"\n",e,"\n",f)
// console.log(a)


// Experiment
// if ("/a" of "/a/b") {
//   console.log("Anjay")
// }

// const setNum = new Set()
// setNum.add("/a")
// console.log(setNum, setNum.has(["/a", "/b"]))
// console.log("/a/b".split("/a/"))
// console.log("/aa/b".split("/a/"))
// console.log("/c/d/e".split("/c/d/"))
// console.log("/".split("/c/d/"))

// Thought Process
// parent = "/a"
// parent in "/a/b"
// parent not in "/c/d/" => parent = "/c/d"



// Attempt 1
// var removeSubfolders = function(folder) {
//     if (folder.length <= 1) return folder
    
//     let parent = folder[0]
//     let folders = [parent]
//     for (let i=1; i < folder.length; i++) {
//       if (folder[i].split(parent + "/").length === 1) {
//         parent = folder[i]
//         folders.push(parent)
//       }
//     }
//     return folders
    
//     // for (let i=1; i < folder.length / 2; i++) {
//     //   console.log(folder[i], folder[i-1])
//     //   console.log(folder[folder.length-i], folder[folder.length-i-1])
//     // }
    
//     // for (let i=0; i < folder.length / 2; i++) {
//     //   console.log(folder[i], folder[folder.length-1-i])
//     // }
// };