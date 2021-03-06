const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity.model');

// Iteration 1 Celebrities Page
router.get('/celebrities', (req, res) => {
    Celebrity.find()
    .then(celebritiesFromDB => {
        // console.log(celebritiesFromDB);
        res.render('celebrities/index', {celebs: celebritiesFromDB});
    })
    .catch(err => console.log(`An error occured when listing all celebrities: ${err}`));
});

// Iteration 2 Celebrity Details Page
router.get('/celebrities-details', (req, res, next) => {
    Celebrity.findById(req.query.theId)
    .then(theCelebritiy => {
        console.log(theCelebritiy);
        res.render('celebrities/celebrity-details', {celebrity: theCelebritiy});
    })
    .catch(err => console.log(`An error occured when getting details from DB: ${err}`));
});

// Iteration 3 Render new celebrity form page
router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new-celebrity');
});

// Iteration 4 Submit new celebrity to database
router.post('/celebrities/new-celebrity', (req, res, next) => {
    Celebrity.create(req.body)
    .then(savedCelebrity => {
        console.log(savedCelebrity);
        res.redirect('/celebrities');
    })
    .catch(err => {
        console.log(`An error occured when saving new celebrity to DB: ${err}`);
        res.render('celebrities/new-celebrity');
    });
});

// Iteration 5 Deleting a celebrity
router.post('/celebrities/:id/delete', (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id)
    .then(theCelebritiy => {
        console.log('The deleted celebrity: ', theCelebritiy);
        res.redirect('/celebrities');
    })
    .catch(err => console.log(`An error occured when deleting a celebrity from the DB: ${err}`));
});

// Iteration 6 - Editing a celebrity
router.get('/celebrities/:id/edit', (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then(theCelebritiy => {
        console.log('The edited celebrity: ', theCelebritiy);
        res.render('celebrities/edit-celebrity', theCelebritiy);
    })
    .catch(err => console.log(`An error occured when editing a celebrity from the DB: ${err}`));
});

router.post('/celebrities/:id', (req, res, next) => {
    
});

module.exports = router;
