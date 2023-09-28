import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
const SignUp = lazy(() => import("../pages/SignUp"));
const SignIn = lazy(() => import("../pages/SignIn"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
