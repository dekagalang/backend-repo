import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import userRoutes from "../routes/userRoutes";

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Sample route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express and Firebase with TypeScript!");
});

app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
