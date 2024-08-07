import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import useEditSettings from "./useEditSettings";
import useSettings from "./useSettings";

function UpdateSettingsForm() {
  const {
    isLoading,
    data: {
      breakfastPrice,
      minBookingLength,
      maxGustesPrice,
      maxBookingLength,
    } = [],
  } = useSettings();
  const { isEdit, editSettings } = useEditSettings();

  function handelUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;
    editSettings({ [field]: value });
    console.log(value);
  }
  if (isLoading) return <Spinner />;
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          disabled={isEdit}
          id="min-nights"
          defaultValue={minBookingLength}
          onBlur={(e) => handelUpdate(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          disabled={isEdit}
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          onBlur={(e) => handelUpdate(e, "maxBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          disabled={isEdit}
          type="number"
          id="max-guests"
          defaultValue={maxGustesPrice}
          onBlur={(e) => handelUpdate(e, "maxGustesPrice")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          disabled={isEdit}
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          onBlur={(e) => handelUpdate(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
