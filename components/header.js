const React = require('react');
const IdyllComponent = require('idyll-component');
class Header extends IdyllComponent {
  render() {
    return (
      <div className={'article-header'}>
        <div className={'hed'}>
          {this.props.title}
        </div>
        <div className={'dek'}>
          {this.props.subtitle}
        </div>
        <div className={'byline'}>
          By: <a href={this.props.authorLink}>{this.props.author}</a>
        </div>
      </div>
    );
  }
}

module.exports = Header;
