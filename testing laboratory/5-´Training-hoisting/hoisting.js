foo = 2
console.log(foo)
var foo
/*
what does hointing do?
when a varieble is declared below. 
hointing itseif moves it to the top
//type
*/ 
//foo1 =  2;
//var foo1
//console.log(foo1)

//-----------------------------------------

//example of a function
hoisting()
function hoisting(){
    console.log("hellow word")
}
//function right
function hointing(){
    console.log("right")
}
hointing()

//----------------------------------
/* with variable let / const, the efect hointing doesn´t work properly */
//exemple
 test1 = 2
 console.log(test1)
 let test1
 //---------------
 //right
  let test2
  test2 = "test 2"
 console.log(test2)
