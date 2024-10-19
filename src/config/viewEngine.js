// fine config

// do đang dùng path ( path.join(__di...)) nên cần có khai báo path
const path = require("path");

// do dùng express (express.static(path.join(__dirnam...) nên cần khai báo
const express = require("express");

// tạo function để có thể chứa và kết  nối với file khác thông qua tên function
const configViewEngine = (app) => {
  // config Template
  app.set("views", path.join("./src", "views"));
  app.set("view engine", "ejs");
  //........................................
  // config static file(img,css,js)
  app.use(express.static(path.join("./src", "public")));
};

// xuất ra để lấy tên function đó đi kết nối với file khác
module.exports = configViewEngine;
