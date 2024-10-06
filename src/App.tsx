import React, { useState } from "react"
import AddEmployee from "./components/AddEmployee"
import EmployeeList from "./components/EmployeeList"
import UpdateEmployee from "./components/UpdateEmployee"

const App: React.FC = () => {
  const [editingEmployeeId, setEditingEmployeeId] = useState<number | null>(
    null
  )

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Infilon - Employee Management</h1>
      {editingEmployeeId ? (
        <UpdateEmployee
          employeeId={editingEmployeeId}
          onClose={() => setEditingEmployeeId(null)}
        />
      ) : (
        <AddEmployee />
      )}

      <EmployeeList onEdit={(id) => setEditingEmployeeId(id)} />
    </div>
  )
}

export default App
