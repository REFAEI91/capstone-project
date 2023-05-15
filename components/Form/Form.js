import {
  Form,
  Fieldset,
  ForFieldset,
  Legend,
  Label,
  Input,
  Textarea,
  Select,
  Radio,
  Checkbox,
  FormButton,
  SomeoneElse,
} from "./Form.styled";
export default function Plan({
  forSomeoneElse,
  handleForChange,
  handleSubmit,
}) {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Fieldset>
          <Legend> Medication plan</Legend>
          <ForFieldset>
            <legend>For :</legend>
            <Radio
              id="me"
              type="radio"
              name="for"
              value="Me"
              onChange={handleForChange}
              required
            />
            <label htmlFor="me">Me</label>
            <Radio
              id="someoneElse"
              type="radio"
              name="for"
              defaultValue="Someone else"
              onChange={handleForChange}
              required
            />
            <label htmlFor="someoneElse">Someone else</label>
          </ForFieldset>
          {forSomeoneElse && (
            <SomeoneElse>
              <Label htmlFor="name">Name : </Label>
              <Input type="text" name="name" required />
              <Label htmlFor="age">Age : </Label>
              <Input type="number" name="age" required />
              <Label htmlFor="gender">Gender : </Label>
              <Select name="gender" required>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Select>
            </SomeoneElse>
          )}
          <Label htmlFor="importance">Importance : </Label>
          <Select name="importance" required>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </Select>
          <Label htmlFor="medication_name">Medication Name : </Label>
          <Input type="text" name="medication_name" required />
          <Label htmlFor="activ_ingredients">Active Ingredients :</Label>
          <Input type="text" name="active_ingredients" />
          <Label htmlFor="dosage">Dosage :</Label>
          <Input
            type="number"
            name="dosage"
            id="dosage"
            min="0"
            step="0.01"
            required
          />
          <Label htmlFor="reason">Reason for taking: </Label>
          <Input type="text" name="reason" required />
          <Label htmlFor="medicationForm">Medication Form : </Label>
          <Select name="medicationForm" required>
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
          <SomeoneElse>
            <Label htmlFor="frequency">
              Frequency :
              <Select name="frequencyType" required>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </Select>
              <Select name="frequencyTimes" required>
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
          <Label htmlFor="instractions">Instructions : </Label>
          <Textarea type="text" name="instractions" />
          <Label htmlFor="refill">Refill :</Label>
          <Input type="date" name="refill" />
          <FormButton type="submit">Submit</FormButton>
        </Fieldset>
      </Form>
    </>
  );
}
