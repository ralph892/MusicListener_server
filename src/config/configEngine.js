import express from "express";

const configEngine = (app) => {
    app.use(express.static('./src/public'));
};

export default configEngine;