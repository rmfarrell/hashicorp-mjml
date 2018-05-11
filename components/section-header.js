import { BodyComponent } from 'mjml-core'

export default class SectionHeader extends BodyComponent {

  static endingTag = true

  static allowedAttributes = {
    color: 'color',
    'background-color': 'color'
  }

  static defaultAttributes = {
    'background-color': 'black',
    color: 'white',
  }

  getStyles() {
    return {
      container: {
        padding: '0',
        margin: '0'
      },
      h1: {
        'background-color': this.getAttribute('background-color'),
        color: this.getAttribute('color'),
        'font-size': '16px',
        padding: '12px 0',
        'text-align': 'center',
        'text-transform': 'uppercase',
        margin: '0px',
        'letter-spacing': '1px'
      }
    }
  }

  render() {
    return this.renderMJML(`
      <mj-wrapper ${this.htmlAttributes({
        style: 'container',
        padding: '0px',
        margin: '0px'
      })}>
        <mj-text>
          <h1 ${this.htmlAttributes({ style: 'h1' })}>${this.getContent()}</h1>
        </mj-text>
      </mj-wrapper>
    `)
  }
}
