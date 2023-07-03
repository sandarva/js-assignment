/**
 * This function returns a promise.
 * A promise is basically like a realy life promise,
 * either it gets fulfilled (resolved) or 
 * the promise is not fullfilled(rejected).
 * This function takes name as a parameter and checks if the
 * argument passed is 'ram', if the argument is ram the promise gets resolved
 * else it gets rejected.
 * 
 * I have put a settimeout to simulate that the time delays.
 * 
 * For example: when fetching the data form api we may or may not get the data.
 * so if we get the data in return the promise is resolved and we get the data or
 * else we do not get the data and the promise is rejected.
 */
const displayRam = (name) => {
    return new Promise((resolve, reject) => {
        if(name.toLowerCase() === 'ram'){
            setTimeout(() => {
                resolve({username: "Ram", age: 20, email: 'ram@gmail.com'})
            }, 2000)
        }else{
            reject({message: "The name passed is invalid"})
        }
    })
}

/***
 * In this function call the .then method is used to tell what to do after
 * the promise is resolved. If the argument passed is 'ram' then the promise
 * is resolved and the data is logged to the console, if the argument is
 * something else the promise is rejected and it goes to the .catch block 
 * and prints out the error.
 */
displayRam('ram')
    .then(data => console.log(data))
    .catch(err => console.log(err))