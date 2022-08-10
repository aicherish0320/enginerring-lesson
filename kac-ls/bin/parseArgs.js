module.exports = function parse() {
  let isAll = false,
    isList = false
  const args = process.argv.slice(2)

  args.forEach((arg) => {
    if (arg.indexOf('a') > -1) {
      isAll = true
    }
    if (arg.indexOf('l') > -1) {
      isList = true
    }
  })

  return {
    isAll,
    isList,
    args
  }
}
