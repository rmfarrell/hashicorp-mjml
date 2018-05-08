import { BodyComponent } from 'mjml-core'

export default class HashiHr extends BodyComponent {
  // component is childless
  static endingTag = true

  static allowedAttributes = {
    color: 'color',
    weight: 'unit(px)',
    'margin-top': 'unit(px)',
    'margin-bottom': 'unit(px)'
  }

  static defaultAttributes = {
    color: '#1563ff',
    weight: '10px',
    'margin-top': '10px',
    'margin-bottom': '10px'
  }

  getStyles() {
    return {
      hr: {
        'background-color': this.getAttribute('color'),
        height: this.getAttribute('weight'),
        width: '100%',
        'margin-top': this.getAttribute('margin-top'),
        'margin-bottom': this.getAttribute('margin-bottom')
      }
    }
  }

  render() {
    return `
      <div
        ${this.htmlAttributes({
          class: this.getAttribute('css-class'),
          style: 'hr'
        })}
      >
      </div>
		`
  }
}
