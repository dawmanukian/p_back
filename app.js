require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { authenticateJWT } = require('./middlewares/authMiddleware'); // JWT middleware
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

const app = express();
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/user', authenticateJWT, userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
