import Heading from "../components/Heading";
import {
  BsTelephone,
  BsFacebook,
  BsYoutube,
  BsLinkedin,
  BsInstagram,
  BsFillHeartFill,
} from "react-icons/bs";
import NavbarIcon from "../components/NavbarIcon";
import Image from "../components/Image";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { removeUser } from "../redux/user/userSlice";
import MobileNavbar from "../components/MobileNav";

const Navbar = () => {
  const { email } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(removeUser());
  };

  return (
    <div>
      <div className="bg-[#0874c4] text-white py-2 hidden lg:block">
        <div className=" w-4/5 mx-auto flex justify-between items-center">
          <Heading className={"flex items-center"}>
            <BsTelephone className="mr-2" /> +88 09613 441122
          </Heading>
          <div className="flex">
            <NavbarIcon>
              <BsFacebook />
            </NavbarIcon>

            <NavbarIcon>
              <BsYoutube />
            </NavbarIcon>

            <NavbarIcon>
              <BsLinkedin />
            </NavbarIcon>

            <NavbarIcon>
              <BsInstagram />
            </NavbarIcon>

            <NavbarIcon>
              <Link to="/wishlist">
                <BsFillHeartFill />
              </Link>
            </NavbarIcon>
          </div>
        </div>
      </div>

      <div className="bg-[#f2f5fc] py-2 shadow-md hidden lg:block">
        <div className="w-4/5 mx-auto flex justify-between items-center">
          <Image
            className={"w-36"}
            src={"https://i.ibb.co/68bYxQz/book-logo-removebg-preview.png"}
          />

          <div className="flex items-center">
            <Link to="/home">
              <Paragraph
                className={
                  "mr-5 font-semibold hover:text-[#0874c4] duration-300 cursor-pointer"
                }
              >
                Home
              </Paragraph>
            </Link>

            <Link to="/books">
              <Paragraph
                className={
                  "mr-5 font-semibold hover:text-[#0874c4] duration-300 cursor-pointer"
                }
              >
                Books
              </Paragraph>
            </Link>

            {email ? (
              <>
                <Link to="/add-new">
                  <Paragraph
                    className={
                      "mr-5 font-semibold hover:text-[#0874c4] duration-300 cursor-pointer"
                    }
                  >
                    Add New
                  </Paragraph>
                </Link>

                <Button onClick={handleLogout} className={"mr-5"}>
                  Log out
                </Button>
              </>
            ) : (
              <>
                <Link to="/signin">
                  <Paragraph
                    className={
                      "mr-5 font-semibold hover:text-[#0874c4] duration-300 cursor-pointer"
                    }
                  >
                    Sign In
                  </Paragraph>
                </Link>

                <Link to="/signup">
                  <Paragraph
                    className={
                      "mr-5 font-semibold hover:text-[#0874c4] duration-300 cursor-pointer"
                    }
                  >
                    Sign Up
                  </Paragraph>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      <MobileNavbar />
    </div>
  );
};

export default Navbar;
