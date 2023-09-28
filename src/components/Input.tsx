import { IInput } from "../types/types";

const Input = (props: IInput) => {
  return (
    <input
      onFocus={props.onFocus}
      defaultValue={props.defaultValue}
      className={`${props.className}`}
      type={`${props.type}`}
      placeholder={`${props.placeholder}`}
      id={props.id}
      name={props.name}
      onChange={props.onChange}
      value={props.value}
      required
    />
  );
};

export default Input;
