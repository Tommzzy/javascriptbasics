"use client";
import { Card } from "@/components/Card";
import Nav from "@/components/Nav";
import mid from "../../../public/images/midtown.jpg";
import future from "../../../public/images/future.jpg";

export default function Education() {
  return (
    <section className="w-full min-h-screen mb-16 flex flex-col items-center justify-center bg-black text-white ">
      <Nav />
      <div className=" grid grid-cols-12 gap-8 p-6 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
        <div className=" col-span-12 mx-auto">
          <h1 className="text-5xl font-bold">Education</h1>
        </div>
        <div className="col-span-6">
          <Card
            title={"Midtown"}
            summary="Aced it
"
            link={""}
            img={mid}
          />
        </div>
        <div className="col-span-6">
          <Card
            title={"Future Academy"}
            summary="Failure
"
            link={""}
            img={future}
          />
        </div>
      </div>
    </section>
  );
}
