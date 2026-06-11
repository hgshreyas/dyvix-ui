import './dependencies/style/style.css';

function DyvixTable({ children, className = '' }) {
  const tableClasses = `dyvix-table ${className}`.trim();
  const props = {
    className: tableClasses
  };

  return (
    <div className="dyvix-table-wrapper">
      <table {...props}>{children}</table>
    </div>
  );
}

export default DyvixTable;
