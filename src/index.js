const express = require('express')
const productRoutes = require('./product.routes');
const userRouter = require('./user/user.router');
const { logRequest } = require('./middleware.js');
const { errorResponder } = require('./error.middleware');

const app = express();
const PORT = 3000;


app.use(userRouter);
app.use(logRequest);
app.use(productRoutes);
app.use(errorResponder);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});