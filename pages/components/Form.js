
const Form = () => {
  return (
    <div>
        <form className="flex w-1/2 mx-auto my-4 bg-green-600">
          <label htmlFor="name">Create Cookie Stand</label>
          <input id="name" name="name" type="text" autoComplete="name" required />
        </form>
    </div>
  )
}

export default Form;