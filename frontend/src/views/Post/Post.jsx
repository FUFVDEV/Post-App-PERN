import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";

// import { DELETE_ACTION, EDIT_ACTION } from "consts";
import { deletePost, getPosts } from "redux/actions/postActions";
// import { setEditMode, setPost } from "redux/slices/postSlice";
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

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const handleCancelModal = () => setIsModalVisible(false);

  const handleDelete = () => {
    dispatch(deletePost(userId.current));
    handleCancelModal();
  };

  return (
    <div className="post">
      <TitleWithLine text="Gestión de Posts" />

      <PostSearcher />
      <PostTable setIsModalVisible={setIsModalVisible} userId={userId} />
      <PostForm />

      <CustomModal
        isVisible={isModalVisible}
        handleOk={handleDelete}
        handleCancel={handleCancelModal}
      >
        Se eliminará permanentemente este post.
      </CustomModal>
    </div>
  );
};

export default Post;
