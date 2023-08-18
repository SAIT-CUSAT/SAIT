import React, { useState, useEffect } from "react";
import { client } from "../../../sanity/lib/client"; // Import your Sanity client instance
import Link from "next/link";

function NoteList() {
  const [notes, setNotes] = useState([]);
//   const [filteredNotes, setFilteredNotes] = useState([]);
//   const [selectedSemester, setSelectedSemester] = useState('');
//   const [selectedSubject, setSelectedSubject] = useState('');
//   const [selectedModule, setSelectedModule] = useState('');

  useEffect(() => {
    const query = `*[_type == "note"]{
      topic,
      link,
      semester,
      subject,
      module
    }`;

    client
      .fetch(query)
      .then((data) => {
        console.log("Fetched data:", data);
        setNotes(data);
        // setFilteredNotes(data); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

//   useEffect(() => {
//     // Filter notes based on selected filters
//     const filtered = notes.filter(note => (
//       (!selectedSemester || note.semester === selectedSemester) &&
//       (!selectedSubject || note.subject === selectedSubject) &&
//       (!selectedModule || note.module === selectedModule)
//     ));

//     setFilteredNotes(filtered);
//   }, [selectedSemester, selectedSubject, selectedModule, notes]);

  return (
    <div className="p-4">
      <h1 className="md:text-3xl md:my-0 my-5 text-2xl font-bold md:tracking-[1.5em] text-center font-sans uppercase md:mb-10">
        STUDY RESOURCES
      </h1>
      {/* Filter Controls */}
      {/* <div>
        <label>Semester:</label>
        <input type="number" value={selectedSemester} onChange={e => setSelectedSemester(e.target.value)} />
        <label>Subject:</label>
        <input type="text" value={selectedSubject} onChange={e => setSelectedSubject(e.target.value)} />
        <label>Module:</label>
        <input type="number" value={selectedModule} onChange={e => setSelectedModule(e.target.value)} />
      </div> */}
      <ul className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {notes.map((note) => (
          <li key={note.topic}>
            <Link href={note.link}>
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
              {/* <p>Link: <a href={note.link} target="_blank" rel="noopener noreferrer">{note.link}</a></p>
                <p>Semester: {note.semester}</p>
                <p>Subject: {note.subject}</p>
                <p>Module: {note.module}</p> */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
