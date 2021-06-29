function getInbox(req, res, next) {
  // res.render("inbox", {
  //   title: "inbox - Chat Application",
  // });
  res.render("inbox");
}

module.exports = {
  getInbox,
};
