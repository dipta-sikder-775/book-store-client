import Heading from "../components/Heading";
import Image from "../components/Image";
import NavbarIcon from "../components/NavbarIcon";
import Paragraph from "../components/Paragraph";
import { BsFacebook, BsYoutube, BsLinkedin, BsInstagram, BsTelephoneX } from 'react-icons/bs'
import { FaRegAddressCard } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
    return (
        <div>
            <div className="bg-[#f2f5fc] md:text-center text-gray-600 p-5 my-5 grid grid-cols-1  md:grid-cols-3">
            <div>
                <Image className={"w-36"} src={"https://i.ibb.co/68bYxQz/book-logo-removebg-preview.png"} />
                <Paragraph className="">
                    Welcome to our books website, where the world of literature comes alive. Explore a diverse library of titles, from timeless classics to thrilling mysteries, thought-provoking non-fiction, and captivating fantasy adventures. Whether you're a passionate reader or new to books, there's something here for every literary enthusiast.
                </Paragraph>
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
                </div>
            </div>
            <div>
                <div className=''>
                <Heading className="text-2xl ml-5 text-[#0874c4]">
                   Our Page
                </Heading>
                    <Paragraph className={"mt-5 font-semibold hover:text-[#0874c4] duration-300 cursor-pointer"}>Home</Paragraph>
                    <Paragraph className={"mt-5 font-semibold hover:text-[#0874c4] duration-300 cursor-pointer"}>Books</Paragraph>
                    <Paragraph className={"mt-5 font-semibold hover:text-[#0874c4] duration-300 cursor-pointer"}>Add New</Paragraph>
                    <Paragraph className={"mt-5 font-semibold hover:text-[#0874c4] duration-300 cursor-pointer"}>Sign In</Paragraph>
                    <Paragraph className={"mt-5 font-semibold hover:text-[#0874c4] duration-300 cursor-pointer"}>Sign Up</Paragraph>

                </div>
            </div>
            <div className=" mt-5">
                <Heading className="text-2xl text-start ml-5 text-[#0874c4]">
                    Contact Us
                </Heading>
                <div className="flex items-center mt-5">
                   <FaRegAddressCard  />
                    <Paragraph className="ml-5">
                        Address: 128/2 Mirpur Dhaka
                    </Paragraph>
                </div>
                <div className="flex items-center mt-5">
                   <BsTelephoneX  />
                    <Paragraph className="ml-5">
                        Phone: +8801855271276
                    </Paragraph>
                </div>
                <div className="flex items-center mt-5">
                   <AiOutlineMail  />
                    <Paragraph className="ml-5">
                        Email: kamrul.islam018552@gmail.com
                    </Paragraph>
                </div>
            </div>
        </div>
        <div className="bg-[#0874c4]">
<Paragraph className="text-center text-white py-2">
    Copyright @ 2023 Book Shop
</Paragraph>
        </div>
        </div>
    );
};

export default Footer;