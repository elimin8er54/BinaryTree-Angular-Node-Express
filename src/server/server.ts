const express = require('express');
import { Request, Response, NextFunction } from 'express';
const path = require('path');

const app = express();

const port = 3001;

const compression = require('compression');
app.use(compression());
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static("dist/BinaryTree"));
app.use((req: Request, res: Response, next: NextFunction) => {
    res.append("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE");
    res.append("Access-Control-Allow-Headers", "Content-Type,Authorization");
    next();
});

app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname + "../../../../dist/BinaryTree", "index.html"));
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});