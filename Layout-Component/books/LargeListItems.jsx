export const LargeBookListItems = ({ book }) => {
  const { name, price, title, pages } = book;

  return (
    <>
      <h2>{name}</h2>
      <p>{price}</p>
      <h2>Title: </h2>
      <p> {title} </p>
      <p># of pages: {pages}</p>
    </>
  );
};
