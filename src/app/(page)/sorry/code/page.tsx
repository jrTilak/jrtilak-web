const CodeNotAvailable = () => {
  return (
    <div className="flex flex-col h-[80vh] items-center justify-center w-full">
      <h3 className="text-3xl font-bold text-center text-primary">
        Code Not Available
      </h3>
      <p className="text-center text-lg text-muted-foreground max-w-md">
        Due to some privacy reasons, the code for this project is not available
        publicly. Sorry for the inconvenience.
      </p>
    </div>
  );
};
export default CodeNotAvailable;
