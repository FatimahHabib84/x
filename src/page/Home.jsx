import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../component/Nav";
import Tweet from "../component/Tweet";
import YouMayLike from "../component/YouMayLike";
import { useNavigate } from "react-router-dom";

function Home() {
  const [tweet, setTweet] = useState({ msg: "", state: "none" });
  const [data, setData] = useState([]);
  const [tempId, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://665736bb9f970b3b36c86669.mockapi.io/X")
      .then(function (res) {
        setData(res.data);
        setIndex(parseInt(localStorage.getItem("id")) - 1);
        setIsLoading(false);
      });
  }, []);

  const handleClick = () => {
    tweet.date = new Date().toLocaleDateString("ar-EG").toString();

    data[tempId].tweets.push(tweet);
    axios
      .put(
        `https://665736bb9f970b3b36c86669.mockapi.io/X/${localStorage.getItem(
          "id"
        )}`,
        {
          email: data[tempId].email,
          username: data[tempId].username,
          pwd: data[tempId].pwd,
          src: data[tempId].src,
          liked: data[tempId].liked,
          tweets: data[tempId].tweets,
        }
      )
      .then(function () {
        setTweet("");
        setIsLoading(false);
        // navigate(0)
      });
    // setData(prev=>([...prev,{...prev,tweets:[...prev.tweets,tweet]}]))
  };

  return (
    !isLoading &&
    data && (
      <div className="flex flex-col items-center justify-center min-h-screen  w-screen">
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

            <div className="w-3/5 text-lg border border-neutral border-y-0 border-opacity-70 max-sm:border-x-0 max-sm:w-full">
              <div className="flex flex-row p-4 border-b border-neutral">
                <button className="w-full font-bold">
                  <span className="border-b-4 px-4 border-primary">لك</span>
                </button>
                <button className="w-full">متابعون</button>
              </div>

              <div className="w-full flex flex-col pl-4 my-4">
                <div className="flex flex-row gap-2 p-4 max-sm:pr-0">
                  <img
                    className="rounded-full w-8 h-8"
                    src={data[tempId].src}
                  />
                  <textarea
                    onChange={(e) =>
                      setTweet({
                        msg: e.target.value,
                        state: "none",
                      })
                    }
                    type="text"
                    placeholder="ماذا يحدث؟"
                    className=" px-2 bg-transparent marker:text-primary focus:border-none h-24 w-full"
                  />
                </div>
                <button
                  className="btn btn-primary w-20 ml-4 rounded-full self-end py-1"
                  onClick={() => handleClick()}
                >
                  نشر
                </button>
              </div>

              <div className="flex flex-col-reverse px-4 max-sm:pr-0">
                {data.map((items) => {
                  let objectTweet = items.tweets;
                  return objectTweet.map((item, index) => {
                    return (
                      <Tweet
                        key={index}
                        id={items.id}
                        src={items.src}
                        username={items.username}
                        tweet={item.msg}
                        state={item.state}
                        index={index}
                        date={item.date}
                      />
                    );
                  });
                })}
                {/* <Tweet src={X_Logo} username={'Fatimah'} tweet={'hh'} /> */}
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
          </div>
        )}
      </div>
    )
  );
}

export default Home;
