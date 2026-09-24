const Hero = () => {
  return (
    <div className="my-40 flex w-full flex-col items-center">
      <h1 className="max-w-xs bg-linear-to-r from-neutral-50 to-neutral-500 bg-clip-text text-center text-3xl font-bold text-transparent">
        Unleash the power of intutive finance
      </h1>
      <p className="text-md my-2 max-w-md text-center text-sm text-neutral-400">
        Say goodbye to the <span className="text-primary">outdated</span>{" "}
        financial tools. Every small{" "}
        <span className="text-primary font-pajji">business</span> owner,
        regardless of the background, can now manage their business like a pro.{" "}
        <span className="text-primary font-pajji">Simple.</span>{" "}
        <span className="text-primary font-pajji">Intuitive.</span> And never
        boring.
      </p>
      <div className="flex w-full max-w-lg items-center justify-center gap-5">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter you e-mail"
          className="focus:ring-primary flex-1 rounded-xl border border-neutral-600 px-4 py-2 text-neutral-50 transition duration-300 placeholder:text-neutral-500 focus:ring-1 focus:outline-none"
        />
        <button className="relative cursor-pointer rounded-xl border border-neutral-700 px-4 py-2 text-white">
          <div className="form-transparent via-primary absolute inset-x-0 -bottom-px h-px w-full bg-linear-to-r to-transparent"></div>
          Join wishlist
        </button>
      </div>
    </div>
  );
};

export default Hero;
