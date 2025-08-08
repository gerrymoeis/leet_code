var soupServings = function(n) {
    let soupA = soupB = n;
    let total = 0;
    for (let i=0; i < 4; ++i) {
        while (soupA > 0 || soupB > 0) {
          switch (i) {
            case 1:
              if (soupA % 100 === 0 || soupA % 100 === soupA) {
                  total += 1;
              }
              break;
          }
        }
    }
    return 0.25 * total;
};

var soupServings = function(n) {
    if (n > 4800) return 1.0;

    n = Math.ceil(n / 25);
    const memo = new Map();

    const dp = (a, b) => {
        const key = `${a},${b}`;
        if (memo.has(key)) return memo.get(key);

        if (a <= 0 && b <= 0) return 0.5;
        if (a <= 0) return 1.0;
        if (b <= 0) return 0.0;

        let res = 0.25 * (
            dp(a - 4, b) +
            dp(a - 3, b - 1) +
            dp(a - 2, b - 2) +
            dp(a - 1, b - 3)
        );
        memo.set(key, res);
        return res;
    };

    return dp(n, n);
};