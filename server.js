import app from './app';

const port = 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  console.log(`CTRL + Click: http://localhost:${port}`);
});
