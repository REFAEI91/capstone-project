import { useState } from "react";
import {
  Form,
  Fieldset,
  Legend,
  Label,
  Input,
  Textarea,
  Select,
  Checkbox,
  FormButton,
  SomeoneElse,
} from "./Form.styled";
import PlanList from "../PlanList/PlanList";
export default function Plan() {
  const [plan, setPlan] = useState([]);
  const [forSomeoneElse, setForSomeoneElse] = useState(false);
  const handleForChange = (event) => {
    setForSomeoneElse(event.target.value === "Someone else");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const frequency = [];
    for (let [key, value] of formData.entries()) {
      if (key.startsWith("frequency")) {
        frequency.push(value);
      }
    }
    const plan = {
      ...Object.fromEntries(formData.entries()),
      frequency,
    };
    setPlan((prevPlan) => [...prevPlan, plan]);
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Fieldset>
          <Legend> Medications plan</Legend>
          <label htmlFor="for">
            {" "}
            For :
            <Checkbox
              type="radio"
              name="for"
              value="Me"
              onChange={handleForChange}
            />{" "}
            <span>Me</span>{" "}
          </label>
          <Checkbox
            type="radio"
            name="for"
            defaultValue="Someone else"
            onChange={handleForChange}
          />{" "}
          <span>Someone else</span>
          <br />
          {forSomeoneElse && (
            <SomeoneElse>
              <Label htmlFor="name">
                {" "}
                Name :
                <Input type="text" name="name" />
              </Label>
              <Label htmlFor="age">
                {" "}
                Age :
                <Input type="number" name="age" />
              </Label>
              <Label htmlFor="gender">
                {" "}
                Gender :
                <Select name="gender">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </Select>
              </Label>
            </SomeoneElse>
          )}
          <Label htmlFor="importance">
            {" "}
            Importance :
            <Select name="importance">
              <option defaultValue="High">High</option>
              <option defaultValue="Medium">Medium</option>
              <option defaultValue="Low">Low</option>
            </Select>
          </Label>
          <Label htmlFor="medication_name">
            {" "}
            Medication Name :
            <Input type="text" name="medication_name" />
          </Label>
          <Label htmlFor="activ_ingredients">
            {" "}
            Activ Ingredients :
            <Input type="text" name="activ_ingredients" />
          </Label>
          <Label htmlFor="dosage">
            {" "}
            Dosage :
            <Input
              type="number"
              name="dosage"
              id="dosage"
              min="0"
              step="0.01"
            />
          </Label>
          <Label htmlFor="reason">
            {" "}
            Reason for taking:
            <Input type="text" name="reason" />
          </Label>
          <Label htmlFor="form">
            {" "}
            Form :
            <Select name="form">
              <option defaultValue="Tablet">Tablet</option>
              <option defaultValue="Capsule">Capsule</option>
              <option defaultValue="Syrup">Syrup</option>
              <option defaultValue="Injection">Injection</option>
              <option defaultValue="Powder">Powder</option>
              <option defaultValue="Ointment">Ointment</option>
              <option defaultValue="Syringe">Syringe</option>
              <option defaultValue="Cream">Cream</option>
              <option defaultValue="Drops">Drops</option>
              <option defaultValue="Spray">Spray</option>
              <option defaultValue="Other">Other</option>
            </Select>
          </Label>
          <SomeoneElse>
            <Label htmlFor="frequency">
              {" "}
              Frequency :
              <Select name="frequencyType">
                <option defaultValue="Daily">Daily</option>
                <option defaultValue="Weekly">Weekly</option>
                <option defaultValue="Monthly">Monthly</option>
              </Select>
              <Select name="frequencyTimes">
                <option defaultValue="Once">Once</option>
                <option defaultValue="Twice">Twice</option>
                <option defaultValue="Thrice">Thrice</option>
                <option defaultValue="Four times">Four times</option>
                <option defaultValue="Five times">Five times</option>
                <option defaultValue="Six times">Six times</option>
                <option defaultValue="More">More</option>
              </Select>
            </Label>
            <Checkbox
              type="checkbox"
              name="frequencyMornings"
              value="Mornings"
            />
            Mornings
            <Checkbox
              type="checkbox"
              name="frequencyAfternoon"
              value="Afternoon"
            />
            Afternoon
            <Checkbox type="checkbox" name="frequencyEvening" value="Evening" />
            Evening
            <Checkbox type="checkbox" name="frequencyBedtime" value="Bedtime" />
            Bedtime
          </SomeoneElse>
          <Label htmlFor="instractions">
            {" "}
            Instructions :
            <Textarea type="text" name="instractions" />
          </Label>
          <Label htmlFor="refill">
            {" "}
            Refill :
            <Input type="date" name="refill" />
          </Label>
          <FormButton type="submit">Submit</FormButton>
        </Fieldset>
      </Form>
      <PlanList plans={plan} />
    </>
  );
}
