type ButtonProps = {
  count: number;
  onClick: () => void;
};

function Button({ count, onClick }: ButtonProps) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}

export default Button;
