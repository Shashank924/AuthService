const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const { User , Role } = require('./models/index');

const apiRoutes = require('./routes/index');

const setupAndStartServer = () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.use('/api' , apiRoutes);

    app.listen(PORT ,async () => {

        console.log(`Server started at Port ${PORT}`);
    })
}

setupAndStartServer();