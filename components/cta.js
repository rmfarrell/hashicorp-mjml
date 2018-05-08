import { BodyComponent } from 'mjml-core'

// TODO: Figure out why padding doesn't work here.
export default class Cta extends BodyComponent {
  // component is childless
  static endingTag = true

  static allowedAttributes = {
    'background-color': 'color',
    color: 'color',
    href: 'link',
    target: 'string',
    padding: 'unit(px)'
  }

  static defaultAttributes = {
    'background-color': '#1563ff',
    color: 'white',
    padding: '12px 0'
  }

  render() {
    return this.renderMJML(`
      <mj-wrapper ${this.htmlAttributes({
        padding: this.getAttribute('padding')
      })}>
        <mj-button ${this.htmlAttributes({
          href: this.getAttribute('href'),
          target: '_blank',
          color: this.getAttribute('color'),
          'background-color': this.getAttribute('background-color'),
          padding: this.getAttribute('padding'),
          'font-size': '16px',
          'border-radius': '2px'
        })}>${this.getContent()}</mj-button>
      </mj-wrapper>
		`)
  }
}
