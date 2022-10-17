import { Routes, Route } from "react-router-dom";

import NotFound from "views/404/NotFound";
import Post from "views/Post/Post";

const LoggedInRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Post />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default LoggedInRoutes;
