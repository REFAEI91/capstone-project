import { useState } from "react";
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

  console.log(plan);

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend> Medications plan</legend>
        <label htmlFor="for">
          {" "}
          For :
          <input
            type="radio"
            name="for"
            value="Me"
            onChange={handleForChange}
          />{" "}
          <span>Me</span>{" "}
        </label>
        <input
          type="radio"
          name="for"
          defaultValue="Someone else"
          onChange={handleForChange}
        />{" "}
        <span>Someone else</span>
        <br />
        {forSomeoneElse && (
          <fieldset>
            <label htmlFor="name">
              {" "}
              Name :
              <input type="text" name="name" />
            </label>
            <label htmlFor="age">
              {" "}
              Age :
              <input type="number" name="age" />
            </label>
            <label htmlFor="gender">
              {" "}
              Gender :
              <select name="gender">
                <option defaultValue="Male">Male</option>
                <option defaultValue="Female">Female</option>
                <option defaultValue="Other">Other</option>
              </select>
            </label>
          </fieldset>
        )}
        <label htmlFor="importance">
          {" "}
          Importance :
          <select name="importance">
            <option defaultValue="High">High</option>
            <option defaultValue="Medium">Medium</option>
            <option defaultValue="Low">Low</option>
          </select>
        </label>
        <label htmlFor="medication_name">
          {" "}
          Medication Name :
          <input type="text" name="medication_name" />
        </label>
        <label htmlFor="activ_ingredients">
          {" "}
          Activ Ingredients :
          <input type="text" name="activ_ingredients" />
        </label>
        <label htmlFor="dosage">
          {" "}
          Dosage :
          <input type="text" name="dosage" />
        </label>
        <label htmlFor="reason">
          {" "}
          Reason for taking:
          <input type="text" name="reason" />
        </label>
        <label htmlFor="form">
          {" "}
          Form :
          <select name="form">
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
          </select>
        </label>
        <fieldset>
          <label htmlFor="frequency">
            {" "}
            Frequency :
            <select name="frequencyType">
              <option defaultValue="Daily">Daily</option>
              <option defaultValue="Weekly">Weekly</option>
              <option defaultValue="Monthly">Monthly</option>
            </select>
            <select name="frequencyTimes">
              <option defaultValue="Once">Once</option>
              <option defaultValue="Twice">Twice</option>
              <option defaultValue="Thrice">Thrice</option>
              <option defaultValue="Four times">Four times</option>
              <option defaultValue="Five times">Five times</option>
              <option defaultValue="Six times">Six times</option>
              <option defaultValue="More">More</option>
            </select>
          </label>
          <input type="checkbox" name="frequencyMornings" value="Mornings" />
          Mornings
          <input type="checkbox" name="frequencyAfternoon" value="Afternoon" />
          Afternoon
          <input type="checkbox" name="frequencyEvening" value="Evening" />
          Evening
          <input type="checkbox" name="frequencyBedtime" value="Bedtime" />
          Bedtime
        </fieldset>
        <label htmlFor="instractions">
          {" "}
          Instructions :
          <textarea type="text" name="instractions" />
        </label>
        <label htmlFor="refill">
          {" "}
          Refill :
          <input type="date" name="refill" />
        </label>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}
