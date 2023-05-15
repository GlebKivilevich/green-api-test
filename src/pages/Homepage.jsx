import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactList from "../components/ContactList";
import Chat from "../components/Chat";

import { RxExit } from "react-icons/rx";

const Homepage = () => {
  const [obj, setObject] = useState({});
  // const obj = {};
  const navigate = useNavigate();

  const authCookie = document.cookie.split(";");

  function checkAuthCookie() {
    authCookie.forEach((el) => {
      let item = el.trim().split("=");

      let test = item[0];
      let test1 = item[1];
      let lastItem = (obj[test] = test1);
      setObject({ ...obj, lastItem });
    });
    if (!obj.idInstance && !obj.apiTokenInstance) {
      navigate("/auth");
    }
  }

  useEffect(() => {
    checkAuthCookie();
  }, []);

  const exitChat = () => {
    checkAuthCookie();
    const keysCookieObj = Object.keys(obj);
    const valuesCookieObj = Object.values(obj);

    let idInstanceExitKey;
    let apiTokenInstanceExitKey;

    let idInstanceExitValue;
    let apiTokenInstanceExitValue;

    keysCookieObj.forEach((el) => {
      if (el === "idInstance") {
        idInstanceExitKey = el;
      }
      if (el === "apiTokenInstance") {
        apiTokenInstanceExitKey = el;
      }
    });

    valuesCookieObj.forEach((el) => {
      if (el === `${obj.idInstance}`) {
        idInstanceExitValue = el;
      }
      if (el === `${obj.apiTokenInstance}`) {
        apiTokenInstanceExitValue = el;
      }
    });
    document.cookie = `${idInstanceExitKey}=${idInstanceExitValue}; max-age= -1`;
    document.cookie = `${apiTokenInstanceExitKey}=${apiTokenInstanceExitValue}; max-age= -1`;
    navigate("/auth");
  };

  return (
    <div className="flex justify-center m-auto">
      <div className="max-w-[380px] w-full border-r-2 border-l-2 border-gray-300">
        <div className="bg-gray-100 py-2 px-2 min-h-[60px] items-center border-b-2 border-gray-400 flex justify-between">
          <div className="flex items-center">
            <div className="mr-5 max-w-[50px] max-h-[50px] h-full w-full rounded-full">
              <img
                className="max-w-[50px]  rounded-full"
                src="https://media.istockphoto.com/id/805012064/photo/portrait-of-mature-hispanic-man.jpg?s=612x612&w=0&k=20&c=AfNa1ay8LPzaO-NOJZspqULvYavyhXg4rnJ9U_tvJY4="
              />
            </div>
            <p className="text-xl">Ivan</p>
          </div>
          <button className="mr-1.5" onClick={exitChat}>
            <RxExit fontSize={20} color="red" />
          </button>
        </div>
        <div
          className="max-w-[380px] w-full h-full overflow-auto"
          style={{ maxHeight: "calc(100vh - 68px)" }}
        >
          <ContactList
            idInstance={obj.idInstance}
            apiTokenInstance={obj.apiTokenInstance}
          />
        </div>
      </div>

      <div className="w-full max-w-[1000px]">
        <Chat />
      </div>
    </div>
  );
};

export default Homepage;
