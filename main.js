//1-misol

// function evenOrOdd(number) {

//     if (number%2===0 && number>=0) {

//         return "Even"
//     } else {
//         return "Odd"
//     }
    
// }

// console.log(evenOrOdd(8));


// // 2-misol

// function removeEveyOther(arr) {
    
//     let x = []

//     for (let i = 0; i < arr.length; i++) {
       
//         if (i%2===0) {
//             x.push(arr[i]); 
//         }
        

        
//     }  

//     return x
// }

// console.log(removeEveyOther([1,"salom",3,4,5,6]));



// 3-misol


// let isSquare = function (n) {
    
//     let a = n**0.5;

//     if (a%1===0 && a>0) {
         
//         return true

//     } else {

//         return false
//     }
// } 

// console.log(isSquare(25));


// 4-misol

// function unli(str) {
    
// let a = ["a", "e", "u", "i" , "o" ]
// let b = 0;
// for (let i = 0; i< str.length; i++) {
//         if ( a.includes(str[i])) {
//             b++
//         }
//     }

//     return b
  
// }

// console.log(unli("abuiadgiue"));

//5-misol


// function num(n) {

 
// let arr=[];
//  for (let i = n; i >= 1; i--) {
//     arr.push(i);
    
//  }

//  return arr
 
// }

// console.log(num(5));

// 6-misol


// function kvatrat(params) {
// let arr=[];
//  for (let i = 0; i < params.length; i++) {
//     arr += params[i]**2;
    
//  }

//  return arr
 
// }
// console.log(kvatrat([1,2,3]));


// 8-misol

// function int(str) {
    
    
//     return str.trim()
    
// }


// console.log(int ("      fasfasfsf     "));


//9-misol



// function svitafor(color)
// {
//   switch (color) {
//     case `green`:
//     return ("yellow");
    
//     case `yellow`:
//     return ("red");
            
//     case `red`:
//     return ("green");

   

//     default:
                       
//    return ("bunday rang yoq");
        
    
        
//   }

// }

// console.log(svitafor("yellow"));


// 10-misol 


// function  rever(arr){
    

//     let str = "";
    
//     for (let i=arr.length-1; i >=0 ; i--) {
       
//         str +=arr[i]
        
//     }
    
//     return (str.split(``).reverse().join(" "));
    
// }

// console.log(rever(["hello hello"]));

//7-misol



 function findNextSquare(arr) {
     let a = arr**0.5;
     let result = []

    if (a%1===0 && a>0) {
        
        
         b = a+1
         c= b**2
         result.push(c)
        return result

    } else {
         

        return a--
    }
} 

console.log(findNextSquare([1]));

