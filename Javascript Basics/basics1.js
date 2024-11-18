console.log("hello world");

let a = 4;
console.log(a);

console.log(typeof(a));

let b = 245.6;
console.log(b);
console.log(typeof(b));


let c = "Rahul Shetty"; //string
console.log(c);
console.log(typeof(c));

let required = true; //boolean
console.log(required);
console.log(typeof(required));
console.log(!required); //not operator applicable only for boolean

//null and undefined are also there try those 

var d = "Temparature";
console.log(typeof(d));

var d = a+b;
console.log(d);

//we cannot redeclare variable with let keyword but with var it is possible
//reassign is allowed for let like we declare a variable using let and then we use use the variable 2nd time for some operations but that time we dont declare with let variable

const assign = "Use JS";
console.log(assign);

assign = 420;
console.log(assign);//this will not work and will throw error
// once we declare using const variable we cant reassign or change the value afterwards


//Variables declared with var have function-level scope, while variables declared with let have block-level scope. This means that let variables are scoped to the nearest enclosing block (commonly a pair of curly braces {}).