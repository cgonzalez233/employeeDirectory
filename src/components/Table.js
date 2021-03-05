import React from "react";

export default function Table(props) {
  console.log(props);
  return (
    <div>
      {props.users.map((user) => (
        <div class="card">
          <div class="card-body">
            <p>
              {user.name.first} {user.name.last} - {user.phone} - {user.email}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
