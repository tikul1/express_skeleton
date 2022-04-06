const express = require("express");
const router = express.Router();
const accounts = require("../models/accounts");

router.get("/", (req, res) => {
  res.json(accounts);
});
//get indiividual data from an object
router.get("/:id", (req, res) => {
  const found = accounts.some(
    (account) => account.id === parseInt(req.params.id)
  );
  if (found) {
    res.json(
      accounts.filter((account) => account.id === parseInt(req.params.id))
    );
  } else {
    res.status(400).json({ msg: `no account with the id of ${req.params.id}` });
  }
});

// adding new data

router.post("/", (req, res) => {
  const newAccount = {
    id: req.body.id,
    username: req.body.username,
    role: req.body.role,
  };
  if (!newAccount.id || !newAccount.username || !newAccount.role) {
    res.status(400).json({ msg: "Please include id, username and role" });
  } else {
    accounts.push(newAccount);
    res.json(accounts);
  }
});

//updating data

router.put("/:id", (req, res) => {
  const found = accounts.some(
    (account) => account.id === parseInt(req.params.id)
  );
  if (found) {
    const updatedAccount = req.body;
    accounts.forEach((account) => {
      if (account.id === parseInt(req.params.id)) {
        account.username = updatedAccount.username
          ? updatedAccount.username
          : accounts.name;
        account.role = updatedAccount.role
          ? updatedAccount.role
          : accounts.name;
        res.json({ msg: `account updated`, accounts });
      }
    });
  } else {
    res.status(400).json({ msg: `no account with the id of ${req.params.id}` });
  }
});

//deleting data
router.delete("/:id", (req, res) => {
  //.some is used in array to test all the data
  const found = accounts.some(
    (account) => account.id === parseInt(req.params.id)
  );
  if (found) {
    res.json({
      msg: "member deleted",
      account: accounts.filter(
        (account) => account.id !== parseInt(req.params.id)
      ),
    });
  } else {
    res.status(400).json({ msg: `no account with the id of ${req.params.id}` });
  }
});

module.exports = router;
