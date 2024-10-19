//file khai báo router

const {
  getHomepage,
  getABC,
  getCR7,
  getregister,
  getHome,
  getDiagnosis,
  getVision,
  getMission,
  getValue,
  getInternist,
  getspecialist,
  getContact,
  getSurgeon,
  getpediatrics,
  getoverview,
  getAthome,
  getAnalysis,
  getOnline,
  getFeature,
  getNewdiagnose,
  getGround,
  getService,
  getNewground,
  getFb,
  getReadmore,
  getSquadron,
  getReadmore2,
} = require("../controllers/homeController"); // kết nối và gọi các biến bên file homecontroller để chạy router

// mặc định phải có 2 dòng này thì express mới hiểu là đang khai báo routes
const express = require("express"); // định nghĩa express
const router = express.Router();

// khai báo router
router.get("/", getHomepage);
router.get("/online", getOnline);
router.get("/abc", getABC);
router.get("/cr7", getCR7);
router.get("/register", getregister);
router.get("/home", getHome);
router.get("/diagnosis", getDiagnosis);
router.get("/ground", getGround);
router.get("/vision", getVision);
router.get("/mission", getMission);
router.get("/value", getValue);
router.get("/internist", getInternist);
router.get("/Surgeon", getSurgeon);
router.get("/pediatrics", getpediatrics);
router.get("/overview", getoverview);
router.get("/specialist", getspecialist);
router.get("/athome", getAthome);
router.get("/contact", getContact);
router.get("/feature", getFeature);
router.get("/newdiagnose", getNewdiagnose);
router.get("/service", getService);
router.get("/analysis", getAnalysis);
router.get("/readmore", getReadmore);
router.get("/readmore2", getReadmore2);
router.get("/squadron", getSquadron);
router.get("/newground", getNewground);
router.get("/fb", getFb);

module.exports = router;
