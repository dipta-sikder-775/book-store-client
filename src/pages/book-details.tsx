import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useBookReviewMutation,
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from "../redux/book/bookApi";
import { IBookResponse, IError } from "../types/types";
import Image from "../components/Image";
import Paragraph from "../components/Paragraph";
import Heading from "../components/Heading";
import { useFormik } from "formik";
import Input from "../components/Input";
import Button from "../components/Button";
import toast from "react-hot-toast";
import { useAppSelector } from "../redux/hooks";
import { useAddWishlistMutation } from "../redux/wishlist/wishlistApi";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useGetSingleBookQuery(id);
  const [postReview] = useBookReviewMutation();
  const [deleteBook] = useDeleteBookMutation();
  const [addWishlist] = useAddWishlistMutation();
  const { token, _id } = useAppSelector((state) => state.user);
  const book: IBookResponse = data?.data;

  const formik = useFormik({
    initialValues: {
      review: "",
    },
    onSubmit: async (review) => {
      const reviews = {
        id,
        review,
        token,
      };

      try {
        toast.loading("Posting...", { id: "book" });
        await postReview(reviews).unwrap();
        toast.success("Review posted successfully", { id: "book" });
        formik.resetForm();
      } catch (error) {
        const errorMessage = error as IError;
        const message = errorMessage.data?.message || "Something went wrong";
        toast.error(message, { id: "book" });
      }
    },
  });

  const handleDelete = async () => {
    const info = {
      token,
      id,
    };

    try {
      toast.loading("Deleting...", { id: "book" });
      await deleteBook(info).unwrap();
      toast.success("Book Deleted Success", { id: "book" });
      navigate("/books");
    } catch (error) {
      const errorMessage = error as IError;
      const message = errorMessage.data?.message || "Something went wrong";
      toast.error(message, { id: "book" });
    }
  };

  let formattedDate;
  if (data) {
    const date = new Date(book.publicationDate);

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    formattedDate = `${day} ${month} ${year}`;
  }

  const handleWishlist = async () => {
    const data = {
      wishlist: {
        userId: _id,
        bookId: book._id,
      },
      token,
    };
    try {
      toast.loading("Adding...", { id: "book" });
      await addWishlist(data).unwrap();
      toast.success("Wishlist Added", { id: "book" });
    } catch (error) {
      const errorMessage = error as IError;
      const message = errorMessage.data?.message || "Something went wrong";
      toast.error(message, { id: "book" });
    }
  };

  //   useEffect(() => {
  //     if (wishlistLoading) {
  //       toast.loading("Adding...", { id: "book" });
  //     }
  //     if (wishlistSuccess) {
  //       toast.success("Wishlist Added", { id: "book" });
  //     }
  //     if (wishlistError) {
  //       const errorMessage = error as IError;
  //       const message = errorMessage.data?.message || "Something went wrong";
  //       toast.error(message, { id: "book" });
  //     }
  //   }, [wishlistError, wishlistLoading, wishlistSuccess]);

  return (
    <div className="w-4/5 mx-auto my-10">
      <div>
        <div className="flex flex-col lg:flex-row md:items-center">
          <div className="md:h-[600px] md:w-[800px]">
            <Image className="h-full w-full" src={book?.image?.fileUrl} />
          </div>

          <div className="p-5">
            <Paragraph className="flex items-center text-xl">
              <span className="font-semibold ">Title : </span>
              {book?.title.slice(0, 30)}
            </Paragraph>

            <Paragraph className="flex items-center text-xl mt-4">
              <span className="font-semibold ">Genre : </span>
              {book?.genre}
            </Paragraph>

            <Paragraph className="flex items-center text-xl mt-4">
              <span className=" font-semibold">Author : </span>
              {book?.author?.name}
            </Paragraph>

            <Paragraph className="flex items-center text-xl mt-4">
              <span className="font-semibold ">Price : </span>
              {book?.price}
            </Paragraph>

            <Paragraph className="flex items-center text-xl mt-4">
              <span className=" font-semibold">Date : </span>
              {formattedDate ? formattedDate : book?.publicationDate}
            </Paragraph>

            {book?.author?._id === _id ? (
              <div className="mt-10 flex items-center">
                <Link to={`/update-book/${book?._id}`}>
                  <Button>Edit</Button>
                </Link>

                <button
                  onClick={handleDelete}
                  className="ml-6 font-semibold hover:bg-white hover:border-red-600 hover:border  duration-300 hover:text-black bg-red-600 text-white px-4 py-2 rounded-md"
                >
                  Delete
                </button>
              </div>
            ) : (
              <div>
                <Button onClick={handleWishlist} className="mt-10">
                  Add wishlist
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Heading className="text-center text-3xl font-bold my-5">
        Reviews : {book?.reviews?.length}
      </Heading>

      <form onSubmit={formik.handleSubmit}>
        <div className="flex my-5 w-3/5 mx-auto">
          <Input
            className="border-2 border-gray-400 w-full px-2 py-3 my-5 rounded-lg focus:outline-none focus:border-blue-500"
            id="review"
            name="review"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.review}
            placeholder="Your review"
          />

          <button
            className="ml-2 my-5 font-semibold hover:bg-white border border-[#0874c4] duration-300 hover:text-[#0874c4] bg-[#0874c4] text-white px-4  rounded-lg"
            type="submit"
          >
            review
          </button>
        </div>
      </form>
      
      {book?.reviews?.length ? (
        <div>
          {book.reviews.map((review) => (
            <Heading className="border border-[#0874c4] py-2 px-5 rounded-md text-lg font-semibold my-3">
              {review}
            </Heading>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default BookDetails;
