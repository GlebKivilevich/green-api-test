import React, { useEffect, useState } from "react";
import ContactListItem from "./ContactListItem";
import axios from "axios";

const ContactList = ({ idInstance, apiTokenInstance }) => {
  const [allChatsUser, setAllChatsUser] = useState();

  function getChatsUser(url, headers) {
    axios
      .get(url, headers)
      .then((res) => setAllChatsUser((state) => (state = res.data)))
      .catch(err => console.log("error>", err))
  }
  useEffect(() => {
    if (idInstance !== undefined && apiTokenInstance !== undefined) {
      const url = `https://api.green-api.com/waInstance${idInstance}/getChats/${apiTokenInstance}`;
      const headers = {
        "Content-Type": "application/json",
      };
      getChatsUser(url, headers);
    }
  }, [idInstance, apiTokenInstance]);
  return (
    <div>
      <div className="min-h-[90vh] overflow-auto">
        {
          !!allChatsUser &&
            allChatsUser.length > 0 &&
            allChatsUser.map((user) => {
              console.log(user);
              return (
                <ContactListItem
                  key={user.id}
                  phoneNumber={user.id}
                  idInstance={idInstance}
                  apiTokenInstance={apiTokenInstance}
                />
              );
            })
          // проход по массиву и отображение списка
        }
      </div>
    </div>
  );
};

export default ContactList;
