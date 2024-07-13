import React from "react";

export default function Tailwind() {
  // let x = 143;
  // const str = x.toString();
  // console.log(str, 'str');  //to make number to string
  // let sum = 0;
  // for (let i = 0; i < str.length; i++) {
  //   console.log(str.length, 'strlength');
  //     let digit = parseInt(str[i]);  //string to intiger
  //     console.log(digit, 'digit');
  //     sum += digit;
  //     // console.log(sum += digit);
  // }

  // let num= 678;
  // let strnum = num.toString();
  // let total = 0;
  // for (let a = 0; a < strnum.length; a++){
  //   let subDigit = parseInt(strnum[a]);
  //     total +=subDigit
  // }
  // console.log(total, 'total');

  // let d = 0;

  // while (x != 0) {
  //   d = x % 10;
  //   console.log(d, 'd');
  //   sum += d;
  //   console.log(sum, 'sum');
  //   x = x / 10;
  //   console.log(x, 'x');
  // }

  // console.log(sum);

  //normal currying
  // function myfun(length, breadth, height){
  //   return length + breadth + height
  // }
  // console.log(myfun(4,5,6), 'normal currying');

  // currying with closure
  // function myfun(length){
  //   return function(breadth){
  //     return function(height){
  //       return length + breadth + height;
  //     }
  //   }
  // }
  // let val = myfun(4)(5)(6);
  // document.write(myfun(4)(5)(6));
  // console.log(val);

  // x= 10;
  // var x;
  // console.log(x, 'x');

  //closure
  // function myfun(){
  //   let x = 3;
  //   function inner(){
  //     return x;
  //   }
  //   return inner;
  // }
  //   let get_fun = myfun();

  //   console.log(get_fun());
  //   console.log(get_fun());

  // IIFE
  // var iife = function(){
  //   return 'immediate invoke function';
  // }();
  // console.log(iife);

  //iife 2
  // var counter = (function() {
  //   var count = 3;

  //   return {
  //       increment: function() {
  //           count++;
  //       },
  //       decrement: function() {
  //           count--;
  //       },
  //       getCount: function() {
  //           return count;
  //       }
  //   };
  // })();
  // counter.decrement();
  // counter.decrement();
  // counter.increment();

  // console.log(counter.getCount());
  // console.log(counter.count);

  // function mydata() {
  //   return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //           const data = { name: "Rohit", age: 23 };
  //           resolve(data);
  //       }, 2000);
  //   });
  // }
  // mydata()
  //   .then((data) => {
  //       console.log("Data:", data);
  //   })
  //   .catch((error) => {
  //       console.error("Error:", error);
  //   });

  // append
  // let app = document.querySelector('#app');
  // let langs = ['TypeScript','HTML','CSS'];
  // let nodes = langs.map(lang => {
  //     let li = document.createElement('li');
  //     li.textContent = lang;
  //     return li;
  // });
  // app.append(...nodes)
  // console.log(...nodes);

  // Proper tail calls
  // function print(from, to)
  // {
  //   const n = from;
  //   if (n > to)  return;
  //   console.log(n);
  //the last statement is the recursive call
  //   print(n + 2, to);
  // }
  // print(2, 10);

  // const val= document.getElementById("app")
  // console.log(val, 'val');

  // const obj1 = { name: "Nikita", age: 24, city: "Dehradun" };
  // for (let key in obj1) {
  //     console.log(`${key}: ${obj1[key]}`);
  // };
  // console.log(obj1.keys);

  // let x= 'ijdifjdfjdfsd';
  // let res = x.length;
  // console.log(res);

  // const value = ['biswajt', 'Baidya', 'rajashree', 'biswas'];
  // let newValue = value.map((add) => `hi ${add}` )
  // console.log(newValue);

  // let arr = [67, 87,557, 7789, 56, 55]
  // let ggg= arr.length
  // console.log(ggg); //6
  // let newArr = arr.sort((a,b)=>b-a)[1]
  // console.log(newArr); //557

  // let arr = [67, 88, 99, 45, 8899, 45]
  // function myfun(){
  //   if(arr.length < 2){
  //     return 'added minimum two number'
  //   }
  //   else{
  //     return arr.sort((a,b)=>b-a)[1]
  //   }
  // }
  // console.log(myfun());

  // let employees = [
  //   { name: "Biswajit", age: 23, salary: 30000 },
  //   { name: "Babu", age: 21, salary: 20100 },
  //   { name: "Dora", age: 43, salary: 54000 },
  //   { name: "Dhana", age: 55, salary: 42200 },
  //   { name: "Rajashree", age: 78, salary: 10500 },
  // ];

  // let newArr = employees
  //   .filter((emp) => emp.salary > 40000)
  //   .map((emps) => { return {Id: emps.name, salary: emps.salary}});
  // console.log(newArr);

// remove duplicates from array
// let fruits = ['apple', 'banana', 'grapes', 'kiwi', 'pineapple', 'pear', 'banana', 'kiwi']
// let newFruits = fruits.filter((item, index)=> fruits.indexOf(item) === index)
// console.log(newFruits);

// let fruits = ['apple', 'banana', 'grapes', 'kiwi', 'pineapple', 'pear', 'banana', 'kiwi']
// let reverseArr = fruits.reverse();.
// console.log(reverseArr);


// redirection
// function redirect(e) {
//   e.preventDefault();
  // location.replace('https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_redirect_webpage')
//   window.location.href = "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_redirect_webpage";
// }

// convert arrary to string
// let arr = [2, 'd', 'gdh', 33, 'dd']
// let newArrString = arr.join(', ');
// console.log(newArrString);

// let myArray = [1, 2, 3, 4, 5];
// let arrayString = myArray.join(', ,');
// console.log(arrayString); 

// let arr = [2, 'd', 'gdh', 33, 'dd']
// console.log( arr.toString());

// // convert arrary to object
// let myArray = [1, 2, 3, 4, 5];
// console.log({...myArray});
// const obj = {}
// myArray.forEach((value, index)=> obj[index] = value);
// console.log(obj);


// // convert object to string
  // let employees = { name: "Biswajit", age: 23, salary: 30000 }
  // console.log(JSON.stringify(employees)); 

// // convert object to array
// let employees = { name: "Biswajit", age: 23, salary: 30000 }
// console.log(Object.keys(employees));
// console.log(Object.values(employees));
// console.log(Object.entries(employees));

// find

// const ages = [3, 10, 18, 20];
// let myage = ages.find((age)=> {return age> 18 })
// console.log(myage);

// assesment
// const n=[1,2,3,4,5];
// n.splice(3,4,5)
// console.log(n);

// const a = {b:1};
// const c = new Object(a);
// a.d = 2;
// c.e = 3;
// console.log(c);

// string to array
let str= 'myNameChimchu';
console.log(Array.from(str));







  return (
    <div>
      {/* <p id="app"></p>
      <h1 id="app"></h1> 

      <p className="app"></p>
      <h1 className="app"></h1>  */}

      <h1 className="app">fg</h1>
      {/* <button onClick={redirect}></button> */}
    </div>
  );
}
