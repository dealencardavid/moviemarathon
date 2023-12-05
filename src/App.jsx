import { createBrowserRouter, RouterProvider } from "react-router-dom";

import WebLayout from "./pages/WebLayout";

import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";

import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    element: <WebLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
