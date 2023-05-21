import TextInput from "@components/input/TextInput"
import { useEffect, useState } from "react";

export default function AddressInput({index, title, subtitle, onChange}) {

    const [address, setAddress] = useState({
        address_line_one : "",
        city : "",
        county : "",
        postcode : "",
        move_in_month : 0,
        move_in_year : 0,
    })

    function handleAddressUpdate(fieldId, value) {
        setAddress({
          ...address,
          [fieldId]: value,
        });
      }

      useEffect(() => {
        onChange(address);
      }, [address]);
      

    return (


    <div className="border-b border-gray-900/10 pb-12">
    <h2 className="text-base font-semibold leading-7 text-gray-900">{title}</h2>
    <p className="mt-1 text-sm leading-6 text-gray-600">{subtitle}</p>
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

        <TextInput label="Street Address" id="street-address" 
        onChange={(value) => handleAddressUpdate("address_line_one", value)} 
        autoComplete="street-address" 
        spanType="col-span-full" />
        <TextInput label="City" id="city" onChange={(value) => handleAddressUpdate("city", value)} autoComplete="address-level2" spanType="sm:col-span-2"/>
        <TextInput label="County" id="region" onChange={(value) => handleAddressUpdate("county", value)}  autoComplete="address-level1" spanType="sm:col-span-2"/>
        <TextInput label="Postcode" id="postcode" onChange={(value) => handleAddressUpdate("postcode", value)} autoComplete="postal-code" spanType="sm:col-span-2"/>



        </div>
        <div className="sm:col-span-3 py-5">
  <label htmlFor='date-of-birth-group' className="block text-sm font-medium leading-6 text-gray-900">
    When did you move into this address (MM/YYYY)?
  </label>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-2">
    <TextInput label="" id="current-address-move-in-month" 
    onChange={(value) => handleAddressUpdate("move_in_month", value)} 
    autoComplete="" 
    placeholder="MM"
    type="tel" 
    />
    <TextInput label="" 
    id="current-address-move-in-year" 
    onChange={(value) => handleAddressUpdate("move_in_year", value)} 
    autoComplete="" 
    placeholder="YYYY" 
    type="tel"
    />
  </div>
</div>
    </div>
    );
}