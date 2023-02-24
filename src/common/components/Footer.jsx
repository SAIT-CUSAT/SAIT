import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo white.png';

const Footer = () => {
  return (
    <footer className="bg-blue-900 py-6">
      <div className="container px-10 mx-auto my-8 flex flex-col md:flex-row justify-center items-center">
        <div className="flex justify-between text-white-900 mx-14 mb-4 md:mb-0">

          <Link href="/about" legacyBehavior>
            <p className="text-slate-200 font-sanf capitalize hover:text-white mx-3">More Link</p>
          </Link>

          <Link href="/contact" legacyBehavior>
            <p className="text-slate-200 font-sanf capitalize hover:text-white mx-3">link 1</p>
          </Link>

          <Link href="/contact" legacyBehavior>
            <p className="text-slate-200 font-sanf capitalize hover:text-white mx-3">link 2</p>
          </Link>
        </div>

        <div className="flex flex-col mx-14 items-center mb-4 md:mb-0">
          <Image
            src={logo}
            alt="Logo"
            className="h-14 w-14 mr-2"
  
          />
          <span className="text-white tracking-[.8em] font-bold text-xl">SAIT</span>
        </div>

        <div className="flex justify-between mx-14 mb-4 md:mb-0">
          <Link href="/about" legacyBehavior>
            <p className="text-slate-200 font-sanf capitalize hover:text-white mx-3 cursor-pointer">more link</p>
          </Link>

          <Link href="/contact" legacyBehavior>
            <p className="text-slate-200 font-sanf capitalize hover:text-white mx-3 cursor-pointer">link 1</p>
          </Link>

          <Link href="/contact" legacyBehavior>
            <p className="text-slate-200 font-sanf capitalize hover:text-white mx-3 cursor-pointer">link 2</p>
          </Link>
        </div>
      </div>

      <div className="flex justify-center text-gray-400 text-sm">
          <span>&copy; Copyright 2022 Student Association of Information technology - All Rights Reserved.</span>
        </div>
    </footer>
  );
};

export default Footer;
