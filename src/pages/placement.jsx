import Head from 'next/head';
import { useState } from 'react';
import Hero from '../common/UI/home/Hero';
import Logo from "../../public/companes.png";
import Image from 'next/image';
import CompLogo1 from '../../public/company_logo/cognizant.png'


const events = [
    {
        id: 1,
        title: 'Job Fair 2023',
        date: 'May 12, 2023',
        description: 'Meet and network with top employers from various industries',
    },
    {
        id: 2,
        title: 'Resume Workshop',
        date: 'June 23, 2023',
        description: 'Learn how to craft a compelling resume and cover letter',
    },
    {
        id: 3,
        title: 'Mock Interviews',
        date: 'July 28, 2023',
        description: 'Practice your interview skills with experienced professionals',
    },
];

const members = [
    {
        id: 1,
        name: 'John Doe',
        position: 'President',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 2,
        name: 'Jane Smith',
        position: 'Vice President',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 3,
        name: 'Bob Johnson',
        position: 'Treasurer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
];

export default function PlacementPage() {
    const [selectedTab, setSelectedTab] = useState('events');

    const renderEvents = () => {
        return events.map((event) => (
            <div key={event.id} className="my-6">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-gray-500">{event.date}</p>
                <p className="mt-2">{event.description}</p>
            </div>
        ));
    };

    const renderMembers = () => {
        return members.map((member) => (
            <div key={member.id} className="my-6">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.position}</p>
                <p className="mt-2">{member.bio}</p>
            </div>
        ));
    };

    return (
        <div className="container mx-auto flex-col justify-between ">
            <Hero />

            <div className='container'>
                <div className=' mx-auto text-center my-14'>
                    <h1
                        className='text-3xl font-bold text-blue-900 tracking-[.8em] font-serif uppercase'
                    >
                        Our Top Recruiters
                    </h1>
                </div>
                <div className="flex my-10 flex-wrap justify-center items-center">
                    <Image
                        src={Logo}
                        alt="Picture of the author"
                        width={853}
                        height={500}
                    />
                </div>
                <div className='mx-10 text-center my-14 text-blue-500'>
                    <p>Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus</p>
                </div>

            </div>
            <div className="flex flex-wrap flex-col justify-around container gap-5 mx-auto my-10 p-8">
                <div className='flex  justify-between items-center p-10 bg-blue-900' >
                    <div className="flex flex-wrap justify-between ">
                        <div >
                            <Image
                                src={CompLogo1}
                                alt="Picture of the author"
                                width={66}
                                height={66}
                            />
                        </div>
                        <div className="flex flex-wrap flex-col justify-between ml-5 text-stone-200 capitalize">
                            <h1 className='text-3xl font-semibold '>Cognizant Technology solution</h1>
                            <p className='text-base'>information Technology</p>
                        </div>
                    </div>
                    <div className="">
                        <button class="bg-transparent hover:bg-blue-500 text-stone-200 font-bold font-semibold hover:text-white py-1 mx-2 px-14  border border-stone-200 hover:border-transparent rounded">
                            784 Jobs
                        </button>
                        <button class="bg-transparent hover:bg-blue-500 text-stone-200 font-semibold hover:text-white py-1 mx-2 px-14 border border-stone-200 hover:border-transparent rounded">
                            know more
                        </button>
                    </div>
                </div>
                <div className='p-10 bg-blue-900' >1</div>
                <div className='p-10 bg-blue-900' >1</div>
                <div className='p-10 bg-blue-900' >1</div>
                <div className='p-10 bg-blue-900' >1</div>

            </div>
        </div>


    );
}
