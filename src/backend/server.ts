import * as path from "path";
import express from "express";
import morgan from "morgan";
import createHttpError from "http-errors";

import rootRoutes from "./routes/root";
import { testRouter } from "./routes/test";
import { userRoutes } from "./routes/users";

const app = express();

const PORT = process.env.PORT || 3000;

//Logging package
app.use(morgan("dev"));

//Body parser for form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Sending static directory
app.use(express.static(path.join("dist", "public")));

//view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//routers
app.use("/", rootRoutes);
app.use("/test", testRouter);
app.use("/users", userRoutes);

//page not found, send 404 error
app.use((_request, _response, next) => {
  next(createHttpError(404));
});

//listen-start application at port
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
