const e = require('express');
// const { json } = require('express');

const data = {};

const handleLcs = (req, res) => {
    const { compare, array } = req.body;
    let lcs = longestCommonSubsequence(compare, array);
    return res.json ({
        "lcs" : lcs,
    })
}
function longestCommonSubsequence(a, array) {
    let Lcs = 0;
    let matchedLcs = [];
     let lcsMin = 10 ;
    for (let index = 0; index < array.length; index++) {
        let b = array[index];
        //fill your matrix with zeros
        const matrix = Array(a.length + 1).fill().map(() => Array(b.length + 1).fill(0));
        //calculate values for i>0 and j>0
        for(let i = 1; i < a.length + 1; i++) {
            for(let j = 1; j < b.length + 1; j++) {
                if(a[i-1] === b[j-1]) {
                    matrix[i][j] = 1 + matrix[i-1][j-1];
                } else {
                    matrix[i][j] = Math.max(matrix[i-1][j], matrix[i][j-1]);
                }
            }
        }
        let lcsDist = ( a.length - matrix[a.length][b.length] ) + ( b.length - matrix[a.length][b.length] );
        
        if(lcsMin > lcsDist ){
            lcsMin = lcsDist ;
            matchedLcs = [b];
        }else if(lcsMin < lcsDist){}
        
        else if(lcsMin = lcsDist){
            matchedLcs.push(b);
        }
         
    }
    if(lcsMin > 5){
        matchedLcs = "no match"
    }
    return [matchedLcs, lcsMin];
}



module.exports = { 
    handleLcs
    };