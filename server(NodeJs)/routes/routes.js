require("dotenv").config();
const router = require("express").Router();

const connection = require("../config/database");

const NewBox = connection.models.Box;

// *
// * *
// post Routes

router.post("/create", async (req, res) => {
  const filter = { boxId: req.fields.boxNumber };
  const update = {
    text: req.fields.text,
    color: req.fields.color,
    url: req.fields.url,
    nUpdate: parseInt(req.fields.uNumber) + 1,
  };

  let doc = await NewBox.findOneAndUpdate(filter, update);

  doc = await NewBox.findOne(filter);
  res.send({ boxDetail: doc });
});

// *
// * *
// get Routes
router.get("/boxes/:id", (req, res) => {
  NewBox.findOne({ boxId: req.params.id }, function (err, doc) {
    res.send({ boxDetail: doc });
  });
});

module.exports = router;
