import { IProps } from "../types/types";

const NavbarIcon = (props: IProps) => {
  return (
    <span className="ml-5 border rounded-full p-2 hover:bg-white hover:text-[#0874c4] cursor-pointer duration-300">
      {props.children}
    </span>
  );
};

export default NavbarIcon;
