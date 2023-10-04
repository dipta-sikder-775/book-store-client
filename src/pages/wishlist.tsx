import toats from "react-hot-toast";
import Heading from "../components/Heading";
import Image from "../components/Image";
import Paragraph from "../components/Paragraph";
import {
  useDeleteWishlistMutation,
  useGetWishlistQuery,
} from "../redux/wishlist/wishlistApi";
import { useAppSelector } from "../redux/hooks";

const WishlistPage = () => {
  const { token } = useAppSelector((state) => state.user);
  const { data, isLoading } = useGetWishlistQuery(token);
  const [deleteWishlist] = useDeleteWishlistMutation();

  if (isLoading) {
    return <Heading className="text-center text-2xl">Loading...</Heading>;
  }
  const wishlists = data?.data;
  console.log(wishlists);
  const handleDelete = async (id: string) => {
    const data = {
      id,
      token,
    };
    try {
      toats.loading("Loading...", { id: "wishlist" });
      await deleteWishlist(data).unwrap();
      toats.success("Wishlist deleted", { id: "wishlist" });
    } catch (error) {
      toats.error("Failed to delete Wishlist", { id: "wishlist" });
    }
  };

  return (
    <div>
      <Heading className="text-center text-3xl font-semibold mt-10">
        Wishlist: {wishlists?.length}
      </Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:w-4/5 md:mx-auto mx-3 my-10">
        {wishlists.map((wishlist: any) => (
          <div className="border-2 p-5 flex flex-col ">
            <div className="h-80">
              <Image
                className="w-full h-full"
                src={wishlist?.bookId?.image?.fileUrl}
              />
            </div>

            <div className="ml-4">
              <Heading className="mt-5 text-lg font-bold">
                <span className="font-bold"> Title:</span>{" "}
                {wishlist?.bookId?.title.slice(0, 20)}
              </Heading>

              <div className="mt-3 text-lg flex justify-between items-center w-full">
                <Paragraph className="mt-3">
                  <span className="font-bold"> Genre:</span>{" "}
                  {wishlist?.bookId?.genre}
                </Paragraph>

                <Paragraph className="">
                  <span className="font-bold"> Price:</span>{" "}
                  {wishlist?.bookId?.price}
                </Paragraph>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => handleDelete(wishlist?._id)}
                  className=" font-semibold hover:bg-white border-red-500 border  duration-300 hover:text-black bg-red-600 text-white px-2 py-2 rounded-md mt-5 w-full"
                >
                  Wishlist Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
