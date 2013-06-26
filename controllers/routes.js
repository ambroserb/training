module.exports = function(app) {

  // app.set("view options", {
  //   layout: "layouts/myLayout"
  // });

  // app.get('/training1', function (req, res){
  //   res.render("training1", {});
  // });


  app.get('/anotherPage', function(req, res){
    res.render("sample", {});
  });

  app.get('/noLayoutPage', function(req, res){
    res.render("training1", {layout: "layouts/mylayout"});
  });

  app.get('/angularPage', function(req, res){
    res.render("angular", {});
  });

  app.get('/', function(req, res){
    res.render("index", {Message:"Hello", Person:"Sam", Children:["Jim", "Charles", "Cindy", "Ron"]});
  });
}