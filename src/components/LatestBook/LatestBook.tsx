import Heading from "../Heading";
import { IBookResponse } from "../../types/types";
import Card from "../card/Card";
import { useGetLatestBookQuery } from "../../redux/book/bookApi";

const LatestBook = () => {
  const { data, isLoading } = useGetLatestBookQuery("");
  if (isLoading) {
    return <Heading className="text-center text-2xl my-5">Loading...</Heading>;
  }
  const books = data?.data;

  return (
    <div>
      <Heading className="text-center text-xl md:text-3xl font-semibold mt-5 md:mt-10">
        Leatest Book
      </Heading>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:w-4/5 md:mx-auto mx-3 my-5 md:my-10">
        {books?.map((book: IBookResponse) => (
          <Card key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default LatestBook;
