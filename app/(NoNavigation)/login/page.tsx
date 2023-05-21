'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import { browserSessionPersistence, getAuth, setPersistence, signInWithEmailAndPassword } from "firebase/auth"; 
import { useRouter } from 'next/navigation';
import StyledButton from "@components/Button";
import RedAlert from "@components/Alert";

export default function LoginPage({
  searchParams,
  }: {
  searchParams?: { [key: string]: string | string[] | undefined };
  }) {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const redirectLinkQuery = Array.isArray(searchParams.redirect_link) ? searchParams.redirect_link[0] : searchParams.redirect_link;
  const redirectLink = redirectLinkQuery? redirectLinkQuery : "/"


  function handleLogin(e) {
    e.preventDefault();

    const auth = getAuth();

    setIsLoading(true)

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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              {invalidCredentials && 
                  <RedAlert title="Invalid username/password. Please try again!" />}
            </div>
            <div>
              <StyledButton type="submit" loading={isLoading} text="Sign In"/>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link href='/' className="font-semibold leading-6 text-orange-600 hover:text-orang-500">Check out what we have to offer!
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
