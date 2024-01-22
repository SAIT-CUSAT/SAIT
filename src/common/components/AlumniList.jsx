import React, { useState, useEffect } from 'react';
import { client } from '../../../sanity/lib/client';
import AlumniModal from './AlumniModal'; // Import your AlumniModal component
import AlumniCard from '../UI/alumni/AlumniCard';
import Link from 'next/link';

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
      linkedin
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
  return (
    <div className='p-4'>
      <h1 className="text-black md:text-3xl text-2xl font-bold md:tracking-[1.5em] text-center overflow-y-hidden font-sans uppercase mb-6">
        FEATURED ALUMNI
      </h1>
      <div className='flex flex-wrap justify-center gap-5 my-20'>
        {alumniData.map((alumni,index) => (
          <div className='w-max' key={index}>
            <Link href={alumni.linkedin} target='_blank'>
              <AlumniCard key={index} title={alumni.name} img={alumni.imageUrl} company={alumni.company} designation={alumni.designation} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniList;
