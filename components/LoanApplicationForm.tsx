'use client'

import TextInput from "@components/input/TextInput"

export default function LoanApplicationForm({loanAmount, loanTermInMonths}) {
    return (
        <form>

        <div className="space-y-12">

        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600"></p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <TextInput label="Email address" id="email" autoComplete="email" spanType="col-span-4"/>

            <TextInput label="Fist Name" id="first-name" autoComplete="given-name" spanType="sm:col-span-3"/>
            <TextInput label="Last name" id="last-name" autoComplete="family-name" spanType="sm:col-span-3"/>
            </div>
            </div>

        <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Where you live</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">Use your current, permenant address.</p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <TextInput label="Street Address" id="street-address" autoComplete="street-address" spanType="col-span-full"/>
            <TextInput label="City" id="city" autoComplete="address-level2" spanType="sm:col-span-2"/>
            <TextInput label="County" id="region" autoComplete="address-level1" spanType="sm:col-span-2"/>
            <TextInput label="Postcode" id="postcode" autoComplete="postal-code" spanType="sm:col-span-2"/>

            
            {/* <div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">Red pill</span> 
    <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
  </label>
</div>
<div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">Blue pill</span> 
    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
  </label>
</div> */}

            {/* <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Country
                </label>
                <div className="mt-2">
                <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                </select>
                </div>
            </div> */}


            </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Your finances</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
            If you know that your income is set to decrease in the future, you should use that figure.
            </p>


            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                <TextInput label="Job Title" id="job-title" autoComplete="organization-title" spanType="sm:col-span-3"/>
                <TextInput label="Employer Name" id="job-title" autoComplete="organization" spanType="sm:col-span-3"/>
                <TextInput label="Annual Income" id="income" autoComplete="organization" spanType="sm:col-span-2"/>
            </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
            We'll always let you know about important changes, but you pick what else you want to hear about.
            </p>

            <div className="mt-10 space-y-10">
            <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
                <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                    <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    </div>
                    <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium text-gray-900">
                        Comments
                    </label>
                    <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                    </div>
                </div>
                <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                    <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    </div>
                    <div className="text-sm leading-6">
                    <label htmlFor="candidates" className="font-medium text-gray-900">
                        Candidates
                    </label>
                    <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                    </div>
                </div>
                <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                    <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    </div>
                    <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Offers
                    </label>
                    <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                    </div>
                </div>
                </div>
            </fieldset>
            <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
                <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
                <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                    <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                    Everything
                    </label>
                </div>
                <div className="flex items-center gap-x-3">
                    <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                    Same as email
                    </label>
                </div>
                <div className="flex items-center gap-x-3">
                    <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                    No push notifications
                    </label>
                </div>
                </div>
            </fieldset>
            </div>
        </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
        </button>
        <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            Save
        </button>
        </div>
    </form>

    )
}