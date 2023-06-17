import Flex from "./components/layout/Flex";
import Navbar from "./components/layout/Navbar";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import Rootlayout from "./components/layout/Rootlayout";

let router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Rootlayout />}></Route>)
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
