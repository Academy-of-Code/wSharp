const if_char = 'Þ';
const else_char = '₤';
const elseif_char = '₤Þ';
const while_char ="bnklewndbchnfkedcbh"
const var_char="bnklewndbchnfkedcbh";
const function_char="bnklewndbchnfkedcbh";
const const_char="bnklewndbchnfkedcbh";
const let_char="bnklewndbchnfkedcbh";
const return_char="bnklewndbchnfkedcbh";
const class_char="bnklewndbchnfkedcbh";
var input;
var output;
function replace(){
	output = input.replace(if_char, "if")
  output = output.replace(else_char, "else")
  output = output.replace(elseif_char, "else if")
  output = output.replace(while_char, "while")
  output = output.replace(var_char, "var")
  output = output.replace(function_char, "function")
  output = output.replace(const_char, "const")
  output = output.replace(let_char, "let")
  output = output.replace(return_char, "return")
  output = output.replace(class_char, "class")
}
function compile(){
	output = null
  try{
  	replace();
    eval(output);
  } catch (err){
  	output = err
  }
  /*Log Function*/ (function () {
    if (!console) {
        console = {}
    }
    var old = console.log
    var logger = output
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.value += (JSON && JSON.stringify ? JSON.stringify(message) : String(message))
        } else {
            logger.value += message
        }
    }
  })();
/*Error Function*/ (function () {
    if (!console) {
        console = {}
    }
    var old = console.error
    var logger = output
    console.error = function (message) {
        if (typeof message == 'object') {
            logger.value += (JSON && JSON.stringify ? JSON.stringify(message) : String(message))
        } else {
            logger.value += message
        }
    }
  })();
}
