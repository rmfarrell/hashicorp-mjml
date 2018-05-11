import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'

registerDependencies({
  'mj-image-text': [],
  'mj-section': ['mj-image-text']
})

export default class StackedTeaser extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'size': 'enum(small,large)',
    'image-src': 'string',
    'href': 'string'
  }

  static defaultAttributes = {
    'size': 'small'
  }

  headStyle = breakpoint => (`
      @media only screen and (max-width:${breakpoint}) {
        .stacked-teaser-column,
        .stacked-teaser-column * {
          text-align: center!important;
          padding: 0!important;
          width: 100%!important;
        }
      }
  `)

  renderImage() {
    return `
      <mj-column
        ${this.htmlAttributes({
        width: '25%',
        'css-class': 'stacked-teaser-column'
      })}
      >
        <mj-image
          ${this.htmlAttributes({
        padding: '10px',
        src: this.getAttribute('image-src'),
        padding: '0px'
      })}
        >
        </mj-image>
    </mj-column>
    `
  }

  renderText() {
    return `
      <mj-column
        ${this.htmlAttributes({
        width: '75%',
        'css-class': 'stacked-teaser-column'
      })}
      >
        <mj-text
          ${this.htmlAttributes({
        color: 'black',
        'font-size': '14px',
        padding: '0 0 0 5%'
      })}
        >
          ${this.getContent()}
        </mj-text>
      </mj-column>
    `
  }

  render() {
    const content = [this.renderImage(), this.renderText()]

    return this.renderMJML(`
			<mj-section ${this.htmlAttributes({
        'border-top': '1px solid #ccc',
        padding: '16px 0',
        'css-class': 'stacked-teaser'
      })}>
        ${content}
			</mj-section>
		`)
  }
}