import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../redux/todosSlice";
import Spinner from "./Spinner";

const Posts = () => {
  const [username, setUsername] = useState();
  const dispatch = useDispatch();
  const { loading, post } = useSelector((state) => ({ ...state.store }));

  const handleFetchData = (e) => {
    e.preventDefault();
    if (!username) {
      window.alert("Please Enter username");
    } else {
      dispatch(getPost({ username }));
      setUsername("");
    }
  };

  return (
    <>
      <form className="ml-96 mt-8">
        <div className="grid gap-4 mb-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-lg font-medium text-gray-600 dark:text-gray-300"
            >
              UserName
            </label>
            <input
              type="text"
              id="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter UserName"
              required
            />
          </div>
          </div>
          <button
            type="submit"
            onClick={handleFetchData}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Submit
          </button>
       
      </form>

      <div className="container">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {post.length > 0 && (
              <>
                <div
                  href="#"
                  className="ml-96 my-20 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={post[0].avatar_url}
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Username : {post[0].login}
                    </h5>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Name : {post[0].name}
                    </h5>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      public repos : {post[0].public_repos}
                    </h5>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Public_gists : {post[0].public_gists}
                    </h5>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Profile created at: {post[0].created_at}
                    </h5>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Posts;
