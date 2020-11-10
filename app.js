const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');


const userRoutes = require('./routes/users');
const adminRoutes = require('./routes/admin');


const app = express();


app.set('view engine', 'pug');
app.set('views', 'views');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', userRoutes);
app.use('/create-users', adminRoutes);

app.use('/', (request, response, next) => {
    console.log('home');
    const error404 = 'Erreur 404';
    const listeDeNombre = [1, 2, 3, 4, 5];
    const informationSecrete = false;
    response.status(200).render('404', { erreurAffichable: error404, listeDeNombre, informationSecrete });
});


app.listen(8000);