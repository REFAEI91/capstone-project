import { useState } from "react";
import { Fieldset, Form, Legend } from "./EditPlanForm.styled";

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
          <label htmlFor="me">
            <input
              type="radio"
              id="me"
              name="for"
              value="Me"
              checked={updatedPlan.for === "Me"}
              onChange={handleInputChange}
            />
            Me
          </label>
          <label htmlFor="someoneElse">
            <input
              type="radio"
              id="someoneElse"
              name="for"
              value="Someone else"
              checked={updatedPlan.for === "Someone else"}
              onChange={handleInputChange}
            />
            Someone else
          </label>

          {updatedPlan.for === "Someone else" && (
            <>
              <legend>Personal information:</legend>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={updatedPlan.name}
                onChange={handleInputChange}
              />
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                value={updatedPlan.age}
                onChange={handleInputChange}
              />
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                name="gender"
                value={updatedPlan.gender}
                onChange={handleInputChange}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </>
          )}
        </Fieldset>
        <label htmlFor="importance">Importance:</label>
        <select
          id="importance"
          name="importance"
          value={updatedPlan.importance}
          onChange={handleInputChange}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <label htmlFor="medication_name">Medication Name:</label>
        <input
          type="text"
          id="medication_name"
          name="medication_name"
          value={updatedPlan.medication_name}
          onChange={handleInputChange}
        />
        <label htmlFor="active_ingredients">Active Ingredients:</label>
        <input
          type="text"
          id="active_ingredients"
          name="active_ingredients"
          value={updatedPlan.active_ingredients}
          onChange={handleInputChange}
        />
        <label htmlFor="dosage">Dosage:</label>
        <input
          type="number"
          id="dosage"
          name="dosage"
          value={updatedPlan.dosage}
          onChange={handleInputChange}
        />
        <label htmlFor="reason">Reason for taking:</label>
        <input
          type="text"
          id="reason"
          name="reason"
          value={updatedPlan.reason}
          onChange={handleInputChange}
        />
        <label htmlFor="medicationForm">Medication Form:</label>
        <select
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
        </select>
        <Fieldset>
          <Legend>Frequency:</Legend>
          <label htmlFor="frequency">
            <select name="frequencyType" onChange={handleInputChange}>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
            <select name="frequencyTimes" onChange={handleInputChange}>
              <option value="">select times</option>
              <option value="Once">Once</option>
              <option value="Twice">Twice</option>
              <option value="Thrice">Thrice</option>
              <option value="Four times">Four times</option>
              <option value="Five times">Five times</option>
              <option value="Six times">Six times</option>
              <option value="More">More</option>
            </select>
          </label>
          <input
            type="checkbox"
            name="frequencyMornings"
            value={updatedPlan.frequencyMornings}
            onChange={handleCheckboxChange}
          />
          Mornings
          <input
            type="checkbox"
            name="frequencyAfternoon"
            value={updatedPlan.frequencyAfternoon}
            onChange={handleCheckboxChange}
          />
          Afternoon
          <input
            type="checkbox"
            name="frequencyEvening"
            value={updatedPlan.frequencyEvening}
            onChange={handleCheckboxChange}
          />
          Evening
          <input
            type="checkbox"
            name="frequencyBedtime"
            value={updatedPlan.frequencyBedtime}
            onChange={handleCheckboxChange}
          />
          Bedtime
        </Fieldset>
        <label htmlFor="instractions">Instructions : </label>
        <textarea type="text" name="instractions" />
        <label htmlFor="refill">Refill :</label>
        <input type="date" name="refill" />

        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </Fieldset>
    </Form>
  );
}
