const express = require("express");
const router = express.Router();
const studentSchema = require("../schema/studentSchema");

router.post("/create-student", (req, res, next) => {
  studentSchema.create(req.body, (err, data) => {
    if (err) {
      return next(err);
    } else {
      res.json(data);
    }
  });
});

router.get("/", (req, res, next) => {
  console.log(req);
  studentSchema.find((err, data) => {
    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
});

router.post("/login", (req, res) => {
  const { name, email, password } = req.body;
  studentSchema.findOne({ email: email }).then((student) => {
    if (student) {
      // databasepassword === given password
      if (student.password === password) {
        res.json("login successfull");
      } else {
        res.json("Password incorrect");
      }
    } else {
      console.log("No record exits");
    }
  });
});

module.exports = router;