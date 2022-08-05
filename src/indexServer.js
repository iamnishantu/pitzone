const express = require('express');
const app = express();
const env = require('dotenv');
const path = require('path');
const connection = require('./Config/Connection');
const handler = require('./MiddleWare/ErrorHandle');
const cors = require('cors')

env.config()
connection()



app.get('/', (req, res) => {
	res.status(200).send(
		"This is pitzon API on Node js"
	)
})
app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb", extended: true }))
app.use('/public', express.static(path.join(__dirname, "public")));

app.use('/api', require('./Routes'));
app.use(handler.invalidRoute, handler.errorHandler);



app.listen(process.env.PORT, () => {
	console.log(`Your server is Running on port ${process.env.PORT}`)
})