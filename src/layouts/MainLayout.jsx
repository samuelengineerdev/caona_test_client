import React, { useState } from "react";
import NavBar from "./components/Navbar/NavBar";

function MainLayout({ children, pageTitle }) {
  const [openSideBar, setOpenSideBar] = useState(true);

  return (
    <div className="flex w-full justify-center h-screen max-h-screen overflow-auto bg-[#ececec] ">
        <div className="max-w-screen-2xl overflow-x-hidden ">
        <div className="w-full  p-3">
          <div className="z-10 bg-white rounded-xl">
            <NavBar sideBar={{ openSideBar, setOpenSideBar }} pageTitle={pageTitle} />
          </div>
          <main id="MainMainLayout" className="w-full flex-grow bg-white rounded-xl mt-3">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
