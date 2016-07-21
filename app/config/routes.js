var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Activities = require('../components/Activities');
var Relationships = require('../components/Relationships');
// var PromptContainer = require('../containers/PromptContainer');

var routes = (
	<Router history={hashHistory}> 
		<Route path='/' component={Main}>
			<IndexRoute component={Activities}/>
			<Route path='moneyFlows' header='Money Flows' component={Relationships} />
			{/*<Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
			<Route path='battle' component={ConfirmBattleContainer} />*/}
		</Route>
	</Router>
);

module.exports  = routes;