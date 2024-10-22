const promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('Result 1');
    }, 1000);
});
const promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject('Result 2');
    }, 2000);
});
const promise3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('Result 3');
    }, 3000);
});
Promise.all([promise1 , promise2 , promise3])
    .then((result)=>{
        console.log('All Promise resolved : ', result);
    })
    .catch((error)=>{
        console.log('One of the Promise failes : ', error);
    })
Promise.allSettled([promise1 , promise2 , promise3])
    .then((result)=>{
        console.log('All Promise resolved : ', result);
    })
    .catch((error)=>{
        console.log('One of the Promise failes : ', error);
    })
Promise.any([promise1 , promise2 , promise3])
    .then((result)=>{
        console.log('First resolved Promise  : ', result);
    })
    .catch((error)=>{
        console.log('One of the Promise failes : ', error);
    })    