const express =  require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./controllers/artista-dao')(app);
require('./controllers/musica-dao')(app);
require('./controllers/album-dao')(app);


app.listen(3020);
