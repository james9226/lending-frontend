import LoanApplicationForm from '@components/LoanApplicationForm';
import { redirect } from 'next/navigation';

export default function ApplyPage({
searchParams,
}: {
searchParams?: { [key: string]: string | string[] | undefined };
}) {

const loanAmount = typeof searchParams.amount === "string" ? parseInt(searchParams.amount) : 0;
const loanTermInMonths = typeof searchParams.term === "string" ? parseInt(searchParams.term) : 0;

if (!(loanAmount && loanTermInMonths)) {
    redirect('/')
}
else if (loanAmount < 1000 || loanAmount > 10000) {
    redirect('/')
}
else if (loanTermInMonths < 12 || loanTermInMonths > 36) {
    redirect('/')
}

return (
    <div>
                <h2 className="text-base font-semibold leading-7 text-gray-900"> You are applying for a loan of 
    <span className='orange_gradient text-center test-xl font-semibold'> £{loanAmount}</span>
        over 
    <span className='orange_gradient text-center test-xl font-semibold'> {loanTermInMonths}  </span>
    months!
    </h2>
    <div className='py-8'>

        <LoanApplicationForm loanAmount={loanAmount} loanTermInMonths={loanTermInMonths}/>
    </div>
    </div>
);
}
