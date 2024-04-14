import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTable,
  assignTable,
  markTableAsAvailable,
} from "../redux/tableSlice";
import Button from "./ui/Button";

function TableManagementInterface() {
  const dispatch = useDispatch();
  const tables = useSelector((state) => state.table.tables);
  const [tableNumber, setTableNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [error, setError] = useState(false);

  console.log(tables);
  const handleAddTable = () => {
    if (tableNumber.trim() !== "") {
      dispatch(addTable(tableNumber));
      setTableNumber("");
    }
  };

  const handleAssignTable = (tableNumber) => {
    const customer = { name: customerName };

    if (customerName !== "") {
      dispatch(assignTable({ tableNumber, customer }));
      setCustomerName("");
    } else {
      setError(true);
    }
    if (tableNumber === "Select a table") {
      setError(false);
    }
  };

  const handleMarkAsAvailable = (tableNumber) => {
    dispatch(markTableAsAvailable(tableNumber));
  };

  return (
    <div className="table-management-interface">
      <h1>Table Management Interface</h1>
      <form onSubmit={(e) => e.preventDefault()} className="add-table-form">
        <input
          type="text"
          value={tableNumber}
          onChange={(e) => {
            setTableNumber(e.target.value);
          }}
          placeholder="Enter table number"
        />
        <Button onClick={handleAddTable}>Add Table</Button>
      </form>
      <div className="assign-table-form">
        <input
          type="text"
          value={customerName}
          onChange={(e) => {
            setCustomerName(e.target.value);
            if (e.target.value !== "") {
              setError(false);
            } else {
              setError(true);
            }
          }}
          placeholder="Enter customer name"
        />
        <select onChange={(e) => handleAssignTable(e.target.value)}>
          <option value="Select a table">Select a table</option>
          {tables.map((table) => (
            <option key={table.number} value={table.number}>
              Table {table.number}
            </option>
          ))}
        </select>
        {error && <p className="danger">Please Enter Customer Name !</p>}
      </div>
      <div className="table-list mt-5">
        {tables.map((table) => (
          <div key={table.number} className="table-card">
            <p>Table {table.number}</p>
            <p className={`table-status ${table.status}`}>{table.status}</p>
            {table.status === "occupied" && (
              <p>Customer: {table.customer.name}</p>
            )}
            {table.status === "occupied" && (
              <div className="table-actions">
                <Button
                  variant="danger"
                  onClick={() => handleMarkAsAvailable(table.number)}
                >
                  Mark as Available
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableManagementInterface;
