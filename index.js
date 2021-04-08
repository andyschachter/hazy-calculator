/* eslint-disable eqeqeq */
const calculate = (arr) => {
  let calcArr = arr.filter(inputs => {
    return inputs != undefined && inputs != ''
  })

  for (let i = 0; i < arr.length; i++) {
    switch (i) {
      case '+':
        i++
        break
      case '-':
        i++
        break
      case '*':
        i++
        break
      case '/':
        i++
        break
      case Number:
        i++
        break
      default:
        arr.splice(arr[i], 1)
    }
  }

  return eval(calcArr.join(''))
}

// eslint-disable-next-line no-console
console.log(calculate([6, '/', '', 'foo', 2]))

module.exports = calculate
