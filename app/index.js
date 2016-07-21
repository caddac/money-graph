var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

ReactDOM.render(
	routes,
	document.getElementById('app')
);

/*
We will proceed in three steps.

First, draw a box for “you”, “job” (more boxes if you have more than one job), “investments” (things that actually pay you money, your house doesn’t count unless you’re renting out a room), “activities” (such as commuting, watching TV, blogging or other hobbies, eating, exercising, sleeping), also draw a box for “housing” (that could include insurance).
Next, draw lines representing the money flows. Try to make the thickness representative of the money that flows between two boxes. For instance, money probably flows from your “job” to “housing” and that is typically represented by a big fat line. Money probably also flows from the “job” to “commuting”.
Now using a dashed line, draw the flows of time. There is probably big dashed lines going from “you” to your “job” and to “sleeping”. There’s also a line going from “you” to “commuting” – however, if you’re a cab driver, there might be a line from “job” to “commuting” instead if you can pick up passengers on your way home.
Finally, use a dotted line to draw the flow of health. For instance, money and time may flow from “you” to “exercise” and health would flow back. If you bike to work, time would flow from “you” to “commuting” and “health” would flow from “commuting” to “you”. If you drive, time and money would flow from “you”.*/ 