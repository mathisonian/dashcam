const React = require('react');
const IdyllComponent = require('idyll-component');
const InlineSVG = require('react-inlinesvg');
const css = require('sheetify');


class SVG extends IdyllComponent {
  render() {

    const { showAnnotations, src } = this.props;
    // const cssString = 
    // const prefix = css`
    //   :host .annotation {
    //     opacity: ${showAnnotations ? 1 : 0};
    //   }
    // `;

    return (
      <InlineSVG className={''} src={src} />
    );
  }
}

module.exports = SVG;

