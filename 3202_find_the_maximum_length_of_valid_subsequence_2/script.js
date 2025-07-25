/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// First Place LeetCode Solution
// var maximumLength = function(nums, k) {
//     let res = 2

//     for (let r = 0; r < k; r++) {
//         const dp = Array(k).fill(0)

//         for (let num of nums) {
//             const mod = num % k
//             const prevMod = (r - mod + k) % k
//             dp[mod] = dp[prevMod] + 1
//         }

//         res = Math.max(res, ...dp)
//     }

//     return res
// };

// My Code
var maximumLength = function(nums, k) {
    if (nums.length <= 2 || k <= 1) return nums.length
    
    let maxLength = 0
    
    for (let r=0; r < k; r++) {
      let dp = new Array(k).fill(0)
      
      for (let num of nums) {
        let mod = num % k
        let prevMod = (r - mod + k) % k
        
        dp[mod] = Math.max(dp[mod], dp[prevMod] + 1)
      }
      
      maxLength = Math.max(maxLength, Math.max(...dp))
    }
    return maxLength
};

// let nums = [3,1,6,7,2,5,4], k = 4
// let nums = [3, 3, 6, 9], k = 3
let nums = [1, 4, 2, 3],  k = 3
console.log(maximumLength(nums, k))

// let k = 353
// let nums = [5813902,1557267,3251432,1323804,6852487,1564723,8974807,5279562,4047547,1849314,5301746,7822319,621932,9427931,7664258,8579148,1336917,3329683,9860218,6186960,891943,6943052,4666142,5960108,8691745,7611765,2839805,2981285,59414,5643258,1033429,2162133,5666664,1660469,2888630,6342910,5683365,9110112,5096330,5274048,8202937,951086,2893203,6396905,1959727,1059375,5866529,6738988,4830924,7575880,8510080,9325286,2593676,2268606,2914085,2655613,7467202,4665806,8805989,2993712,9740009,5647401,8533651,8395986,4444881,3081515,6396396,748647,5578020,442988,5459012,329339,8962874,5647753,712419,863532,6125266,2701469,7246928,6776472,8996944,4576866,8790904,891265,6110527,69059,9500227,2994982,4606424,4901774,981888,4957355,9573088,9409527,7375038,1665352,5844780,8963406,9892282,7685682,7985472,4827645,8371800,1178302,5232092,5276902,5668978,6834947,9860731,4623135,9519350,7095837,2699315,9512395,8426034,6097951,1002068,5894833,1230249,5936390,7501655,5783047,581907,4093484,6846323,3935796,5938620,7758443,7999383,6943167,8435534,4692617,808328,6232741,3141971,2668235,3982844,7634420,5293942,7832215,1303278,978086,1843497,5054505,141249,2352628,7713109,4933049,8463864,4548657,4271736,5197152,1987028,1263755,4709647,3512087,3452742,9112810,5633102,8026961,9656480,8750533,5791527,291441,8532633,8133177,8268158,9641241,1321190,2221188,1402722,6225219,6843085,9328534,5103012,636290,4844749,1580569,9801686,5042492,2305856,3761221,4403863,5625223,6457466,9018157,7576719,8938866,1481454,8883181,3592107,7834058,7678061,7468746,7823508,4114590,597273,4717785,1342560,2424993,3993312,7319434,6797795,446085,3532346,942640,4816071,6417282,9388649,6457843,948308,2369262,8643286,7008080,1932753,900369,990547,8373287,8498421,4470421,9406368,1375949,1748325,4784107,8484997,1168004,1898155,9046663,3478646,518073,5943801,7099132,2757338,4337391,9952729,7879334,5931529,3090624,2611007,4888753,1846936,9826861,8839236,783387,4160676,1893626,6440958,5036930,1733836,7677315,5505855,4211719,3558111,3001121,4523216,5598515,6330138,616682,8668205,5149418,7262875,6053227,1657927,3883284,776910,3310519,1046211,105660,4155939,139616,9597389,2838919,438686,906905,7478499,1265012,5872617,5563078,1656380,2635522,536660,8670921,2798390,6335115,3692189,9446767,1807987,5373263,360159,2291298,7341417,1553977,4498002,2986117,9975168,744346,4197852,5563163,1900575,3817507,4336593,3796210,1046144,5173536,1608368,29617,4890906,1980750,2805951,6354836,2190842,2856300,3117186,7775936,1318896,1922102,4793285,2623758,5918488,796941,8868342,8706847,7864242,7753834,4346623,9324457,1007550,9386081,3323668,8006278,9370373,860291,1178843,8081175,1152872,9506112,5029750,6819001,5080119,3399918,5702717,8790901,2995654,326702,5908971,2402892,7484793,985870,7724285,4144033,5198318,8808165,2626530,3718222,4714433,4479604,1712401,4965618,1945886,4105676,3303154,3501742,4399068,5890353,4247964,1248881,7696318,5540038,110372,2371998,7199528,174268,7097256,5459066,5666854,9503902,4120123,4182736,1957084,7610635,7818010,8596376,830624,7814406,8027734,3867256,6791232,1839980,8351584,2570558,1519711,4473497,9171289,6234205,584042,7189470,9557643,5183099,809072,7970248,8302720,4904751,3722896,7089805,7577290,8423422,6614258,881288,2565723,9644418,5900257,6663862,5647180,283985,9411449,6237279,6086623,1431783,8834701,4978244,3830618,9122392,9276526,8001249,8770798,3464364,7168219,3046100,5277461,5969834,7551989,7904218,1261102,963293,2299050,6408236,2141787,7208118,5301449,1842453,1123742,2133716,1505337,5873705,9099128,7444581,9827564,1804652,928921,9759160,1041164,7259720,2690190,6876091,5501086,5310893,1595188,2545657,3162251,7916775,1464636,1636753,2888575,8557207,4917955,5995690,2161690,1118569,3109430,5585470,4920004,9781217,5786700,1587633,1577083,3754775,3226286,7092789,2833283,9653665,533752,9452681,709068,4428019,3249442,5676105,7450044,5934608,4066648,886371,5539564,7601923,3558469,6780626,2009167,1076197,5333670,8016831,8501229,682732,9154923,9243445,5674296,8782613,1969892,1420821,6520231,5093356,5874356,3834743,6051344,8435920,7136563,4479754,1846354,5822464,3191183,8902786,7110306,6046063,871656,6991585,1758966,9029112,6111239,9393536,7654354,5818325,1482282,8400605,6935698,201366,3286610,1926898,6151490,4949999,1889085,6326584,1536939,3017956,2303299,3147629,3704148,6850771,4270885,8622284,6646302,1482337,5482214,167693,1545483,5005210,9812442,6838050,6990702,6798709,5057854,9570400,1824928,6420099,9925,504107,1706432,4628632,3082531,9628581,1111175,4531822,9277118,3755035,6056715,3490944,2411263,7361913,1076170,710200,7813896,5190586,9594396,1935212,3271307,6773922,7053260,6251075,8399649,4733753,6515419,4969029,2752565,4429991,8526224,1233733,4105727,6067231,7729372,8526636,6489733,7972422,4468710,6618891,2982782,3763484,3375161,594565,2108099,7540888,4447112,6945035,1641891,1974499,2743273,6620345,3835615,7638715,387070,6257462,4201024,3306123,3429146,3446878,7380838,1758475,8657710,1868500,1698095,2596839,449363,3559775,1483693,1618602,549745,7219402,1372202,8173152,9890551,7991681,5985606,1981186,8689202,4612178,9118899,9129665,3763561,2594145,1721556,9593724,9408193,7188049,1863617,1099608,4858366,2978216,6880253,9665705,7318991,2490375,6720084,1171998,9785611,9770537,4391080,7729090,7995445,2530659,2327961,5668737,799673,7580034,4508887,3117180,9542175,7659819,8837297,3985166,2610569,8579128,8713709,6938527,1982614,577574,4047279,330658,1456564,2527609,8696469,8360637,4620912,7726319,9384220,9467777,7438612,7625493,1956990,988542,477720,3833267,7188763,4205582,8934558,63891,9418103,706504,6583263,7546821,2529687,6367871,5716566,5465933,9341706,5717536,4861316,5077890,751614,1253215,9780434,9662323,8408281,4422749,270135,2027833,4355152,8760031,5073630,930961,6042880,7753915,3746151,5218402,565032,6890497,2376198,9045618,560862,7893926,1351623,5454326,6928005,1560833,1452913,2333666,2499071,8333362,9874833,2062839,3079407,9049589,3177023,252216,5046772,3535118,1839318,2519022,8837103,7969841,2745507,6105096,1036478,4260240,145487,7531746,6064783,7353672,9552949,1165308,8122250,1671007,5189920,6614004,3574931,4664264,5879174,1226551,3726308,3777476,3350992,4162806,102812,7357487,3578923,1145991,6192500,6331274,4393963,466259,2713773,8776856,7216579,5941526,3579322,9211405,5777059,976880,4979236,2756857,621293,4058286,1006210,7449530,2050444,3563692,6371640,1472,5481432,4403045,5271360,2961778,6201914,7079706,6713943,2190713,8272430,6471202,6864335,9655375,6182037,9854620,5017134,4188431,2321944,5553452,7434018,8511338,9789071,9253472,7983611,7260411,4567757,104717,3893124,5465428,1904511,1505141,3601810,2038063,4093354,9345864,7639602,618319,5664449,5006060,5497156,4118231,8940668,8701701,9709608,9959875,6509200,3218081,1813542,3448592,3480533,7851676,9717141,6013847,2401992,7992634,4271926,2516388,3221049,1509569,7633824,8332256,3062506,6383286,1995033,5554018,6602743,6562751,5635654,4928833,6061451,3013321,7043528,6812515,5252228,7078192,7049119,5034612,424654,8616601,3856275,3966203,3501238,4048822,8818443,4047179,1815657,7663203,1630010,4017701,2605887,9739428,7760397,935840,7697513,9290431,4576083,6097013,7098066,375352,4570936,5885812,7908742,7110106,6282575,9354284,5336927,6688089,7228335,9997159,7102979,6003390,7772253,3439950,1426047,4202874,2982431,7870719,5124759,6068635,1898409,4179917,1217611,644489,4605412,9861622,8844008,7013039,6677715,2263057,8016950,749441,5131483,6602526,90045,2223533,4389531,5980068,9161658,7241400,6992393,1971373,4271689,5761386,8041817,5177494,1544772,2537096,6348358,7075402,3290729,5876843,8915329,4906615,6734456,8423041,5971226,5128303,1402801,201559,9019082,9815292,5265686,719691,6841778,4448063,450814,409816,9694721,8739671,1893528,87475,1237979,8695370,9251489,5438649,1260136,9775230,4206365,8835810,5836278,5490634,1164970,5462474,7752724,6126904,6610818,541747,8872035,7625905,845873,186146,2528917,8663789,3936368,4612593,7061091,6567767,4480295,7305615]
// console.log(maximumLength(nums, k))

let a = maximumLength([1,2,3,4,5], 2)
let b = maximumLength([1,4,2,3,1,4], 3)
let c = maximumLength([1,2,3,4], 5)
let d = maximumLength([1,2,1,1,2,1,2], 2)
let e = maximumLength([1, 100, 3, 5, 7, 102, 9, 11], 3)
console.log(a, b, c, d, e)

// AI Code
// var maximumLength = function(nums, k) {
//     // dp[r] = Map yang menyimpan info untuk remainder r
//     // Key: last element % k, Value: length dari subsequence terpanjang
//     let dp = new Array(k);
//     for (let i = 0; i < k; i++) {
//         dp[i] = new Map(); // atau bisa pakai Object
//     }
    
//     let maxLength = 0;
    
//     // Process setiap number SEKALI saja
//     for (let num of nums) {
//         let numMod = num % k;
        
//         // Untuk setiap remainder r (0 sampai k-1)
//         for (let r = 0; r < k; r++) {
//             // Hitung apa yang kita butuhkan sebagai elemen sebelumnya
//             // Jika (prev + current) % k = r, maka prev % k = ?
//             let prevMod = (r - numMod + k) % k;
            
//             // Cek apakah kita punya subsequence yang berakhir dengan prevMod
//             if (dp[r].has(prevMod)) {
//                 // Extend subsequence yang ada
//                 let newLength = dp[r].get(prevMod) + 1;
//                 dp[r].set(numMod, Math.max(dp[r].get(numMod) || 0, newLength));
//                 maxLength = Math.max(maxLength, newLength);
//             } else {
//                 // Mulai subsequence baru dengan length 1
//                 dp[r].set(numMod, Math.max(dp[r].get(numMod) || 0, 1));
//                 maxLength = Math.max(maxLength, 1);
//             }
//         }
//     }
    
//     return maxLength;
// };

// let nums = [3,1,6,7,2,5,4], k = 4
// console.log(maximumLength(nums, k))

// let k = 353
// let nums = [5813902,1557267,3251432,1323804,6852487,1564723,8974807,5279562,4047547,1849314,5301746,7822319,621932,9427931,7664258,8579148,1336917,3329683,9860218,6186960,891943,6943052,4666142,5960108,8691745,7611765,2839805,2981285,59414,5643258,1033429,2162133,5666664,1660469,2888630,6342910,5683365,9110112,5096330,5274048,8202937,951086,2893203,6396905,1959727,1059375,5866529,6738988,4830924,7575880,8510080,9325286,2593676,2268606,2914085,2655613,7467202,4665806,8805989,2993712,9740009,5647401,8533651,8395986,4444881,3081515,6396396,748647,5578020,442988,5459012,329339,8962874,5647753,712419,863532,6125266,2701469,7246928,6776472,8996944,4576866,8790904,891265,6110527,69059,9500227,2994982,4606424,4901774,981888,4957355,9573088,9409527,7375038,1665352,5844780,8963406,9892282,7685682,7985472,4827645,8371800,1178302,5232092,5276902,5668978,6834947,9860731,4623135,9519350,7095837,2699315,9512395,8426034,6097951,1002068,5894833,1230249,5936390,7501655,5783047,581907,4093484,6846323,3935796,5938620,7758443,7999383,6943167,8435534,4692617,808328,6232741,3141971,2668235,3982844,7634420,5293942,7832215,1303278,978086,1843497,5054505,141249,2352628,7713109,4933049,8463864,4548657,4271736,5197152,1987028,1263755,4709647,3512087,3452742,9112810,5633102,8026961,9656480,8750533,5791527,291441,8532633,8133177,8268158,9641241,1321190,2221188,1402722,6225219,6843085,9328534,5103012,636290,4844749,1580569,9801686,5042492,2305856,3761221,4403863,5625223,6457466,9018157,7576719,8938866,1481454,8883181,3592107,7834058,7678061,7468746,7823508,4114590,597273,4717785,1342560,2424993,3993312,7319434,6797795,446085,3532346,942640,4816071,6417282,9388649,6457843,948308,2369262,8643286,7008080,1932753,900369,990547,8373287,8498421,4470421,9406368,1375949,1748325,4784107,8484997,1168004,1898155,9046663,3478646,518073,5943801,7099132,2757338,4337391,9952729,7879334,5931529,3090624,2611007,4888753,1846936,9826861,8839236,783387,4160676,1893626,6440958,5036930,1733836,7677315,5505855,4211719,3558111,3001121,4523216,5598515,6330138,616682,8668205,5149418,7262875,6053227,1657927,3883284,776910,3310519,1046211,105660,4155939,139616,9597389,2838919,438686,906905,7478499,1265012,5872617,5563078,1656380,2635522,536660,8670921,2798390,6335115,3692189,9446767,1807987,5373263,360159,2291298,7341417,1553977,4498002,2986117,9975168,744346,4197852,5563163,1900575,3817507,4336593,3796210,1046144,5173536,1608368,29617,4890906,1980750,2805951,6354836,2190842,2856300,3117186,7775936,1318896,1922102,4793285,2623758,5918488,796941,8868342,8706847,7864242,7753834,4346623,9324457,1007550,9386081,3323668,8006278,9370373,860291,1178843,8081175,1152872,9506112,5029750,6819001,5080119,3399918,5702717,8790901,2995654,326702,5908971,2402892,7484793,985870,7724285,4144033,5198318,8808165,2626530,3718222,4714433,4479604,1712401,4965618,1945886,4105676,3303154,3501742,4399068,5890353,4247964,1248881,7696318,5540038,110372,2371998,7199528,174268,7097256,5459066,5666854,9503902,4120123,4182736,1957084,7610635,7818010,8596376,830624,7814406,8027734,3867256,6791232,1839980,8351584,2570558,1519711,4473497,9171289,6234205,584042,7189470,9557643,5183099,809072,7970248,8302720,4904751,3722896,7089805,7577290,8423422,6614258,881288,2565723,9644418,5900257,6663862,5647180,283985,9411449,6237279,6086623,1431783,8834701,4978244,3830618,9122392,9276526,8001249,8770798,3464364,7168219,3046100,5277461,5969834,7551989,7904218,1261102,963293,2299050,6408236,2141787,7208118,5301449,1842453,1123742,2133716,1505337,5873705,9099128,7444581,9827564,1804652,928921,9759160,1041164,7259720,2690190,6876091,5501086,5310893,1595188,2545657,3162251,7916775,1464636,1636753,2888575,8557207,4917955,5995690,2161690,1118569,3109430,5585470,4920004,9781217,5786700,1587633,1577083,3754775,3226286,7092789,2833283,9653665,533752,9452681,709068,4428019,3249442,5676105,7450044,5934608,4066648,886371,5539564,7601923,3558469,6780626,2009167,1076197,5333670,8016831,8501229,682732,9154923,9243445,5674296,8782613,1969892,1420821,6520231,5093356,5874356,3834743,6051344,8435920,7136563,4479754,1846354,5822464,3191183,8902786,7110306,6046063,871656,6991585,1758966,9029112,6111239,9393536,7654354,5818325,1482282,8400605,6935698,201366,3286610,1926898,6151490,4949999,1889085,6326584,1536939,3017956,2303299,3147629,3704148,6850771,4270885,8622284,6646302,1482337,5482214,167693,1545483,5005210,9812442,6838050,6990702,6798709,5057854,9570400,1824928,6420099,9925,504107,1706432,4628632,3082531,9628581,1111175,4531822,9277118,3755035,6056715,3490944,2411263,7361913,1076170,710200,7813896,5190586,9594396,1935212,3271307,6773922,7053260,6251075,8399649,4733753,6515419,4969029,2752565,4429991,8526224,1233733,4105727,6067231,7729372,8526636,6489733,7972422,4468710,6618891,2982782,3763484,3375161,594565,2108099,7540888,4447112,6945035,1641891,1974499,2743273,6620345,3835615,7638715,387070,6257462,4201024,3306123,3429146,3446878,7380838,1758475,8657710,1868500,1698095,2596839,449363,3559775,1483693,1618602,549745,7219402,1372202,8173152,9890551,7991681,5985606,1981186,8689202,4612178,9118899,9129665,3763561,2594145,1721556,9593724,9408193,7188049,1863617,1099608,4858366,2978216,6880253,9665705,7318991,2490375,6720084,1171998,9785611,9770537,4391080,7729090,7995445,2530659,2327961,5668737,799673,7580034,4508887,3117180,9542175,7659819,8837297,3985166,2610569,8579128,8713709,6938527,1982614,577574,4047279,330658,1456564,2527609,8696469,8360637,4620912,7726319,9384220,9467777,7438612,7625493,1956990,988542,477720,3833267,7188763,4205582,8934558,63891,9418103,706504,6583263,7546821,2529687,6367871,5716566,5465933,9341706,5717536,4861316,5077890,751614,1253215,9780434,9662323,8408281,4422749,270135,2027833,4355152,8760031,5073630,930961,6042880,7753915,3746151,5218402,565032,6890497,2376198,9045618,560862,7893926,1351623,5454326,6928005,1560833,1452913,2333666,2499071,8333362,9874833,2062839,3079407,9049589,3177023,252216,5046772,3535118,1839318,2519022,8837103,7969841,2745507,6105096,1036478,4260240,145487,7531746,6064783,7353672,9552949,1165308,8122250,1671007,5189920,6614004,3574931,4664264,5879174,1226551,3726308,3777476,3350992,4162806,102812,7357487,3578923,1145991,6192500,6331274,4393963,466259,2713773,8776856,7216579,5941526,3579322,9211405,5777059,976880,4979236,2756857,621293,4058286,1006210,7449530,2050444,3563692,6371640,1472,5481432,4403045,5271360,2961778,6201914,7079706,6713943,2190713,8272430,6471202,6864335,9655375,6182037,9854620,5017134,4188431,2321944,5553452,7434018,8511338,9789071,9253472,7983611,7260411,4567757,104717,3893124,5465428,1904511,1505141,3601810,2038063,4093354,9345864,7639602,618319,5664449,5006060,5497156,4118231,8940668,8701701,9709608,9959875,6509200,3218081,1813542,3448592,3480533,7851676,9717141,6013847,2401992,7992634,4271926,2516388,3221049,1509569,7633824,8332256,3062506,6383286,1995033,5554018,6602743,6562751,5635654,4928833,6061451,3013321,7043528,6812515,5252228,7078192,7049119,5034612,424654,8616601,3856275,3966203,3501238,4048822,8818443,4047179,1815657,7663203,1630010,4017701,2605887,9739428,7760397,935840,7697513,9290431,4576083,6097013,7098066,375352,4570936,5885812,7908742,7110106,6282575,9354284,5336927,6688089,7228335,9997159,7102979,6003390,7772253,3439950,1426047,4202874,2982431,7870719,5124759,6068635,1898409,4179917,1217611,644489,4605412,9861622,8844008,7013039,6677715,2263057,8016950,749441,5131483,6602526,90045,2223533,4389531,5980068,9161658,7241400,6992393,1971373,4271689,5761386,8041817,5177494,1544772,2537096,6348358,7075402,3290729,5876843,8915329,4906615,6734456,8423041,5971226,5128303,1402801,201559,9019082,9815292,5265686,719691,6841778,4448063,450814,409816,9694721,8739671,1893528,87475,1237979,8695370,9251489,5438649,1260136,9775230,4206365,8835810,5836278,5490634,1164970,5462474,7752724,6126904,6610818,541747,8872035,7625905,845873,186146,2528917,8663789,3936368,4612593,7061091,6567767,4480295,7305615]
// console.log(maximumLength(nums, k))

// let a = maximumLength([1,2,3,4,5], 2)
// let b = maximumLength([1,4,2,3,1,4], 3)
// let c = maximumLength([1,2,3,4], 5)
// let d = maximumLength([1,2,1,1,2,1,2], 2)
// let e = maximumLength([1, 100, 3, 5, 7, 102, 9, 11], 3)
// console.log(a, b, c, d, e)

// Calculations
// nums = [3,1,6,7,2,5,4], k = 4
// Answer:
// (3+1) % 4 == (1+7) % 4 == (7+5) % 4 == 0, subsequence = [3,1,7,5], length=4
// (3+6) % 4 == (6+7) % 4 == (7+2) % 4 == 1, subsequence = [3,6,7,2], length=4
// Visual
// 3 % 4 = 3 (x)
// 1 % 4 = 1 (x)
// 6 % 4 = 2
// 7 % 4 = 3 (x)
// 2 % 4 = 2
// 5 % 4 = 1 (x)
// 4 % 4 = 0
// 3+1 = 3+1

// Experiment
// var maximumLength = function(nums, k) {
//     if (nums.length <= 2) return nums.length
    
//     let alt = 0
//     for (num of nums) {
//       if (num % k !== mod) {
//         alt++
//         mod = num % k
//       }
//     }
//     return alt
// };

// let numbers = [1,2,3,4,5,6,7,8]
// for (let i=1; i < numbers.length; i++) {
//   console.log(numbers[i], numbers[i-1])
// }

// Attempts
// var maximumLength = function(nums, k) {
//     if (nums.length <= 2) return nums.length
    
//     let alt = 0
//     for (let i=1; i < nums.length + 1; i++) {
//       if ((nums[i-1] + nums[i]) % k !== 0) {
//         alt++
//       }
//     }
//     return alt
// };

// var maximumLength = function(nums, k) {
//     if (nums.length <= 2 || k <= 1) return nums.length
    
//     for (let num of nums) {
//       if (num % k === ?) {
//         r = ?
//       }
//       else {
//         lastElement = ?
//       }
//     }
// };