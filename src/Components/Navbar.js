import React, { useEffect, useState } from "react";


import { auth } from "../firebase";
import Contact from "../images/contact-active.svg";
import Home from "../images/home-svgrepo-com.svg";
import Text from "../images/text-active.svg";
import Logout from "../images/logout.svg";
import UserProfile from "../images/fb dp.jpg";
import Logo from "../images/logoHive.png";
import Games from "../images/games.svg";
import { signOut } from "firebase/auth";


export default function Navbar({ userDatabase , mail ,setLogin, setValue}) {

  const notun_data =userDatabase[0] ? userDatabase.filter((data) =>data.email === mail) : [null];
  // console.log(notun_data[0].photo);
  const logOut = async () => {
    try {
      const user = await signOut(auth);
      console.log(user);
      setLogin(false);
      setValue("SignUp");
    } catch (error) {
      console.log(error);
    }
  };

 

  return (
    <div className="bg-gray-800 text-white py-2 px-5 sticky  top-0 z-50">
      <nav className="">
        <div className="mx-auto flex justify-between items-center">
          <img
            onClick={() => setValue("Home")}
            src={Logo}
            alt=""
            className="h-8 w-8 ml-6 rounded-full border-2 border-cyan-500 shadow-[0px_1px_15px_rgba(0,_196,_270,_1)]"
          />
          <div className=" ml-16 flex justify-center text-xl italic font-semibold text-cyan-300 shadow-[0px_1px_15px_rgba(0,_196,_270,_.8)] w-1/6 bg-gray-800 rounded-full p-2">
            {notun_data[0] && notun_data[0].name ? notun_data[0].name : "Hive"}
          </div>
          <div className="space-x-6 flex flex-row">
            <button
              className="Home cursor-pointer button bg-gray-400 hover:bg-gray-300 shadow-[0px_1px_15px_rgba(0,_196,_270,_1)] p-1 rounded-full"
              title="Home"
            >
              <img
                src={Home}
                alt="Home"
                className="h-8 w-8 p-1"
                onClick={() => setValue("Home")}
              />
            </button>
            <button
              className="Home cursor-pointer button bg-gray-400 hover:bg-gray-300 shadow-[0px_1px_15px_rgba(0,_196,_270,_1)] p-1 rounded-full"
              title="Games"
            >
              <img
                src={Games}
                alt="Games"
                className="h-8 w-8 p-1"
                onClick={() => setValue("Games")}
              />
            </button>
            <button
              className="contacts cursor-pointer  bg-gray-400 hover:bg-gray-300 shadow-[0px_1px_15px_rgba(0,_196,_270,_1)] p-1 rounded-full"
              title="User list"
              onClick={() => setValue("Friends")}
            >
              <img src={Contact} alt="contacts" className="h-8 w-8 p-1" />
            </button>
            <button
              className="chat cursor-pointer bg-gray-400 hover:bg-gray-300 shadow-[0px_1px_15px_rgba(0,_196,_270,_1)] p-1 rounded-full"
              title="Chat list"
              onClick={() => setValue("Chat")}
            >
              <img src={Text} alt="" className="h-8 w-8 p-1" />
            </button>
            <button
              className="ownProfile cursor-pointer  bg-gray-400 hover:bg-gray-300 shadow-[0px_1px_15px_rgba(0,_196,_270,_1)] p-1 rounded-full"
              title="Profile"
              onClick={() => setValue("UserProfile")}
            >
              <img
                src={notun_data[0] && notun_data[0].photo ? notun_data[0].photo : UserProfile}
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
            </button>
            <button
              className="logout cursor-pointer bg-gray-400 hover:bg-gray-300 shadow-[0px_1px_15px_rgba(0,_196,_270,_1)] p-1 rounded-full"
              title="LogOut"
              onClick={logOut}
            >
              <img src={Logout} alt="Logout" className="h-8 w-8 p-1" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
