import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-blue-900 py-6">
      <div className="container px-10 mx-auto my-8 flex flex-col md:flex-row justify-center items-center">
        <div className="flex justify-between text-white-900 mx-14 mb-4 md:mb-0">

          <Link href="/about" legacyBehavior>
            <a className="text-slate-200 font-sanf capitalize hover:text-white mx-3">More Link</a>
          </Link>

          <Link href="/contact" legacyBehavior>
            <a className="text-slate-200 font-sanf capitalize hover:text-white mx-3">link 1</a>
          </Link>

          <Link href="/contact" legacyBehavior>
            <a className="text-slate-200 font-sanf capitalize hover:text-white mx-3">link 2</a>
          </Link>
        </div>

        <div className="flex flex-col mx-14 items-center mb-4 md:mb-0">
          <img
            src="/logo white.png"
            alt="Logo"
            className="h-10 mr-2"
  
          />
          <span className="text-white tracking-[.8em] font-bold text-xl">SAIT</span>
        </div>

        <div className="flex justify-between mx-14 mb-4 md:mb-0">
          <Link href="/about" legacyBehavior>
            <a className="text-slate-200 font-sanf capitalize hover:text-white mx-3">more link</a>
          </Link>

          <Link href="/contact" legacyBehavior>
            <a className="text-slate-200 font-sanf capitalize hover:text-white mx-3">link 1</a>
          </Link>

          <Link href="/contact" legacyBehavior>
            <a className="text-slate-200 font-sanf capitalize hover:text-white mx-3">link 2</a>
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
