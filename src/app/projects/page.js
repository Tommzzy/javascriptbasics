import Nav from "@/components/Nav";
import React from "react";

function Projects() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <Nav />
      <section className="w-screen overflow-hidden h-screen text-white flex items-center justify-center m-0 bg-fixed bg-center bg-cover custom-img">
        <div className="w-1/2"></div>

        <div className="w-1/2 flex items-center justify-center">
          <ul>
            <li>
              He is brave and always willing to risk his life to protect others.
            </li>
            <li>
              He has a strong moral compass, inspired by the values taught by
              his Uncle Ben and Aunt May.
            </li>
            <li>
              He brings a youthful, relatable energy to the Avengers team.
            </li>
            <li>
              He's incredibly intelligent, especially in science and technology.
            </li>
            <li>
              He develops meaningful relationships with other heroes, like Tony
              Stark and Ned Leeds.
            </li>
            <li>
              Despite his powers, he stays humble and grounded as a friendly
              neighborhood Spider-Man.
            </li>
          </ul>
        </div>
      </section>
      <h1>Projects</h1>
    </main>
  );
}

export default Projects;
