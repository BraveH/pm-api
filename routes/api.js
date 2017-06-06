var express = require('express');
var router = express.Router();

/* POST api listing. */
router.get('/', function(req, res, next) {
  res.render('api', { title: 'Private Medicine API'});
});

router.get('/drugs', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{ fields: { _id: 0 } },function(e,docs){
		res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(docs));
    });
});

router.get('/drug', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
	var drugName = req.query.name;
    collection.find({ drug : drugName},{ fields: { _id: 0 } },function(e,docs){
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(docs));
    });
});

router.get('/drug/:name', function (req, res) {
	var db = req.db;
    var collection = db.get('usercollection');
	var drugName = req.params.name;
    collection.find({ drug : drugName},{ fields: { _id: 0 } },function(e,docs){
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(docs));
    });
})

module.exports = router;
