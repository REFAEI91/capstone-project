import { useState } from "react";
import {
  Fieldset,
  Form,
  Legend,
  Label,
  Input,
  Select,
  Checkbox,
  Radio,
  FormButton,
} from "./EditPlanForm.styled";

export default function EditPlanForm({ plan, onSave, onCancel }) {
  const [updatedPlan, setUpdatedPlan] = useState(plan);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedPlan((prevPlan) => ({
      ...prevPlan,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setUpdatedPlan((prevPlan) => ({
      ...prevPlan,
      [name]: checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(updatedPlan);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Fieldset>
        <Legend>Edit Plan</Legend>
        <Fieldset>
          <legend>For:</legend>
          <Label htmlFor="me">
            <Radio
              type="radio"
              id="me"
              name="for"
              value="Me"
              checked={updatedPlan.for === "Me"}
              onChange={handleInputChange}
            />
            Me
          </Label>
          <Label htmlFor="someoneElse">
            <Radio
              type="radio"
              id="someoneElse"
              name="for"
              value="Someone else"
              checked={updatedPlan.for === "Someone else"}
              onChange={handleInputChange}
            />
            Someone else
          </Label>

          {updatedPlan.for === "Someone else" && (
            <>
              <legend>Personal information:</legend>
              <Label htmlFor="name">Name:</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={updatedPlan.name}
                onChange={handleInputChange}
              />
              <Label htmlFor="age">Age:</Label>
              <Input
                type="number"
                id="age"
                name="age"
                value={updatedPlan.age}
                onChange={handleInputChange}
              />
              <Label htmlFor="gender">Gender:</Label>
              <Select
                id="gender"
                name="gender"
                value={updatedPlan.gender}
                onChange={handleInputChange}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Select>
            </>
          )}
        </Fieldset>
        <Label htmlFor="importance">Importance:</Label>
        <Select
          id="importance"
          name="importance"
          value={updatedPlan.importance}
          onChange={handleInputChange}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </Select>
        <Label htmlFor="medication_name">Medication Name:</Label>
        <Input
          type="text"
          id="medication_name"
          name="medication_name"
          value={updatedPlan.medication_name}
          onChange={handleInputChange}
        />
        <Label htmlFor="active_ingredients">Active Ingredients:</Label>
        <Input
          type="text"
          id="active_ingredients"
          name="active_ingredients"
          value={updatedPlan.active_ingredients}
          onChange={handleInputChange}
        />
        <Label htmlFor="dosage">Dosage:</Label>
        <Input
          type="number"
          id="dosage"
          name="dosage"
          value={updatedPlan.dosage}
          onChange={handleInputChange}
        />
        <Label htmlFor="reason">Reason for taking:</Label>
        <Input
          type="text"
          id="reason"
          name="reason"
          value={updatedPlan.reason}
          onChange={handleInputChange}
        />
        <Label htmlFor="medicationForm">Medication Form:</Label>
        <Select
          name="medicationForm"
          id="medicationForm"
          onChange={handleInputChange}
        >
          <option value="Tablet">Tablet</option>
          <option value="Capsule">Capsule</option>
          <option value="Syrup">Syrup</option>
          <option value="Injection">Injection</option>
          <option value="Powder">Powder</option>
          <option value="Ointment">Ointment</option>
          <option value="Syringe">Syringe</option>
          <option value="Cream">Cream</option>
          <option value="Drops">Drops</option>
          <option value="Spray">Spray</option>
          <option value="Other">Other</option>
        </Select>
        <Fieldset>
          <Legend>Frequency:</Legend>
          <Label htmlFor="frequency">
            <Select name="frequencyType" onChange={handleInputChange}>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </Select>
            <Select name="frequencyTimes" onChange={handleInputChange}>
              <option value=""> -- </option>
              <option value="Once">Once</option>
              <option value="Twice">Twice</option>
              <option value="Thrice">Thrice</option>
              <option value="Four times">Four times</option>
              <option value="Five times">Five times</option>
              <option value="Six times">Six times</option>
              <option value="More">More</option>
            </Select>
          </Label>
          <Checkbox
            type="checkbox"
            name="frequencyMornings"
            value={updatedPlan.frequencyMornings}
            onChange={handleCheckboxChange}
          />
          Mornings
          <Checkbox
            type="checkbox"
            name="frequencyAfternoon"
            value={updatedPlan.frequencyAfternoon}
            onChange={handleCheckboxChange}
          />
          Afternoon
          <Checkbox
            type="checkbox"
            name="frequencyEvening"
            value={updatedPlan.frequencyEvening}
            onChange={handleCheckboxChange}
          />
          Evening
          <Checkbox
            type="checkbox"
            name="frequencyBedtime"
            value={updatedPlan.frequencyBedtime}
            onChange={handleCheckboxChange}
          />
          Bedtime
        </Fieldset>
        <Label htmlFor="instractions">Instructions : </Label>
        <textarea type="text" name="instractions" />
        <Label htmlFor="refill">Refill :</Label>
        <Input type="date" name="refill" />

        <FormButton type="submit">Save</FormButton>
        <FormButton type="button" onClick={onCancel}>
          Cancel
        </FormButton>
      </Fieldset>
    </Form>
  );
}
