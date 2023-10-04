import { useFormik } from "formik";
import Input from "../components/Input";
import Heading from "../components/Heading";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../redux/user/userApi";
import { userSet } from "../redux/user/userSlice";
import toast from "react-hot-toast";
import { IError } from "../types/types";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";

const SignUp = () => {
  const [postUser, { data, isLoading, isError, isSuccess, error }] =
    useRegisterUserMutation();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      postUser(values);
      formik.resetForm();
    },
  });
  useEffect(() => {
    if (isLoading) {
      toast.loading("Sign Up...", { id: "signup" });
    }
    if (isSuccess) {
      dispatch(userSet(data));
      toast.success("Sign up success", { id: "signup" });
      navigate(from, { replace: true });
    }
    if (isError) {
      const errorMessage = error as IError;
      const message = errorMessage.data?.message || "Something went wrong";
      toast.error(message, { id: "signup" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isLoading, isSuccess]);

  console.log(isError, isLoading, isSuccess);

  return (
    <div className="w-full md:w-1/3  rounded-md md:mx-auto my-5 p-5 border border-[#ef7b00]">
      <Heading className="text-center text-3xl text-[#ef7b00]">Sign Up</Heading>

      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col my-5">
          <label htmlFor="firstName" className="text-xl">
            Your Name
          </label>

          <Input
            className="border-2 border-gray-400 w-full px-2 py-3 my-3 rounded focus:outline-none focus:border-amber-500"
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Enter Your Name"
          />
        </div>

        <div className="flex flex-col my-5">
          <label htmlFor="firstName" className="text-xl">
            Your Email
          </label>

          <Input
            className="border-2 border-gray-400 w-full px-2 py-3 my-3 rounded focus:outline-none focus:border-amber-500"
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Enter Your Email"
          />
        </div>

        <div className="flex flex-col my-5">
          <label htmlFor="lastName" className="text-xl">
            Password
          </label>

          <Input
            className="border-2 border-gray-400 w-full px-2 py-3 my-3 rounded focus:outline-none focus:border-amber-500"
            id="password"
            name="password"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Enter Your Password"
          />
        </div>

        <Button className="my-5 w-full" type="submit">
          Sign Up
        </Button>
      </form>

      <Paragraph className="text-center">
        Already have an account please{" "}
        <Link to="/signin">
          <span className="text-amber-500">sign in</span>
        </Link>
      </Paragraph>
    </div>
  );
};

export default SignUp;
