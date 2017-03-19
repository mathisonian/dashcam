const React = require('react');
const IdyllComponent = require('idyll-component');

const cutoff = 1200;

class DynamicText extends IdyllComponent {
  render() {
    if (window.innerWidth < cutoff) {
      return (<span>{this.props.mobile}</span>);
    }
    return (<span>{this.props.desktop}</span>);
  }
}

module.exports = DynamicText;
