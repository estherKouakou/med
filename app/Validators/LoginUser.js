'use strict'

class LoginUser {
  get rules () {
    return {
      email: "required|email",
      password: "required",
    }
  }

  get message() {
    return {
      "email.email": "entrez un email valide",
      "email.required": "Un email est réquis pour la creation de compte",
      "password.required": "entrez le passe!",
    }
  }

  async fails(error) {
    this.ctx.session.withErrors(error)
      .flashAll();

    return this.ctx.response.redirect('back');
  }
}

module.exports = LoginUser
