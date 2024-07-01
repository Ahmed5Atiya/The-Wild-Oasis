import Filter from "../../ui/Filter";
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
    </TableOperations>
  );
}

export default CabinTableOperations;
