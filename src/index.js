const app = require('./App');
const port = process.env.PORT || 8000;


  app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
  });
  