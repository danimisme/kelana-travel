import { useRoutes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import { routeList } from "./routes/route";

function App() {
  const element = useRoutes(routeList);
  return element;
}

export default App;
