const userInput = document.getElementById
    ("userInput");
    var expression = '';

function press(num){
    expression+= num;
    userInput.value = expression;
}

function equal(){
    expression.value = eval(expression);
    expression = '';
}

function erase(){
    expression = '';
    userInput.value = expresion;
}