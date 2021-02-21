const fold = require("@foldsh/sdk");

var service = new fold.Service();

service.get("/hello/:name", (req, res) => {
  res.statusCode = 200;
  res.body = {
    greeting: `Hello, ${req.pathParams.name}`,
  };
});

service.start();
