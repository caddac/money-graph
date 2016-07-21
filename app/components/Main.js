var React = require('react');
var banner = require('../styles').banner;

var Main = React.createClass({
	render: function(){
		return(
			<div className="main-container"> 
			<ul className="nav nav-tabs">
				<li role="presentation" className="active"><a href="#">Home</a></li>
				<li role="presentation"><a href="#">Profile</a></li>
				<li role="presentation"><a href="#">Messages</a></li>
			</ul>
				{this.props.children}
			</div>
		);
	}
});

module.exports = Main;