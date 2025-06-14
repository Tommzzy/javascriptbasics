import React from 'react'
import Link from "next/link";
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons';

function Nav() {
  return (
    <header className="w-full px-32 py-8  bg-tahiti !text-midnight font-medium flex items-center justify-between relative z-10">
        <div className=" w-full flex justify-between items-center ">
            <nav className=" w-full flex justify-between items-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/education"}>education</Link>
        <Link href={"/projects"}>project</Link>
        <Link href={"/contact"}>contact</Link>
      </nav>
      <nav className="w-full flex items-center justify-center flex-wrap">
        <a href="/" className=" mx-3"><LinkedInIcon /></a>
        <a href="/" className=" mx-3"><GithubIcon /></a>
        <a href="/" className=" mx-3"><TwitterIcon /></a>
        </nav>
            </div>
    </header>
  )
}

export default Nav
