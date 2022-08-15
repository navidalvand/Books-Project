class Server {
  #http = require("http");
  #path = require("path");
  #express = require("express");
  #app = this.#express();
  #allRouters = require("./routers/router.js");
  #mongoose = require("mongoose");
  #consoleSpace = require("./app");

  constructor() {
    this.configOtherFeatures();
    this.configDataBase();
    this.configIncomingRequests();
    this.configSwagger();
    this.startServer();
    this.createRoutes();
    this.errorHandeler();
  }

  configDataBase() {
    this.#mongoose.connect(process.env.DB_URL, (err) => {
      if (err) throw err;

      console.log(`Connected To DataBase...`);
    });
  }

  configSwagger() {
    
  }

  configIncomingRequests() {
    this.#app.use(this.#express.json());
    this.#app.use(this.#express.urlencoded({ extended: true }));
    this.#app.use((req, res, next) => {
      console.log(this.#consoleSpace);
      console.log(`http://localhost:${process.env.PORT}${req.url}`);
      next();
    });
  }

  configOtherFeatures() {
    require("dotenv").config();
  }

  errorHandeler() {
    this.#app.use((req, res, next) => {
      return res.status(404).json({
        status: 404,
        data: null,
        message: "page not found",
      });
    });
    this.#app.use((err, req, res, next) => {
      const status = err?.status || 500;
      const message = err?.message || "enternal server error";
      return res.status(status).json({
        status,
        data: null,
        message,
      });
    });
  }

  startServer() {
    const server = this.#http.createServer(this.#app);

    server.listen(process.env.PORT, (err) => {
      console.log(`Server Started On Port => ${process.env.PORT}`);
      console.log(this.#consoleSpace);
    });
  }

  createRoutes() {
    this.#app.get("/", (req, res, next) => {
      return res.json({
        status: 200,
        message: "home page",
      });
    });
    this.#app.use(this.#allRouters);
  }
}

module.exports = {
  Server,
};
