$(document).ready(function() {
  var equation = '';
  var opSpot = 0;
  var operator = '';
  var number1 = 0;
  var number2 = 0;
  var digit = '';
  var answer = 0;
  var equaled = false;
  var last = '';
  $('button').click(function(){
    last = equation.charAt(equation.length-1);
    digit = $(this).attr('value');
    if(digit === 'AC'){
      equation = '';
      opSpot = 0;
      operator = '';
      number1 = 0;
      number2 = 0;
      $('#history').html('0');
      $('#answer').html('0');
    }
    else if(equation === '' && (digit === '/' || digit === 'x' || digit === '-' || digit === '+')){
    }
    else if(digit === 'CE' && opSpot !== 0){
      equation = equation.slice(0,opSpot+1);
      $('#history').html(equation);
    }
    else if (digit === 'CE' && opSpot === 0){
      equation = '';
      opSpot = 0;
      operator = '';
      number1 = 0;
      number2 = 0;
      $('#history').html('0');
      $('#answer').html('0');
    }
    else if((last === '/' || last === 'x' || last === '-' || last === '+') && (digit === '/' || digit === 'x' || digit === '-' || digit === '+')){
      equation = equation.replace(last, digit);
      operator = digit;
      $('#history').html(equation);
    }
    else if(operator === '' && (digit === '/' || digit === 'x' || digit === '-' || digit === '+')){
      opSpot = equation.length;
      equation += digit;
      operator = digit;
      $('#history').html(equation);
    }
    else if(operator !== '' && (digit === '/' || digit === 'x' || digit === '-' || digit === '+')){
      number1 = parseFloat(equation.slice(0, opSpot+1));
      number2 = parseFloat(equation.slice(opSpot+1, equation.length));
      answer = findSol(number1, number2, operator);
      $('#answer').html(answer);
      operator = digit;
      opSpot = (answer.toString()).length;
      equation = answer.toString() + operator;
      $('#history').html(equation);
    }
    else if(operator !== '' && digit === '='){
      number1 = parseFloat(equation.slice(0, opSpot+1));
      number2 = parseFloat(equation.slice(opSpot+1, equation.length));
      answer = findSol(number1, number2, operator);
      $('#answer').html(answer);
      $('#history').html(equation + '=' + answer.toString());
      operator = '';
      equation = answer.toString();
    }
    else if((operator === '' || equation === '') && digit === '='){
      if(equation !== '' && operator === ''){
        $('#answer').html(equation);
      }
    }
    else if(!equaled){
      equation += digit;
      $('#history').html(equation);
    }
    else if(equaled){
      equation = digit;
      $('#history').html(equation);
    }
    if(digit === '='){
      equaled = true;
    }
    else{
      equaled = false;
    }
  });
function findSol(num1, num2, op){
  var output = 0;
  if(op === '/'){
    output = num1/num2;
  }
  else if(op === 'x'){
    output = num1*num2;
  }
  else if(op === '-'){
    output = num1-num2;
  }
  else if(op === '+'){
    output = num1+num2;
  }
  else{
    return 0;
  }
  if(output.toString().length > 4){
    output = parseFloat(output.toFixed(4));
  }
  return output;
}
});