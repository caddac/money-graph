var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var RelationRow = require('./RelationRow');


var Relationships = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function () {
		return {
			relationships: [""]
		}
	},
	onRelationChange: function (a, e) {
		var relationships = this.state.relationships;
		relationships[a] = e.target.value;

		this.setState({
			relationships: relationships
		});
	},
	newRelationOnClick: function (e) {
		var relationships = this.state.relationships;
		relationships.push("");

		this.setState({
			relationships: relationships
		});
	},
	continueOnClick: function (e) {
		this.context.router.push({
			pathname: '/moneyFlows'
		});
		console.log('submit clicked');
		console.log(e);
	},
	onKeyPress: function (i, e) {
		if (e.key === 'Enter') {
			var relationships = this.state.relationships;
			relationships.push("");

			this.setState({
				relationships: relationships
			});
			//focus on the new child component
			//this.refs["activity_" + i].refs.activityInput.focus()
		}
	},
	render: function () {
		var myrelationships = this.state.relationships.map(function (a, i) {
			return (
				<RelationRow
					relation={a}
					ref={"relation_" + i}
					onRelationChange={this.onRelationChange.bind(this, i) }
					onKeyPress={this.onKeyPress.bind(this, i) }
					key={i}
					rowId={i} />);
		}, this);

		return (
			<div className="jumbotron">
				<div className="container">
					<div className="row">
						{myrelationships}
					</div>
					<div>
						<button
							className="btn"
							type="submit"
							onClick={this.newRelationOnClick}>
							New Relationship
						</button>
						<button
							className="btn"
							type="submit"
							onClick={this.continueOnClick}>
							Next
						</button>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Relationships;