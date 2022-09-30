const { conn } = require('./src/db');
const app = require('./src/routes/server');
const PORT = 3001;

app.listen(PORT, () => {
  console.log('Corriendo en 30001');
  conn.sync({ force: true });
});

