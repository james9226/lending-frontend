import { ResidentialStatus, EmploymentStatus, MaritalStatus } from "@enums/application";
import { Country } from "@enums/countries";

export interface Address {
    address_line_one : string,
    country : Country, // TODO - replace with ENUM
    city : string, 
    postcode : string,
    move_in_month : string,
    move_in_year : string,
}


export interface ApplicationForm {
    readonly first_name : string,
    readonly last_name : string,
    readonly email : string,
    readonly phone_number : string,
    readonly date_of_birth : Date,
    readonly address_history : Array<Address>,


    readonly gross_annual_income : bigint,
    readonly monthly_housing_costs : bigint,
    readonly residential_status : ResidentialStatus,
    readonly marital_status : MaritalStatus,
    readonly employment_status : EmploymentStatus,
    readonly employer_name : string,

    readonly loan_amount : bigint,
    readonly loan_term_in_months : bigint,
}   