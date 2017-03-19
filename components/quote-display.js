const React = require('react');
const IdyllComponent = require('idyll-component');

const getRandomElement = (items) => {
  items = items || [];
  return items[Math.floor(Math.random()*items.length)];
};

class Quote extends IdyllComponent {
  constructor(props) {
    super(props);
    this.state = {
      quote: getRandomElement(this.props.quotes)
    }
  }

  updateQuote() {
    this.setState({
      quote: getRandomElement(this.props.quotes)
    });
  }

  initializeInterval() {
    if (this.interval) {
      return;
    }
    this.interval = setInterval(() => {
      this.updateQuote();
    }, 8000);
  }

  formatText(text) {
    return text.replace(/\\n/g, ' ').replace(/{(\$\d+\.?\d*)}/g, '$1').replace(/ ([a-z]?\')/g, '$1');
  }

  render() {
    if (this.props.running) {
      this.initializeInterval();
    }
    return (
      <div className="quote">
        <div className="content">
          {this.formatText(this.state.quote['Consumer complaint narrative'])}
          <div className="attribution"><span className="company">{this.state.quote.Company}</span></div>
        </div>
      </div>
    );
  }
}

module.exports = Quote;
