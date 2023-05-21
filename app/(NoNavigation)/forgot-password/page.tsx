'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from "firebase/auth"; 

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false)


  function handlePasswordReset(e) {
    e.preventDefault();

    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
    .then(() => {
        // Signed in 
        // ...
        setEmailSent(true)
      })
      .catch((error) => {
        setEmailSent(true)
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }

  return (
    emailSent?
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link href='/' className='flex gap-2 flex-center'>
      <Image
        src='/assets/images/loan-svgrepo-com.svg'
        alt='logo'
        height={30}
        width={30}
        className='mx-auto h-10 w-auto'
      />
    </Link>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Please check your inbox!
        </h2>
      </div>
      </div> 
      </>
:
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/loan-svgrepo-com.svg'
          alt='logo'
          height={30}
          width={30}
          className='mx-auto h-10 w-auto'
        />
      </Link>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Forgot your password?
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handlePasswordReset}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Send reset email
              </button>
            </div>
          </form>

        </div>
      </div>
    </>
  )
    }