/* eslint-disable no-console */
/* eslint-disable eqeqeq */
const calculate = (arr) => {
  let operatorArr = ['*', '/', '+', '-']

  const operCheck = (operator) => operatorArr.includes(operator)

  let calcArr = arr.filter(inputs => {
    return inputs != undefined || inputs != ''
  })

  for (let i = 0; i < calcArr.length; i++) {
    if (operatorArr.includes(calcArr[i]) === false && isNaN(calcArr[i]) === true) {
      calcArr.splice(i, 1)
    }
    if (calcArr[i] === null) {
      calcArr.splice(i, 1, 0)
    }
  }

  if (calcArr.some(operCheck)) {
    return eval(calcArr.join(''))
  } else return NaN
}


// eslint-disable-next-line no-sparse-arrays
console.log(calculate(['6', '', '*', 'bar', , null]))

module.exports = calculate
