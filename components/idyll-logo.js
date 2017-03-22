const React = require('react');
const IdyllComponent = require('idyll-component');

class Logo extends IdyllComponent {
  render() {
    return (
      <div className={'logo-lockup'}>
        <a href="https://idyll-lang.github.io/idyll/">
          <img className={'logo'} src={'/images/logo.svg'} />
          <small>Made with Idyll</small>
        </a>
      </div>
    );
  }
}

module.exports = Logo;
