import { useFormik } from "formik";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Button from "../components/Button";
import {
  useBookUpdateMutation,
  useGetSingleBookQuery,
} from "../redux/book/bookApi";
import { IError } from "../types/types";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBookPage = () => {
  // const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const { token } = useAppSelector((state) => state.user);
  const { id } = useParams();
  const { data } = useGetSingleBookQuery(id);
  const [
    updateBook,
    { data: updateResponse, isLoading, error, isError, isSuccess },
  ] = useBookUpdateMutation();
  console.log;
  const formik = useFormik({
    initialValues: {
      title: data?.data.title,
      genre: data?.data.genre,
      price: data?.data.price,
    },
    onSubmit: async (values) => {
      console.log(values);

      const book = {
        book: {
          title: values.title,
          genre: values.genre,
          price: parseInt(values.price),
          image: data.data.image._id,
        },
        token,
        id,
      };
      updateBook(book);

      formik.resetForm();
    },
  });

  useEffect(() => {
    if (isLoading) {
      toast.loading("Updating...", { id: "signup" });
    }
    if (isSuccess) {
      console.log();
      toast.success(updateResponse?.message, { id: "signup" });
      navigate(`/book-details/${id}`);
    }
    if (isError) {
      const errorMessage = error as IError;
      const message = errorMessage.data?.message || "Something went wrong";
      toast.error(message, { id: "signup" });
    }
  }, [isError, isLoading, isSuccess]);

  return (
    <div className="w-full md:w-1/3  rounded-md md:mx-auto my-5 p-5 border border-[#0874c4]">
      <Heading className="text-center text-3xl text-[#0874c4]">
        Update Book
      </Heading>

      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col my-5">
          <label htmlFor="firstName" className="text-xl">
            Book Title
          </label>
          <Input
            className="border-2 border-gray-400 w-full px-2 py-3 my-3 rounded focus:outline-none focus:border-blue-500"
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            defaultValue={data?.data.title}
            placeholder="Title"
          />
        </div>

        <div className="flex flex-col my-5">
          <label htmlFor="firstName" className="text-xl">
            Book Genre
          </label>
          <Input
            className="border-2 border-gray-400 w-full px-2 py-3 my-3 rounded focus:outline-none focus:border-blue-500"
            id="genre"
            name="genre"
            type="text"
            onChange={formik.handleChange}
            defaultValue={data?.data.genre}
            placeholder="Genre"
          />
        </div>

        <div className="flex flex-col my-5">
          <label htmlFor="lastName" className="text-xl">
            Price
          </label>
          <Input
            className="border-2 border-gray-400 w-full px-2 py-3 my-3 rounded focus:outline-none focus:border-blue-500"
            id="price"
            name="price"
            type="number"
            onChange={formik.handleChange}
            defaultValue={data?.data.price}
            placeholder="Price"
          />
        </div>

        <Button className="my-5 w-full" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default UpdateBookPage;
