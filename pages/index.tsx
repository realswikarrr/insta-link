import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["hello"]);

  if (isLoading || !data) return <div>Loading...</div>;

  return <div>{data.greeting}</div>;
};

export default Home;
