import { useState } from "react"
import Form from './Form.js'
import Table from './Table.js'

const Main = () => {
  const [tableState, setTableState] = useState({
    location: "",
    minCustomers: "",
    maxCustomers: "",
    avgCustomers: "",
  });

  const updateTable = (data) => {
    setTableState(data)
    console.log('this is main', data)
  }
  console.log(tableState, "this is table state")
  return (
    <div className="">

      <Form tableData={updateTable} />
      <Table table={tableState} />

    </div>
  )
}

export default Main;
