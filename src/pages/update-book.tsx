import { useFormik } from "formik";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Button from "../components/Button";
import {
  useBookUpdateMutation,
  useGetSingleBookQuery,
} from "../redux/book/bookApi";
import { IError } from "../types/types";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const UpdateBookPage = () => {
  const navigate = useNavigate();
  const { token } = useAppSelector((state) => state.user);
  const { id } = useParams();
  const { data } = useGetSingleBookQuery(id);
  const [updateBook] = useBookUpdateMutation();

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

      try {
        toast.loading("Updating...", { id: "updateBook" });
        const updateBookRes = await updateBook(book).unwrap();
        toast.success(updateBookRes?.data?.message || "Updated Successfully", {
          id: "updateBook",
        });
        navigate(`/book-details/${id}`);
        formik.resetForm();
      } catch (error) {
        const errorMessage = error as IError
        const message = errorMessage.data?.message || 'Something went wrong'
        toast.error(message, { id: 'updateBook' })
      }
    },
  });

  return (
    <div className="w-full md:w-1/3  rounded-md md:mx-auto my-5 p-5 border border-[#ef7b00]">
      <Heading className="text-center text-3xl text-[#ef7b00]">
        Update Book
      </Heading>

      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col my-5">
          <label htmlFor="firstName" className="text-xl">
            Book Title
          </label>

          <Input
            className="border-2 border-gray-400 w-full px-2 py-3 my-3 rounded focus:outline-none focus:border-amber-500"
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
            className="border-2 border-gray-400 w-full px-2 py-3 my-3 rounded focus:outline-none focus:border-amber-500"
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
            className="border-2 border-gray-400 w-full px-2 py-3 my-3 rounded focus:outline-none focus:border-amber-500"
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
