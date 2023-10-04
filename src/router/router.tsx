import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

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
        path: "/add-new-book",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <AddNewBookPage />
          </Suspense>
        ),
      },
      {
        path: "/books",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <BooksPage />,
          </Suspense>
        ),
      },
      {
        path: "/book-details/:id",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <BookDetailsPage />
          </Suspense>
        ),
      },
      {
        path: "/update-book/:id",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <UpdateBookPage />
          </Suspense>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <WishlistPage />
          </Suspense>
        ),
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
