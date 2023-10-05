import Image from "../Image";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import { IBookResponse } from "../../types/types";
import { Link } from "react-router-dom";

const Card = ({ book }: { book: IBookResponse }) => {
  return (
    <Link to={`/book-details/${book._id}`}>
      <div className=" p-5 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer">
        <div className="h-96">
          <Image
            className="rounded-md h-full w-full"
            src={book.image?.fileUrl}
          />
        </div>

        <div>
          <Heading className="mt-5 text-lg font-bold text-center truncate max-w-[300ch]">
            {book.title}
          </Heading>

          <div className="flex justify-between">
            <Paragraph className="mt-3 text-sm italic">
              <span className="font-bold"> Author:</span> {book.author?.name}
            </Paragraph>

            <Paragraph className="mt-3 text-sm px-2 py-1 rounded-full bg-[rgba(239,123,0,0.7)] text-white">
              <span title="Genre">{book.genre}</span>
            </Paragraph>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
