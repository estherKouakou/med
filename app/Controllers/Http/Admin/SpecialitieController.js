'use strict'
 
const Specialitie = use('App/Models/Specialitie');
class SpecialitieController {

    async spe({ view }) {


        const specialities = await Specialitie.all();
        return view.render("specialite", { specialities: specialities.toJSON() });
    }

    // async userIndex (view, auth) {
    //     const specialities = await auth.user.specialities().fetch();
    //     return view.render("specialite", { specialities: specialities.toJSON() });
    // }

    async createSpe (request, response, session, auth) {
        const Specialitie = request.all();

        const posted = await auth.user.Specialities().create({
            name: Specialitie.name,
            image: Specialitie.image,
            code: Specialitie.code
        });

        session.flash({ message: 'Your job has been posted!' });
        return response.redirect('back');
    
    }


}

module.exports = SpecialitieController
