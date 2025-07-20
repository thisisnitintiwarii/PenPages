import React from "react";
import Container from "../componenets/container/container";

import PostForm from "../componenets/post-from/PostFrom";

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
