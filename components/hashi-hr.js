import { BodyComponent } from 'mjml-core'

/*
  Our component is a (useless) simple text tag, that adds colored stars around the text.
  It can take 3 attributes, to specify size and colors.
*/
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

  // This functions allows to define styles that can be used when rendering (see render() below)
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

  /*
    Render is the only required function in a component.
    It must return an html string.
  */
  render() {
    return `
      <div
        ${this.htmlAttributes({
          class: this.getAttribute('css-class'),
          style: 'hr' // This will add the 'wrapperDiv' attributes from getStyles() as inline style
        })}
      >
      test
      </div>
		`
  }
}
