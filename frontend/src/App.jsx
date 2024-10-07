import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ThemeProvider from "./Context/ThemeProvider";
import AuthProvider from "./Context/AuthProvider";
import RouteGuard from "./components/RouteGuard";

// pages & components
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import AddJobPage from "./pages/AddJobPage";
import JobPage from "./pages/JobPage";
import EditJobPage from "./pages/EditJobPage";
import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/jobs/:id" element={<JobPage />} />
                <Route path="/jobs/add-job" element={<RouteGuard requireAuth={true}>
                  <AddJobPage />
                  </RouteGuard>} />
                <Route path="/edit-job/:id" element={<RouteGuard requireAuth={true}>
                  <EditJobPage />
                  </RouteGuard>} />
                <Route path="/signup" element={<RouteGuard requireAuth={false}>
                      <Signup />
                    </RouteGuard>} />
                <Route path="/login" element={<RouteGuard requireAuth={false}>
                      <Login />
                    </RouteGuard>} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
