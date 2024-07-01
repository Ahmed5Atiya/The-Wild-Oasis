import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortedBy({ options }) {
  const [sortParams, setSortParams] = useSearchParams();
  const sortBy = sortParams.get("sortBy") || "";
  console.log(sortBy);
  function handelClick(e) {
    sortParams.set("sortBy", e.target.value);
    setSortParams(sortParams);
  }
  return (
    <Select
      options={options}
      onChange={handelClick}
      value={sortBy}
      type="white"
    />
  );
}

export default SortedBy;
