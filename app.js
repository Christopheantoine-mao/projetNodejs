import express from 'express';
import sequelize from './config/database.js';
import taskRoutes from './routes/tasks.js';
import productRoutes from './routes/product.js';
import indexRoutes from './routes/index.js';


const app = express();
const port = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Routes pour les tâches
app.use('/tasks', taskRoutes);

// app.use ('/index.js', indexRoutes);
app.use('/', indexRoutes);

app.use ('/', productRoutes);
// app.use ('/about.js', aboutRoutes);

// Synchroniser le modèle avec la base de données
sequelize.sync()
  .then(() => {
    console.log('Database synchronized');
    app.listen(port, () => {
      console.log(`Server running at <http://localhost:3000>:${port}/`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });