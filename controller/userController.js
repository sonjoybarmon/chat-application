function getUser(req, res, next) {
  // res.render("users", {
  //   title: "user - Chat Application",
  // });
  res.render("users");
}

module.exports = {
  getUser,
};
