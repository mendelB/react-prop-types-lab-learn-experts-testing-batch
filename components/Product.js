const React = require('react');

class Product extends React.Component {
	render() {
		return (
			<div>
			</div>
		)
	}
}

Product.defaultProps = {
	hasWatermark: false
}

Product.propTypes = {
	name: React.PropTypes.string.isRequired,
	producer: React.PropTypes.string,
	hasWatermark: React.PropTypes.bool,
	color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
	weight: function(props, propName) {
	    const weight = props[propName];
	    const valid = weight > 80 && weight < 300;

	    if (weight === undefined) return new Error('The `weight` prop is required.');

	    if (isNaN(weight)) return new Error('The `weight` prop is not a number.');

	    if (!(weight > 80 && weight < 300)) {
	      return new Error('The `weight` prop should range between 80 and 300.');
	    }
  	}
}

module.exports = Product;