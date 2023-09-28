import { IProps } from "../types/types";

const Image = (props: IProps) => {
  return <img className={`${props.className}`} src={props.src} alt="" />;
};

export default Image;
