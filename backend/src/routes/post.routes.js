import { Router } from "express";

import postCreateDTOSchema from "#dto/post/create-post.dto.js";
import postUpdateDataDTO from "#dto/post/update-post.dto.js";
import PostController from "#controllers/post.controller.js";

const postRouter = Router();

postRouter.get("/", PostController.getPosts);
postRouter.post("/", postCreateDTOSchema, PostController.createPost);
postRouter.put("/:id", postUpdateDataDTO, PostController.editPost);
postRouter.delete("/:id", PostController.deletePost);

export default postRouter;
