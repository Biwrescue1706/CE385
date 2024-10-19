// //การใช้var
// function testVar(){
//     var v =10;
//     if (true){
//         var v = 20;
//         console.log(v);
//     }
//     console.log(v);
// }
// //การใช้let
// function testLet(){
//     let l=10;
//     if (true){
//         let l = 20;
//         console.log(l);
//     }
//     console.log(l);
// }
// //การใช้const
// function testConst(){
//     const c=10;
//     if (true){
//         const c = 20;
//         console.log(c);
//     }
//     console.log(c);
// }

// testVar();
//  console.log( );
//  testLet();
//  console.log( );
// testConst();
// console.log( );
// let message = "Hello World";
// let score = 95;
// let isPassed = true;
// let emptyValue = null;
// let notDefined;
// let person ={ name : "Alice" , age: 25 };
// let number = [1,2,3,4];

// console.log(typeof message);
// console.log(typeof score);

// let a = 10;
// let b = 5;

// console.log("Addittion (a+b) : ",a+b);
// console.log("Subtraction (a-b) : ",a-b);
// console.log("Multiplication (a*b) : ",a*b);
// console.log("Divisiom (a/b) : ",a/b);
// console.log("Moduls (a%b) : ",a%b);
// console.log("Exponentiation (a**b) : ",a**b);

// let x = 10 ;

// x+=5;
// console.log("x += 5",x);
// x-=3;
// console.log("x -= 3",x);
// x*=2;
// console.log("x *= 2",x);
// x/=4;
// console.log("x /= 4",x);
// x%=3;
// console.log("x %= 3",x);
// let y = 5;

// console.log("y == 5 ",y==5);
// console.log("y === 5 ",y===5);
// console.log("y !=10 ",y!=10);
// console.log("y > 2 ",y>2);
// console.log("y < 8 ",y<8);
// console.log("y >=5 ",y>=5);
// console.log("y <=4 ",y<=4);

// let firstName = "Phuwanat";
// let lastName = "Phahala";
// let fullName = firstName + " " + lastName;
// console.log("Full Name : ",fullName);

// let age = 20 ;

// let isAdult = (age >= 18) && (age <65);
// let isChild = (age < 18) || (age >65);
// let notAdult = !isAdult;
// console.log("isAdult : ",isAdult);
// console.log("isChild : ",isChild);
// console.log("notAdult : ",notAdult);

// let Score = 85 ;

// let grade = (Score >= 80 ) ? "A" : "B";
// console.log("Grade : ",grade);

function getGrade(score){
    let grade = "F";
    if (score >= 50){
        grade = "D";
    }
    if (score >= 60 ){
        grade = "C";
    }
        if (score >= 70){
        grade = "B";
    }
    if (score >= 80){
        grade = "A";
    }
    console.log(grade)
}
console.log("Workshop 1.1 ");
getGrade(85);
getGrade(75);
getGrade(65);
getGrade(55);
getGrade(45);
console.log();

function productPrice(price,disCount){
    let discountPrice = price - (price * disCount / 100)
    if (discountPrice <=0){
        discountPrice +=0;
    }
    else if (discountPrice <=500){
        discountPrice +=50;
    }
    else if (discountPrice >500){
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

let N = "Phuwanat";  //ข้อความ
let S = 5526;        //ตัวเลข
