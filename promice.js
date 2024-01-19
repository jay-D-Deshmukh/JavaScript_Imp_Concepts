const promiseOne = new Promise(function(resolve, reject){
    //Do async tesk
    //Data Base Call 
    // All task that take time to complete
    // Network related call

    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)
})


promiseOne.then(function(){
    console.log("Task completed 1st promise is completed ");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("the new promise is made");
        resolve()
    },1000)
}).then(function(){
    console.log("the New promise is consumed")
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            uesrname:"jay Deshmukh",
            pass: "Pass@123"
        })
    },1000)
})

promiseThree.then(function(data){
    console.log(data.uesrname);
})


const promiseFour  = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = !false
        if(!error){
            resolve({
                data :"File get",
                pass :"Pass@12345"
            })
        }else{
            reject("The promise has been rejected")
        }
    },1000)
})



promiseFour.then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("👍");

})


const promisefive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = !false
        if(!error){
            resolve({
                file:"data is avalable",
                pass: " pass@12345"
            })

        }
        else{
            reject('data not Found')
        }
    },1000)
})


async function consumePromiseFive(){
    try {
        const asyncPromiseFive = await promisefive
        console.log(asyncPromiseFive);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()



// async function getUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log("E: ",error);
//     }
// }


// getUsers()



fetch('https://jsonplaceholder.typicode.com/users')
.then(function(responce){
    return responce.json()

     
})
.then((data)=>{
    console.log(data);
})
.catch(function(error){
    console.log(error);
})