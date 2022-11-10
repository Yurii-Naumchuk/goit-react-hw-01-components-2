import React from 'react';

export default function FriendList() {
  return (
    <ul className="friend-list">
      <li className="item">
        <span className="status"></span>
        <img className="avatar" src="" alt="User avatar" width="48" />
        <p className="name"></p>
      </li>
    </ul>
  );
}
