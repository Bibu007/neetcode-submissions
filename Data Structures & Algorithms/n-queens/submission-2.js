class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        let res = new Array(n).fill(-1);
        let sol = [];
        let k = 0;

        this.backtrack(k, n, res, sol);

        return sol;
    }

    backtrack(k, n, res, sol) {
        if (k === n) {
            const board = res.map((colIndex) => {
                let row = new Array(n).fill('.');
                row[colIndex] = 'Q';
                return row.join('');
            });
            
            console.log("Hey")
            sol.push(board);
            return;
        }

        outerloop: for (let j = 0; j < n; j++) {
            if (k === 0) {
                res[k] = j;
                this.backtrack(k + 1, n, res, sol);
                continue;
            }
            for (let i = 0; i < k; i++) {
                if (
                    res[i] === j ||  Math.abs(i - k) === Math.abs(res[i] - j)  ) {
                    continue outerloop;
                }
            }
            res[k] = j;
            this.backtrack(k + 1, n, res, sol);
            //res[k] = -1;
        }
    }
}

