import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import ProtectedRoute from "./ui/ProtectedRoute";

import { Toaster } from "react-hot-toast";

import WebLayout from "./pages/website/WebLayout";
import AppLayout from "./pages/webapp/AppLayout";
import LandingPage from "./pages/website/LandingPage";
import AboutPage from "./pages/website/AboutPage";
import ContactPage from "./pages/website/ContactPage";
import LoginPage from "./pages/website/LoginPage";
import ErrorPage from "./pages/website/ErrorPage";
import Dashboard from "./features/dashboard/Dashboard";
import CreateAccountPage from "./pages/website/CreateAccountPage";
import Marathons from "./features/marathons/Marathons";
import MarathonDetails from "./features/marathons/MarathonDetails";
import Movies from "./features/movies/Movies";
import MovieDetails from "./features/movies/MovieDetails";
import Account from "./features/account/Account";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<WebLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="createaccount" element={<CreateAccountPage />} />
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="marathons" element={<Marathons />} />
            <Route path="marathons/:marathonId" element={<MarathonDetails />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />} />
            <Route path="account" element={<Account />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 4000 },
          error: { duration: 5000 },
          style: {
            fontSize: "14px",
            maxWidth: "500px",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
