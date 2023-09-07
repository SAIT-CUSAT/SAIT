import React, { useState, useEffect } from "react";
import { client } from "../../../sanity/lib/client";
import Link from "next/link";
import { useForm } from "react-hook-form";

function NoteList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const [CheckSearch, setCheckSearch] = useState(true);

  useEffect(() => {
    console.log("Loading status:", isLoading);
  }, [isLoading]);

  const handleFilterSubmit = (data) => {
    console.log("Filter data:", data);
    setSearchButtonClicked(true);
    setCheckSearch(false);
    setIsLoading(true);

    // Construct the GROQ query based on selected values
    let query = `*[_type == "note"`;

    if (data.semester !== "0") {
      query += ` && semester == ${data.semester}`;
    }

    if (data.module !== "0") {
      query += ` && module == ${data.module}`;
    }

    query += `] {
      topic,
      link,
      semester,
      subject,
      module
    }`;

    client
      .fetch(query)
      .then((data) => {
        console.log("Filtered data:", data);
        setSearchResults(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false); // Set loading status back to false
      });
  };

  const handleSearch = () => {
    setCheckSearch(false);
    setSearchButtonClicked(true);
    setIsLoading(true);
    // Fetch data based on the search query
    if (searchQuery.trim() !== "") {
      // Fetch data based on the search query
      const query = `*[_type == "note" && topic match $search] {
        topic,
        link,
        semester,
        subject,
        module
      }`;

      client
        .fetch(query, { search: `*${searchQuery}*` })
        .then((data) => {
          console.log("Fetched data:", data);
          setSearchResults(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          setIsLoading(false); // Set loading status back to false
        });
    } else {
      setSearchResults([]);
      setIsLoading(false); // Clear search results if search query is empty
    }
    setSearchQuery("");
  };
  const noResultsFound = searchButtonClicked && searchResults.length === 0;
  return (
    <div className="p-4">
      <h1 className="md:text-3xl md:my-0 my-5 text-2xl font-bold md:tracking-[1.5em] text-center font-sans uppercase md:mb-10">
        STUDY RESOURCES
      </h1>

      {/* Search bar */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 mb-4">
        <div className="flex flex-row w-1/2 justify-center items-center gap-2">
          <input
            type="text"
            placeholder="Search by topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border h-8 border-gray-300 px-2 py-1 rounded-md min-w-[280px]a"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-1 rounded-md mr-4"
          >
            Search
          </button>
        </div>
        <form
          onSubmit={handleSubmit(handleFilterSubmit)}
          className="flex flex-row gap-3 items-center justify-center"
        >
          {/* <label className="p-1 font-semibold uppercase">Semester:</label> */}
          <select
            {...register("semester")}
            className="rounded-md p-1"
            name="semester"
          >
            <option value="0">Select Semester</option>
            <option value="1">Semester 1</option>
            <option value="2">Semester 2</option>
            <option value="3">Semester 3</option>
            <option value="4">Semester 4</option>
            <option value="5">Semester 5</option>
            <option value="6">Semester 6</option>
            <option value="7">Semester 7</option>
            <option value="8">Semester 8</option>
          </select>
          {/* <label className="p-1 font-semibold uppercase">Module:</label> */}
          <select
            {...register("module")}
            className="rounded-md p-1"
            name="module"
          >
            <option value="0">Select Module</option>
            <option value="1">Module 1</option>
            <option value="2">Module 2</option>
            <option value="3">Module 3</option>
            <option value="4">Module 4</option>
          </select>
          <button
            className="bg-blue-500 text-center text-white px-4 py-1 w-[70px] rounded-md mr-4"
            type="submit"
          >
            Filter
          </button>
        </form>
      </div>

      {CheckSearch ? (
        <div className="flex text-xl font-bold flex-row justify-center text-gray-600 items-center gap-2 mb-4 min-h-[20rem]">
          Search for Notes...
        </div>
      ) : (
        <ul className="w-full min-h-[20rem] text-center grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
          {isLoading ? (
            <p className="w-full text-xl font-bold h-full flex justify-center items-center text-center md:col-span-3 sm:col-span-2 text-gray-600">
              Loading...
            </p>
          ) : noResultsFound ? (
            <p
              className={`w-full text-xl font-bold h-full flex justify-center items-center text-center md:col-span-3 sm:col-span-2 text-gray-600 ${
                noResultsFound ? "block" : "hidden"
              }`}
            >
              NO RESULTS FOUND...
            </p>
          ) : (
            searchResults.map((note) => (
              <Link key={note.topic} href={note.link}>
                <div className="border-2 border-blue-900 rounded-xl bg-gray-400 p-4 flex items-center gap-3 h-max">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                  <h3 className="font-bold text-lg">{note.topic}</h3>
                </div>
              </Link>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

export default NoteList;
