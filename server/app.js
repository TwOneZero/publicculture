const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.join(__dirname, './.env') });
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 5000);

//공통 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(morgan('dev'));
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

//router imports
const eventRouter = require('./routes/saveEvents');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const commentRouter = require('./routes/comment');

//mongoDB cloud URI
const uri = process.env.MONGO_URI;
mongoose
  .set('debug', true)
  .connect(uri, { dbName: process.env.MONGO_DB_NAME })
  .then(() => console.log('mongoDB Connected!'))
  .catch((error) => console.log(error));

//라우팅 url
app.use('/api', eventRouter);
app.use('/api', userRouter);
app.use('/api', postRouter);
app.use('/api', commentRouter);

//url 에러
app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

//서버 에러
app.use((err, req, res, next) => {
  console.log('Server Error', err);
  res.status(err.status || 500).json({ message: err });
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
