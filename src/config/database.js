const { Connection, Request } = require("tedious");

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "admin_FME",
      password: "FeMeEaPass123!"
    },
    type: "default"
  },
  server: "si-server.database.windows.net",
  options: {
    database: "FeMeEa_DB", 
    encrypt: true
  }
};

const conn = new Connection(config);

conn.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Funcionando DB.")
  }
});

conn.connect();

module.exports = conn;

