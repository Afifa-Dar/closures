//Create a function makeHistory that accepts a number (which will serve as a limit), 
//and returns a function (that will accept a string).
// The returned function will save a history of the most recent "limit" number of strings passed into the returned 
//function (one per invocation only).
// Every time a string is passed into the function, 
//the function should return that same string with the word 'done' after it (separated by a space). 
//However, if the string 'undo' is passed into the function, 
//then the function should delete the last action saved in the history, 
//and return that deleted string with the word 'undone' after (separated by a space). 
//If 'undo' is passed into the function and the function's history is empty, 
//then the function should return the string 'nothing to undo'.

function makeHistory(limit) {
    let history = []
    let maintainHistory = str => {
        if (str === 'undo'){
            if(history.length == 0) return 'nothing to undo'
            else {
                limit+=1
                return `${history.splice(-1 , 1)} undo`
            }
        }
        else{
            if(limit != 0){
                history.push(str)
                limit-=1
                return `${str} done`
            }
            else return "Memory Full"  
        }
    }
    return maintainHistory
}

// /*** Uncomment these to check your work! ***/
const myActions = makeHistory(2);
console.log(myActions('jump')); // => should log 'jump done'
console.log(myActions('undo')); // => should log 'jump undone'
console.log(myActions('walk')); // => should log 'walk done'
console.log(myActions('code')); // => should log 'code done'
console.log(myActions('pose')); // => should log 'pose done'
console.log(myActions('undo')); // => should log 'pose undone'
console.log(myActions('undo')); // => should log 'code undone'
console.log(myActions('undo')); // => should log 'nothing to undo'
console.log(myActions('dar'))
console.log(myActions('khan'))
console.log(myActions('rema'))
console.log(myActions('re'))

