const React = require('react');
const IdyllComponent = require('idyll-component');

class Placeholder extends IdyllComponent {
  render() {
    const { width, height } = this.props;
    return (
      <img style={{display: 'block', width: '100%'}} src={`http://placehold.it/${width}x${height}`} />
    );
  }
}

Placeholder.defaultProps = {
  width: 600,
  height: 400
};

module.exports = Placeholder;
