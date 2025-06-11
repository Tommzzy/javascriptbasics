import Image from 'next/image';
import profile from "../../public/Images/temp.jpg"
export default function Landing() {
  return (
    <div className="flex items-center justify-between w-full min-h-screen">  
      <div className="w-1/2 flex flex-col items-center self-center">
        <div className="w-full items-centre justify-centre ml-10 p-6 pl-10">
          <h1 className=" font-bold m-6 text-5xl"> Your Name</h1>
          <p className="m-6 my-10">
            I am a software engineer specializing in artificial intelligence and machine learning
          </p>

          <a href="" className="m-6 border py-4 px-10 bg-green-500 rounded-sm">Resume </a>
        </div>
      </div>
      <div className="w-1/2">
      <Image 
      src={profile}
      
      className="w-full h-auto"/> 
      
      </div>
    </div>
  );
}