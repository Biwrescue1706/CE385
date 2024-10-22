const simulateAsyncOperation = () => {
    return new Promise((resolve , reject)=> {
        setTimeout(() => {
            resolve('Operation completed successfully!')
        }, 2000);
    });
};
const perforAsyncTask = async () => {
    const result = await simulateAsyncOperation();
    console.log(result);
}
perforAsyncTask();