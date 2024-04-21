import { useRoutes } from "react-router-dom";
import "./App.css";
import { routeList } from "./routes/route";

function App() {
  const element = useRoutes(routeList);
  return element;
}

export default App;
