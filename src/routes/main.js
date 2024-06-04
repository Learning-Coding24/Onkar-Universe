const express = require("express");

const routes = express.Router();

const Detail = require("../models/Detail");
const Slider = require("../models/Slider");
const Service = require("../models/Service");
const Contact = require("../models/Contact");

routes.get("/", async (req, res) => {
  const details = await Detail.findOne({ _id: "665dd1a4ba0dd66504b2e786" });
  const slides = await Slider.find();
  const services = await Service.find();
  // console.log(slides);

  res.render("index", {
    details: details,
    slides: slides,
    services: services,
  });
});

routes.get("/gallery", async (req, res) => {
  const details = await Detail.findOne({ _id: "665dd1a4ba0dd66504b2e786" });
  res.render("gallery", {
    details: details,
  });
});

// process contacct form
routes.post("/process-contact-form", async (req, res) => {
  console.log("Form is submitted");
  try {
    const data = await Contact.create(req.body);
    console.log(data);
    res.redirect("/");
  } catch (e) {
    console.log(e);
    res.redirect("/");
  }
});

module.exports = routes;
