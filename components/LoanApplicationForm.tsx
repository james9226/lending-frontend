'use client'

import TextInput from "@components/input/TextInput"
import VerticalRadio from "@components/input/VerticalRadio"
import StyledButton from "./Button"
import { useState } from "react"
import DropDownSelection from "./DropDownSelection"

const EmploymentStatus = [
    { name: 'Full-time employed', description: '' },
    { name: 'Part-time employed', description: '' },
    { name: 'Self-employed', description: '' },  
    { name: 'Retired', description: '' },  
    { name: 'Student', description: '' },  
    { name: 'Unemployed', description: '' },  
]

const ResidentialStatus = [
    { name: 'I rent', description: '' },
    { name: 'I own my home', description: '' },
    { name: 'I live with my parents', description: '' },  
    { name: 'I live in council housing', description: '' },  
    { name: 'Other', description: '' },  
]


export default function LoanApplicationForm({loanAmount, loanTermInMonths}) {

    const [livedAtAddressMoreThanOneYearm, setlivedAtAddressMoreThanOneYearm] = useState(false)
    const [numberOfDependants, setNumberOfDependants] = useState("0")

    console.log(livedAtAddressMoreThanOneYearm)
    console.log(numberOfDependants)

    return (
        <form>

        <div className="space-y-12">

        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">About you</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600"></p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <TextInput label="Email address" id="email" autoComplete="email" placeholder="you@email.com" spanType="col-span-4"/>
            <TextInput label="Phone Number" id="phone-number" autoComplete="mobile-number" spanType="sm:col-span-2"/>

            <TextInput label="Fist Name" id="first-name" autoComplete="given-name" spanType="sm:col-span-3"/>
            <TextInput label="Last name" id="last-name" autoComplete="family-name" spanType="sm:col-span-3"/>
            <div className="sm:col-span-3">
      <label htmlFor='date-of-birth-group' className="block text-sm font-medium leading-6 text-gray-900">
          Date of Birth
      </label>
      <div className="grid grid-cols-3 gap-6 mt-2">
          <TextInput label="" id="day-of-birth" autoComplete="bday-day" placeholder="DD" spanType="sm:col-span-1"/>
          <TextInput label="" id="month-of-birth" autoComplete="bday-month" placeholder="MM" spanType="sm:col-span-1"/>
          <TextInput label="" id="year-of-birth" autoComplete="bday-year" placeholder="YYYY"spanType="sm:col-span-1"/>
      </div>
    </div>

            {/* <label htmlFor='date-of-birth-group' className="block text-sm font-medium leading-6 text-gray-900">
                Hi
            </label> */}
                {/* <TextInput label="" id="day-of-birth" autoComplete="bday-day" placeholder="DD"spanType="sm:col-span-1"/>
                <TextInput label="" id="month-of-birth" autoComplete="bday-month" placeholder="MM"spanType="sm:col-span-1"/>
                <TextInput label="" id="year-of-birth" autoComplete="bday-year" placeholder="YYYY" spanType="sm:col-span-1"/> */}
            </div>
            </div>

        <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Where you live</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">Use your current, permenant address.</p>
        <div className="mx-auto justify-center w-1/2 mt-6 space-y-3">

            <DropDownSelection title="How long have you lived at your address?" options={['Less than one year', 'More than one year']} onChange={setlivedAtAddressMoreThanOneYearm}/>
            <VerticalRadio label="How do you pay for your home?" settings ={ResidentialStatus} />

            </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <TextInput label="Street Address" id="street-address" autoComplete="street-address" spanType="col-span-full"/>
            <TextInput label="City" id="city" autoComplete="address-level2" spanType="sm:col-span-2"/>
            <TextInput label="County" id="region" autoComplete="address-level1" spanType="sm:col-span-2"/>
            <TextInput label="Postcode" id="postcode" autoComplete="postal-code" spanType="sm:col-span-2"/>



            </div>
        </div>


        <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Your previous address</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">Use the last, permenant address you lived at.</p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <TextInput label="Street Address" id="street-address" autoComplete="street-address" spanType="col-span-full"/>
            <TextInput label="City" id="city" autoComplete="address-level2" spanType="sm:col-span-2"/>
            <TextInput label="County" id="region" autoComplete="address-level1" spanType="sm:col-span-2"/>
            <TextInput label="Postcode" id="postcode" autoComplete="postal-code" spanType="sm:col-span-2"/>



            </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12" >
            <h2 className="text-base font-semibold leading-7 text-gray-900">Your finances</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
            If you know that your income is set to decrease in the future, you should use that figure.
            </p>


            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                <TextInput label="Job Title" id="job-title" autoComplete="organization-title" spanType="sm:col-span-3"/>
                <TextInput label="Employer Name" id="job-title" autoComplete="organization" spanType="sm:col-span-3"/>
                
                <TextInput label="Annual Income" id="income" autoComplete="" spanType="sm:col-span-2"/>
                <TextInput label="Monthly Housing Costs" id="monthly-housing-costs" autoComplete="" spanType="sm:col-span-1"/>
                <DropDownSelection title="Number of Dependants" onChange={setNumberOfDependants} options={["0", "1", "2", "3", "4", "5", "6+"]}/>
            </div>
            <div className="w-1/2 mt-6 space-y-3">
            <VerticalRadio label='Employment Status' settings ={EmploymentStatus} />
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
                        className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600"
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
                        className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600"
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
                        className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600"
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
                    className="h-4 w-4 border-gray-300 text-orange-600 focus:ring-orange-600"
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
                    className="h-4 w-4 border-gray-300 text-orange-600 focus:ring-orange-600"
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
                    className="h-4 w-4 border-gray-300 text-orange-600 focus:ring-orange-600"
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


        <StyledButton type='submit' text='Check my rates!' loading={false} />
        {/* <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
        </button>
        <button
            type="submit"
            className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
        >
            Save
        </button> */}
        {/* </div> */}
    </form>

    )
}