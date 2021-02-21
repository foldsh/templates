import { Service, Request, Response } from "@foldsh/sdk";

const service: Service = new Service();

service.get("/hello/:name", (req: Request, res: Response) => {
  res.statusCode = 200;
  res.body = {
    greeting: `Hello, ${req.pathParams.name}`,
  };
});

service.start();
