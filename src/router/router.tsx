import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const BooksPage = lazy(() => import("../pages/Books"));
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
          <Suspense fallback={<p>Loading...</p>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/home",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/books",
        element: <BooksPage />,
      },
      {
        path: "/book-details/:id",
        element: (
          <Suspense>
            <BookDetailsPage />
          </Suspense>
        ),
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <SignUp />
          </Suspense>
        ),
      },
      {
        path: "/signin",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <SignIn />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
