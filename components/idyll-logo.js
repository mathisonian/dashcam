const React = require('react');
const IdyllComponent = require('idyll-component');

const style = {
  display: 'block',
  position: 'fixed',
  top: '30px',
  left: '30px',
  width: '47px',
  height: '47px',
  padding: '5px',
  background: '#fff'
};

class Logo extends IdyllComponent {
  render() {
    return (
      <img style={style} src={'https://idyll-lang.github.io/idyll/images/logo.png'} />
    );
  }
}

module.exports = Logo;
