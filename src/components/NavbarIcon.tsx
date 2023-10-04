import { IProps } from "../types/types";

const NavbarIcon = (props: IProps) => {
  return (
    <span className="ml-5 border rounded-md p-2 hover:bg-white hover:text-[#ef7b00] cursor-pointer duration-300">
      {props.children}
    </span>
  );
};

export default NavbarIcon;
