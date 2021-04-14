import { useState } from "react";


export default function Form(props) {
  const initialValues = {
    location: "",
    minCustomers: 0,
    maxCustomers: 0,
    avgCustomers: 0,
  }

  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    let { name, value, type } = event.target;
    
    if (type === "number") {
      value = parseFloat(value)
    }
    setValues({...values, [name]: value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // onCreate(values);
    setValues(initialValues);
    props.tableData(values)
  }

  return (
    <>

    <div className="mx-20 my-10 bg-green-400 border rounded-lg">
      <div className="">
        <h3 className="w-full py-2 mb-4 text-3xl text-center">Create Cookie Stand</h3>
      </div>

        <form onSubmit={handleSubmit} className="mb-4 space-y-4">
          <div className="flex flex-wrap m-3">
            <div className="w-full">
              <label 
              className="block mb-1"
              htmlFor="location"
              >
                Location
              </label>
              <input 
              name="location"
              id="location" 
              type="text" 
              value={values.location}
              onChange={handleChange}
              placeholder="Enter Location Name"
              className="w-full px-3 py-1 text-base text-gray-600 border rounded-lg focus:shadow-outline" 
              />
            </div>
          </div>

          <div className="flex flex-wrap mx-3 my-3 text-center">
            <div className="w-1/4 px-2">
              <label 
              className="block mb-1"
              htmlFor="minCustomers"
              >
                Minimum Customers per Hour
              </label>
              <input 
              type="number"
              name="minCustomers"
              id="minCustomers"
              value={values.minCustomers}
              onChange={handleChange}
              className="w-full h-10 px-3 text-base text-gray-600 border rounded-lg focus:shadow-outline" 
              />


            </div>
            <div className="w-1/4 px-2">
              <label 
              className="block mb-1" 
              htmlFor="maxCustomers"
              >Maximum Customers per Hour</label>
              <input 
              type="number"
              name="maxCustomers"
              id="maxCustomers"
              value={values.maxCustomers}
              onChange={handleChange}
              className="w-full h-10 px-3 text-base text-gray-600 border rounded-lg focus:shadow-outline" 
              />
            </div>
            <div className="w-1/4 px-2">
              <label 
              className="block mb-1"
              htmlFor="avgCustomers"
              >Average Cookies per Sale</label>
              <input 
              type="number"
              name="avgCustomers"
              id="avgCustomers"
              value={values.avgCustomers}
              onChange={handleChange}
              className="w-full h-10 px-3 text-base text-gray-600 border rounded-lg focus:shadow-outline" 
              />
            </div>
            <div className="w-1/4 px-2 bg-green-500 rounded-lg">
              <button type="submit" className="w-full h-full">Create</button>
            </div>
          </div>
        </form>
    </div>

    </>
  );
}

// export default Form;