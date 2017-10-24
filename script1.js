//Sample Output : Today is : Friday. 
//Current time is : 4 PM : 50 : 22

/*
var now = new Date();

var day= now.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log("Today is: " +daylist[day]);
var hours= now.getHours();
var mins= now.getMinutes();
var secs=now.getSeconds();

if(hours <=12){
    console.log("Current time is: " + hours + "AM"  + ":" +  mins + ":" + secs);
}else{
    console.log("Current time is: " + + hours + "PM"  + ":" +  mins + ":" + secs);
}
*/
/*
//Write a JavaScript program to print the contents of the current window.

function printWind (){
    window.print();
}
*/

//Write a JavaScript program to get the current date. 
//Expected Output : 
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
/*
var today= new Date();

var month=today.getMonth();
var days=today.getDay();
var years= today.getFullYear();

if(0<month){
    console.log("Expected Output : 0"+ month +  "-" + days + "-" + years);
}else{
        console.log("Expected Output : "+ month +  "-" + days + "-" + years);
}
*/

//Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7
/*
var a= 5;
var b= 6;
var c= 7;
var p= ""
var area= "";

p=(a+b+c)/2;
//Heron's Formula 
area = Math.sqrt(p*(p-a)*(p-b)*(p-c));
console.log(area);
*/

//5. Write a JavaScript program to rotate the string 'w3resource' in right direction
// by periodically removing one letter from the end of the string and attaching it to the front.
/*
function animate_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function() 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}
*/
//6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
/*
year="";
prompt(year);
x=(year%100===0)?(year%400===0):(year===4);
console.log(x);
*/
//7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
//The value returned by getDay() is an integer corresponding to the
// day of the week: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.
/*
console.log("--------------------------");
for(var year= 2014; year<=2050; year++){
    var d= new Date(year, 0);
    if(d.getDay() ===0){
        console.log("First Jan. is a Sunday" + year);
    } 
}
console.log("--------------------------");
*/

//8.Write a JavaScript program where the program takes a random integer between 1 to 10,
//the user is then prompted to input a guess number.
// If the user input matches with guess number, 
// the program will display a message "Good Work" otherwise display a message "Not matched".
/*
var num = Math.ceil(Math.random() * 10);
var gnum = prompt('Guess the number between 1 and 10 inclusive');
if (gnum == num)
  alert('Matched');
 else
  alert('Not matched, the number was ' + num);
*/

//9. Write a JavaScript program to calculate days left until next Christmas. 
/*
var total = 0;
var year = new Date().getFullYear(); 
var month = new Date().getMonth()+1;// this is your current month. 
var tilltoday = new Date().getDate();// this is your current date.
var crismas = new Date(year,11,25).getDate();// this is dec month days. 
var result;

for (var i=month;i<12;i++){
//this loop go for from today date to Novermer. where we add dec days.
var days = new Date(year,i,0).getDate();
total += days;
}

result = total - tilltoday + crismas;
document.write(result);
*/
//10. Write a JavaScript program to calculate
// multiplication and division of two numbers (input from user). 
/*

function multypBy()
{
    num1=document.getElementById("fN").value;
    num2=document.getElementById("sN").value;
    result=document.getElementById("r").innerHTML= num1*num2; 
}

function divideBy()
{
    num1=document.getElementById("fN").value;
    num2=document.getElementById("sN").value;
    result=document.getElementById("r").innerHTML= num1/num2; 
}
*/
// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
//[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
//Expected Output : 
//60°C is 140 °F
//45°F is 7.222222222222222°C 
/*
function cf(celsius){
    var cTemp=celsius;
    var ctoFar= (cTemp * 9 + (32*5))/5;
    var message = cTemp+'\xB0C is ' + ctoFar + ' \xB0F.';
    console.log(message);
};

function fc(fahreheit){
    var fTemp=fahreheit;
    var farCto= (5*(fTemp-32)) /9;
    var message = fTemp+ ' \xB0F. is '  + farCto + '\xB0C.';
    console.log(message);
};

cf(60);
fc(140);
*/
/*
// 12. Write a JavaScript program to get the website URL (loading page).
alert(document.URL);
// Write a JavaScript exercise to create a variable using a user-defined name.

var me= "davor";
var n= "ivan";

this[me]= n;
console.log(this[me]);
*/
//Write a JavaScript exercise to get the extension of a filename. 
/*
var file= "400.xsl";
var file2= "500.pdf";

function getFileExtension(file){
console.log(file.split(".").pop());
}
getFileExtension(file);
*/
//15. Write a JavaScript program to get the difference between a given number and 13, 
//if the number is greater than 13 return double the absolute difference.
/*
function fn(x)
{
    if(x>13){
        return (x-13)*2;
    }else{
        return x-13; 
    }
}
console.log(fn(9));
console.log(fn(22));
*/

//16. Write a JavaScript program to compute the sum of the two given integers. 
//If the two values are same, then returns triple their sum. 
/*
function fn(x,y){
    if(x===y){
        return (x+y)*3;
    }else{
        return x+y;
    }
}
console.log(fn(2,2)); 

//17. Write a JavaScript program to compute the absolute difference between a specified number and 19. 
//Returns triple their absolute difference if the specified number is greater than 19
function fn(x){
    if(x<19){
        return (19-x);
    }else{
        return (x-19)*3;
    }
}
console.log(fn(20));
*/

//18. Write a JavaScript program to check two given numbers and return
// true if one of the number is 50 or if their sum is 50. 
/*
function fn(x,y){
    return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(fn(50, 50));
console.log(fn(20, 50));
console.log(fn(20, 20));
console.log(fn(20, 30));
*/

//19. Write a JavaScript program to check a given integer is within 20 of 100 or 400.

/*
function fn(x){
    if(x>20 || x<100 || x==400){
        return true;
    }else{
        return false;
    }
}
console.log(fn(21));
console.log(fn(400));

*/
//20. Write a JavaScript program to check from two given integers, if one is positive and one is negative.
/*
function fn(x,y){
    if((x<0 && y>0 || x>0 && y<0)){
        return true;
    }else{
        return false;
    }
}
console.log(fn(2,3));
console.log(fn(-2,3));
console.log(fn(2,-3));
*/
//21. Write a JavaScript program to create a new string adding 
//"Py" in front of a given string. If the given string begins with "Py" then return the original string. 

/*
function fn(x){
if(x===null || x===undefined || x.substring(0,2)==="py"){
        return x;
}else{
    return "py"+x;
}
}
console.log(fn("dasfas"));
console.log(fn("pyhton"));
*/

//22. Write a JavaScript program to remove a character at the specified position of a 
//given string and return the new string.
/*
function remove(str,cpos){
    x=str.substring(0,cpos);
    x1=str.substring(cpos+1, str.length);
    return (x+x1);
}
console.log(remove("Davor",0));
console.log(remove("Davor",4));
*/

//23. Write a JavaScript program to create a new string from a given string changing
//the position of first and last characters. The string length must be greater than or equal to 1.
/*
function changePosition(str) {
    
    if (str.length < 1) {
    return "Error! The string is too short!"
    } else if (str.length === 1) {
    return str;
    }
    setInterval(() => {
    str = str[str.length - 1] + str.substring(0, str.length - 1);
    console.log(str);
    }, 2000);
    }
    changePosition("abcd");
*/
//25. Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7.
/*
function check(x){
    if(x%3===0 || x%7===0){
        return true;
    }else{
        return false;
    }
}
console.log(check(9));
console.log(check(10));
*/

//26. Write a JavaScript program to create a new string from a given string taking
// the last 3 characters and added at both the front and back. The string length must be 3 or more.
/*
function front_back3(str)
{
 if (str.length>=3)
  {
  str_len = 3;

 back = str.substring(str.length-3);
  return back + str + back;
}
  else
    return false;
}
console.log(front_back3("abc"));
console.log(front_back3("ab"));
console.log(front_back3("abcd"));
*/
//27. Write a JavaScript program to check if a string starts with 'Java' and false otherwise.
/*
function fn(x){
    if(x===null || x===undefined || x.substring(0,4)==="Java"){
            return true;
    }else{
        return false
    }
    }
console.log(fn("Javadasdas"));

console.log(fn("dadsaJava"));
*/

//28. Write a JavaScript program to check if two given integer values are in the range 
//50..99 (inclusive). Return true if either of them are in the said range. 
/*
function calc(x,y){
    if( (x>=50 || y>=50) && (x<=99 || y<=99) ){
        return true;
    }else{
        return false;
    }
}
console.log(calc(55,55));
console.log(calc(40,22));
*/

//30. Write a JavaScript program to check if a string "Script" presents at 5th
// (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one
/*
function check(x){
if(x.length <6){
    return x;
}var res =x;
if(x.substring(10,4)=="Script"){
    res=x.substring(0,x.length-6);
}
return res;
}
console.log(check("JavaScript"));
console.log(check("CoffeeScript"))
*/
//31. Write a JavaScript program to find the largest of three given integers. 
/*
function find(x,y,z){
    max=0;
    if(x>y){
        max=x;
    }else{
        max=y
    }if(z>max){
        max=z;
    }
return max;
}
console.log(find(5,4,2));
console.log(find(3,4,2));
console.log(find(2,3,4));

*/

//32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values. 
/*
function find(x,y){
    max=0;
    if(x>y && (x<100 || y<100)){
        max=x;
    }else{
        max=y
    }
return max;
}
console.log(find(60,10));
*/

//33. Write a JavaScript program to check if two numbers are in range 40..60 or in the range 70..100 inclusive.
/*
function find(x,y){
    if ((x >= 40 && x <= 60 && y >= 40 && y <= 60) 
    || 
    (x >= 70 && x <= 100 && y >= 70 && y <= 100))
   {
  return true;
   } 
  else 
   {
  return false;
}
}
console.log(find(70,70));
console.log(find(10,10));
*/

//34. Write a JavaScript program to find the larger number from the two given positive integers,
// the two numbers are in the range 40..60 inclusive. 
/*
function find(x,y){
    max=0;
    if((x>y && x >= 40 && x <= 60 && y >= 40 && y <= 60)){
        return max=x;
    }else{
        return max=y;
    }
}
console.log(find(22,22));
*/

//35. Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character.
/*
function check(str,x){
    x=0;
    for( i=0; i<str.length; i++){
        if(str.charAt(i)== x) {
            x++;
        }
    }
    return (x>=2 && x<=4);
    }
    console.log(check("JavaScript","a"));
    console.log(check("CoffeeScript", "C"));
    */

//Write a JavaScript program to create new string with first 3 characters are in lower case.
// If the string length is less than 3 convert all the characters in upper case
/*
function check(x){
    var str = x.slice(0,3);
    return x.length>3 ? str.toLowerCase()+x.substring(3,x.length):x.toUpperCase();
}
    console.log(check("jav"));
    console.log(check("CoffeeScript"));
    */

//38. Write a JavaScript program to check the total marks of a student in various examinations. 
//The student will get A+ grade if the total marks are in the range 89..100 inclusive, 
//if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90.
// Return true if the student get A+ grade or false otherwise.
/*
    function fn(totmarks,is_exam)
    {
    if (is_exam) {
      return totmarks >= 90;
    }
   return (totmarks >= 89 && totmarks <= 100);
   }
  
  console.log(fn("78", " "));
  console.log(fn("89", "true "));
  console.log(fn("99", "true "))
*/
//39. Write a JavaScript program to compute the sum of the two given integers,
// If the sum is in the range 50..80 return 65 other wise return 80.
/*
function fn(x,y){
z=x+y;
if(z>=50 && z<=80){
    return 65;
}else{
    return 80;
}
}

console.log(fn(40,20));
console.log(fn(20,20));
*/

//40. Write a JavaScript program to check from two given integers if either one is 8 or their sum or difference is 8.
/*
function fn(x,y){
    z=x-y;
    if(x===8 || y===8){
        return true;
    }
    if(z==8){
        return true;
    }
    return false;
}
console.log(fn(30,7));
console.log(fn(8,9));
*/

//41. Write a JavaScript program to check three given numbers,
// if the three numbers are same return 30 otherwise return 40 and if two numbers are same return 20.
/*
function fn(x,y,z){

    if(x===y && y===z){
        return 30;
    }
    if(x===y && y===z || x===z){
        return 20;
    }   else{
    return 40;
}
}
console.log(fn(30,7,20));
console.log(fn(8,9,8));
console.log(fn(8,8,8));
*/


//44. Write a JavaScript program to check from three given integers that if 
//a number is greater than or equal to 20 and less than one of the others. 
/*
function fn(x, y, z) 
{
   return (Math.abs(x - y) >= 20) ||
          (Math.abs(x - z) >= 20) ||
          (Math.abs(y - z) >= 20);
}
console.log(fn(23, 45, 10));
console.log(fn(23, 23, 10));
console.log(fn(21, 66, 75));
*/
//45. Write a JavaScript program to check two given integer values and return true if one of the number
// is 15 or if their sum or difference is 15. 

/*function fn(x,y){
    z=x+y;
    if(x===15 || y===15){
        return true;
    }
    if(z==15){
        return true;
    }else{
        return false;
    }
}
    
console.log(fn(15,20));
console.log(fn(15,15));
console.log(fn(10,5));
console.log(fn(1,5));
*/
//46. Write a JavaScript program to check two given non-negative integers and if one of the 
//number (not both) is multiple of 7 or 11.
/*
function fn(x, y) {
    if (x % 7 === 0 || y % 11 === 0) {
        return true;
    } else if (y % 7 === 0 || y % 11 === 0) {
        return true;
    } else {
        return false;
    }
}   
console.log(fn(7,11));
console.log(fn(15,15));
console.log(fn(11,0));
console.log(fn(0,5));
*/
//48. Write a JavaScript program to reverse a given string.  
/*
function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
 
console.log(reverseString("hello"));
*/
//50. Write a JavaScript program to capitalize the first letter of each word of a given string.
/*
function capLet(str){
    return str.charAt(0).toUpperCase()+str.slice(1);
}
console.log(capLet("bambam"));
*/
/*
function conver(num){

var hours = Math.floor(num /60);
var minutes = num % 60;
return hours + ":" + minutes;
}

console.log(conver(23));
console.log(conver(70));
console.log(conver(60));
*/

//56. Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas
/*
function division_string(n1, n2) {
    
  n1 = 80;
  n2 = 6;
  
  var div = Math.round(n1 / n2).toString(),
  result_array = div.split("");
  
  if (div >= 1000)
  {
  for (var i = div.length - 3; i > 0; i -= 3) 
  {
  result_array.splice(i, 0, ",");
  }
  result_array;
  }
  console.log(result_array);

*/







