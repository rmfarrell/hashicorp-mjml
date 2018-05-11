import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'

registerDependencies({
  'hashibits-header': ['mj-text']
})

export default class HashibitsHeader extends BodyComponent {
  // component is childless
  static endingTag = true

  static allowedAttributes = {
    title: 'string'
  }

  static defaultAttributes = {
    title: 'HashiBits'
  }

  getStyles() {
    const fontSize = this.getAttribute('font-size')
    return {
      wrapper: {}
    }
  }

  render() {
    return this.renderMJML(`
      <mj-wrapper ${this.htmlAttributes({
        style: 'wrapper',
        padding: '20px 40px 0',
        'background-color': 'black'
      })}>
        <mj-text ${this.htmlAttributes({
        color: '#666',
        'line-height': '16px',
        align: 'center'
      })}>
          ${this.getContent()}
        </mj-text>
        <mj-image  ${this.htmlAttributes({
        src:
          'https://marketing-image-production.s3.amazonaws.com/uploads/baf56c614e0696676372e1dda7a5a09dccbcf85dd5cc739f69b9ea12b135683185589015fdfc0157db7fd53e973b5e93e590d610372cd4fc13637c697153d813.png'
      })}/>
      </mj-wrapper>
    `)
  }
}
