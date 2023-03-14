import Link from "next/link"
 niro/feat/components


import Image from 'next/image'
 niro/feat/initial-setup
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
 niro/feat/components
       

        <Image src='/NIC-logo.jpg' alt='nic-logo'  width={110} height={77} />
 niro/feat/initial-setup
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/events/">Events</Link>
    </nav>
  );
};

export default Navbar;
