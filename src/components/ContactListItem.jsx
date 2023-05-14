import React from "react";

const ContactListItem = (props) => {
  return (
    <div className="py-2 pl-2 pr-1.5 flex min-h-[60px] h-full items-center">
      <div className="mr-5 max-w-[51px] max-h-[51px] h-full w-full rounded-full border-2 flex items-center justify-center">
        <img
          className="max-w-[50px]  rounded-full"
          src="https://media.istockphoto.com/id/805012064/photo/portrait-of-mature-hispanic-man.jpg?s=612x612&w=0&k=20&c=AfNa1ay8LPzaO-NOJZspqULvYavyhXg4rnJ9U_tvJY4="
        />
      </div>
      <div className="border-b-2 w-full py-1.5">
        <p className="text-xl">
          <strong>Ivan</strong>
        </p>
        {/* Ограничение 40 символов */}
        <p className="text-sm break-all">lastmesslastmesslastmesslastmesslast1234...</p>
      </div>
    </div>
  );
};

export default ContactListItem;
