'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager');

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


//route pour la page de connexion
Route.get('/login', 'Admin/UserController.login');
Route.post('/log', 'Admin/UserController.log').validator('LoginUser');

//route pour la page d'acceuil 
Route.get('/', 'Admin/UserController.index').as('.index');
Route.get('/rendez-vous', 'Admin/UserController.rdv').as('rdv.rendez-vous');

//Route pour les spécialités
Route.get('/specialite', 'Admin/SpecialitieController.spe').as('spe.specialite'); 

// Route.get('/post-a-spe', 'Admin/JobController.userIndex');
Route.post('/post-a-spe', 'Admin/SpecialitieController.createSpe');  

Route.get('/post-a-spe/delete/:id', 'Admin/JobController.delete');
Route.get('/post-a-spe/edit/:id', 'Admin/JobController.edit');
Route.post('/post-a-spe/update/:id', 'Admin/JobController.update').validator('CreateSpecialitie');

Route.get('/medecin', 'Admin/UserController.med').as('med.medecin');
Route.get('/patients', 'Admin/UserController.pat').as('pat.patients');
Route.get('/profil', 'Admin/UserController.pro').as('pro.profil');


//route pour la page de création de compte
Route.get('/creer_compte', 'Admin/UserController.create').as('create.creer_compte');

Route.post('/createAcount', 'Admin/UserController.createAccount').validator('createUser');

// deconnexion

Route.get("/logout", async ({ auth, response }) => {
    await auth.logout();
    return response.redirect("/login");
});





//route 404 

Route.any('*', "Admin/UserController.error");
