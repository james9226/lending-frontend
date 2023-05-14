

export interface LoanOffer {
    application_id : string,
    quote_id : string,
    loan_amount : bigint,
    loan_term_in_months : bigint,
    apr : number,
    monthly_payment : number,
    total_cost : number,
    total_charge : number,
    preapproved : boolean,
    approval_probability : number
}