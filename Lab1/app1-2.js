function productPrice(price,disCount){
    let discountPrice = price - (price * disCount / 100) //คำนวนส่วนลด
    if (discountPrice <=0){ //ถ้า หลังลดแล้ว เหลือน้อยกว่าหรือเท่ากับ 0 ให้แสดงว่าเป็น 0 
        discountPrice =0;
    }
    if (discountPrice <=500 && discountPrice > 0 ){ //ถ้า หลังหลดแล้วไม่เกิน 500 ให้บวกค่าจัดส่ง 50 
        discountPrice +=50;
    }
    if (discountPrice >500){ //ถ้า หลังลดแล้วเกิน 500  ให้รับส่วนลดพิเศษ 10% 
        discountPrice -= discountPrice * 0.10;
    }

    console.log("ราคาสุทธิ์ที่ต้องจ่าย : ",discountPrice);
}
console.log("Workshop 1.2 ");
productPrice(200,20);
productPrice(1000,30);
productPrice(500,10);
productPrice(1000,50);
productPrice(0,20);
console.log();