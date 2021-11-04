// Answer 1 //
/* var arr = [[], [], []]; */
// Answer 2 //"""""""""""""
/* var arr = [["0","1","2","3"], ["1","0","1","2"], ["2","1","0","1"]];
document.write(arr[0].join(" ") + "<br>" + arr[1].join(" ") + "<br>" + arr[2].join(" "));
 */

// Answer 3 //
/* for(var i = 0; i < 11; i++){
    document.write("<br>" + i);
} */

// Answer 4 //
/* var table = prompt("Enter table number");
var length = prompt("Enter table length");
for(var i = 0; i <= length; i++){
    document.write("2 X " + i + "=" + i * 2 + "<br>");
} */

// Answer 5 //
/* var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write(fruits + "<br>");
for(var i = 0; i< fruits.length; i++){
    document.write("Element at index " + i + " is " + fruits[i] + "<br>")
} */

// Answer 6 //
 /* for(var i = 1; i <= 15; i++){
    document.write(i + " , ");
}  */
  /*  for(var i = 15; i <= 15; i--){
    if(i >= 1){
        document.write(i + " , ");
    }
    
}    */ 
/* for(var i = 0; i <= 20; i++){
    if(i%2 == 0){
        document.write(i + ",");
    }
} */
/* for(var i = 1; i <= 20; i++){
    if(i%2 !== 0){
        document.write(i + " , ");
    }
} */
/* for(var i = 2; i <= 20; i++){
    if(i%2 == 0){
        document.write(i + "k, ");
    }
}
 */

// Answer 7 //
 /* var items = ["cake", "apple pie", "cookie" , "chips", "patties"];
var search = prompt("what do you want to order?");
var isMatch = false;
for(var i = 0; i < items.length; i++){
    if(search === items[i]){
        isMatch = true;
        alert(items[i] + " is available at index " + i + " in the bakery");
        break;
    } 
      
} if(isMatch === false){
    alert("Your selected item is not available in bakery");
    
} */

// Answer 8 //
/* var A = [24, 53, 78, 91, 12];
var largest = 0;
for(var i = 0; i <= largest; i++){
    if(A[i] > largest){
        largest = A[i];
    }
}
console.log(largest); */

// Answer 9 //
/* var A = [24, 53, 78, 91, 12];
var smallest = 0;

 for(var i = 0; i >= smallest; i++){
    if(A[i] < smallest){
        smallest = A[i];
    }
}
console.log(smallest);  */

// Answer 10 //
/* var num = 5;
for(var i = 1; i < 100; i++){
    if(num * i <=100){
        document.write(num * i + ", ")
    }
} */

