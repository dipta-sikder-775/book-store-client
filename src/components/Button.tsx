import { IProps } from "../types/types";

const Button = (props: IProps) => {
  return (
    <button
      onClick={props.onClick}
      type={props?.type}
      className={`${props.className} font-semibold hover:bg-white border border-[#0874c4] duration-300 hover:text-[#0874c4] bg-[#0874c4] text-white px-4 py-2 rounded-md `}
    >
      {props.children}
      {props.value}
    </button>
  );
};

export default Button;
