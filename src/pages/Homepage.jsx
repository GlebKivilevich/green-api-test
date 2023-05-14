import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContactList from "../components/ContactList";
import Chat from "../components/Chat";
const Homepage = () => {
  const navigate = useNavigate();

  function checkAuthCookie() {
    const authCookie = document.cookie.split(";");
    let obj = {};

    authCookie.forEach((el) => {
      let item = el.trim().split("=");
      obj[item[0]] = `${item[1]}`;
    });

    if (!obj.idInstance && !obj.apiTokenInstance) {
      navigate("/auth");
    }
  }

  useEffect(() => {
    checkAuthCookie();
  }, []);

  return (
    <div className="flex justify-center m-auto">
      <div className="max-w-[380px] w-full border-r-2 border-l-2 border-gray-300">
        <div className="bg-gray-100 py-2 px-2 flex min-h-[60px] items-center border-b-2 border-gray-400">
          <div className="mr-5 max-w-[50px] max-h-[50px] h-full w-full rounded-full">
            <img
              className="max-w-[50px]  rounded-full"
              src="https://media.istockphoto.com/id/805012064/photo/portrait-of-mature-hispanic-man.jpg?s=612x612&w=0&k=20&c=AfNa1ay8LPzaO-NOJZspqULvYavyhXg4rnJ9U_tvJY4="
            />
          </div>
          <p className="text-xl">Ivan</p>
        </div>
        <div
          className="max-w-[380px] w-full h-full overflow-auto"
          style={{ maxHeight: "calc(100vh - 68px)" }}
        >
          <ContactList />
        </div>
      </div>

      <div className="w-full max-w-[1000px]">
        <Chat />
      </div>
    </div>
  );
};

export default Homepage;
