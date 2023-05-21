
export default function TextInput( { label, id, autoComplete, spanType, placeholder=""}) {
    return (
    <div className={spanType} >
        <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
            {label}
        </label>
        <div className="mt-2">
            <input
                type="text"
                name={id}
                id={id}
                autoComplete={autoComplete}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                placeholder={placeholder}
            />
        </div>
    </div>
    );
}