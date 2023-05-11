import { List } from "./PlanList.styled";
export default function PlanList({ plans }) {
  return (
    <>
      {plans.map((plan, index) => (
        <List key={index}>
          <li>For : {plan.for}</li>
          <li>{plan.name ? `Name : ${plan.name}` : ""}</li>
          <li>{plan.gender ? `  Gender : ${plan.gender}` : ""}</li>
          <li>Medication Name :{plan.medication_name}</li>
          <li>Active Ingredients :{plan.active_ingredients}</li>
          <li>Dosage : {plan.dosage}</li>
          <li>
            Frequency : {plan.frequencyType} , {plan.frequencyTimes} , (
            {plan.frequencyMornings ? "Mornings  " : " , "}
            {plan.frequencyAfternoon ? "Afternoon  " : " , "}
            {plan.frequencyEvening ? "Evenings  " : " , "}
            {plan.frequencyBedTime ? "Bed Time  " : " "})
          </li>
          <li>Form : {plan.medicationForm}</li>
          <li>Refill Date : {plan.refill}</li>
          <li>Reason for taking : {plan.reason}</li>
          <li>Instructions : {plan.instractions}</li>
        </List>
      ))}
    </>
  );
}
