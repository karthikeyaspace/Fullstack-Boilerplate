import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
