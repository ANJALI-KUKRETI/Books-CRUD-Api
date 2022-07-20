const express = require("express");
const {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

const router = express.Router();

router.route("/").get(getAllBooks).post(createBook);
router.route("/:id").patch(updateBook).delete(deleteBook);

module.exports = router;
