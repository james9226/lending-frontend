import Link from "next/link";

export default function CallToAction() {
    return (
      <div className="">
        <div className="px-6 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Choose a better option.
              <br />
              See what rate you could get today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              You can check your eligibility without any impact to your credit score.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href='/apply'                 className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>   
                Get Started
                </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }