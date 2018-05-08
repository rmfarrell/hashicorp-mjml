import { BodyComponent } from 'mjml-core'

// TODO: Figure out why padding doesn't work here.
export default class HashiHashicorpLogo extends BodyComponent {
  // component is childless
  static endingTag = true

  static allowedAttributes = {
    width: 'unit(px)'
  }

  static defaultAttributes = {
    width: '140px'
  }

  render() {
    return this.renderMJML(`
      <mj-image ${this.htmlAttributes({
        href: this.getAttribute('css-class'),
        target: '_blank',
        alt: 'HashiCorp',
        width: this.getAttribute('width'),
        src:
          'https://marketing-image-production.s3.amazonaws.com/uploads/0018618df136aac1cb4c222507bb3461b1d95c3f1c321110bb4bce8e4bbb3d70d618f5401839131853acaebe15b73e91498bc2d09e25c4a35480effefcbb9d7d.png'
      })}/>
		`)
  }
}
