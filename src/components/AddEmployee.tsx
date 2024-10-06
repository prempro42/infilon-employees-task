import React, { useState } from "react"
import { useDispatch } from "react-redux"
import axios from "axios"
import { addEmployee } from "features/employeeSlice"

const AddEmployee: React.FC = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [position, setPosition] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newEmployee = {
      id: Date.now(),
      name,
      email,
      position,
    }

    axios.post("/api/employees", newEmployee).then(() => {
      dispatch(addEmployee(newEmployee))
      setName("")
      setEmail("")
      setPosition("")
    })
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Add New Employee</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Position"
          className="w-full px-4 py-2 border rounded"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Employee
        </button>
      </form>
    </div>
  )
}

export default AddEmployee
