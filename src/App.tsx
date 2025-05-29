import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useColorTheme } from "./hooks/useColorTheme";
import Login from "./pages/Login/Login";
import LoadingPageOverlay from "./components/LoadingPageOverlay";
import Onboarding from "./pages/Onboarding/Onboarding";
import TestPage from "./pages/TestPage";
import Home from "./pages/Home/Home";
import Main from "./components/Main/Main";
import Savings from "./pages/Savings/Savings";
import Search from "./pages/Search/Search";
import ChefSue from "./pages/ChefSue/ChefSue";
import Recipe from "./pages/Recipe/Recipe";

function NotFound() {
  return <h1>404 - Not Found</h1>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/main",
    element: <Main />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "savings",
        element: <Savings />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "sue",
        element: <ChefSue />,
      },
      {
        path: "recipe",
        element: <Recipe />,
      },
    ],
  },
  {
    path: "onboarding",
    element: <Onboarding />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
]);

export default function App() {
  const { loading } = useColorTheme();
  return (
    <>
      {loading && <LoadingPageOverlay />}
      <RouterProvider router={router} />
    </>
  );
}
