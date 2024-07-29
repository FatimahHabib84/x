import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Tweet(props) {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const ID = parseInt(props.id);
  // const start = new Date(2017, 0, 6)
  // const end = new Date()

  useEffect(() => {
    getTheData();
  }, []);

  const getTheData = () => {
    axios
      .get(`https://665736bb9f970b3b36c86669.mockapi.io/X/${props.id}`)
      .then(function (res) {
        setData(res.data);
      });
  };
  const handleDelete = (id) => {
    const newArr = data.tweets[id];
    const postArr = data.tweets.filter((item) => item !== newArr);
    setData((prev) => ({ ...prev, tweets: postArr }));
    axios
      .put(`https://665736bb9f970b3b36c86669.mockapi.io/X/${ID}`, {
        email: data.email,
        username: data.username,
        pwd: data.pwd,
        src: data.src,
        tweets: postArr,
      })
      .then(function () {
        navigate(0);
      });
  };

  const handleFav = (id) => {
    const newArr = data.tweets;
    newArr[id].state == "red"
      ? (newArr[id].state = "none")
      : (newArr[id].state = "red");
    setData((prev) => ({ ...prev, tweets: newArr }));
    axios
      .put(`https://665736bb9f970b3b36c86669.mockapi.io/X/${ID}`, {
        email: data.email,
        username: data.username,
        pwd: data.pwd,
        src: data.src,
        tweets: newArr,
      })
      .then(function () {
        navigate(0);
      });
  };

  return (
    <div
      key={props.index}
      className="flex flex-col py-8 pr-4 border-b border-b-neutral border-b-1 border-opacity-70"
    >
      <div className="flex flex-row justify-between w-full px-8 max-sm:px-0">
        <div className="flex flex-row gap-2 items-center">
          <img className="rounded-full w-8 h-8" src={props.src} />
          <p>{props.username}</p>
          <p className="text-sm text-neutral">{props.username}@</p>
          <p className="text-sm text-neutral">
            {
              props.date
              // new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
              // (new Date()) - Math.floor(Math.random() * 1000).toLocaleDateString('en-US')
            }
          </p>
        </div>

        <div className="dropdown dropdown-bottom dropdown-end">
          <svg
            tabIndex={0}
            role="button"
            className="w-6 h-6 text-gray-800 dark:text-white justify-self-end"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M12 6h.01M12 12h.01M12 18h.01"
            />
          </svg>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <button onClick={() => handleDelete(props.index)}>حذف</button>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-lg mr-8 max-sm:mr-0 px-8 text-wrap break-words">
        {props.tweet}
      </p>
      <svg
        onClick={() => handleFav(props.index)}
        className="w-6 h-6 text-gray-800 dark:text-white mr-16 max-sm:mr-8 mt-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill={props.state}
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
        />
      </svg>
    </div>
  );
}

export default Tweet;
