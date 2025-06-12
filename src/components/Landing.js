import Image from "next/image";
import profile from "../../public/images/spider.jpeg";
 
export default function Landing() {
  return (
    <div className=" flex items-center justify-between w-full min-h-screen">
      <div className=" w-1/2 flex flex-col items-center self-center">
        <div className=" w-full items-center justify-center ml-16 p-6 pl-10">
          <h1 className=" font-bold m-6 text-6xl !text-white w-[426px] h-[72px]">
            
            Spiderman
          </h1>
          <p className="m-6 my-10 w-[528px] h-[72px]">
            Your Friendly Neighbourhood Web Slinging Superhero
          </p>
 
          <a
            href=""
            className="m-6 border py-[21px] px-[64px] bg-green-500 text-white rounded-sm"
          >
            Resume
          </a>
        </div>
      </div>
      <div className=" w-1/2">
        <Image
          src={profile}
          alt=""
          className="w-full max-h-screen object-cover"
          priority
        />
      </div>
    </div>
  );
}
 
 