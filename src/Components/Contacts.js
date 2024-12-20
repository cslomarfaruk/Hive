import React from "react";
import "../Components/Login.css";

const Contacts = ({ userDatabase, userId }) => {
 const idList = userDatabase[0] 
  ? userDatabase.find((data) => data.id === userId)
  : null;
const userData = idList && idList.friends
  ? userDatabase.filter((data) => idList.friends[data.id] === true)
  : [];

  return (
    <div className="py-6  login-form">
      <div>
        {userData.length >0  ?
          userData.map((item) => (
            <div
              key={item.id}
              className="bg-gray-300 p-1 my-2 flex items-center space-x-2 hover:transform hover:scale-110 transition-transform duration-300 rounded-md"
            >
              <img src={item.photo} alt={item.name} className="w-8 h-8 p-1 rounded-full" />
              <div className="text-sm font-sans p-1">{item.name}</div>
            </div>
          ))
          :(
            <div className="">No friends</div>
          )
        }
      </div>
    </div>
  );
};

export default Contacts;
