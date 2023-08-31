import React, { useState, useEffect } from 'react';
import { client } from '../../../sanity/lib/client';
import Card from '../UI/home/Card';
import AlumniModal from './AlumniModal'; // Import your AlumniModal component

const AlumniList = () => {
  const [alumniData, setAlumniData] = useState([]);
  const [selectedAlumni, setSelectedAlumni] = useState(null); // State to store selected alumni details

  useEffect(() => {
    // Fetch alumni data using GROQ query
    const query = `*[_type == "alumni"] {
      name,
      company,
      designation,
      "imageUrl": image.asset->url,
      yearOfPassout,
      bio
    }`;

    client
      .fetch(query)
      .then((data) => {
        // Set the fetched data in the state
        setAlumniData(data);
      })
      .catch((error) => {
        console.error('Error fetching alumni data:', error);
      });
  }, []);

  const openModal = (alumni) => {
    setSelectedAlumni(alumni);
  };

  const closeModal = () => {
    setSelectedAlumni(null);
  };

  return (
    <div className='p-4'>
      <h1 className="md:text-3xl text-2xl font-bold md:tracking-[1.5em] text-center font-sans uppercase mb-10">
        FEATURED ALUMNI
      </h1>
      {alumniData.map((alumni) => (
        <div key={alumni.name} onClick={() => openModal(alumni)}>
          <Card title={alumni.name} img={alumni.imageUrl}></Card>
        </div>
      ))}

      {/* Conditional rendering of AlumniModal */}
      {selectedAlumni && (
        <AlumniModal alumni={selectedAlumni} onClose={closeModal} />
      )}
    </div>
  );
};

export default AlumniList;
