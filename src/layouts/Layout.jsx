import Navbar from "../component/Fragments/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
export default Layout;
