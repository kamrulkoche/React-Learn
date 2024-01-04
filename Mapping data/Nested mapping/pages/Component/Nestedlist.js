import React from "react";

const users = [
  {
    fullName: "Kamrul Hasan",
    age: 25,
    phones: [{ home: "01798135862" }, { office: "0141232" }],
  },
  {
    fullName: "Asik Khan",
    age: 32,
    phones: [{ home: "01798135862" }, { office: "0141232" }],
  },
  {
    fullName: "Tonmay",
    age: 20,
    phones: [{ home: "01798135862" }, { office: "0141232" }],
  },
];

function Nestedlist() {
  return (
    <>
      <div>
        <h1>Nested Lists</h1>
        {users.map((user, index) => (
          <article key={index}>
            <h3>FullName:{user.fullName}</h3>
            <p>Age:{user.age}</p>
            {user.phones.map((phone, index) => (
              <div key={index}>
                <p> {phone.home}</p>
                <p> {phone.office}</p>
              </div>
            ))}
          </article>
        ))}
      </div>
    </>
  );
}

export default Nestedlist;
