const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/auth_routes');

app.use(bodyParser.json());
app.use('/api', authRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
