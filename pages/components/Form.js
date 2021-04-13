import { useState } from "react";


const Form = () => {
  // initial state set to empty string
  // const [location, setLocation] = useState('');
  // initial state set to zero 
  const [count, setCount] = useState({
    location: "",
    minCustomers: "",
    maxCustomers: "",
    avgCustomers: "",
  });

  // const randomCount = replies[Math.floor(Math.random() * replies.length)]
  // setCount(randomCount)

  const handleChange = (event) => {
    const value = event.target.value;
    setCount({
      ...count,
      [event.target.name]: value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(count)

    // const randomCount = Math.random()

    // setCount(0)
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
              <label className="block mb-1">Location</label>
              <input 
              name="location" 
              type="text" 
              value={count.location}
              onChange={handleChange}
              className="w-full px-3 py-1 text-base text-gray-600 border rounded-lg focus:shadow-outline" 
              />
            </div>
          </div>

          <div className="flex flex-wrap mx-3 my-3 text-center">
            <div className="w-1/4 px-2">
              <label className="block mb-1">Minimum Customers per Hour</label>
              <input 
              name="minCustomers"
              value={count.minCustomers}
              onChange={handleChange}
              className="w-full h-10 px-3 text-base text-gray-600 border rounded-lg focus:shadow-outline" 
              />


            </div>
            <div className="w-1/4 px-2">
              <label className="block mb-1">Maximum Customers per Hour</label>
              <input 
              name="maxCustomers"
              value={count.maxCustomers}
              onChange={handleChange}
              className="w-full h-10 px-3 text-base text-gray-600 border rounded-lg focus:shadow-outline" 
              />
            </div>
            <div className="w-1/4 px-2">
              <label className="block mb-1">Average Cookies per Sale</label>
              <input 
              name="avgCustomers"
              value={count.avgCustomers}
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

    <div className="text-center">
      <p className="mb-4">Report Table Coming Soon...</p>
      <p className="mb-4">
        Location: {count.location}, 
        minCustomers: {count.minCustomers}, 
        maxCustomers: {count.maxCustomers},
        avgCustomers: {count.avgCustomers}
      </p>
      <p className="mb-4"></p>
      
    </div>

    </>
  );
}

export default Form;