import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import Paragraph from "./Paragraph";
import { removeUser } from "../redux/user/userSlice";
import Heading from "./Heading";
import Image from "./Image";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const MobileNavbar = () => {
  const { email } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(removeUser());
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((value) => !value);
  };

  return (
    <>
      <div className="lg:hidden flex justify-between mx-5 py-2 transition duration-700">
        <div className="flex justify-center items-center">
          <Link to="/">
            <Heading className="text-lg font-semibold flex items-center">
              <Image
                className="w-28 mr-1"
                src="/images.png"
              />
            </Heading>
          </Link>
        </div>

        <div>
          <p
            className="flex justify-center items-center bg-white px-2 py-1 text-primary rounded cursor-pointer"
            onClick={toggleIsOpen}
          >
            <span>
              <AiOutlineMenu className="text-2xl mr-1" />
            </span>
          </p>
        </div>
      </div>

      <div className="lg:hidden">
        <div
          className={`absolute top-0 duration-700   ${
            isOpen ? "left-0 duration-700" : "left-[-1200px]"
          } z-30 bg-[#ef7b00] w-full p-3  h-[1300px]`}
        >
          <p
            className={` absolute top-5 right-2  text-white py-1 cursor-pointer`}
            onClick={toggleIsOpen}
          >
            <span>
              <ImCross className="text-xl  mr-1" />
            </span>
          </p>

          <div className="text-white">
            <Link to="/home">
              <Paragraph className={" mt-5"}>
                {" "}
                <span
                  className="hover:bg-white font-semibold hover:text-[#ef7b00] duration-300 cursor-pointer px-5 py-2 rounded-md"
                  onClick={toggleIsOpen}
                >
                  Home
                </span>{" "}
              </Paragraph>
            </Link>

            <Link to="/books">
              <Paragraph className={"mt-5"}>
                <span
                  className="hover:bg-white font-semibold hover:text-[#ef7b00] duration-300 cursor-pointer px-5 py-2 rounded-md"
                  onClick={toggleIsOpen}
                >
                  Books
                </span>{" "}
              </Paragraph>
            </Link>

            {email ? (
              <>
                <Link to="/add-new-book">
                  <Paragraph className={"mt-5"}>
                    <span
                      className="hover:bg-white font-semibold hover:text-[#ef7b00] duration-300 cursor-pointer px-5 py-2 rounded-md"
                      onClick={toggleIsOpen}
                    >
                      Add New
                    </span>
                  </Paragraph>
                </Link>

                <Link to="/wishlist">
                  <Paragraph className={"mt-5"}>
                    <span
                      className="hover:bg-white font-semibold hover:text-[#ef7b00] duration-300 cursor-pointer px-5 py-2 rounded-md"
                      onClick={toggleIsOpen}
                    >
                      Wishlist
                    </span>
                  </Paragraph>
                </Link>

                <button
                  onClick={handleLogout}
                  className={
                    "mr-5 font-semibold hover:bg-[#ef7b00] mt-5 border border-[#ef7b00] duration-300 text-[#ef7b00] bg-white hover:text-white px-4 py-2 rounded-md"
                  }
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link to="/signin">
                  <Paragraph className={"mt-5"}>
                    <span
                      className="hover:bg-white font-semibold hover:text-[#ef7b00] duration-300 cursor-pointer px-5 py-2 rounded-md"
                      onClick={toggleIsOpen}
                    >
                      Sign In
                    </span>
                  </Paragraph>
                </Link>

                <Link to="/signup">
                  <Paragraph className={" mt-5"}>
                    <span
                      className="hover:bg-white font-semibold hover:text-[#ef7b00] duration-300 cursor-pointer px-5 py-2 rounded-md"
                      onClick={toggleIsOpen}
                    >
                      Sign Up
                    </span>
                  </Paragraph>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
