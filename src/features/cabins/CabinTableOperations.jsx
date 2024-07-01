import Filter from "../../ui/Filter";
import SortedBy from "../../ui/SortedBy";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "all" },
          { value: "no-discount", label: "no-discount" },
          { value: "with-discount", label: "with-discount" },
        ]}
      />
      <SortedBy
        options={[
          { value: "name-asc", label: "sorted by name (A-Z)" },
          { value: "name-desc", label: "sorted by name (Z-A)" },
          { value: "regularPrice-asc", label: "sorted by Price (low first)" },
          {
            value: "regularPrice-desc",
            label: "sorted by price (hight first)",
          },
          {
            value: "max-Capacity-asc",
            label: "sorted by Cabacity (low frist)",
          },
          {
            value: "max-Capacity-desc",
            label: "sorted by Cabacity (hight frist)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
