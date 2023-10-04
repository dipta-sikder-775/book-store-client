import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PrivateRoute from "../components/PrivateRoute";
import Loading from "../components/Loading";

const UpdateBookPage = lazy(() => import("../pages/update-book"));
const AddNewBookPage = lazy(() => import("../pages/add-new-book"));
const WishlistPage = lazy(() => import("../pages/wishlist"));
const BooksPage = lazy(() => import("../pages/books"));
const BookDetailsPage = lazy(() => import("../pages/book-details"));
const SignUp = lazy(() => import("../pages/sign-up"));
const SignIn = lazy(() => import("../pages/sign-in"));
const Home = lazy(() => import("../pages/home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/home",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/add-new-book",
        element: (
          <PrivateRoute>
            <Suspense fallback={<Loading />}>
              <AddNewBookPage />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "/books",
        element: (
          <PrivateRoute>
            <Suspense fallback={<Loading />}>
              <BooksPage />,
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "/book-details/:id",
        element: (
          <PrivateRoute>
            <Suspense fallback={<Loading />}>
              <BookDetailsPage />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-book/:id",
        element: (
          <PrivateRoute>
            <Suspense fallback={<Loading />}>
              <UpdateBookPage />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <Suspense fallback={<Loading />}>
              <WishlistPage />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<Loading />}>
            <SignUp />
          </Suspense>
        ),
      },
      {
        path: "/signin",
        element: (
          <Suspense fallback={<Loading />}>
            <SignIn />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
