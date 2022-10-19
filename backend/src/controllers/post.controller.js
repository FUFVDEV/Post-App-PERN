import { Op } from "sequelize";

import PostModel from "#models/post.model.js";

const getPosts = (req, res, next) => {
  const { name: filterByName = "" } = req.query;

  PostModel.findAll({
    where: {
      name: {
        [Op.iLike]: `%${filterByName}%`,
      },
    },
    order: [["id", "DESC"]],
  })
    .then(response => {
      return res.status(200).send(response);
    })
    .catch(error => {
      error.status = 500;
      error.errorMessage = "Error al intentar obtener la lista de post.";
      next(error);
    });
};

const createPost = (req, res, next) => {
  const newPost = {
    name: req.body.name,
    description: req.body.description,
  };

  PostModel.create(newPost)
    .then(response => {
      return res.status(201).send(response);
    })
    .catch(error => {
      error.status = 500;
      error.errorMessage = "Error al intentar crear el post.";
      next(error);
    });
};

const editPost = (req, res, next) => {
  const { id } = req.params;

  const newData = {
    name: req.body.name,
    description: req.body.description,
  };

  PostModel.update(newData, {
    where: {
      id,
    },
    returning: true,
    plain: true,
  })
    .then(response => res.status(200).send(response[1]))
    .catch(error => {
      error.status = 500;
      error.errorMessage = "Error al intentar editar el post.";
      next(error);
    });
};

const deletePost = (req, res, next) => {
  const { id } = req.params;

  PostModel.findOne({
    where: { id },
  })
    .then(response => {
      if (!response) throw new Error("El post que intenta eliminar, no existe.");

      response.destroy();
      res.status(200).send(response);
    })
    .catch(error => {
      error.status = 500;
      error.errorMessage = "Error al intentar eliminar el post.";
      next(error);
    });
};

const PostController = {
  getPosts,
  createPost,
  editPost,
  deletePost,
};

export default PostController;
