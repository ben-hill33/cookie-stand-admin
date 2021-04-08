
const Form = () => {
  return (
    <div className="mx-20 my-10 bg-green-400 border rounded-lg">
      <div className="">
        <h3 className="w-full py-2 mb-6 text-3xl text-center">Create Cookie Stand</h3>
      </div>

        <form className="mb-4 space-y-4 text-gray-700">
          <div className="flex flex-wrap m-3">
            <div className="w-full">
              <label className="block mb-1" for="formLocation">Location</label>
              <input type="text" id="formLocation" className="w-full px-3 py-1 text-base text-gray-600 border rounded-lg focus:shadow-outline"/>
            </div>
          </div>

          <div className="flex flex-wrap mx-3 my-3 text-center">
            <div className="w-1/4 px-2">
              <label className="block mb-1">Minimum Customers per Hour</label>
              <input className="w-full h-10 px-3 text-base text-gray-600 border rounded-lg focus:shadow-outline" />
            </div>
            <div className="w-1/4 px-2">
              <label className="block mb-1">Maximum Customers per Hour</label>
              <input className="w-full h-10 px-3 text-base text-gray-600 border rounded-lg focus:shadow-outline" />
            </div>
            <div className="w-1/4 px-2">
              <label className="block mb-1">Average Cookies per Sale</label>
              <input className="w-full h-10 px-3 text-base text-gray-600 border rounded-lg focus:shadow-outline" />
            </div>
            <div className="w-1/4 px-2 bg-green-500">
              <button className="w-full h-full">Create</button>
            </div>
          </div>
        </form>


    </div>

  )
}

export default Form;