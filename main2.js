
/*
console.log("welcome");

//creat promise

const promise1 = new Promise((resolve, reject) => {

    let completedPromise = false;
    if(completedPromise){
        resolve('completed promise 1')
    }else{
        reject(new Error("not completed promise 1"));
    }

});

const promise2 = new Promise((resolve, reject) => {
    resolve("completed promise 2");
});

// console.log(promise1);

Promise.all([promise1, promise2])
.then((res) => console.log(res))

/*
promise1.then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err);
});

promise2.then((res) => console.log(res));


*/

// console.log("end");


const taskOne = () =>{
    return new Promise((reslove, reject) =>{
        reslove('task 1 is NOT completed');
    });
};
const taskTwo = () =>{
    return new Promise((reslove, reject) =>{
        reslove('task 2 is completed');
    });
};

const taskThree = () =>{
    return new Promise((reslove, reject) =>{
        reslove('task 3 is completed');
    });
};

const taskFour = () =>{
    return new Promise((reslove, reject) =>{
        reslove('task 4 is completed');
    });
};

taskOne()
.then((res) => console.log(res))
.then(taskTwo)
.then((res) => console.log(res))
.then(taskThree)
.then((res) => console.log(res))
.then(taskFour)
.then((res) => console.log(res))

.catch(err => console.log(err));