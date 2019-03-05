module.exports = {
	db:{
		host:process.env.MYSQL_URL || 'localhost',
		port:'3306',
		userName:'team_run',
		password:'teamrun@20180525',
		name:'team_run',
		dialect:'mysql'
	},
	fileStore:{
		location:process.env.NODE_ENV=='production'?'/static/images':'.'
	},
	env:'PROD'

};