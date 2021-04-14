import { hours } from '../data'

        // you'll need to have functions to handle min/max per hour
        // you'll need to generate those randomly when you create a new location
        // you'll need to loop through it in this table
        // it should be easier to get the values to render under hours if you put them into table data "cells" 

export default function Table (props) {

  return (
  <div className="text-center">
    {/* <p className="mb-4">
      Location: {props.table.location},
      minCustomers: {props.table.minCustomers}, 
      maxCustomers: {props.table.maxCustomers},
      avgCustomers: {props.table.avgCustomers}
    </p> */}

    <table className="text-center">
      <thead>
        <tr>
          <th>Location</th>
          {hours.map(block => (
            <th key={block}>{block}</th>
          ))}
        </tr>
      </thead>

      <tbody>


        {/* <td></td> */}
          <p>{props.table.location}</p>
          <p>{props.table.minCustomers}</p>
          <p>{props.table.maxCustomers}</p>
          <p>{props.table.avgCustomers}</p>

      </tbody>
    </table>
    
  </div>

  );
}

// export default Table;