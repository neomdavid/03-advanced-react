const ErrorExample = () => {
  let count = 0;
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          count++;
          console.log(count);
        }}
      >
        Click here
      </button>
    </>
  );
};

export default ErrorExample;
