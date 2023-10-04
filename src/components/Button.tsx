import { IProps } from "../types/types";

const Button = (props: IProps) => {
  return (
    <button
      onClick={props.onClick}
      type={props?.type}
      className={`${props.className} font-semibold hover:bg-white border border-[#ef7b00] duration-300 hover:text-[#ef7b00] bg-[#ef7b00] text-white px-4 py-2 rounded-md `}
    >
      {props.children}
      {props.value}
    </button>
  );
};

export default Button;
