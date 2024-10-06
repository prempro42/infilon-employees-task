import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Employee } from "types/Employee"

interface EmployeeState {
  employees: Employee[]
}

const initialState: EmployeeState = {
  employees: [],
}

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setEmployees(state, action: PayloadAction<Employee[]>) {
      state.employees = action.payload
    },
    addEmployee(state, action: PayloadAction<Employee>) {
      state.employees.push(action.payload)
    },
    updateEmployee(state, action: PayloadAction<Employee>) {
      const index = state.employees.findIndex(
        (emp) => emp.id === action.payload.id
      )
      if (index !== -1) {
        state.employees[index] = action.payload
      }
    },
    deleteEmployee(state, action: PayloadAction<number>) {
      state.employees = state.employees.filter(
        (emp) => emp.id !== action.payload
      )
    },
  },
})

export const { setEmployees, addEmployee, updateEmployee, deleteEmployee } =
  employeeSlice.actions

export default employeeSlice.reducer
