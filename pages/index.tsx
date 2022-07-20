import type { NextPage } from "next";
import { useState } from "react";
import { trpc } from "../utils/trpc";

const DataCreator: React.FC = () => {
  const client = trpc.useContext();
  const { mutate } = trpc.useMutation("datas.update", {
    onSuccess: () => {
      client.invalidateQueries("datas.getAll");
    },
  });

  const [name, setName] = useState("");
  const [port, setPort] = useState("");
  const [git, setGit] = useState("");
  const [link, setLink] = useState("");

  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log(name, port, git, link);
    mutate({ name: name, portfolio: port, github: git, linkedin: link });
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col">
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Enter your Portfolio:
        <input
          type="text"
          value={port}
          onChange={(e) => setPort(e.target.value)}
        />
      </label>
      <label>
        Enter your Github:
        <input
          type="text"
          value={git}
          onChange={(e) => setGit(e.target.value)}
        />
      </label>
      <label>
        Enter your Github:
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </label>
      <button>Submit</button>
    </form>
  );
};

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["datas.getAll"]);

  if (isLoading || !data) return <div>Loading...</div>;
  console.log(data);
  return (
    <div className="flex flex-col p-6">
      <div className="flex flex-col">
        <div className="text-2xl font-bold ">
          {data[0]?.name} <br />
          {data[0]?.portfolio}
          <br /> {data[0]?.github}
          <br /> {data[0]?.linkedin}
        </div>
        <DataCreator />
      </div>
    </div>
  );
};

export default Home;
