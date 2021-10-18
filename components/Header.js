/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { BiMenu } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiX } from "react-icons/hi";
import { CgMenuGridO } from "react-icons/cg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Popover className="relative font-sans">
      <div className="w-full mx-auto px-4 sm:px-4 ">
        <div className="flex justify-start items-center sm:justify-end space-x-10">
          <div className=" font-sans flex items-center flex-1 justify-start sm:justify-end lg:w-0 space-x-6 h-16">
            <div>
              <a href="#" className="text-sm text-gray-600 hover:underline">
                Gmail
              </a>
            </div>
            <div>
              <a href="#" className="text-sm text-gray-600 hover:underline">
                Images
              </a>
            </div>

            <div className="hidden group hover:bg-ash hover:rounded-full p-1 sm:inline-flex text-gray-500 focus:outline-none ">
              <span>
                <CgMenuGridO className="text-2xl" />
              </span>
            </div>

            <a
              href="#"
              className="ml-8 whitespace-nowrap hidden sm:inline-flex font-sans  items-center justify-center px-6 py-2 border border-transparent rounded-md hover:shadow-md text-sm text-white bg-beaublue"
            >
              Sign in
            </a>
          </div>
          <div className="static right-0 sm:hidden group hover:bg-ash hover:rounded-full p-1 inline-flex text-gray-500 focus:outline-none ">
            <span>
              <CgMenuGridO className="text-2xl" />
            </span>
          </div>
        </div>
      </div>
    </Popover>
  );
}
