module.exports = function check(str, config) {
  let arr = str.split(''),
      length = 0;
  while(1) {
    if (length == arr.length) return false;
    length = arr.length;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < config.length; j++) {
        if (arr[i] == config[j][0] && arr[i + 1] == config[j][1]) {
          arr.splice(i, 2);
        }
        if (arr.length == 0) {
          return true;
        }
      }
    }
  }
}
