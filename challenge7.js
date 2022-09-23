//Write a function rollCall that accepts an array of names and returns a function. 
//The first time the returned function is invoked, it should log the first name to the console. 
//The second time it is invoked, it should log the second name to the console, and so on,
// until all names have been called. Once all names have been called, it should log 'Everyone accounted for'.

function rollCall(names) {
  let i = 0
  let loopCall = () => {
    if( i < names.length) return names[i++]
    return "Everyone accounted for.."
  }
  return loopCall
}

// /*** Uncomment these to check your work! ***/
 const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
 console.log(rollCaller()) // => should log 'Victoria'
 console.log(rollCaller()) // => should log 'Juan'
 console.log(rollCaller()) // => should log 'Ruth'
 console.log(rollCaller()) // => should log 'Everyone accounted for'
 console.log(rollCaller()) // => should log 'Everyone accounted for'
