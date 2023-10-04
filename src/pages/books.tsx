import Heading from "../components/Heading";
import Card from "../components/card/Card";
import { useGetBooksQuery } from "../redux/book/bookApi";
import { IBookResponse } from "../types/types";
import Input from "../components/Input";
import { useEffect, useState } from "react";

const BooksPage = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  useEffect(() => {}, [search, filter]);
  const { data, isLoading, isSuccess } = useGetBooksQuery({ search, filter });
  const books: IBookResponse[] = data?.data;
  if (isLoading) {
    return <Heading className="text-center text-2xl">Loading...</Heading>;
  }

  if (!isSuccess || !data?.data?.length) {
    return <Heading>No books available</Heading>;
  }

  const handleSearch: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setSearch((e.target as any)?.search?.value);
  };

  console.log(filter);
  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="flex flex-col md:flex-row justify-center my-5 w-3/5 mx-auto">
          <div className="flex justify-between">
            <Input
              className="border-2 border-gray-400 w-full px-2 py-3 my-5 rounded-lg focus:outline-none focus:border-amber-500"
              id="search"
              name="search"
              type="text"
              placeholder="Search"
              key="search-input-implement"
            />

            <button
              className="ml-2 my-5 font-semibold hover:bg-white border border-[#ef7b00] duration-300 hover:text-[#ef7b00] bg-[#ef7b00] text-white px-4  rounded-md"
              type="submit"
            >
              Search
            </button>
          </div>

          <select
            onChange={(e) => setFilter(e.target?.value)}
            name=""
            id=""
            className="border border-[#ef7b00] px-2  py-3 md:py-0.5 my-5 rounded-md focus:outline-none focus:border-amber-500  md:ml-3"
          >
            <option disabled>Filter By</option>

            <option value="minPrice">Min Price</option>

            <option value="maxPrice">Max Price</option>
          </select>
        </div>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:w-4/5 md:mx-auto mx-3 my-10">
        {books?.map((book: IBookResponse) => (
          <Card key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
