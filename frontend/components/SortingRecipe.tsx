export default function SortingRecipe() {
  return (
    <select
      className="form-select"
      style={{ width: "200px" }}
      aria-label="Default select example"
    >
      <option selected>Sorter</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  );
}
