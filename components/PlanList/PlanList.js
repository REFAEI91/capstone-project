import EditPlanForm from "../EditPlanForm/EditPlanForm";
import { List, Title, Heading, Span } from "./PlanList.styled";
import { useState } from "react";
import { FormButton } from "../EditPlanForm/EditPlanForm.styled";

export default function PlanList({ plans, onEditPlan, onDeletePlan }) {
  const myPlans = plans.filter((plan) => plan.for === "Me");
  const otherPlans = plans.filter((plan) => plan.for !== "Me");
  const [activePlanKey, setActivePlanKey] = useState(null);
  const [showMyPlans, setShowMyPlans] = useState(false); // Initialize state as false
  const [editingPlan, setEditingPlan] = useState(null);
  const handleActivePlanKey = (key) => {
    setActivePlanKey(activePlanKey === key ? null : key);
  };
  const handleShowMyPlans = () => {
    // Toggle showAllPlans state when heading is clicked
    setShowMyPlans(!showMyPlans);
  };
  function handleEditPlan(plan) {
    setEditingPlan(plan);
  }
  function handleSavePlan(updatedPlan) {
    onEditPlan(updatedPlan);
    setEditingPlan(null);
  }
  function handleCancelEdit() {
    setEditingPlan(null);
  }
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
                {plan.frequencyMornings ? " Mornings  " : "   "}
                {plan.frequencyAfternoon ? " Afternoons  " : "  "}
                {plan.frequencyEvening ? " Evenings  " : "  "}
                {plan.frequencyBedtime ? " Bed-Time  " : "  "})
              </li>
              <li>Form : {plan.medicationForm}</li>
              <li>Refill Date : {plan.refill}</li>
              <li>Reason for taking : {plan.reason}</li>
              <li>Instructions : {plan.instractions}</li>
              {editingPlan === plan ? (
                <EditPlanForm
                  plan={plan}
                  onSave={handleSavePlan}
                  onCancel={handleCancelEdit}
                />
              ) : (
                <>
                  {/* Display plan details */}
                  <FormButton onClick={() => handleEditPlan(plan)}>
                    Edit
                  </FormButton>
                  <FormButton onClick={() => onDeletePlan(plan.id)}>
                    Delete
                  </FormButton>
                </>
              )}
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
          ).map((group) => (
            <div key={group.key}>
              <Heading>
                {group.name} ({group.gender}, {group.age})
              </Heading>
              <Span onClick={() => handleActivePlanKey(group.key)}>
                {activePlanKey === group.key ? "Hide Plans" : "Show Plans"} (
                {group.medications.length}) :
              </Span>
              {activePlanKey === group.key &&
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
                    {editingPlan === plan ? (
                      <EditPlanForm
                        plan={plan}
                        onSave={handleSavePlan}
                        onCancel={handleCancelEdit}
                      />
                    ) : (
                      <>
                        {/* Display plan details */}
                        <FormButton onClick={() => handleEditPlan(plan)}>
                          Edit
                        </FormButton>
                        <FormButton onClick={() => onDeletePlan(plan.id)}>
                          Delete
                        </FormButton>
                      </>
                    )}
                  </List>
                ))}
            </div>
          ))}
        </>
      )}
    </>
  );
}
