import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add New Cabin</Button>
      </Modal.Open>
      <Modal.Windo name="cabin-form">
        <CreateCabinForm />
      </Modal.Windo>

      <Modal.Open opens="table">
        <Button>ٍShow The Table</Button>
      </Modal.Open>
      <Modal.Windo name="table">
        <CabinTable />
      </Modal.Windo>
    </Modal>
  );
  // const [showForm, setShowForm] = useState(false);

  // return (
  //   <div>
  //     <Button onClick={() => setShowForm((showForm) => !showForm)}>
  //       Add New Cabin
  //     </Button>
  //     {showForm && (
  //       <Modal onClose={() => setShowForm(false)}>
  //         <CreateCabinForm onCloseModel={() => setShowForm(false)} />
  //       </Modal>
  //     )}
  //   </div>
  // );
}

export default AddCabin;
