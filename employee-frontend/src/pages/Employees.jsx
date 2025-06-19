import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/employees')
      .then(res => setEmployees(res.data));
  }, []);

  return (
    <div>
      <h2>Empleados</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th><th>Nombre</th><th>Documento</th><th>Salario</th><th>Edad</th><th>Perfil</th><th>Ingreso</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td><td>{emp.name}</td><td>{emp.document_number}</td>
              <td>{emp.salary}</td><td>{emp.age}</td><td>{emp.profile}</td><td>{emp.admission_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
