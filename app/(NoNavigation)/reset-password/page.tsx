'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import { confirmPasswordReset, getAuth } from "firebase/auth"; 
import { redirect, useRouter } from 'next/navigation';
import ValidatePassword from "@domain/validators/password";
import StyledButton from "@components/Button";

export default function ResetPasswordPage({
searchParams,
}: {
searchParams?: { [key: string]: string | string[] | undefined };
}) {

  const [password, setPassword] = useState('');
  const [retypedPassword, setRetypedPassword] = useState('');
  const [passwordsMatch, setPasswordsMatched] = useState(true);
  const [validationError, setValidationError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const resetCode = Array.isArray(searchParams.oobCode) ? searchParams.oobCode[0] : searchParams.oobCode;

  if (!resetCode) {
    redirect('/login')
  }

  function handlePasswordReset(e) {
    e.preventDefault();

    const auth = getAuth();

    if (!ValidatePassword(password)) {
        setValidationError(true)
        setPasswordsMatched(true)
    }
    else if (password != retypedPassword) {
        setValidationError(false)
        setPasswordsMatched(false)
    }
    else {
        setValidationError(false)
        setPasswordsMatched(true)
        setIsLoading(true)
        confirmPasswordReset(auth, resetCode, password)
        .then(() => {
            if (typeof window !== 'undefined') {
                router.push('/login'); 
              }
                  })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    
      
    }
    setIsLoading(false)
  }

  return (
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
            Please enter your new password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handlePasswordReset}>
            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                New Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="retyped-password" className="block text-sm font-medium leading-6 text-gray-900">
                  Please Re-Enter Your Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="retyped-password"
                  name="retyped-password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={retypedPassword}
                  onChange={(e) => setRetypedPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              {validationError && 
                  <div className="mt-2 text-red-600">Invalid password. Please try again with a valid password.</div>}
              {!passwordsMatch && 
                  <div className="mt-2 text-red-600">Passwords do not match. Please ensure you have entered the same password twice.</div>}
            </div>
            <div>
            <StyledButton type="submit" loading={isLoading} text="Change Password"/>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
