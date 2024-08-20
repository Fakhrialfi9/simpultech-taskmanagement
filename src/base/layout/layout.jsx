import { Outlet } from "react-router-dom";
import layoutStyle from "../style/layout.module.css";
import Navbar from "../../ui/components/navbar.jsx";
import Footer from "../../ui/components/footer.jsx";

const Layout = () => {
  return (
    <div className={layoutStyle.layout}>
      <header className={layoutStyle.navbar}>
        <Navbar />
      </header>

      <main className={layoutStyle.main}>
        <aside className={layoutStyle.pages}>
          <Outlet />
        </aside>
      </main>

      <footer className={layoutStyle.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
