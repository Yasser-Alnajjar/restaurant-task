import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
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
  const [assignValue, setAssignValue] = useState("");
  const [assignTables, setAssignTables] = useState([]);

  const handleAddTable = () => {
    if (tableNumber.trim() !== "") {
      dispatch(addTable(tableNumber));
      setTableNumber("");
    }
  };

  const handleAssignTable = (tableNumber) => {
    let hours = new Date().getHours();
    hours = hours % 12;
    hours = hours ? hours : 12;

    if (tableNumber === "") {
      toast.error("Please Select A Table");
      return;
    }
    const customer = {
      name: customerName,
      date: `${hours} : ${new Date().getMinutes()} ${
        new Date().getHours() >= 12 ? "PM" : "AM"
      }`,
    };
    const currentTable = tables.find((item) => item.number === tableNumber);
    const isTableOccupied = assignTables.find(
      (item) => item.number === currentTable.number
    );

    if (tableNumber !== "" && isTableOccupied === undefined) {
      setAssignTables((prev) => [...prev, currentTable]);
    } else {
      toast.error("This Table not available !");
      return;
    }
    if (customerName !== "") {
      dispatch(
        assignTable({
          tableNumber,
          customer,
        })
      );
      setCustomerName("");
    } else {
      toast.error("Please Enter Customer Name !");
    }
  };
  const handleMarkAsAvailable = (table) => {
    const currentIndex = tables.findIndex(
      (item) => +item.number === +table.number
    );
    dispatch(markTableAsAvailable(table.number));
    assignTables.splice(currentIndex, 1);
  };
  console.log("assignTables", assignTables);
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
      <form
        className="assign-table-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleAssignTable(assignValue);
        }}
      >
        <input
          type="text"
          value={customerName}
          onChange={(e) => {
            setCustomerName(e.target.value);
          }}
          placeholder="Enter customer name"
        />
        <select onChange={(e) => setAssignValue(e.target.value)}>
          <option value="Select a table">Select a table</option>
          {tables.map((table) => (
            <option key={table.number} value={table.number}>
              Table {table.number}
            </option>
          ))}
        </select>
        <Button type="submit" className="m-4">
          Assign
        </Button>
      </form>
      <div className="table-list mt-5">
        {tables.map((table) => (
          <div key={table.number} className="table-card">
            <p>Table {table.number}</p>
            <p className={`table-status ${table.status}`}>{table.status}</p>
            {table.status === "occupied" && (
              <>
                <p>Customer: {table.customer.name}</p>
                <p>Date: {table.customer.date}</p>
              </>
            )}
            {table.status === "occupied" && (
              <div className="table-actions">
                <Button
                  variant="danger"
                  onClick={() => handleMarkAsAvailable(table)}
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
