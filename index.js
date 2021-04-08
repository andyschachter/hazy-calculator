/* eslint-disable eqeqeq */
const calculate = (arr) => {
  let calcArr = arr.filter(inputs => {
    return inputs != undefined && inputs != ''
  })

  for (let i = 0; i < arr.length; i++) {
    let operatorArr = ['*', '/', '+', '-']

    if (operatorArr.indexOf(arr[i]) !== true && isNaN(arr[i]) === true) {
      arr.splice(i, 1)
    }
  }

  return eval(calcArr.join(''))
}

// eslint-disable-next-line no-console
console.log(calculate(['6', '*', '', 2]))

module.exports = calculate
