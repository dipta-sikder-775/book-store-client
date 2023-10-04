import { IInputDiv } from "../types/types";
import Input from "./Input";
import Paragraph from "./Paragraph";

const InputDiv = (props: IInputDiv) => {
  return (
    <div>
      <Paragraph className="px-1 text-xl">{props.level}</Paragraph>

      <Input
        className="border-2 border-gray-400 w-full px-2 py-2 my-1 rounded focus:outline-none focus:border-amber-500"
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputDiv;
