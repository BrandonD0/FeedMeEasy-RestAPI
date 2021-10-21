const app = require('./config/server');
require('./app/routes/users') (app);

app.listen(app.get('port'), 
    () => console.log(`server corriendo en puerto ${app.get('port')}.`));