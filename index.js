const app = require('src/config/server');
require('src/app/routes/users') (app);

app.listen(app.get('port'), 
    () => console.log(`server corriendo en puerto ${app.get('port')}.`));