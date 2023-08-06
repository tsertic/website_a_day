import React from "react";

export const Navbar = () => {
  return (
    <div className="fixed w-full">
      <nav className="mx-auto max-w-[1400px] p-2 flex justify-between">
        <div>
          <div>LOGO</div>
          <ul>
            <li>
              <a href="#">How it works</a>
            </li>
            <li>
              <a href="#">Design Gallery</a>
            </li>
            <li>
              <a href="#">Architects</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
