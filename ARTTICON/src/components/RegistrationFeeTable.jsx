

export const RegistrationFeeTable = () => {
  return (
     <div className="w-full overflow-x-auto">
      <table className="w-full border border-gray-300 text-center text-sm md:text-base">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-3 font-semibold">CATEGORY</th>
            
            <th className="border px-4 py-3 font-semibold">
              LATE REGISTRATION
              <br />
              <span className="text-xs font-normal">Up to 30th June</span>
            </th>
            <th className="border px-4 py-3 font-semibold">
              ON-SPOT
              <br />
              REGISTRATION
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border px-4 py-3 font-medium">ARTTI MEMBERS</td>

            <td className="border px-4 py-3">₹4500</td>
            <td className="border px-4 py-3">₹5000</td>
          </tr>

          <tr>
            <td className="border px-4 py-3 font-medium">NON ARTTI MEMBERS</td>
            
            <td className="border px-4 py-3">₹5500</td>
            <td className="border px-4 py-3">₹6000</td>
          </tr>

          <tr>
            <td className="border px-4 py-3 font-medium">ASSOCIATE DELEGATES</td>
            
            <td className="border px-4 py-3">₹3500</td>
            <td className="border px-4 py-3">₹4000</td>
          </tr>

          <tr>
            <td className="border px-4 py-3 font-medium">
              STUDENT (RADIATION THERAPIST)
            </td>
            
            <td className="border px-4 py-3">₹3000</td>
            <td className="border px-4 py-3">₹3500</td>
          </tr>

          <tr>
            <td className="border px-4 py-3 font-medium">SR.RT MEMBERS &gt; 60</td>
            
            <td className="border px-4 py-3">₹3000</td>
            <td className="border px-4 py-3">₹3500</td>
          </tr>

          <tr>
            <td className="border px-4 py-3 font-medium">OVERSEAS DELEGATES</td>
            
            <td className="border px-4 py-3">$150</td>
            <td className="border px-4 py-3">$200</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
