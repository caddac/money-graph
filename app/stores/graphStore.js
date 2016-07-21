var Dispatcher = require('flux').Dispatcher;

var DispatchToken = Dispatcher.register(function(action){
	switch(action.type){

		
		default:
			//no-op
	}
});

module.exports = DispatchToken;