'use strict'

class CreateSpecialitie {
  get rules () {
    return {
      name: "required",
      code: "required",
      file: "required"
    }
  }
  get messages() {
    return {
      'required': 'SVP, Le {{ field }} est requis!!!.'
    }
  }

  async fails(error) {
    this.ctx.session.withErrors(error)
      .flashAll();

    return this.ctx.response.redirect('back');
  }
}

module.exports = CreateSpecialitie
