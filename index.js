const calculationSteps = (arr) => {
  let calcArr = arr.filter(inputs => {
    return inputs === ''
  })

  let formula = calcArr.join(' ')

  return formula
}

// eslint-disable-next-line no-console
console.log(calculationSteps([6, '/', 'foo', 2]))

module.exports = calculationSteps
