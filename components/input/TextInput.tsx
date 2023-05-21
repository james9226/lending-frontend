import { ExclamationCircleIcon } from '@heroicons/react/20/solid'


export default function TextInput( { label, id, autoComplete, spanType="", placeholder="", onChange=null, type="text", errored=false, errorText="Doesn't look quite right!" }) {

    function handleChange(e) {
        if(onChange) {
          onChange(e.target.value);
        }
      }

      const className = errored? "block w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" : "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
    
    return (
    <div className={spanType} >
        <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
            {label}
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
            <input
                type={type}
                name={id}
                id={id}
                autoComplete={autoComplete}
                className={className}
                placeholder={placeholder}
                onChange={handleChange}
            />
            {errored && 
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
        </div>
}
      </div>
      {errored && 
        <p className="mt-2 text-sm text-red-600" id="email-error">
            {errorText}
        </p>
}
    </div>
    );
}








// export default function TextInput( { label, id, autoComplete, spanType="", placeholder="", onChange=null, type="text" }) {

//     function handleChange(e) {
//         if(onChange) {
//           onChange(e.target.value);
//         }
//       }
    
//     return (
//     <div className={spanType} >
//         <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
//             {label}
//         </label>
//         <div className="mt-2">
//             <input
//                 type={type}
//                 name={id}
//                 id={id}
//                 autoComplete={autoComplete}
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
//                 placeholder={placeholder}
//                 onChange={handleChange}
//             />
            
//         </div>
        
//     </div>
//     );
// }