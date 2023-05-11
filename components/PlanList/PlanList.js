export default function PlanList({ plans }) {
  return (
    <>
      {plans.map((plan, index) => (
        <ul key={index}>
          <li>{plan.for}</li>
          <li>{plan.name}</li>
          <li>{plan.gender}</li>
          <li>{plan.medication_name}</li>
          <li>{plan.frequency}</li>
          <li>{plan.form}</li>
          <li>{plan.refill}</li>
          <li>{plan.dosage}</li>
          <li>{plan.reason}</li>
        </ul>
      ))}
    </>
  );
}
