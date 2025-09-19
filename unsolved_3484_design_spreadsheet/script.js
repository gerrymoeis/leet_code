var Spreadsheet = function(rows) {
    this.rows = rows;
    this.cells = new Map();
};

Spreadsheet.prototype.setCell = function(cell, value) {
    this.cells.set(cell, value);
};

Spreadsheet.prototype.resetCell = function(cell) {
    this.cells.delete(cell);
};

Spreadsheet.prototype.getValue = function(formula) {
    const [a, b] = formula.slice(1).split('+');
    const val = s => isFinite(s) ? parseInt(s) : (this.cells.get(s) || 0);
    return val(a) + val(b);
};