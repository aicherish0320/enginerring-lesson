class FooterPlugin {
  constructor(options) {
    console.log('>>> ', options)
  }
  apply(compiler) {
    console.log('footer >>> ')
  }
}

module.exports = FooterPlugin
