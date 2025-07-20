import React from "react";
import Container from "../componenets/container/container";

import PostForm from "../componenets/post-from/PostForm";

function AddPost() {
  return (
    <div className="py-8">
      <Container>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
