import Link from "next/link";
import Image from "next/image";
import AccountButton from "@components/AccountButton";
import NavBarMobileMenu from "@components/NavBarMobileMenu";

export default function NavBar() {
    return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/loan-svgrepo-com.svg'
          alt='logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>Lendotopia</p>
      </Link>

      {/* Desktop Navigation */}
      <div className='hidden sm:flex'>
          <div className='flex gap-3 md:gap-5'>
            <Link href='/apply' className='black_btn'>
              Apply
            </Link>

            <Link href='/about' className='outline_btn'>
              About
            </Link>

            <div className="flex relative">

            <AccountButton />
            </div>
          </div>
      </div>
      {/* Mobile Navigation */}
      <div className='flex sm:hidden'>
        <NavBarMobileMenu></NavBarMobileMenu>
      </div>

    </nav>
  );
}
