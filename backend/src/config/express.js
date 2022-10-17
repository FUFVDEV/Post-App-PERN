import express from "express";
import cors from "cors";

import postRouter from "#routes/post.routes.js";
import handleErrors from "#middlewares/errors.middleware.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/post", postRouter);

// 404 Error handler.
app.use((req, res, next) => {
  res.status(404).end();
});

// HandleErrors.
app.use(handleErrors);

app.use((err, req, res, next) => {
  console.error(err.stack);
});

export default app;
