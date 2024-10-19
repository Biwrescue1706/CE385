const fetchData = () =>{
    return new Promise((resolve,reject)=>{
        console.log("fetching data........." );
        setTimeout(()=>{
            const data = {id:1, name : 'Phuwanat' , email : 'bewrockgame@gmail.com' };
            const success = true ;

            if (success){
                resolve(data);
            }else{
                reject("Failed to fetch data");
            }
        },2000);
    });
};
fetchData()
    .then((data)=>{
        console.log("Data fetched successfully :" , data );
    })
    .catch((error) => {
        console.log("Error fetching data :" , error );
    });