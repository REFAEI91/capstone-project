import { List } from "./PlanList.styled";

export default function PlanList({ plans }) {
  const myPlans = plans.filter((plan) => plan.for === "Me");
  const otherPlans = plans.filter((plan) => plan.for !== "Me");
  console.log(myPlans);
  return (
    <>
      {myPlans.length > 0 && (
        <>
          <h2>My Medications Plan</h2>
          {myPlans.map((plan, index) => (
            <List key={index} importance={plan.importance}>
              <li>Medication Name : {plan.medication_name}</li>
              <li>Active Ingredients : {plan.active_ingredients}</li>
              <li>Dosage : {plan.dosage}</li>
              <li>
                Frequency : {plan.frequencyType} , {plan.frequencyTimes} , (
                {plan.frequencyMornings ? "Mornings  " : "   "}
                {plan.frequencyAfternoon ? "Afternoon  " : "  "}
                {plan.frequencyEvening ? "Evenings  " : "  "}
                {plan.frequencyBedTime ? "Bed Time  " : "  "})
              </li>
              <li>Form : {plan.medicationForm}</li>
              <li>Refill Date : {plan.refill}</li>
              <li>Reason for taking : {plan.reason}</li>
              <li>Instructions : {plan.instractions}</li>
            </List>
          ))}
        </>
      )}

      {otherPlans.length > 0 && (
        <>
          <h2>Others Plans</h2>
          {Object.values(
            otherPlans.reduce((groupedPlans, plan) => {
              const key = `${plan.name}-${plan.gender}-${plan.age}`;
              if (!groupedPlans[key]) {
                groupedPlans[key] = {
                  name: plan.name,
                  gender: plan.gender,
                  age: plan.age,
                  medications: [],
                };
              }
              groupedPlans[key].medications.push(plan);
              return groupedPlans;
            }, {})
          ).map((group, index) => (
            <div key={index}>
              <h3>
                {group.name} ({group.gender}, {group.age})
              </h3>
              {group.medications.map((plan, index) => (
                <List key={index} importance={plan.importance}>
                  <li>Medication Name : {plan.medication_name}</li>
                  <li>Active Ingredients : {plan.active_ingredients}</li>
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
            </div>
          ))}
        </>
      )}
    </>
  );
}
