import BootstrapClient from "../component/Elements/Bootstap/BootstrapClient";
import Navbar from "../component/Fragments/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <BootstrapClient />
      {children}
    </>
  );
};
export default Layout;
