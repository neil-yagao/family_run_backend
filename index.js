const { ApolloServer} = require('apollo-server-express');
var express = require('express')
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./conf/app')
var schema = require( "./src/access/schema/");
var upload = require('./src/access/restful/upload');

const server = new ApolloServer({
	schema:schema
});

var app = express();

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.applyMiddleware({ app });

global.defaultSuccess = {
	success: true,
	msg: 'op success'
};

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(cookieParser());
app.use('/static',express.static(config.fileStore.location));
app.use('/upload',upload)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	//direct return error message
	res.status(err.status || 500);
	console.log('err', err);
	res.json({
		success: false,
		msg: err.message
	});
});

app.listen({ port: 3000 }, () =>
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`),
);
