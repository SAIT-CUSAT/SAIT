import Head from 'next/head';
import { useState } from 'react';
import Hero from '../common/UI/home/Hero';
import Logo from "../../public/companes.png";
import Image from 'next/image';
import CompLogo1 from '../../public/company_logo/cognizant.png'
import Footer from '../common/components/Footer';


const companies = [
    {
        id: 1,
        name: "Cognizant Technology solution",
        dept: "information technology",
        logo: '/company_logo/cognizant.png',
        jobs: 784,

    },
    {
        id: 2,
        name: "accenture",
        dept: "information technology",
        logo: '/company_logo/accenter.png',
        jobs: 254,

    },
    {
        id: 3,
        name: "concentrix",
        dept: "information technology",
        logo: '/company_logo/concentric.png',
        jobs: 124,

    },
    {
        id: 4,
        name: "Tata consultancy services (TCS)",
        dept: "information technology",
        logo: '/company_logo/tcs.png',
        jobs: 654,

    },
    {
        id: 5,
        name: "Wipro",
        dept: "information technology",
        logo: '/company_logo/wipro.png',
        jobs: 95,

    },
    {
        id: 6,
        name: "Infoys",
        dept: "information technology",
        logo: '/company_logo/infocys.png',
        jobs: 562,

    },
    {
        id: 5,
        name: "ibm",
        dept: "information technology",
        logo: '/company_logo/ibm.png',
        jobs: 320,

    },
    {
        id: 8,
        name: "tech mahindra",
        dept: "information technology",
        logo: '/company_logo/mahindra.png',
        jobs: 80,

    },
    {
        id: 9,
        name: "amacon.com",
        dept: "Retail and wholesale",
        logo: '/company_logo/amazon.png',
        jobs: 61,

    },
    {
        id: 10,
        name: "Teleperformance",
        dept: "Telecommunications",
        logo: '/company_logo/telecom.png',
        jobs: 154,

    },

];

const PlacementPage = () => {

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
            <div className="flex flex-wrap flex-col justify-around container gap-5 mx-auto my-14 p-8">
                {companies.map((company) => (
                    <div key={companies.id} className='flex  justify-between items-center rounded-md p-10 bg-blue-900' >
                        <div className="flex flex-wrap justify-between ">
                            <div>
                                <Image
                                    src={company.logo}
                                    alt="Picture of the author"
                                    width={66}
                                    height={66}
                                />
                            </div>
                            <div className="flex flex-wrap flex-col justify-between ml-5 text-stone-200 capitalize">
                                <h1 className='text-3xl font-semibold '>{company.name}</h1>
                                <p className='text-base'>{company.dept}</p>
                            </div>
                        </div>
                        <div className="">
                            <button class="bg-transparent text-stone-200 font-bold font-semibold hover:bg-stone-200 hover:text-blue-900 py-1 mx-2 px-14  border border-stone-200 hover:border-transparent rounded">
                                {company.jobs}+ Jobs
                            </button>
                            <button class="bg-transparent text-stone-200 font-semibold hover:bg-stone-200 hover:text-blue-900 py-1 mx-2 px-14 border border-stone-200 hover:border-transparent rounded">
                                know more
                            </button>
                        </div>
                    </div>
                ))}



            </div>
            <div className="bg-bg-image md:bg-cover md:bg-center h-screen grayscale hover:grayscale-0 py-10 md:py-24 px-5 md:px-10 text-white flex flex-col justify-center items-center">
                <button className="px-9 mt-10 mb-14 py-1.5 border-2 rounded-md border-stone-200 font-bold text-stone-200">
                    EXPLORE
                </button>
                <div className='max-w-7xl mx-auto'>

                    <p>Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus</p>

                </div>
                
            </div>
        </div>


    );
}

export default PlacementPage
