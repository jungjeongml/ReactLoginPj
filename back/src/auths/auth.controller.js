class AuthController {
  constructor({ authService }) {
    this.authService = authService;
  }

  async postLogin(req, res, next) {
    console.log(req.body)
    try {
      const { userid, userpw } = req.body;
      const token = await this.authService.token({ userid, userpw });
      // res.setHeader('Authorizaion', 'Bearer' + token)
      res.cookie("token",token )
      res.send('message:success')
    } catch (e) {
      next(e);
    }
  }
}

module.exports = AuthController;
