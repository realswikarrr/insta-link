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
    setName("");
    setPort("");
    setGit("");
    setLink("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="relative z-0 mb-6 w-full group">
        <input
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          type="text"
          placeholder=" "
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Your Full Name
        </label>
      </div>

      <div className="relative z-0 mb-6 w-full group">
        <input
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          type="text"
          placeholder=" "
          required
          value={port}
          onChange={(e) => setPort(e.target.value)}
        />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Your Portfolio Link
        </label>
      </div>

      <div className="relative z-0 mb-6 w-full group">
        <input
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          type="text"
          placeholder=" "
          required
          value={git}
          onChange={(e) => setGit(e.target.value)}
        />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Your GitHub Link
        </label>
      </div>

      <div className="relative z-0 mb-6 w-full group">
        <input
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          type="text"
          placeholder=" "
          required
          value={link}
          onChange={(e) => {
            setLink(e.target.value);
          }}
        />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Your Linkedin Link
        </label>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
      <button
        type="button"
        className="mt-2 md:ml-2 sm:ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Sign In
      </button>
    </form>
  );
};

export default DataCreator;
