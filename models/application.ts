import { ResidentialStatus, EmploymentStatus, MaritalStatus } from "@enums/application";
import { Country } from "@enums/countries";

export interface Address {
    readonly address_line_one : string,
    readonly address_line_two : string,
    readonly country : Country, // TODO - replace with ENUM
    readonly city : string, 
    readonly postcode : string,
    readonly move_in_date : Date,
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