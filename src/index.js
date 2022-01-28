module.exports = function check(str, bracketsConfig) {
  if(!str.length) return false;

  let arr = [],
      resultStr = str,
      resultStatus;
      
  bracketsConfig.forEach(item => arr.push(item[0] + item[1]));

  for (;;) {
    let statusBrackets = '';

    arr.forEach(item => {
        if (resultStr.includes(item)) {
          statusBrackets += '1';
          resultStr = resultStr.replace(item, '')
      } else {
          statusBrackets += '';
      }      
    }) 

    if (!resultStr.length) {
        resultStatus = true;
        break;
    } else if (!statusBrackets) {
        resultStatus = false;
        break;
    }
  }
  return resultStatus
}
