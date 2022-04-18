export const Button = (props) => {
  const { name, btnvariant } = props;
  const btnclass = "btn " + btnvariant;
  return (
    <button className={btnclass} {...props}>
      {name}
    </button>
  );
};
