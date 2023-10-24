module.exports = function () {
  return actor({

    generateRandomNumber (min = 100, max = 1000) {
      return Math.floor(Math.random() * max) + min
    },
  })
}
