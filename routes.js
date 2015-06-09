var router = require('express').Router();


/*authorization routes*/
var auth = require('./auth.js');
router.get('/login',auth.getLogin);


/*user routes*/
var user = require('./user.js');
router.get('/',user.isAuthenticated,user.homePage);
router.get('/user',user.homePage)


/*public routes*/

module.exports = router;