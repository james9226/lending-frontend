'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import { browserSessionPersistence, getAuth, setPersistence, signInWithEmailAndPassword } from "firebase/auth"; 
import { useRouter } from 'next/navigation';

export default function LoginPage({
  searchParams,
  }: {
  searchParams?: { [key: string]: string | string[] | undefined };
  }) {
  
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const router = useRouter();
  const redirectLink = searchParams.redirect? searchParams.redirect : "/"

  function handleLogin(e) {
    e.preventDefault();

    const auth = getAuth();

    setPersistence(auth, browserSessionPersistence)
    .then(() => {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      return signInWithEmailAndPassword(auth, email, password);
    })
    .then((userCredential) => {
      setInvalidCredentials(false)
      // Signed in 
      const user = userCredential.user;
      if (typeof window !== 'undefined') {
        router.push(redirectLink); 
      }
      // ...
    })
    .catch((error) => {
      setInvalidCredentials(true)
      const errorCode = error.code;
      const errorMessage = error.message;
    });
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
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleLogin}>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <Link href="/forgot-password" className="font-semibold text-orange-600 hover:text-orange-500">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              {invalidCredentials && 
                  <div className="mt-2 text-red-600">Invalid username/password. Please try again!.</div>}
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link href='/' className="font-semibold leading-6 text-orange-600 hover:text-orang-500">Checkout what we have to offer!
            </Link>
            {/* <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Checkout what we have to offer!
            </a> */}
          </p>
        </div>
      </div>
    </>
  )
}
