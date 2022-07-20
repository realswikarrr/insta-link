import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["getAllData"]);

  if (isLoading || !data) return <div>Loading...</div>;
  console.log(data);
  return (
    <div>
      {data[0].name} {data[0].portfolio} {data[0].github} {data[0].linkedin}
    </div>
  );
};

export default Home;
