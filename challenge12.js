//Create a function censor that accepts no arguments. censor will return a function that will accept either two 
//strings, or one string. When two strings are given, 
//the returned function will hold onto the two strings as a pair, for future use. 
//When one string is given, the returned function will return the same string, 
//except all instances of first strings (of saved pairs) will be replaced with their corresponding second strings 
//(of those saved pairs).

function censor() {
    let arr = []
   function inner (){
      if (arguments.length == 2){
        arr.push(arguments[0],arguments[1])
      }
      else if (arguments.length == 1)
      { 
        console.log(arr)
        let str = arguments[0].split(' ')
        let reSt = str
       for( let i in str)
       {
         console.log(i,str[i])
         if(arr.includes(str[i]))
         {
           console.log("found")
           let ind = arr.indexOf(str[i])
           console.log(ind)
           if(ind%2==0)
           {
            reSt[i] =  arr[ind+1]
             console.log(reSt,"* ")
           }
           else 
           {
               reSt[i] =  arr[ind-1]
             onsole.log(reSt,"**")
           }
         } 
      }
        return reSt
    }
   }
      return inner
   }
   // /*** Uncomment these to check your work! ***/
    const changeScene = censor();
    changeScene('dogs', 'cats');
    changeScene('quick', 'slow');
   console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'
   