"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import HighlightedHeading from "./HighlightedHeading";

export default function CTA({ data }) {
  const router = useRouter();
  console.log(data);
  const { heading, text, Link, image } = data;
  const { url, alternativeText} = image.data.attributes;
  console.log(image.url, "image");

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center my-24 mx-4">
      <div>
        <div className="text-3xl lg:text-6xl xl:text-8xl text-color-gray tracking-1px font-extrabold">
          <HighlightedHeading
            heading={heading}
            color="text-color-purple"
            className="mt-2 lg:mt-0"
          />
        </div>
        <h2 className="text-lg lg:text-2xl tracking-wide leading-9 lg:w-10/12 mt-2 lg:mt-6 text-color-gray-light">
          {text}
        </h2>
        <button
          onClick={() => router.push(Link.href)}
          className="flex items-center relative focus:outline-none justify-center mt-5 lg:mt-10 text-lg lg:text-2xl font-medium text-white p-4 lg:p-8 bg-color-purple rounded-3xl"
        >
          {Link.text}
          <svg
            className="ml-8"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="17"
            viewBox="0 0 26 17"
            fill="none"
          >
            <path
              d="M1.33333 8.6665H24.6667"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 15.3332L24.6667 8.6665"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 2L24.6667 8.66667"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="w-full custom-height bg-purple-light mt-8 lg:mt-0 rounded-3xl relative overflow-hidden">
        <Image
          loading="lazy"
          className="custom-height"
          src={url}
          alt={alternativeText || "Generic Image"}
          fill
          
        />
      </div>
    </div>
  );
}
