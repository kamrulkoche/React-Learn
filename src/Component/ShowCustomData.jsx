import React from "react";
import useCustomHook from "./useCustomHook";

const ShowCustomData = () => {
  const [data] = useCustomHook("https://jsonplaceholder.typicode.com/users");
  return (
    <div>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.name + "" + item.address.stree} </p>;
        })}
    </div>
  );
};

export default ShowCustomData;
