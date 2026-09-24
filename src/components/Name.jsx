const Name = (props) => {
  return (
    <div
      className=" text-center p-5 text-white  rounded-2xl flex flex-col max-w-sm
    5 items-center justify-between gap-3 h-125  border border-white m-3"
    >
      <img
        src="https://plus.unsplash.com/premium_photo-1697753121669-fe1307d66b7d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
        alt=""
        className="h-[200px] w-[200px] rounded-full object-cover"
      />
      <h1 className="text-2xl font-bold">Hi, my name is {props.name}</h1>
      <h4 className="text-md font-bold">My age is {props.age}</h4>
      <h5 className="text-neutral-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        voluptatibus dicta tenetur debitis quia.
      </h5>
      <button className="relative cursor-pointer rounded-xl border border-neutral-700 px-4 py-2 text-white">
        <div className="absolute inset-x-0 -bottom-px h-px w-full bg-linear-to-r form-transparent via-primary to-transparent"></div>
        View profile
      </button>
    </div>
  );
};

export default Name;
