const conn = require('../../config/database');
const { Request } = require("tedious");

module.exports = (app) => {
    app.get('/usuarios', (req, res, next) => {
        //let query = "SELECT * FROM usuarios";
        const request = new Request(
            `SELECT * FROM usuarios`,
              (err, rowCount) => {
                  if (err) {
                      console.error(err.message);
                  }
              }
        );
        var _rows = [];
        request.on("row", columns => {
            var _item = {}; 
            for (var name in columns) 
                _item[name] = columns[name].value;
            _rows.push(_item);
        });
        request.on("doneInProc", (rowCount, more, rows) => {
            res.json({status: 1, valores: _rows});
        });
        conn.execSql(request);
    });
}

