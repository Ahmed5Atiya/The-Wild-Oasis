import styled from "styled-components";
import CreateCabinForm from "./CreateCabinForm";
import useDeleteCabin from "./useDeleteCabin";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import useCreateCabin from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const { id, name, maxCapacity, regularPrice, image, discount, description } =
    cabin;
  const { isDeleteing, deleteCabin } = useDeleteCabin();
  const { isCreated, createCabin } = useCreateCabin();

  function handelDublecate() {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      image,
      discount,
      description,
    });
  }
  return (
    <TableRow role="row">
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits Up To {maxCapacity} guests</div>
      <Price>${regularPrice}</Price>
      {discount ? <Discount>${discount}</Discount> : <span>&mdash;</span>}
      {/* <button onClick={() => deleteCabins(id)}>Delete</button> */}
      <div>
        <button onClick={handelDublecate}>
          <HiSquare2Stack />
        </button>
        <Modal>
          <Modal.Open opens="edit">
            <button>
              <HiPencil />
            </button>
          </Modal.Open>
          <Modal.Windo name="edit">
            <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Windo>
          <Modal.Open opens="cabin">
            <button>
              <HiTrash />
            </button>
          </Modal.Open>
          <Modal.Windo name="cabin">
            <ConfirmDelete
              onConfirm={() => deleteCabin(id)}
              disabled={isDeleteing}
            />
          </Modal.Windo>
        </Modal>
      </div>
    </TableRow>
  );
}

export default CabinRow;
