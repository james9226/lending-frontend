
  export default function DropDownSelection({title, options, onChange}) {
    return (
      <div>
        <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
          {title}
        </label>
        <select
          id="location"
          name="location"
          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-orange-600 sm:text-sm sm:leading-6"
          placeholder="sfas"
          onChange={(e) => {
            onChange(e.target.value)
          }}
        >
          {options.map((v, i) => {
              return <option key={i}>{v}</option>
          })}
        </select>
      </div>
    )
  }
  