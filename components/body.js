import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import Style from "../styles/body.module.css";

export default function Body() {
  const [query, setQuery] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      let url = `https://www.google.com/search?q=${query}`;
      window.location.href = url;

      let response = await fetch(url);
      let result = await response.json();
      handler(result);
    } catch (err) {
      alert.show(err);
    }
  };
  return (
    <div>
      <div className="flex justify-center mt-2 lg:mt-0">
        <img src="/google.png" className="w-44 h-14 sm:w-60 sm:h-20" />
      </div>
      <div className={Style.formcontainer}>
        <form
          className="flex justify-start sm:justify-around items-center h-full px-2 sm:px-5 border border-gray-200 hover:shadow-md "
          autoComplete="off"
          onSubmit={formSubmit}
          id={Style.formbox}
        >
          <button className={Style.search}>
            {" "}
            <FaSearch />
          </button>
          <input
            className=" placeholder-gray-400 sm:placeholder-gray-500 ml-4 sm:ml-0 text-sm sm:text-base"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            id={Style.inputcontainer}
            name="searchbox"
            placeholder="Search Google"
          />
        </form>
      </div>
      <div className="text-center mt-6 hidden sm:block">
        <a
          href="#"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm rounded-md text-gray-500 bg-lightash focus:outline-none hover:border hover:border-gray-200 hover:shadow-sm"
        >
          Google search
        </a>
        <a
          href="https://perfects.engineering"
          className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm  rounded-md text-gray-500 bg-lightash   focus:outline-none hover:border hover:border-gray-200 hover:shadow-sm"
        >
          I'm Feeling Lucky
        </a>
      </div>
      <div className=" flex justify-center mt-4 sm:mt-8">
        <div className="flex flex-col items-center sm:flex-row text-sm text-gray-500 ">
          <p> Google offered in: </p>
          <p className="mt-2 sm:mt-0 sm:ml-1">
            <a href="#" className="ml-2 hover:underline text-blue-600">
              Hausa
            </a>
            <a href="#" className="ml-2 hover:underline text-blue-600">
              Igbo
            </a>
            <a href="#" className="ml-2 hover:underline text-blue-600">
              Èdè Yorùbá
            </a>
            <a href="#" className="ml-2 hover:underline text-blue-600">
              Pidgin
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
