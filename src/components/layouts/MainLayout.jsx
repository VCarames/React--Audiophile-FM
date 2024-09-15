import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
