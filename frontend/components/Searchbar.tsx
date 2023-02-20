import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Searchbar() {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Søk etter pasta eller potet"
        aria-label="Søkeinnput"
        // aria-describedby="button-addon2"
      />
      {/* TODO:  Add search bar icon*/}
      <button
        className="btn btn-primary"
        type="button"
        id="button-addon2"
        aria-label="Søkeknapp"
      >
        Søk
      </button>
    </div>
  );
}
