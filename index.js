//const hostname = process.env.HOST;
const app = require('src/config/server');
require('src/app/routes/users') (app);

app.listen(app.get('port'), 
    () => console.log(`server corriendo en el puerto ${app.get('port')}.`));