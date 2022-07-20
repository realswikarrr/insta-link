import type { NextPage } from "next";
import DataCreator from "../components/details";
import { trpc } from "../utils/trpc";
import Image from "next/image";
import myGIf from "../public/images/dog.gif";

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["datas.getAll"]);

  if (isLoading || !data) return <div>Loading...</div>;

  return (
    <div className="mx-auto p-40 h-screen max-w-screen-lg">
      <h1 className="mx-auto text-center text-3xl ">Enter Your Details</h1>
      <div className="flex justify-center">
        <Image
          src={myGIf}
          alt="my gif"
          height={200}
          width={200}
          className="mx-auto"
        />
      </div>
      <DataCreator />
    </div>
  );
};

export default Home;
