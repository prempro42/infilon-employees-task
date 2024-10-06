import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import axios from "axios"
import { deleteEmployee, setEmployees } from "features/employeeSlice"
import { RootState } from "store"

interface EmployeeListProps {
  onEdit: (id: number) => void
}

const EmployeeList: React.FC<EmployeeListProps> = ({ onEdit }) => {
  const dispatch = useDispatch()
  const employees = useSelector((state: RootState) => state.employee.employees)

  useEffect(() => {
    axios.get("/api/employees").then((response) => {
      dispatch(setEmployees(response.data.employees))
    })
  }, [dispatch])

  const handleDelete = (id: number) => {
    axios.delete(`/api/employees/${id}`).then(() => {
      dispatch(deleteEmployee(id))
    })
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Employee List</h2>
      <ul className="space-y-2">
        {employees.length > 0 ? (
          employees.map((emp) => (
            <li
              key={emp.id}
              className="flex justify-between items-center p-2 border rounded-md bg-gray-50"
            >
              <span>
                {emp.name} ({emp.position})
              </span>
              <div>
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" })
                    onEdit(emp.id)
                  }}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(emp.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>No employees available. Add a new employee!</p>
        )}
      </ul>
    </div>
  )
}

export default EmployeeList
