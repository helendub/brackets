module.exports = function check(str, bracketsConfig) {
  // your solution

  let chars = str.split(''),
      stack = [],
      len = chars.length;

      if (len%2==0) {
        for (let i = 0; i < len; i++) {
          for (let j = 0; j < bracketsConfig.length; j++) {
            if (chars[i]==bracketsConfig[j][0] && bracketsConfig[j][0] !== bracketsConfig[j][1])  {
              stack.push(bracketsConfig[j][1]);
              continue;
            } else if (chars[i]==bracketsConfig[j][1]) {
                if (chars[i] == stack[stack.length-1]) {
                 stack.pop();
                } else {
                    stack.push(bracketsConfig[j][1]);
                  }
              }
          }
        }
        if (stack.length !== 0) {
          return false;
        } else  return true;
      } else return false;
  }