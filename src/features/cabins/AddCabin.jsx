import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <Button onClick={() => setShowForm((showForm) => !showForm)}>
        Add New Cabin
      </Button>
      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <CreateCabinForm onCloseModel={() => setShowForm(false)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
