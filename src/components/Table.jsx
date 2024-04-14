function Table({ table }) {
  return (
    <div className="table">
      <p>Table {table.number}</p>
      <p>Status: {table.status}</p>
    </div>
  );
}

export default Table;
