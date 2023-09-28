import { IProps } from "../types/types";

const Heading = (props: IProps) => {
  return (
    <h1 className={`${props.className}`}>
      {props.children}
      {props.value}
    </h1>
  );
};

export default Heading;
