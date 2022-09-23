//Write a function after that takes the number of times the callback needs to be called before being executed 
//as the first parameter and the callback as the second parameter.

function after(count, func) {
    let checkCount = 1
    let check = () => {
       if (checkCount === count) func()
       else checkCount++
     }
     return check
  }
  
  // /*** Uncomment these to check your work! ***/
   const called = function() { console.log('hello') };
   const afterCalled = after(3, called);
   afterCalled(); // => nothing is printed
   afterCalled(); // => nothing is printed
   afterCalled(); // => 'hello' is printed
  
  