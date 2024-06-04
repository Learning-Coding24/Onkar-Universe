const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/main");
const Detail = require("./models/Detail");
const Slider = require("./models/Slider");
const Service = require("./models/Service");

const app = express();

app.use("/static", express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("", routes);

// Template Engine
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

// DB connection
async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/website", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected!");

    // Create initial data
    //   await Detail.create({
    //     brandName: "Onkar's Universe",
    //     brandIconUrl: "https://www.pinterest.com/pin/146085581649639917/",
    //     links: [
    //       {
    //         label: "Home",
    //         url: "/",
    //       },
    //       {
    //         label: "Services",
    //         url: "/services",
    //       },
    //       {
    //         label: "Gallery",
    //         url: "/gallery",
    //       },
    //       {
    //         label: "Contact Us",
    //         url: "/contact-us",
    //       },
    //     ],
    //   });

    //  create Slider data
    // await Slider.create([
    //   {
    //     title: "Test Architect",
    //     subTitle: "BDD, TDD, Selenium, API Testing",
    //     imageUrl: "/static/images/bg1.png",
    //   },
    //   {
    //     title: "Devops Enginner",
    //     subTitle: "Docker AWS IAAS",
    //     imageUrl: "/static/images/bg.png",
    //   },
    //   {
    //     title: "Back End Development",
    //     subTitle: "Java, Pyathon, NodeJS",
    //     imageUrl: "/static/images/bg1.png",
    //   },
    //   {
    //     title: "Front End Development",
    //     subTitle: "HTML, CSS, JS, Bootstrap",
    //     imageUrl: "/static/images/bg1.jpg",
    //   },
    // ]);

    // Create Services
    // await Service.create([
    //   {
    //     icon: "",
    //     title: "Provide Best Services",
    //     description:
    //       "The services are Many which helps to create a lot of things",
    //     linkText: "https://learning-coding24.github.io/Portfolio/",
    //     link: "Check",
    //   },
    //   {
    //     icon: "",
    //     title: "Provide Next Services",
    //     description:
    //       "The services are Many which helps to create a lot of things",
    //     linkText: "https://learning-coding24.github.io/ResponsiveProfile/",
    //     link: "Responsive",
    //   },
    //   {
    //     icon: "",
    //     title: "Provide Best Services",
    //     description:
    //       "The services are Many which helps to create a lot of things",
    //     linkText: "https://learning-coding24.github.io/Portfolio/",
    //     link: "Check",
    //   },
    // ]);
  } catch (error) {
    console.error("Database connection error:", error);
  }
}

connectDB();

// Start the server
const PORT = process.env.PORT || 5556;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
