/* eslint-disable eqeqeq */
const calculate = (arr) => {
  let calcArr = arr.filter(inputs => {
    return inputs != undefined && inputs != ''
  })

  for (let i = 0; i < arr.length; i++) {
    let operatorArr = ['*', '/', '+', '-']

    if (operatorArr.includes(arr[i]) === false && isNaN(arr[i]) === true) {
      calcArr.splice(i, 1)
    }
  }

  return eval(calcArr.join(' '))
}

// eslint-disable-next-line no-console
console.log(calculate(['6', '*', 'foo', 2]))

module.exports = calculate
