import Heading from "../components/Heading";
import Image from "../components/Image";
import NavbarIcon from "../components/NavbarIcon";
import Paragraph from "../components/Paragraph";
import {
  BsFacebook,
  BsYoutube,
  BsLinkedin,
  BsInstagram,
  BsTelephoneX,
} from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <div className="bg-[rgba(239,123,0,0.1)] md:text-center text-gray-600 p-5 my-5 grid grid-cols-1  md:grid-cols-3">
        <div>
          <Image className={"w-36"} src={"/images.png"} />

          <Paragraph className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            porro voluptate culpa dicta delectus magnam reprehenderit deserunt
            praesentium! Dolor harum repellat dolorem autem labore nostrum sit
            dignissimos facilis, neque suscipit nemo maxime excepturi
            necessitatibus pariatur molestias vero magni quod optio culpa
            recusandae ut quas facere iure minima. Ut, fugit sunt.
          </Paragraph>

          <div className="flex">
            <NavbarIcon>
              <BsFacebook />
            </NavbarIcon>

            <NavbarIcon>
              <BsInstagram />
            </NavbarIcon>

            <NavbarIcon>
              <BsYoutube />
            </NavbarIcon>

            <NavbarIcon>
              <BsLinkedin />
            </NavbarIcon>
          </div>
        </div>

        <div>
          <div className="mt-3 md:mt-5">
            <Heading className="text-2xl ml-5 text-[#ef7b00]">Our Page</Heading>

            <div className="grid gap-x-2 gap-y-1 grid-cols-3 md:max-w-[250px] mx-auto">
              <Paragraph
                className={
                  "mt-5 font-semibold hover:text-[#ef7b00] duration-300 cursor-pointer"
                }
              >
                Home
              </Paragraph>

              <Paragraph
                className={
                  "mt-5 font-semibold hover:text-[#ef7b00] duration-300 cursor-pointer"
                }
              >
                Books
              </Paragraph>

              <Paragraph
                className={
                  "mt-5 font-semibold hover:text-[#ef7b00] duration-300 cursor-pointer"
                }
              >
                Add New
              </Paragraph>

              <Paragraph
                className={
                  "mt-5 font-semibold hover:text-[#ef7b00] duration-300 cursor-pointer"
                }
              >
                Sign In
              </Paragraph>

              <Paragraph
                className={
                  "mt-5 font-semibold hover:text-[#ef7b00] duration-300 cursor-pointer"
                }
              >
                Sign Up
              </Paragraph>
            </div>
          </div>
        </div>

        <div className=" mt-5">
          <Heading className="text-2xl text-start ml-5 text-[#ef7b00]">
            Contact Us
          </Heading>

          <div className="flex items-center mt-5">
            <FaRegAddressCard />

            <Paragraph className="ml-5">Address: Mirpur, Dhaka</Paragraph>
          </div>

          <div className="flex items-center mt-5">
            <BsTelephoneX />

            <Paragraph className="ml-5">Phone: +8801704079775</Paragraph>
          </div>

          <div className="flex items-center mt-5">
            <AiOutlineMail />

            <Paragraph className="ml-5">
              Email: diptasikder775@gmail.com
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="bg-[#ef7b00]">
        <Paragraph className="text-center text-white py-2">
          Copyright @ 2023 Book Shop
        </Paragraph>
      </div>
    </div>
  );
};

export default Footer;
