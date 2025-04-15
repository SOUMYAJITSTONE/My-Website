import { FaLocationArrow } from "react-icons/fa6";
import Image from 'next/image';

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] pb-10 md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
        Turning ideas into code that’s <span className="text-purple"> my thing.</span> 
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how we can work together.
        </p>
        <a href="mailto:soumyajitsanyal02@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Soumyajit Sanyal
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image
  src={info.img}
  alt="icons"
  width={20}
  height={20}
  unoptimized // optional: if you're using local static files and don't need optimization
/>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;