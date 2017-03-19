const React = require('react');
const IdyllComponent = require('idyll-component');
const Aside = require('./aside');

class Callout extends IdyllComponent {
  render() {
    return (
      <Aside>
        <div className={'callout'}>
          {this.props.text}
          <div className={'caption'}>
            {this.props.caption}
          </div>
        </div>
      </Aside>
    );
  }
}

module.exports = Callout;
