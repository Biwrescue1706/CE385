const myRequest =(data , callback) =>{
    const response = 1+ data;
    const error = undefined;
    const result = callback(error,response);
    return result;
}
const myCallback = (error,res) => {
    if (error){
        return "You have got Error";
    }else{
        return res;
    }
}
const result = myRequest(2,myCallback);
console.log(result);