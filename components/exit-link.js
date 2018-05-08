import { BodyComponent } from 'mjml-core'

// TODO: Figure out why padding doesn't work here.
export default class ExitLink extends BodyComponent {
  // component is childless
  static endingTag = true

  static allowedAttributes = {
    padding: 'unit(px)',
    color: 'color',
    'font-size': 'unit(px)',
    href: 'link'
  }

  static defaultAttributes = {
    padding: '6px 0 12px',
    color: '#1563ff',
    'font-size': '13px'
  }

  getStyles() {
    const fontSize = this.getAttribute('font-size')
    return {
      a: {
        color: this.getAttribute('color'),
        'font-size': fontSize,
        'letter-spacing': fontSize > '13px' ? '1px' : '0',
        'text-decoration': 'none',
        'font-weight': '700'
      }
    }
  }

  render() {
    return this.renderMJML(`
      <mj-wrapper ${this.htmlAttributes({
        padding: this.getAttribute('padding')
      })}>
        <mj-text>
          <a ${this.htmlAttributes({
            href: this.getAttribute('href'),
            target: '_blank',
            style: 'a'
          })}>
            ${this.getContent()} &#10142;
          </a>
        </mj-text>
      </mj-wrapper>
		`)
  }
}
