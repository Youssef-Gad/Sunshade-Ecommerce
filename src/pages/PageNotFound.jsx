function PageNotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 h-[80vh]">
      <img src="assets/404-error.gif" alt="page not found" />
      <p className="text-[#999] uppercase text-xl sm:text-4xl">
        notiong to show!
      </p>
    </div>
  );
}

export default PageNotFound;
