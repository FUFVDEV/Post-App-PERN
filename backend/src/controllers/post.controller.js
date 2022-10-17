import PostModel from "#models/post.model.js";

const getPosts = (req, res, next) => {
  const filters = req.query;

  PostModel.getPosts(filters)
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

  PostModel.createPost(newPost)
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
    id,
    name: req.body.name,
    description: req.body.description,
  };

  PostModel.updatePost(newData)
    .then(response => res.status(200).send(response))
    .catch(error => {
      error.status = 500;
      error.errorMessage = "Error al intentar editar el post.";
      next(error);
    });
};

const deletePost = (req, res, next) => {
  const { id } = req.params;

  PostModel.deletePost(id)
    .then(response => {
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
