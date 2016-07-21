var React = require('react');
var PropTypes = React.PropTypes;


var RelationRow = React.createClass({


	propTypes: {
		onRelationChange:PropTypes.func.isRequired,
		relation:PropTypes.string.isRequired,
		onKeyPress:PropTypes.func.isRequired,
		rowId: PropTypes.number.isRequired
	},
	render: function(){
		return (
		<div className="row">
			<input
				className="form-control"
				placeholder="Activity..."
				ref="activityInput1"
				onKeyPress={this.props.onKeyPress}
				onChange={this.props.onRelationChange}
				value={this.props.relation1}
				type="text" />

			<input
				className="form-control"
				placeholder="mag..."
				ref="relationValue"
				onKeyPress={this.props.onKeyPress}
				onChange={this.props.onRelationChange}
				value={this.props.relation2}
				type="text" />


			<input
				className="form-control"
				placeholder="Activity..."
				ref="activityInput2"
				onKeyPress={this.props.onKeyPress}
				onChange={this.props.onRelationChange}
				value={this.props.relation2}
				type="text" />
		</div>)
	}
});

module.exports = RelationRow;