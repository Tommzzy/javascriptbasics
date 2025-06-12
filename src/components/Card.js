import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
 
export const Card = ({ title, summary, img, link }) => {
  return (
    <motion.article
      className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-xl
      lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4 hover:shadow-2xl"
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        {img && (
          <Image priority src={img} alt={title} className="w-full h-auto" width={400} height={300} />
        )}
      </div>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span></span>
        {link ? (
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
              {title}
            </h2>
          </Link>
        ) : (
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        )}
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex flex-row items-center gap-4">
          <span className="font-semibold text-base">The best</span>
        </div>
      </div>
    </motion.article>
  );
};
 