import React from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
const Chat = () => {
  return (
    <div className="w-full max-w-[1000px]">
      <div className="h-full">
        <div className="bg-gray-100 py-2 px-2 flex min-h-[60px] items-center border-b-2 border-gray-400">
          <div className="mr-5 max-w-[50px] max-h-[50px] h-full w-full rounded-full">
            <img
              className="max-w-[50px]  rounded-full"
              src="https://media.istockphoto.com/id/805012064/photo/portrait-of-mature-hispanic-man.jpg?s=612x612&w=0&k=20&c=AfNa1ay8LPzaO-NOJZspqULvYavyhXg4rnJ9U_tvJY4="
            />
          </div>
          <p className="text-xl">Jame</p>
        </div>

        <div
          className="w-full h-[100vh]"
          style={{
            maxHeight: "calc(100vh - (68px + 71px))",
            backgroundImage:
              "url(https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg)",
          }}
        >
          <div className="flex flex-col">
            <div className="flex justify-start">
              <div className="pt-3 pb-2.5 pl-2 pr-2 my-3 mx-4 bg-white min-w-[100px] border-2 border-gray-500 rounded-xl max-w-[500px] flex flex-col rounded-tl-none">
                <p>Привет</p>
                <div className="text-[12px] mt-3 text-gray-500 text-end">
                  07:08
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="pt-3 pb-2.5 pl-2 pr-2 my-3 mx-4 bg-green-400 min-w-[100px] max-w-[500px] border-2 border-gray-500 rounded-xl rounded-br-none">
                <p>Привет!</p>
                <div className="text-[12px] mt-3 text-gray-500 text-end">
                  08:08
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 py-4 pl-2 min-h-[60px] items-center border-t-2 border-gray-400 flex">
          <form className="max-w-[100%] w-full flex items-center"> 
            <input type="text" placeholder="Введите сообщение..." className="max-w-[85%] w-full py-2 px-3 mr-3 rounded-lg outline-none"/>
            <button>
              <RiSendPlane2Fill fontSize={24} color="#5a5a5a" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
