const asyncoperation =(callback) =>{
    console.log("Start async operation")
    setTimeout(()=>{
        const data = {id:1, name : 'Phuwanat' , email : 'bewrockgame@gmail.com' };
        callback( null , data);
    },2000);
}
asyncoperation ((error,result)=>{
    if (error){
        console.log("Error",error);
    }else{
        console.log("Operation complete , Result " , result);
    }
})
console.log("Asynchronous operation started");