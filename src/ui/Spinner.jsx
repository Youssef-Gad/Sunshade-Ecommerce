function Spinner() {
  return (
    <div className="flex justify-center items-center mt-20 min-h-[55vh]">
      <div className="inline-block h-12 w-12 animate-spin border-[#a16107e4] rounded-full border-4 border-solid border-e-transparent align-[-0.125em] text-center motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
    </div>
  );
}

export default Spinner;
