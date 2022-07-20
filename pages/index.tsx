import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
import Image from "next/image";
import myGIf from "../public/images/dog.gif";
import Profile from "../components/profile";

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["datas.getAll"]);

  if (isLoading || !data)
    return (
      <div className="flex justify-center">
        <Image
          src={myGIf}
          alt="my gif"
          height={200}
          width={200}
          className="mx-auto"
        />
      </div>
    );

  console.log(data[0]?.image);

  return (
    <Profile
      name={data[0]?.name}
      image={data[0]?.image}
      portfolio={data[0]?.portfolio}
      github={data[0]?.github}
      linkedin={data[0]?.linkedin}
    />
  );
};

export default Home;
