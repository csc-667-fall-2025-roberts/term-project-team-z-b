import * as path from "path";
import express, { response } from "express";
import {CreateHttpError} from "http-errors";
import * as HttpError from "http-errors";

import rootRoutes from "./routes/root";
import {testRouter} from "./routes/test";
import createHttpError from "http-errors";


const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join("dist", "public")));
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");

/*
app.get("/", (_request, response) =>{
    response.send("Hello World");
})
*/

//Using router in root.js
app.use("/", rootRoutes);

//Using router in test.js
//app.use("/", testRoutes);


app.use((request, response, next) => {
    next(createHttpError(404))
})

app.listen(PORT, () =>{
    console.log(`Server started on port ${PORT}`);
})

//Left of on 57:40
