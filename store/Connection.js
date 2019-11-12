const mongoose = require('mongoose');
const connectionString =
	'mongodb+srv://oouomaster:oouomaster123456@prog-web-com-node-atividade-3-tp8fw.mongodb.net/test?retryWrites=true&w=majority';

const openConnection = () => mongoose.connect(connectionString, { useNewUrlParser: true });

module.exports = {
	openConnection
};
