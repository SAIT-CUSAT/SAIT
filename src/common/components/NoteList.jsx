import React, { useState, useEffect } from "react";
import { client } from "../../../sanity/lib/client";
import Link from "next/link";

function NoteList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
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
      });
  };

  return (
    <div className="p-4">
      <h1 className="md:text-3xl md:my-0 my-5 text-2xl font-bold md:tracking-[1.5em] text-center font-sans uppercase md:mb-10">
        STUDY RESOURCES
      </h1>

      {/* Search bar */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search by topic..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 px-2 py-1 rounded-md w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-1 rounded-md"
        >
          Search
        </button>
      </div>
      {/* Display search results */}
      <ul className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {searchResults.map((note) => (
          <Link key={note.topic} href={note.link}>
            <div className="border-2 border-blue-900 rounded-xl h-full bg-gray-400 p-4 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              <h3 className="font-bold text-lg">{note.topic}</h3>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
