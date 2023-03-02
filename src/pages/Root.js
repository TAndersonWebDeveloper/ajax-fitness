import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../UI/MainNavigation";
function Root() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
