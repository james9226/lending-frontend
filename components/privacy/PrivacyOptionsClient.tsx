'use client'

import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function PrivacyOptions() {

    const [fieldEnabled, setFieldEnabled] = useState(true)

  // Update the cookie preference
    const handleCookiePreferenceChoice = (preference) => {
        console.log('herere')
        axios.post('/api/cookiepreference', { preference: preference })
        .catch(error => console.error(error));
    };

    return fieldEnabled ? (
        <div className="pointer-events-none fixed  max-w-md	inset-x-0 bottom-0 px-6 pb-6">
        <div className="pointer-events-auto max-w-xl rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10">
          <p className="text-sm leading-6 text-gray-900">
            This website uses cookies to help improve your experience. See our{' '}
            <Link href="/privacy-policy" className="font-semibold text-orange-600">
              privacy policy
            </Link>
            .
          </p>
          <div className="mt-4 flex items-center gap-x-5">
    <button
    type="button"
    className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
    onClick={() => {
        handleCookiePreferenceChoice("enabled")
        setFieldEnabled(false)}
        }
    >
    Accept all
    </button>
    <button 
    type="button" 
    className="text-sm font-semibold leading-6 text-gray-900" 
    onClick={() => {
        handleCookiePreferenceChoice("disabled")
        setFieldEnabled(false)}
        }>
    Reject all
    </button>
    </div>

        </div>
      </div>

    ) : (
        <div></div>
    )
}
