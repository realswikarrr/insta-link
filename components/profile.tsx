import { IoHomeSharp, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import Layout from "./layout";

interface Props {
  name: any;
  image: any;
  portfolio: any;
  github: any;
  linkedin: any;
}

const Profile: React.FC<Props> = ({
  name,
  image,
  portfolio,
  github,
  linkedin,
}) => {
  return (
    <div className="bg-my-bg h-screen bg-screen">
      <Layout>
        <div className="flex flex-col items-center min-w-full">
          <div className="flex flex-wrap justify-center">
            <div className="mt-7">
              <img
                src={image}
                alt="..."
                className="shadow rounded-full w-24 h-24 align-middle border-2 border-white-500"
              />
            </div>
          </div>

          <div className="mt-2 text-xs bg-black border border-white-500 rounded-xl p-1.5 lowercase">
            <h1>@{name}</h1>
          </div>

          <div className="backdrop-blur-sm bg-white/40 rounded-2xl  mt-5 w-1/3 ">
            <a
              href={portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black p-5 flex flex-row justify-center items-center "
            >
              <IoHomeSharp className="mr-2" /> <h1>Portfolio</h1>{" "}
            </a>
          </div>

          <div className="backdrop-blur-sm bg-white/40 rounded-2xl  mt-5 w-1/3 ">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black p-5 flex flex-row justify-center items-center "
            >
              <IoLogoGithub className="mr-2" /> <h1>GitHub</h1>{" "}
            </a>
          </div>

          <div className="backdrop-blur-sm bg-white/40 rounded-2xl  mt-5 w-1/3 ">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black p-5 flex flex-row justify-center items-center "
            >
              <IoLogoLinkedin className="mr-2" /> <h1>Linkedin</h1>{" "}
            </a>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Profile;
