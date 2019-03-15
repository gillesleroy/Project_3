var express = require("express");
var path = require("path");
// var app = express();
var router = express.Router();

// Html pages
router.get('/', function(req, res) {
  // res.send('Hello from api GET all burgers route.');
  res.sendFile(path.join(__dirname, "./../public/index.html"));
  });
router.get('/login', function(req, res) {
// res.send('Hello from api GET all burgers route.');
res.sendFile(path.join(__dirname, "./../public/login.html"));
});
router.get('/postitem/page', function(req, res) {
// res.send('Hello from api items route.');
res.sendFile(path.join(__dirname, "./../public/postitem.html"));
});
router.get('/signup/page', function(req, res) {
  res.sendFile(path.join(__dirname, "./../public/signup.html"));
  });
router.get('/borrowed/page', function(req, res) {
  res.sendFile(path.join(__dirname, "./../public/borrowed.html"));
  });
router.get('/owned/page', function(req, res) {
  res.sendFile(path.join(__dirname, "./../public/owned.html"));
  });
router.get('/items/page', function(req, res) {
  res.sendFile(path.join(__dirname, "./../public/items.html"));
  });

// Front end Javascript
router.get("/js/eventasia", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/js/eventasia.js"));
});
router.get("/lib", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/js/lib.js"));
});
router.get("/js/stuffer", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/js/Stuffer.js"));
});
router.get("/js/postitem", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/js/postitem.js"));
});
router.get("/js/index", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/js/index.js"));
});
router.get("/js/signup", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/js/signup.js"));
});
router.get("/js/app", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/js/app.js"));
});
router.get("/js/common", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/js/common.js"));
});

router.get("/js/jquery-2.2.4.min", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/js/vendor/jquery-2.2.4.min.js"));
});
router.get("/js/bootstrap.min", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/js/vendor/bootstrap.min.js"));
});
router.get("/js/jquery.ajaxchimp.min", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/js/jquery.ajaxchimp.min.js"));
});
router.get("/js/availability-calendar", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/js/availability-calendar.js"));
});
router.get("/js/jquery.sticky", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/js/jquery.sticky.js"));
});
router.get("/js/parallax.min", function(req,res) {
res.sendFile(path.join(__dirname, "./../public/assets/js/parallax.min.js"));
});
router.get("/js/countdown", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/js/countdown.js"));
});
router.get("/js/jquery.magnific-popup.min", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/js/jquery.magnific-popup.min.js"));
});
router.get("/js/main", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/js/main.js"));
});

// css
router.get("/css/reset", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/css/reset.css"));
});
router.get("/css/style", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/css/style.css"));
});
router.get("/css/styles", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/css/styles.css"));
});

router.get("/css/linearicons", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/css/linearicons.css"));
});
router.get("/css/font-awesome.min", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/css/font-awesome.min.css"));
});
router.get("/css/availability-calendar", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/css/availability-calendar.css"));
});
router.get("/css/magnific-popup", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/css/magnific-popup.css"));
});
router.get("/css/bootstrap", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/css/bootstrap.css"));
});
router.get("/css/main", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/css/main.css"));
});

// Images
router.get("/image/stuffer", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/images/Stuffer_Logo_Main.png"));
});
router.get("/image/lending", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/images/Stuffer_characters/Lending.png"));
});
router.get("/image/borrowing", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/images/Stuffer_characters/Borrowing.png"));
});
router.get("/image/sharing", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/images/Stuffer_characters/Sharing.png"));
});
router.get("/image/concrete", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/images/concrete_seamless.png"));
});
router.get("/uploads/:image", function(req,res) {
  console.log(req.params);
  res.sendFile(path.join(__dirname, "./../uploads/"+req.params.image));
});

//img from eventasia
router.get("/img/e1.jpg", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/img/e1.jpg"));
});
router.get("/img/e2.jpg", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/img/e2.jpg"));
});
router.get("/img/e3.jpg", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/img/e3.jpg"));
});
router.get("/img/e4.jpg", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/img/e4.jpg"));
});
router.get("/img/e5.jpg", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/img/e5.jpg"));
});
router.get("/img/e6.jpg", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/img/e6.jpg"));
});
router.get("/img/i1.jpg", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/img/i1.jpg"));
});
router.get("/img/i2.jpg", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/img/i2.jpg"));
});
router.get("/img/i3.jpg", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/img/i3.jpg"));
});
router.get("/img/i4.jpg", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/img/i4.jpg"));
});
router.get("/img/i5.jpg", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/img/i5.jpg"));
});
router.get("/img/i6.jpg", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/img/i6.jpg"));
});
router.get("/img/i7.jpg", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/img/i7.jpg"));
});
router.get("/img/i8.jpg", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/img/i8.jpg"));
});
router.get("/img/calender-bg.jpg", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/img/calender-bg.jpg"));
});
router.get("/img/logo.png", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/img/logo.png"));
});

//fonts
router.get("/fonts/Linearicons-Free.eot", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/fonts/Linearicons-Free.eot"));
});
router.get("/fonts/Linearicons-Free.svg", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/fonts/Linearicons-Free.svg"));
});
router.get("/fonts/Linearicons-Free.ttf", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/fonts/Linearicons-Free.ttf"));
});
router.get("/fonts/Linearicons-Free.woff", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/fonts/Linearicons-Free.woff"));
});
router.get("/fonts/Linearicons-Free.woff2", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/fonts/Linearicons-Free.woff2"));
});
router.get("/fonts/fontawesome-webfont.eot", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/fonts/fontawesome-webfont.eot"));
});
router.get("/fonts/fontawesome-webfont.svg", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/fonts/fontawesome-webfont.svg"));
});
router.get("/fonts/fontawesome-webfont.ttf", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/fonts/fontawesome-webfont.ttf"));
});
router.get("/fonts/fontawesome-webfont.woff", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/fonts/fontawesome-webfont.woff"));
});
router.get("/fonts/fontawesome-webfont.woff2", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/fonts/fontawesome-webfont.woff2"));
});
module.exports = router;
