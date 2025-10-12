import React from "react";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router";
import Loader from "./Loader";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <main className="overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <Outlet />
        </div>
      </main>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
