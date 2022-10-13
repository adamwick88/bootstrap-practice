const express=require('express');
const router=express.Router();
const recipeController=require('server\controllers\recipeController.js');

router.get('/',recipeController.getHomepage);



module.exports.router;

