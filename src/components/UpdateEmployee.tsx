import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { RootState } from "store"
import { updateEmployee } from "features/employeeSlice"

interface UpdateEmployeeProps {
  employeeId: number
  onClose: () => void
}

const UpdateEmployee: React.FC<UpdateEmployeeProps> = ({
  employeeId,
  onClose,
}) => {
  const dispatch = useDispatch()

  const employee = useSelector((state: RootState) =>
    state.employee.employees.find((emp) => emp.id === employeeId)
  )

  const [name, setName] = useState(employee?.name || "")
  const [email, setEmail] = useState(employee?.email || "")
  const [position, setPosition] = useState(employee?.position || "")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const updatedEmployee = {
      id: employeeId,
      name,
      email,
      position,
    }

    axios.put(`/api/employees/${employeeId}`, updatedEmployee).then(() => {
      dispatch(updateEmployee(updatedEmployee))
      onClose()
    })
  }

  useEffect(() => {
    if (employee) {
      setName(employee.name)
      setEmail(employee.email)
      setPosition(employee.position)
    }
  }, [employee])

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Update Employee</h2>
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
          Update Employee
        </button>
        <button
          type="button"
          className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Cancel
        </button>
      </form>
    </div>
  )
}

export default UpdateEmployee
