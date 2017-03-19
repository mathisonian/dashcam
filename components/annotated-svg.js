const React = require('react');
const IdyllComponent = require('idyll-component');
const InlineSVG = require('react-inlinesvg');
const ReactDOM = require('react-dom');
const d3 = require('d3-selection');

class SVG extends IdyllComponent {
  render() {
    const { showAnnotations, src, r } = this.props;
    if (showAnnotations && this.node) {
      this.node.select('.annotations').style('opacity', 1);
    } else if (this.node) {
      this.node.select('.annotations').style('opacity', 0);
    }

    return (
      <div>
        <InlineSVG className={''} src={src} ref={(node) => { this.node = d3.select(ReactDOM.findDOMNode(node)); }} />
      </div>
    );
  }
}

module.exports = SVG;

