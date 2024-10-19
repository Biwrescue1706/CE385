const products = [
    { price: 100, discount: 10 },  //ส่วนลด 10%
    { price: 200, discount: 5 },   //ส่วนลด 5%
    { price: 300, discount: 20 },  //ส่วนลด 20%
    { price: 400, discount: 15 },  //ส่วนลด 15%
    { price: 500, discount: 50 }   //ส่วนลด 50%
];
console.log("Workshop 2.2 ");
function calculateTotal() {
    let totalPrice = 0; //totalPrice ถูกประกาศและกำหนดค่าเริ่มต้นเป็น 0
    products.forEach((product) => {
        const priceAfterDiscount = product.price * (1-product.discount / 100); //ในแต่ละรอบของลูป จะคำนวณราคาหลังจากหักส่วนลดด้วยสูตร
        totalPrice += priceAfterDiscount; 
    });
    console.log(`Total price after discount: $${totalPrice.toFixed(2)}`);
    console.log();
}
calculateTotal();