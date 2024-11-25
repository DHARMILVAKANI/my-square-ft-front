import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Dashboard, Login, Signup, Profile } from '../pages';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the required CSS
import { Layout } from '../components';
import About from '../pages/About/About';
import Properties from '../pages/Properties/Properties';
import Blog from '../pages/Blog/Blog';
import Contact from '../pages/Contact/Contact';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* Access this routes without token */}
        <Route
          path="/"
          element={
            <PublicRoute>
              <Layout>
                <Home />
              </Layout>
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PublicRoute>
              <Layout>
                <About />
              </Layout>
            </PublicRoute>
          }
        />
        <Route
          path="/properties"
          element={
            <PublicRoute>
              <Layout>
                <Properties />
              </Layout>
            </PublicRoute>
          }
        />
        <Route
          path="/blog"
          element={
            <PublicRoute>
              <Layout>
                <Blog />
              </Layout>
            </PublicRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PublicRoute>
              <Layout>
                <Contact />
              </Layout>
            </PublicRoute>
          }
        />

        {/* Private Routes with Layout */}
        <Route element={<PrivateRoute />}>
          <Route path="/">
            <Route
              path="/dashboard"
              element={
                <Layout>
                  <Dashboard />
                </Layout>
              }
            />
            <Route
              path="/profile"
              element={
                <Layout>
                  <Profile />
                </Layout>
              }
            />
          </Route>
        </Route>
      </Routes>

      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
  );
};

export default AppRoutes;
