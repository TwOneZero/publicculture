const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const config = require('./config/mongo/key');
const cookieParser = require('cookie-parser');
const app = express();

app.set('port', process.env.PORT || 5000);

//공통 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));

//router imports
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');

//mongoDB cloud URI
const uri = config.mongoURI;
mongoose
  .connect(uri)
  .then(() => console.log('mongoDB Connected!'))
  .catch((error) => console.log(error));

//라우팅 url
app.use('/', indexRouter);
app.use('/api', userRouter);

//url 에러
app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

//서버 에러
app.use((err, req, res, next) => {
  console.log('Server Error');
  res.status(err.status || 500).send(err);
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
