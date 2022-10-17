import postgresDB from "#config/postgressql.js";

const getPosts = async filters => {
  try {
    const sql = "SELECT * FROM post WHERE name ILIKE '%' || $1 || '%' ORDER BY id DESC";
    const values = [filters.name || ""];
    const result = await postgresDB.query(sql, values);

    return result.rows;
  } catch (error) {
    throw new Error(error);
  }
};

const createPost = async ({ name, description }) => {
  try {
    const sql = "INSERT INTO post(name, description) VALUES($1, $2) RETURNING *";
    const values = [name, description];
    const result = await postgresDB.query(sql, values);

    return result.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

const updatePost = async ({ id, name, description }) => {
  try {
    const sql = "UPDATE post SET name = $1, description = $2 WHERE id = $3 RETURNING *";
    const values = [name, description, id];
    const result = await postgresDB.query(sql, values);

    return result.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

const deletePost = async id => {
  try {
    const sql = "DELETE FROM post WHERE id = $1 RETURNING *";
    const values = [id];
    const result = await postgresDB.query(sql, values);

    return result.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

const PostModel = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
};

export default PostModel;
