import Link from "next/link"
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
      <Link href="/"> <Image src='/NIC-logo.jpg' alt='nic-logo'  width={110} height={77} /></Link>
      </div>
      
      <Link href="/events/">Events</Link>
      <Link href="/about">About</Link>
    </nav>
  );
};

export default Navbar;
