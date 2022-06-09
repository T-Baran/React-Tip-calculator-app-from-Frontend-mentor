import LabelInput from "./LabelInput";
import SelectTip from "./SelectTip";
const Inputcomponent = () => {
  return (
    <>
      <LabelInput image="dolar" label="Bill" />
      <SelectTip />
      <LabelInput image="human" label="Number of People" />
    </>
  );
};

export default Inputcomponent;
