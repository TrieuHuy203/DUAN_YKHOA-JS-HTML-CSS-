// file làm cho router gọn hơn k phải khai báo dài dòng bên web.js (sau này ứng dụng lớn lên dẽ quản lí)

const getHomepage = (req, res) => {
  res.send("Hello World!!");
};

const getABC = (req, res) => {
  res.render("login.ejs");
};

const getCR7 = (req, res) => {
  res.send("<h1>website_Y-khoa</h1>");
};

const getregister = (req, res) => {
  res.render("register.ejs");
};

const getHome = (req, res) => {
  res.render("home.ejs");
};

const getDiagnosis = (req, res) => {
  res.render("diagnosis.ejs");
};

const getVision = (req, res) => {
  res.render("vision.ejs");
};

const getMission = (req, res) => {
  res.render("mission.ejs");
};

const getValue = (req, res) => {
  res.render("value.ejs");
};

const getInternist = (req, res) => {
  res.render("internist.ejs");
};

const getSurgeon = (req, res) => {
  res.render("Surgeon.ejs");
};

const getpediatrics = (req, res) => {
  res.render("pediatrics.ejs");
};

const getoverview = (req, res) => {
  res.render("overview.ejs");
};

const getspecialist = (req, res) => {
  res.render("specialist.ejs");
};

const getAthome = (req, res) => {
  res.render("athome.ejs");
};

const getContact = (req, res) => {
  res.render("contact.ejs");
};

const getFeature = (req, res) => {
  res.render("feature.ejs");
};

const getNewdiagnose = (req, res) => {
  res.render("newdiagnose.ejs");
};

const getService = (req, res) => {
  res.render("service.ejs");
};

const getAnalysis = (req, res) => {
  res.render("analysis.ejs");
};

const getOnline = (req, res) => {
  res.render("online.ejs");
};

const getGround = (req, res) => {
  res.render("ground.ejs");
};
const getReadmore = (req, res) => {
  res.render("read more.ejs");
};

const getReadmore2 = (req, res) => {
  res.render("readmore2.ejs");
};
const getSquadron = (req, res) => {
  res.render("squadron.ejs");
};

const getNewground = (req, res) => {
  res.render("newground.ejs");
};
const getFb = (req, res) => {
  res.render("fb.ejs");
};

//
module.exports = {
  getHomepage,
  getFb,
  getNewground,
  getSquadron,
  getReadmore2,
  getReadmore,
  getGround,
  getNewdiagnose,
  getContact,
  getspecialist,
  getpediatrics,
  getoverview,
  getSurgeon,
  getAthome,
  getABC,
  getCR7,
  getregister,
  getHome,
  getDiagnosis,
  getOnline,
  getVision,
  getMission,
  getValue,
  getInternist,
  getFeature,
  getService,
  getAnalysis,
};
