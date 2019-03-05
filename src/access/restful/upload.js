var express = require('express');
var router = express.Router();
var multer = require('multer');
var config = require('../../../conf/app');
var cors = require('cors');
var ImageModel = require('../../db/mysql/model/image');
var checksum = require('checksum');

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, config.fileStore.location);
	},
	filename: function (req, file, cb) {
		cb(null, toFileName(req) + file.originalname);
	}
});
var upload = multer({
	storage: storage
});

router.options('/:type/:id', cors());
router.post('/:type/:id', cors(), upload.any(), function (req, res) {
	console.log('req', toFileName(req));
	var file = req.body;
	var fileLoc = config.fileStore.location +'/' + toFileName(req) + req.body.name;
	checksum.file(fileLoc, function (err, sum) {
		console.log('sum', sum)
		ImageModel.find({
			where:{
			relatedId: file.relatedId,
			type: file.type,
		}}).then(result => {
			if(result && result.id ){
				result.name = toFileName(req) + req.body.name;
				result.loc = fileLoc;
				result.checkSum = sum;
				result.save().then(()=>{
					res.json({
						success: true,
						msg: result
					});
				})
			} else {
				ImageModel.create({
					relatedId: file.relatedId,
					type: file.type,
					name: toFileName(req) + req.body.name,
					loc: fileLoc,
					checkSum: sum
				}).then((image) => {
					res.json({
						success: true,
						msg: image
					});
				})
			}

		})

	})
});


function toFileName(req) {
	return req.params.type + '-' + req.params.id + "-"
}

module.exports = router;