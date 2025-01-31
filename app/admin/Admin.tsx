import React from "react";
import Link from "next/link";

export default function Admin() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-14 flex justify-between bg-gradient-to-r from-blue-700 to-sky-200">
      <div className="">
        <Link href="/">
        <img
          src="https://res.cloudinary.com/dcyr5qkhg/image/upload/v1737971947/vitaly_ucr8hf.png"
          alt="vitaly"
          className="h-14 w-60"
        />
        </Link>
      </div>
      <div className="flex items-center gap-10 text-2xl">
        <div>Bienvenido Admin</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
    <div className="w-60 flex-grow bg-gradient-to-r from-blue-700 to-sky-200">
      baralateral
    </div>
    </div>
  );
}
