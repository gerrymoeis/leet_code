/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number}
 */
// AI - Claude
var minimumScore = function(nums, edges) {
    const n = nums.length
    const graph = Array.from({ length: n }, () => [])
    
    for (const [u, v] of edges) {
        graph[u].push(v)
        graph[v].push(u)
    }
    
    const subtreeXor = new Array(n).fill(0)
    const parent = new Array(n).fill(-1)
    
    function dfs(node, par) {
        parent[node] = par
        subtreeXor[node] = nums[node]
        
        for (const child of graph[node]) {
            if (child !== par) {
                dfs(child, node)
                subtreeXor[node] ^= subtreeXor[child]
            }
        }
    }
    
    dfs(0, -1)
    const totalXor = subtreeXor[0]
    
    function isAncestor(u, v) {
        while (v !== -1) {
            if (v === u) return true
            v = parent[v]
        }
        return false
    }
    
    let minScore = Infinity
    
    for (let i = 0; i < edges.length; i++) {
        for (let j = i + 1; j < edges.length; j++) {
            let [u1, v1] = edges[i]
            let [u2, v2] = edges[j]
            
            // Ensure v1 is child of u1 and v2 is child of u2
            if (parent[u1] === v1) [u1, v1] = [v1, u1]
            if (parent[u2] === v2) [u2, v2] = [v2, u2]
            
            let xor1 = subtreeXor[v1]
            let xor2 = subtreeXor[v2]
            
            // Handle overlapping subtrees
            if (isAncestor(v1, v2)) {
                xor2 = subtreeXor[v2]
                xor1 = subtreeXor[v1] ^ xor2
            } else if (isAncestor(v2, v1)) {
                xor1 = subtreeXor[v1]
                xor2 = subtreeXor[v2] ^ xor1
            }
            
            const xor3 = totalXor ^ xor1 ^ xor2
            
            const maxXor = Math.max(xor1, xor2, xor3)
            const minXor = Math.min(xor1, xor2, xor3)
            minScore = Math.min(minScore, maxXor - minXor)
        }
    }
    
    return minScore
};

