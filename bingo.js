class Bingo {
    constructor() {
        this.numbersDrawn = new Set();
        this.bingoBoard = {
            'B': this.generateRange(1, 15),
            'I': this.generateRange(16, 30),
            'N': this.generateRange(31, 45),
            'G': this.generateRange(46, 60),
            'O': this.generateRange(61, 75),
        };
    }

    generateRange(start, end) {
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }

    drawNumber() {
        const columns = Object.keys(this.bingoBoard);
        while (true) {
            const column = columns[Math.floor(Math.random() * columns.length)];
            const numbers = this.bingoBoard[column];
            const number = numbers[Math.floor(Math.random() * numbers.length)];
            if (!this.numbersDrawn.has(`${column}${number}`)) {
                this.numbersDrawn.add(`${column}${number}`);
                return { column, number };
            }
        }
    }
}

module.exports = Bingo;
