// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
function logMsg(obj) {
  if (obj && obj.hasOwnProperty('errMsg')) {
    console.error(obj.errMsg);
  } else {
    console.log("The object does not have an 'errMsg' property.");
  }
}

const exObj = {
  errMsg: 'This is an error message.'
};

logMsg(exObj);
