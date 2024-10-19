require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express(); // app express
const port = process.env.PORT || 8888; // port
const hostname = process.env.HOST_NAME;
const configViewEngine = require("./config/viewEngine"); // kết nối template/static file (dẫn)
configViewEngine(app); // kết nối template/static file (gọi)
const webRouter = require("./routes/web"); // kết nối routers (webrouter có thể đặt tên tùy ý vì router chỉ xuất ra 1 biến) (dẫn)
app.use("/", webRouter); //kết nối routers(gọi)

// chạy routes
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
