"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoanSlider() {
    const [loanAmount, setLoanAmount] = useState(5000);
    const [loanTermInMonths, setLoanTermInMonths] = useState(24);

    const router = useRouter();

    return (
        <div>
            <p className="mt-1 text-sm leading-6 text-gray-600">
            I want to borrow £{loanAmount}
            </p>

            <input
                type="range"
                className="range range-accent"
                id="customRange1"
                min="1000"
                max="10000"
                step="100"
                onChange={(e) => setLoanAmount(parseInt(e.target.value))}
            />

<p className="mt-1 text-sm leading-6 text-gray-600">
            Over {loanTermInMonths} months!
            </p>

            <input
                type="range"
                className="range range-accent"
                id="customRange2"
                min="12"
                max="36"
                onChange={(e) => setLoanTermInMonths(parseInt(e.target.value))}
            />
            <p className="mt-1 text-sm leading-6 text-gray-600">
            Representative APR of 19.9%. The rate you are offered will depend on your individual circumstances.
            </p>
            <button
                className='outline_btn'
                onClick={() => router.push('/apply?amount=' + loanAmount + '&term=' + loanTermInMonths)}
            >
                See my rates!
            </button>

        </div>
    );
}
