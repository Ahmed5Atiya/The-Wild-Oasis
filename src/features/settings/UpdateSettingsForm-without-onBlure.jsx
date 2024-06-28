import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import useEditSettings from "./useEditSettings";
import useSettings from "./useSettings";

function UpdateSettingsForm() {
  const { register, handleSubmit } = useForm();

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

  if (isLoading) return <Spinner />;
  function onSubmit(data) {
    editSettings(data);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          disabled={isEdit}
          id="min-nights"
          defaultValue={minBookingLength}
          // onBlur={(e) => handelUpdate(e, "minBookingLength")}
          {...register("minBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          disabled={isEdit}
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          // onBlur={(e) => handelUpdate(e, "minBookingLength")}
          {...register("maxBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          disabled={isEdit}
          type="number"
          id="max-guests"
          defaultValue={maxGustesPrice}
          // onBlur={(e) => handelUpdate(e, "minBookingLength")}
          {...register("maxGustesPrice")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          disabled={isEdit}
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          // onBlur={(e) => handelUpdate(e, "minBookingLength")}
          {...register("breakfastPrice")}
        />
      </FormRow>
      <Button onClick={handleSubmit}>Update Settings</Button>
    </Form>
  );
}

export default UpdateSettingsForm;
