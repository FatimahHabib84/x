import React, { useState, useEffect } from "react";
import X_Logo from "../assets/X_logo.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const { hash, pathname, search } = location;
  const [data, setData] = useState([]);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    axios
      .get(
        `https://665736bb9f970b3b36c86669.mockapi.io/X/${localStorage.getItem(
          "id"
        )}`
      )
      .then(function (res) {
        setData(res.data);
      });
  }, []);

  return (
    <div
      className={
        pathname == "/profile"
          ? " max-sm:hidden drawer lg:drawer-open w-1/5"
          : "drawer lg:drawer-open w-1/5"
      }
    >
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content justify-self-end flex flex-col items-end justify-start ">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="btn-base-100 lg:hidden">
          <img
            className="rounded-full w-24 text-gray-800 dark:text-white mt-2 mr-2"
            width="24"
            height="24"
            src={X_Logo}
            aria-hidden="true"
          />
        </label>
      </div>

      <div className="drawer-side items-center pt-8">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay text-accent"
        ></label>
        <div className="menu text-lg pl-0">
          <img
            className="w-20 h-20 rounded-full mr-6 max-lg:hidden"
            onClick={() => navigate("/profile")}
            src={data.src}
          />
          <label
            onClick={() => navigate("/")}
            className="flex flex-row items-center justify-start text-start p-6 hover:bg-base-300"
          >
            <svg
              className="w-6 h-6 ml-4 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                clipRule="evenodd"
              />
            </svg>
            الرئيسية
          </label>

          <label className="flex flex-row items-center justify-start text-start p-6 py-4 hover:bg-base-300">
            <svg
              className="w-6 h-6 ml-4 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
            إستكشف
          </label>

          <label className="flex flex-row items-center justify-start text-start p-6 py-4 hover:bg-base-300">
            <svg
              className="w-6 h-6 ml-4 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"
              />
            </svg>
            التنبيهات
          </label>

          <label className="flex flex-row items-center justify-start text-start p-6 py-4 hover:bg-base-300">
            <svg
              className="w-6 h-6  ml-4 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
              />
            </svg>
            الرسائل
          </label>

          <label className="flex flex-row items-center justify-start text-start p-6 py-4 hover:bg-base-300">
            <svg
              className="w-6 h-6  ml-4 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Z"
              />
              <path
                fill="#ffffff"
                d="M15.643 9.382a3.314 3.314 0 0 0-1.158-.2c-1.276 0-2.177.643-2.184 1.566-.008.678.64 1.06 1.131 1.286.504.233.672.38.67.588-.003.317-.402.46-.772.46-.51 0-.789-.07-1.217-.248l-.159-.075-.18 1.063c.31.13.869.24 1.446.25 1.357 0 2.244-.64 2.255-1.621.01-.542-.34-.951-1.079-1.29-.449-.219-.727-.365-.727-.588 0-.197.238-.408.737-.408.332-.008.661.055.967.183l.12.053.181-1.026-.031.007Zm3.312-.114h-.997c-.31 0-.544.085-.68.393l-1.917 4.345h1.356l.272-.713 1.656.002c.039.166.158.71.158.71H20l-1.045-4.737Zm-8.49-.04h1.294l-.809 4.74H9.659l.807-4.742v.002Zm-3.282 2.613.134.658 1.264-3.231h1.37l-2.035 4.731H6.549L5.432 9.993a.27.27 0 0 0-.119-.159 5.543 5.543 0 0 0-1.27-.47l.018-.1h2.081c.283.012.51.1.586.402l.454 2.177.001-.002Zm10.177.483.515-1.326c-.006.014.106-.273.171-.451l.089.409.3 1.367h-1.076Z"
              />
            </svg>
            Grok
          </label>

          <label className="flex flex-row items-center justify-start text-start p-6 py-4 hover:bg-base-300">
            <svg
              className="w-6 h-6 ml-4 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            Premium
          </label>

          <label
            className="flex flex-row items-center justify-start text-start p-6 py-4 hover:bg-base-300"
            onClick={() => navigate("/profile")}
          >
            <svg
              className="w-6 h-6 ml-4 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            الملف الشّخصي
          </label>
          <div className=" dropdown dropdown-bottom">
            <div
              className="flex flex-row items-center justify-start text-start p-6 py-4 hover:bg-base-300"
              tabIndex={0}
              role="button"
            >
              <img
                className="w-8 h-8 rounded-full ml-4 text-gray-800 dark:text-white"
                src={data.src}
              />
              {localStorage.getItem("username")}
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <button onClick={() => handleLogout()}>تسجيل الخروج</button>
              </li>
              <li>
                <button onClick={() => navigate("/profile")}>
                  الملف الشخصي
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
