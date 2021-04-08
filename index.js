/* eslint-disable eqeqeq */
const calculationSteps = (arr) => {
  let calcArr = arr.filter(inputs => {
    return inputs != null && inputs != ''
  })

  let formula = calcArr.join(' ')

  return formula
}

// eslint-disable-next-line no-console
console.log(calculationSteps([6, '/', '', 2]))

module.exports = calculationSteps
