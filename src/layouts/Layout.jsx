import BootstrapClient from "../component/Elements/Bootstap/BootstrapClient";
import Footer from "../component/Fragments/Footer/Footer";
import Navbar from "../component/Fragments/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <BootstrapClient />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
