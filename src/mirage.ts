import { createServer, Model } from "miragejs"

export function makeServer() {
  createServer({
    models: {
      employee: Model,
    },
    seeds(server) {
      server.create("employee", {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        position: "Manager",
      })
      server.create("employee", {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        position: "Developer",
      })
      server.create("employee", {
        id: 3,
        name: "Emily Johnson",
        email: "emily@example.com",
        position: "Designer",
      })
      server.create("employee", {
        id: 4,
        name: "Michael Brown",
        email: "michael@example.com",
        position: "Product Owner",
      })
      server.create("employee", {
        id: 5,
        name: "David Davis",
        email: "david@example.com",
        position: "Tester",
      })
      server.create("employee", {
        id: 6,
        name: "Sophia Wilson",
        email: "sophia@example.com",
        position: "Developer",
      })
      server.create("employee", {
        id: 7,
        name: "James Anderson",
        email: "james@example.com",
        position: "HR",
      })
      server.create("employee", {
        id: 8,
        name: "Olivia Martinez",
        email: "olivia@example.com",
        position: "Developer",
      })
      server.create("employee", {
        id: 9,
        name: "Lucas Taylor",
        email: "lucas@example.com",
        position: "Designer",
      })
      server.create("employee", {
        id: 10,
        name: "Ava Thomas",
        email: "ava@example.com",
        position: "Manager",
      })
    },

    routes() {
      this.namespace = "api"

      this.get("/employees", (schema) => {
        return schema.employees.all()
      })

      this.post("/employees", (schema, request) => {
        let attrs = JSON.parse(request.requestBody)
        return schema.employees.create(attrs)
      })

      this.put("/employees/:id", (schema, request) => {
        let id = request.params.id
        let attrs = JSON.parse(request.requestBody)
        let employee = schema.employees.find(id)
        return employee.update(attrs)
      })

      this.delete("/employees/:id", (schema, request) => {
        let id = request.params.id
        return schema.employees.find(id).destroy()
      })
    },
  })
}
