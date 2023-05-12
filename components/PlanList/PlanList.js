import { List, Title, Heading, Span } from "./PlanList.styled";
import { useState } from "react";

export default function PlanList({ plans }) {
  const myPlans = plans.filter((plan) => plan.for === "Me");
  const otherPlans = plans.filter((plan) => plan.for !== "Me");
  const [activePlanIndex, setActivePlanIndex] = useState(null);
  const [showMyPlans, setShowMyPlans] = useState(false); // Initialize state as false
  const handleactivePlanIndex = (index) => {
    setActivePlanIndex(activePlanIndex === index ? null : index);
  };

  const handleShowMyPlans = () => {
    // Toggle showAllPlans state when heading is clicked
    setShowMyPlans(!showMyPlans);
  };
  console.log(plans);
  return (
    <>
      <Title>My Medications Plan</Title>
      <Span onClick={handleShowMyPlans}>
        {showMyPlans ? "Hide Plans" : "Show Plans"} ({myPlans.length}) :
      </Span>
      {myPlans.length > 0 && showMyPlans && (
        <>
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
          <Title>Others Plans</Title>
          {Object.values(
            otherPlans.reduce((groupedPlans, plan) => {
              const key = `${plan.name}-${plan.gender}-${plan.age}`;
              if (!groupedPlans[key]) {
                groupedPlans[key] = {
                  key,
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
            <div key={group.key}>
              <Heading>
                {group.name} ({group.gender}, {group.age})
              </Heading>
              <Span onClick={() => handleactivePlanIndex(index)}>
                {activePlanIndex === index ? "Hide Plans" : "Show Plans"} (
                {group.medications.length}) :
              </Span>
              {activePlanIndex === index &&
                group.medications.map((plan) => (
                  <List key={plan.id} importance={plan.importance}>
                    <li>Medication Name : {plan.medication_name}</li>
                    <li>Active Ingredients : {plan.active_ingredients}</li>
                    <li>Dosage : {plan.dosage}</li>
                    <li>
                      Frequency : {plan.frequencyType} , {plan.frequencyTimes} ,
                      ({plan.frequencyMornings ? "Mornings  " : "   "}
                      {plan.frequencyAfternoon ? "Afternoon  " : "   "}
                      {plan.frequencyEvening ? "Evenings  " : "   "}
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
