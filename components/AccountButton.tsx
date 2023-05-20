"use client"

import { useAuth } from "@context/authContext";
import { getAuth, signOut } from "firebase/auth";
import Link from "next/link";
import { useState } from "react";

export default function AccountButton() {

    const [toggleDropdown, setToggleDropdown] = useState(false);
    const user = useAuth();

    function handleLogout() {

      const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
      
    }

    

    return user.user? (
        <div className='flex'>
        <button
          className='outline_btn'
          onClick={() => setToggleDropdown(!toggleDropdown)}
        >
            My account
        </button>

        {toggleDropdown && (
          <div className='dropdown'>
            <Link
              href='/profile'
              className='dropdown_link'
              onClick={() => setToggleDropdown(false)}
            >
              My Profile
            </Link>
            <Link
              href='/my-loans'
              className='dropdown_link'
              onClick={() => setToggleDropdown(false)}
            >
              My Loans
            </Link>
            <button
              type='button'
              onClick={() => {
                setToggleDropdown(false);
                handleLogout();
              }}
              className='mt-5 w-full black_btn'
            >
              Sign Out
            </button>
          </div>
        )
            }
            </div>
                    ): (
    <Link href='/login' className='outline_btn'>
    Sign In
  </Link>
          );
}