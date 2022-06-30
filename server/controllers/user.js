const { User } = require('../schemas/User');

//Register user
exports.registerUser = async (req, res, next) => {
  try {
    //client form 에 입력된 정보로 user 인스턴스 생성
    console.log(req.body);
    const user = new User(req.body);
    //user 저장
    await user.save((err, userInfo) => {
      if (err) return res.json({ success: false, err });
      console.log('user 정보 저장');
      return res.status(200).json({
        success: true,
        userInfo,
      });
    });
  } catch (error) {
    next(error);
  }
};

//Login user
exports.loginUser = async (req, res, next) => {
  //요청된 이메일이 있는지 db 에서 확인
  try {
    const user = await User.findOne({ email: req.body.email });
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (err) return res.status(400).send(err);
      if (!isMatch) {
        return res.json({
          loginSuccess: false,
          message: '비밀번호가 일치하지 않습니다.',
        });
      }
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        // 로컬 쿠키에 토큰을 저장한다.
        res.cookie('x_auth', user.token).status(200).json({
          loginSuccess: true,
          userId: user._id,
        });
      });
    });
  } catch (error) {
    next(error);
  }
};

//User's Auth Checking
exports.checkAuth = async (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    name: req.user.name,
    email: req.user.email,
    post: req.user.post !== null ? true : false,
    role: req.user.role,
  });
};

exports.logoutUser = async (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    { token: '' },
    { new: true },
    (err, user) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({ success: true });
    }
  );
};
