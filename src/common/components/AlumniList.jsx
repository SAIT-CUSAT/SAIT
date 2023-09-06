import React, { useState, useEffect } from 'react';
import { client } from '../../../sanity/lib/client';
import AlumniModal from './AlumniModal'; // Import your AlumniModal component
import AlumniCard from '../UI/alumni/AlumniCard';

const   AlumniList = () => {
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
        setAlumniData(data);
        console.log(data)
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
        <div className='w-max' key={alumni._id} onClick={() => openModal(alumni)}>
          <AlumniCard title={alumni.name} img={alumni.imageUrl} company={alumni.company} designation={alumni.designation} />
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
