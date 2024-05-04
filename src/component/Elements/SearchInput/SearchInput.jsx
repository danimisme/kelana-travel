export default function SearchInput({ type = "text", ...props }) {
  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text bg-white" id="seacrh">
          <i className="bi bi-search"></i>
        </span>
        <input type={type} className="form-control search" {...props} />
      </div>
    </>
  );
}
