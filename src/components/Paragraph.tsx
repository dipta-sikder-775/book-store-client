import { IProps } from "../types/types";

const Paragraph = (props: IProps) => {
  return (
    <p className={`${props.className}`}>
      {props.children}
      {props.value}
    </p>
  );
};

export default Paragraph;
