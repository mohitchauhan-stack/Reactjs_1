import Caontainer from "./components/Caontainer.jsx";
import Card from "./components/Card.jsx";

const App = () => {
  const jobs = [
    {
      company_image:
        "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/openai/default.svg",
      company_name: "OpenAI",
      date_posted: "2 days ago",
      job_title: "Senior UI/UX Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      salary: "$120/hr",
      location: "San Francisco, USA",
    },
    {
      company_image:
        "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/anthropic/default.svg",
      company_name: "Anthropic",
      date_posted: "5 days ago",
      job_title: "Product Designer",
      tag1: "Full Time",
      tag2: "Mid Level",
      salary: "$110/hr",
      location: "New York, USA",
    },
    {
      company_image:
        "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/perplexity/default.svg",
      company_name: "Perplexity",
      date_posted: "1 day ago",
      job_title: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      salary: "$105/hr",
      location: "San Francisco, USA",
    },
    {
      company_image: "https://www.cursor.com/assets/images/logo.svg",
      company_name: "Cursor",
      date_posted: "3 days ago",
      job_title: "Product Designer",
      tag1: "Full Time",
      tag2: "Mid Level",
      salary: "$115/hr",
      location: "San Francisco, USA",
    },
    {
      company_image:
        "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/mistral-ai/default.svg",
      company_name: "Mistral AI",
      date_posted: "4 days ago",
      job_title: "UI Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      salary: "$95/hr",
      location: "Paris, France",
    },
    {
      company_image:
        "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/cohere/default.svg",
      company_name: "Cohere",
      date_posted: "7 days ago",
      job_title: "UX Researcher",
      tag1: "Part Time",
      tag2: "Mid Level",
      salary: "$90/hr",
      location: "Toronto, Canada",
    },
    {
      company_image:
        "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/elevenlabs/default.svg",
      company_name: "ElevenLabs",
      date_posted: "2 days ago",
      job_title: "Creative Frontend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      salary: "$100/hr",
      location: "London, UK",
    },
    {
      company_image:
        "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/replit/default.svg",
      company_name: "Replit",
      date_posted: "8 days ago",
      job_title: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      salary: "$75/hr",
      location: "Remote",
    },
  ];

  return (
    <>
      <Caontainer>
        {jobs.map((job, idx) => {
          return (
            <div key={idx}>
              <Card
                company_image={job.company_image}
                company_name={job.company_name}
                date_posted={job.date_posted}
                job_title={job.job_title}
                tag1={job.tag1}
                tag2={job.tag2}
                salary={job.salary}
                location={job.location}
              />
            </div>
          );
        })}
      </Caontainer>
    </>
  );
};

export default App;
