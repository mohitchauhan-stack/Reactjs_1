import { Bookmark } from "lucide-react";

const Card = (job) => {
  console.log(job.company_name);

  return (
    <div className="bg-neutral-100 h-100 w-90 p-6 rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="TOP flex justify-between items-start">
          <img
            src={job.company_image}
            alt=""
            className="h-15 w-15 rounded-full object-cover p-2 border border-neutral-400 bg-neutral-800"
          />
          <button className="flex gap-1 border-[.2px] border-neutral-400 rounded-lg px-2 py-1 text-xl font-semibold items-center cursor-pointer ">
            Save <Bookmark />
          </button>
        </div>
        <div className="MID mt-4 flex flex-col gap-2">
          <h3 className="text-xl font-semibold">
            {job.company_name}{" "}
            <span className="text-sm text-neutral-500">{job.date_posted}</span>
          </h3>
          <h2 className="text-2xl font-bold">{job.job_title}</h2>
          <div className="TAGS flex gap-2">
            <p className="bg-neutral-300/90 px-3 py-0.5 rounded-sm">
              {job.tag1}
            </p>
            <p className="bg-neutral-300/90 px-3 py-0.5 rounded-sm">
              {job.tag2}
            </p>
          </div>
        </div>
      </div>
      <div className="BOTTOM flex justify-between items-end border-t border-neutral-400 pt-4">
        <div className="sal_loc flex flex-col">
          <h2 className="font-bold text-xl">{job.salary}</h2>
          <p className="text-neutral-500">{job.location}</p>
        </div>
        <button className="bg-neutral-800 text-white px-5 py-2 rounded-lg cursor-pointer">
          Apply now
        </button>
      </div>
    </div>
  );
};

export default Card;
