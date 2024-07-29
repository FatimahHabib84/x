import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../component/Nav";
import Tweet from "../component/Tweet";
import YouMayLike from "../component/YouMayLike";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [favBool, setFavBool] = useState(false);
  const [bostBool, setBostBool] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [objectTweet, setObjectTweet] = useState([]);
  const [uname, setUname] = useState("");
  const [imgsrcNew, setImgsrcNew] = useState("");
  const [allTweets, setAllTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://665736bb9f970b3b36c86669.mockapi.io/X/${localStorage.getItem(
          "id"
        )}`
      )
      .then(function (res) {
        setData(res.data);
        setObjectTweet(res.data.tweets);
        const temp = objectTweet.find((item) => item.state == "red");
        temp == undefined ? setFavBool(false) : setFavBool(true);
        objectTweet.length == 0 ? setBostBool(true) : setBostBool(false);
        setIsLoading(false);
      });
    axios
      .get(`https://665736bb9f970b3b36c86669.mockapi.io/X/`)
      .then(function (res) {
        setAllTweets(res.data);
        console.log(res.data);
        setIsLoading(false);
      });
  }, [objectTweet]);

  const addNewInfo = () => {
    axios
      .get(
        `https://665736bb9f970b3b36c86669.mockapi.io/X/${localStorage.getItem(
          "id"
        )}`
      )
      .then(function (res) {
        uname == ""
          ? setUname(res.data.username)
          : imgsrcNew == ""
          ? setImgsrcNew(res.data.src)
          : uname == "" && imgsrcNew == ""
          ? setUname(res.data.username) && setImgsrcNew(res.data.src)
          : axios
              .put(
                `https://665736bb9f970b3b36c86669.mockapi.io/X/${localStorage.getItem(
                  "id"
                )}`,
                {
                  email: res.data.email,
                  username: uname,
                  pwd: res.data.pwd,
                  src: imgsrcNew,
                  tweets: res.data.tweets,
                }
              )
              .then(function () {
                setIsLoading(false);
              });
      });
  };

  return (
    !isLoading && (
      <div className="flex flex-col items-center justify-center min-h-screen w-screen">
        {localStorage.getItem("username") == null ? (
          <button
            onClick={() => navigate("/Login")}
            className="text-3xl font-bold m-auto text-center text-neutral btn"
          >
            Click to Login or register please
          </button>
        ) : (
          <div className="w-screen min-h-screen flex flex-row bg-base-100">
            <Nav />
            <div className="w-3/5 text-lg border border-neutral border-y-0 border-opacity-70 max-sm:border-x-0 max-sm:w-full h-screen overflow-y-scroll scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-base-100 scrollbar-track-base-300 scrollbar-w-2">
              <div className="flex flex-row p-4 border-b border-neutral items-center gap-4">
                <svg
                  onClick={() => navigate(-1)}
                  role="button"
                  className="w-6 h-6 text-gray-800 dark:text-white"
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
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
                <div className="flex flex-col">
                  <p className="font-bold text-secondary">{data.username}</p>
                  <p className="text-neutral text-sm">4 إعجابًا</p>
                </div>
              </div>

              <div className="w-full flex flex-col h-1/4 relative mb-8 bg-[url(https://pbs.twimg.com/profile_banners/870806677381156864/1696537539/1500x500)]">
                <img
                  className="rounded-full w-20 h-20 absolute border border-base-100 -bottom-1/4 right-4"
                  src={data.src}
                />
              </div>

              <div className="pr-8 w-full flex flex-col h-1/4 py-8 border-b border-b-secondary relative">
                <p className="mb-8 font-bold text-xl">{data.username}</p>
                <button
                  className="self-end absolute top-1/4 ml-4 btn btn-secondary rounded-full "
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  تعديل الملف الشخصي
                </button>
                <div className="flex flex-row gap-2">
                  <svg
                    className="w-6 h-6 text-neutral dark:text-neutral"
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
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                    />
                  </svg>
                  <p className="text-neutral">انظم في يونيو 2017</p>
                </div>
                <div className="flex flex-row gap-4 mt-2">
                  <p className="text-sm">
                    109 <span className="text-neutral">المُتابعون</span>
                  </p>
                  <p className="text-sm">
                    48 <span className="text-neutral">المُتابِعون</span>
                  </p>
                </div>
              </div>

              <div role="tablist" className="tabs w-full relative ">
                <input
                  type="radio"
                  name="my_tabs_1"
                  role="tab"
                  className="tab text-lg focus:outline-none border-transparent focus:border-b-2 focus:border-b-primary focus-visible:border-b-2 focus-visible:border-b-primary"
                  aria-label="المنشورات"
                  defaultChecked
                />
                <div
                  role="tabpanel"
                  className="tab-content p-10 max-sm:p-0 absolute top-0 w-full "
                >
                  <div className="flex flex-col-reverse px-4 max-sm:pr-0">
                    {bostBool == true ? (
                      <h1 className="text-xl font-bold m-auto text-neutral text-center py-8">
                        قم بنشر تغريدات
                      </h1>
                    ) : (
                      objectTweet.map((item, index) => {
                        return (
                          <Tweet
                            key={index}
                            id={data.id}
                            src={data.src}
                            username={data.username}
                            tweet={item.msg}
                            state={item.state}
                            index={index}
                          />
                        );
                      })
                    )}
                  </div>
                </div>

                <input
                  type="radio"
                  name="my_tabs_1"
                  role="tab"
                  className="tab text-lg focus:outline-none border-transparent focus:border-b-2 focus:border-b-primary focus-visible:border-b-2 focus-visible:border-b-primary"
                  aria-label="المفضلة"
                />
                <div
                  role="tabpanel"
                  className="tab-content p-10 max-sm:p-0 absolute top-0 w-full"
                >
                  {allTweets.map((items, index) =>
                    items.tweets.map((item) => {
                      return item.state == "red" ? (
                        <Tweet
                          key={index}
                          id={items.id}
                          src={items.src}
                          username={items.username}
                          tweet={item.msg}
                          state={item.state}
                          //   index={item.id}
                          date={item.date}
                        />
                      ) : null;
                    })
                  )}
                  {favBool == false ? (
                    <h1 className="text-xl font-bold m-auto text-neutral text-center py-8">
                      لاتوجد تغريدات حاليه في مفضلتك
                    </h1>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="w-1/5 max-sm:hidden p-4 flex flex-col gap-4">
              <div className="w-full p-4 border border-neutral h-fit rounded-lg flex flex-col gap-4">
                <h1 className="font-bold text-secondary">قد يعجبك</h1>
                <YouMayLike
                  uname={"Reem Mustafa"}
                  hashname={"@Reeeeem.m-20"}
                  imgsrc={
                    "https://images.pexels.com/photos/26836540/pexels-photo-26836540/free-photo-of-processed-with-vsco-with-m5-preset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  }
                />
                <YouMayLike
                  uname={"Ali Habib"}
                  hashname={"@Ali_Habib259"}
                  imgsrc={
                    "https://images.pexels.com/photos/25748616/pexels-photo-25748616/free-photo-of-portrait-of-a-young-man-wearing-sunglasses-and-a-gray-polo-shirt.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  }
                />
                <YouMayLike
                  uname={"Zahra Redah"}
                  hashname={"@zhr.1999"}
                  imgsrc={
                    "https://images.pexels.com/photos/10547966/pexels-photo-10547966.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  }
                />
                <p className="text-primary">عرض المزيد</p>
              </div>

              <div className="w-full p-4 border border-neutral h-fit rounded-lg flex flex-col">
                <h1 className="font-bold text-secondary mb-4">ماذا يحدث</h1>
                <p className="text-sm text-neutral mb-4">الموضوعات المتداولة</p>
                <h1 className="font-bold text-secondary text-end">
                  HouseOfTheDragron#
                </h1>
                <p className="text-sm text-neutral text-end mb-4">
                  56.1 ألف منشور
                </p>
                <p className="text-sm text-neutral mb-4">
                  المتداول في المملكة العربية السعودية
                </p>
                <h1 className="font-bold text-secondary ">خيوط المعازيب</h1>
                <p className="text-sm text-neutral mb-4">14.3 ألف منشور</p>
                <h1 className="font-bold text-secondary ">#نُمكن_منشأتك</h1>
                <p className="text-sm text-neutral">في مراكز دعم المنشآت</p>
                <p className="text-sm text-neutral mb-4">
                  مُروَّج بواسطة منشآت | Monshaat
                </p>
                <p className="text-primary">عرض المزيد</p>
              </div>
              <p className="text-sm text-neutral">
                شروط الخدمة سياسية الخصوصيّة سياسة الكوكيز إمكانية الوصول
                معلومات الإعلان © 2024 X Corp.
              </p>
            </div>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">تعديل الملف الشخصي</h3>
                <div className="flex flex-col items-center">
                  <input
                    className="my-4 p-2 input outline outline-neutral focus:outline focus:outline-primary"
                    value={uname}
                    onChange={(e) => setUname(e.target.value)}
                    type="text"
                    placeholder="اسم المستخدم"
                  />
                  <input
                    className="my-4 p-2 input outline outline-neutral focus:outline focus:outline-primary"
                    value={imgsrcNew}
                    onChange={(e) => setImgsrcNew(e.target.value)}
                    type="text"
                    placeholder="الصورة الشخصية"
                  />
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn" onClick={() => addNewInfo()}>
                      تعديل
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        )}
      </div>
    )
  );
}

export default Profile;
