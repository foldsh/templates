import fold, { Service, Request, Response } from "@foldsh/sdk";

const svc: Service = fold();

svc.get("/hello/:name", (req: Request, res: Response) => {
  res.status(200);
  res.json({
    greeting: `Hello, ${req.params.name}`,
  });
});

svc.start();
