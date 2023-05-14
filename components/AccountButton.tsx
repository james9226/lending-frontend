"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

export default function AccountButton() {

    const [signedIn, setSignedIn] = useState(true);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    return signedIn? (
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
              href='/create-prompt'
              className='dropdown_link'
              onClick={() => setToggleDropdown(false)}
            >
              Create Prompt
            </Link>
            <button
              type='button'
              onClick={() => {
                setToggleDropdown(false);
                setSignedIn(false);
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