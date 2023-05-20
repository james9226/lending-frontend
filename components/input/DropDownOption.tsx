
export default function DrownDownOption( { label, id, autoComplete, spanType, options }) {
    return (
    <div className={spanType} >
        <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
            {label}
        </label>
                <div className="mt-2">
                {/* <select
                    id={id}
                    name={id}
                    autoComplete={autoComplete}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    options.map((o) => <option>United States</option>   )

                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                </select> */}
        </div>
    </div>
    );
}