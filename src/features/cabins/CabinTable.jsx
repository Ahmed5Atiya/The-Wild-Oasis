import styled from "styled-components";
import useCabins from "./useCabins.js";
import CabinRow from "./CabinRow";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table.jsx";
import Menus from "../../ui/Menus.jsx";
import { useSearchParams } from "react-router-dom";
// const Table = styled.div`
//   border: 1px solid var(--color-grey-200);

//   font-size: 1.4rem;
//   background-color: var(--color-grey-0);
//   border-radius: 7px;
//   overflow: hidden;
// `;

// const TableHeader = styled.header`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;

//   background-color: var(--color-grey-50);
//   border-bottom: 1px solid var(--color-grey-100);
//   text-transform: uppercase;
//   letter-spacing: 0.4px;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   padding: 1.6rem 2.4rem;
// `;

function CabinTable() {
  const { isLoading, cabins, error } = useCabins();
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("discount") || "all";
  // 1) Filter the Data
  let filterCabins = cabins;
  if (filterValue === "all") {
    filterCabins = cabins;
  }
  // Check if cabins is not undefined before filtering
  if (filterValue === "no-discount") {
    filterCabins = cabins.filter((cabin) => cabin.discount === 0);
  }
  if (filterValue === "with-discount") {
    filterCabins = cabins.filter((cabin) => cabin.discount > 0);
  }

  // 2) Sort the data
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [filed, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filterCabins?.sort(
    (a, b) => a[filed] - b[filed] * modifier
  );
  console.log(sortedCabins, filterCabins);
  if (isLoading) return <Spinner />;
  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          // data={cabins}
          // data={filterCabins}
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;

// function CabinTable() {
//   const { isLoading, cabins, error } = useCabins();
//   const [searchParams] = useSearchParams();
//   const filterValue = searchParams.get("discount") || "all";
//   console.log(filterValue);

//   if (isLoading) return <Spinner />;

//   let filterCabins;
//   if (filterValue === "all") {
//     filterCabins = cabins;
//   } else if (cabins) {
//     // Check if cabins is not undefined before filtering
//     if (filterValue === "no-discount") {
//       filterCabins = cabins.filter((cabin) => cabin.discount === 0);
//     } else if (filterValue === "with-discount") {
//       filterCabins = cabins.filter((cabin) => cabin.discount > 0);
//     }
//   }

//   return (
//     <Menus>
//       <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
//         <Table.Header>
//           <div></div>
//           <div>Cabin</div>
//           <div>Capacity</div>
//           <div>Price</div>
//           <div>Discount</div>
//           <div></div>
//         </Table.Header>
//         <Table.Body
//           data={filterCabins}
//           render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
//         />
//       </Table>
//     </Menus>
//   );
// }
