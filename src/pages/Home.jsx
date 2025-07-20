import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import Container from "../componenets/container/container";
import PostCard from "../componenets/PostCard";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    if (posts.length === 0) {
      return (
        <div className="w-full py-8">
          <Container>
            <div className="h-110 flex flex-col items-center justify-center">
              <div>
                <h1 className="text-7xl text-shadow-black font-bold text-black">
                  Ink Your Imagination
                </h1>
              </div>
              <div className="pt-10 flex flex-row gap-4">
                <Link to="/login">
                  <button className="w-52 h-12 cursor-pointer rounded border border-black px-4 py-2 text-black transition duration-300 hover:bg-black hover:text-white">
                    Login
                  </button>
                </Link>

                <Link to="/signup">
                  <button className="w-52 h-12 cursor-pointer rounded border border-black px-4 py-2 text-black transition duration-300 hover:bg-black hover:text-white">
                    Sign up
                  </button>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      );
    }
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold "></h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
