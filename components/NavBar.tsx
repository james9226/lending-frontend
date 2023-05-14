import Link from "next/link";
import Image from "next/image";
import AccountButton from "./AccountButton";

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
      <div className='sm:flex hidden'>
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
{/* 
            <button type='button' onClick={signOut} className='outline_btn'> 
              Sign Out
            </button> */}

            {/* <Link href='/account'>
              <Image
                src='/assets/images/loan-svgrepo-com.svg'
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
            </Link> */}
          </div>
      </div>

    </nav>
  );
}
