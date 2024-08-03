//Respostas do freeCodeCamp do exercício 31 ao 60
//ex 31:
const character = "Hello";
const count = 8;
const rows = [];

//ex 32:
const character = "#";
const count = 8;
const rows = [];

//ex 33:
for ("iterator"; "condition"; "iteration") {}

//ex 34:
for (let i = 0; "condition"; "iteration") {

}

//ex 35:
for (let i = 0; i < count; "iteration") {

}

//ex 36:
for (let i = 0; i < count; i = i + 1) {

}

//ex 37:
for (let i = 0; i < count; i = i + 1) {
    console.log(i)
    }

//ex 38:
for (let i = 0; i < count; i = i + 1) {
    rows.push(i);
  }

//ex 39:
let result = "";

//ex 40:
console.log(result);

//ex 41:
//Note that you can use const because the variable only exists for a single iteration, not during the entire loop.Create a for...of loop to iterate through your rows array, assigning each value to a row variable.
for (const row of rows) {}

//ex 42:
for (const row of rows) {
    result = result + row;
    }

//ex 43:
for (const row of rows) {
    result = result + "\n" + row;
  }

//ex 44:
for (let i = 0; i < count; i = i + 1) {
    rows.push(character);
  }

//ex 45:
for (let i = 0; i < count; i = i + 1) {
    rows.push(character);
  const character;
  character.repeat(i);
  }

//ex 46:
for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1))
}

//ex 47:
function padRow(){}

//ex 48:
function padRow() {

}
padRow();

//ex 49:
padRow();
const call = padRow();

//ex 50:
function padRow() {

}
const call = padRow();
console.log(call);

//ex 51:
function padRow() {
    return "Hello!";
  }

//ex 52:
function padRow(name) {
    return "Hello!";
  }

//ex 53:
function padRow(name) {
    return name;
  }

//ex 54:
const call = padRow("lorena");

//ex 55:
function addTwoNumbers(n1, n2){
    return n1 + n2;
    }
    const sum = addTwoNumbers(5, 10);
    console.log(sum)

//ex 56:
//resposta é espaço vazio.

//ex 57:
function padRow(name) {
    return character + name;
  }

//ex 58:
function padRow(name) {
    const test = "Testing";
      return character + name;
    }

//ex 59:
function padRow(name) {
    const test = "Testing";  
    return test;
  }

//ex 60:
//An important thing to know about the return keyword is that it does not just define a value to be returned from your function, it also stops the execution of your code inside a function or a block statement. This means any code after a return statement will not run.
function padRow(name) {
    const test = "Testing";
    console.log("This works!");
    return test;
  console.log("This works!");
  }