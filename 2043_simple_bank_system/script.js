/**
 * @param {number[]} balance
 */
var Bank = function(balance) {
    this.bal = balance;
    this.n = balance.length;
};

Bank.prototype.valid = function(acc) {
    return acc > 0 && acc <= this.n;
};

/** 
 * @param {number} account1 
 * @param {number} account2 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function(account1, account2, money) {
    if (!this.valid(account1) || !this.valid(account2) || this.bal[account1 - 1] < money)
        return false;
    this.bal[account1 - 1] -= money;
    this.bal[account2 - 1] += money;
    return true;
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function(account, money) {
    if (!this.valid(account))
        return false;
    this.bal[account - 1] += money;
    return true;
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function(account, money) {
    if (!this.valid(account) || this.bal[account - 1] < money)
        return false;
    this.bal[account - 1] -= money;
    return true;
};

/** 
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */