import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition/PageTransition";

function MainLayout() {
  return (
    <>
      <Navbar />

      <PageTransition>
        <main>
          <Outlet />
        </main>
      </PageTransition>

      <Footer />
    </>
  );
}

export default MainLayout;