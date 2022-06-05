const { ConcatSource } = require('webpack-sources')

class FooterPlugin {
  constructor(options) {
    console.log('>>> ', options)
    this.options = options
  }
  apply(compiler) {
    compiler.hooks.compilation.tap('FooterPlugin', (compilation) => {
      compilation.hooks.processAssets.tap('FooterPlugin', () => {
        const chunks = compilation.chunks
        for (const chunk of chunks) {
          for (const file of chunk.files) {
            const comment = `/* ${this.options.banner} */`
            compilation.updateAsset(
              file,
              (old) => new ConcatSource(old, '\n', comment)
            )
          }
        }
        console.log('chunks >>> ', chunks)
      })
    })
  }
}

module.exports = FooterPlugin
