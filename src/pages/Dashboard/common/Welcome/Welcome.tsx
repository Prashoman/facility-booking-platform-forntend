const Welcome = () => {
    const today: string = new Date().toLocaleDateString();
  return (
    <>
      <div className="bg-blue-600 w-full rounded py-10 px-4">
        <p className="text-white">{today}</p>
        <h1 className="text-white font-serif text-[25px]">Welcome <span className="text-[18px]">jhon sina</span></h1>
      </div>
    </>
  );
};

export default Welcome;
