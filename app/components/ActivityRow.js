var React = require('react');
var PropTypes = React.PropTypes;


var ActivityRow = React.createClass({


	propTypes: {
		onActivityChange:PropTypes.func.isRequired,
		activity:PropTypes.string.isRequired,
		onKeyPress:PropTypes.func.isRequired,
		rowId: PropTypes.number.isRequired
	},
	render: function(){
		return (
		<div className="row">
			<input
				className="form-control"
				placeholder="Activity..."
				ref="activityInput"
				onKeyPress={this.props.onKeyPress}
				onChange={this.props.onActivityChange}
				value={this.props.activity}
				type="text" />
		</div>)
	}
});

module.exports = ActivityRow;