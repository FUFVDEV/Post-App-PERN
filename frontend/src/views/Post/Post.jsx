import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DELETE_ACTION, EDIT_ACTION } from "consts";
import { createPost, deletePost, editPost, getPosts } from "redux/actions/postActions";
import { setEditMode, setPost } from "redux/slices/postSlice";
import CustomModal from "components/ui/CustomModal";
import PostForm from "components/Post/PostForm";
import PostTable from "components/Post/PostTable";
import PostSearcher from "components/Post/PostSearcher";
import TitleWithLine from "components/ui/TitleWithLine";

import "./Post.css";

const Post = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const userId = useRef(null);

  const dispatch = useDispatch();

  const { posts, isEditMode, isLoading } = useSelector(state => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const handleAction = ({ action, payload }) => {
    const options = {
      [EDIT_ACTION]: () => dispatch(setPost(payload)),
      [DELETE_ACTION]: () => {
        setIsModalVisible(true);
        userId.current = payload;
      },
    };

    options[action]();
    dispatch(setEditMode(action === EDIT_ACTION));
  };

  const handleCancelModal = () => setIsModalVisible(false);

  const handleCreate = data => dispatch(createPost(data));
  const handleEdit = data => dispatch(editPost(data));
  const handleDelete = () => {
    dispatch(deletePost(userId.current));
    handleCancelModal();
  };

  return (
    <div className="post">
      <TitleWithLine text="Gestión de Posts" />

      <PostSearcher />
      <PostTable data={posts} handleAction={handleAction} loading={isLoading} />
      <PostForm handleCreate={handleCreate} handleEdit={handleEdit} isEditMode={isEditMode} />

      <CustomModal
        isVisible={isModalVisible}
        stateHandler={setIsModalVisible}
        handleOk={handleDelete}
        handleCancel={handleCancelModal}
      >
        Se eliminará permanentemente este post.
      </CustomModal>
    </div>
  );
};

export default Post;
