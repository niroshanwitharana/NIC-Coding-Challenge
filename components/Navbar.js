import Link from "next/link"
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src='/NIC-logo.jpg' alt='nic-logo'  width={110} height={77} />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/events/">Events</Link>
    </nav>
  );
};

export default Navbar;
