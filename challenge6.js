//Write a function delay that accepts a callback as the first parameter and the wait in milliseconds 
//before allowing the callback to be invoked as the second parameter. 
//Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();


function delay(func, wait) {
    let time = 0
    let timer = () => {
        time+=1
        if(time == wait) {
            clearInterval(setTimeout)
            return func()
    }}
    setInterval(timer , 1)
}
const message = () => console.log("Hello")
delay(message , 2000)
