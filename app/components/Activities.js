var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var ActivityRow = require('./ActivityRow');


var Activites = React.createClass({
	contextTypes:{
 		router: React.PropTypes.object.isRequired
 	},
	getInitialState: function(){
		return {
				activities:[""]
			}
	},
	onActivityChange: function(a, e){
		var activities = this.state.activities;
		activities[a] = e.target.value;

		this.setState({
			activities:activities
		});
	},
	newActivityOnClick: function(e){
		var activities = this.state.activities;
		activities.push("");

		this.setState({
			activities:activities
		});	
	},
	continueOnClick: function(e){
		this.context.router.push({
			pathname: '/moneyFlows'
		});
		console.log('submit clicked');
		console.log(e);
	},
	onKeyPress: function(i, e){
		if (e.key === 'Enter') {
			var activities = this.state.activities;
			activities.push("");

			this.setState({
				activities:activities
			});	
			//focus on the new child component
			//this.refs["activity_" + i].refs.activityInput.focus()
    	}
	},
	render: function(){
		var myActivities = this.state.activities.map(function(a, i){
			return (
				<ActivityRow 
					activity={a}
					ref={"activity_" + i}
					onActivityChange={this.onActivityChange.bind(this, i)}
					onKeyPress={this.onKeyPress.bind(this, i)}
					key={i}
					rowId={i} />);
		}, this);
 
		return(
			<div className="jumbotron">
				<div className="container">
					<div className="row">
						{myActivities}
					</div>
					<div>
						<button
							className="btn"
							type="submit"
							onClick={this.newActivityOnClick}>
							New Activity
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

module.exports = Activites;