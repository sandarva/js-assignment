/**
 * This is an asynchronous function.
 * A async function always returns a promise.
 * 
 * So, in this function we use the promise we created
 * in the promiseExample, since the promise can resolve or get rejected,
 * we do not know when we will get the data so we add async to tell javascript
 * that do something only after you have got the data till then do something else.
 * 
 * Async and await came into existence to avoid much promise chaining and callback hell.
 * 
 * In this function the function is called then the promise displayRam is called,
 * It waits till it gets the return and then logs the data.
 * 
 * If the argument is different then it logs an error in the console.
 */
const callingFunction = async () => {
    const data = await displayRam('ram')
    console.log("Data: ", data);
}

callingFunction()