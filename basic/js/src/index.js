const { fold } = require("@foldsh/sdk");

const svc = fold();

svc.get("/hello/:name", (req, res) => {
  res.status(200);
  res.json({
    greeting: `Hello, ${req.params.name}`,
  });
});

svc.start();
