import Head from "next/head";
import PlanList from "@/components/PlanList/PlanList";

export default function Profile({ medicationPlan }) {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div>
        <h2>User Information</h2>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td></td>
            </tr>
            <tr>
              <td>Age:</td>
              <td></td>
            </tr>
            <tr>
              <td>Gender:</td>
              <td></td>
            </tr>
            <tr>
              <td>Height:</td>
              <td> cm</td>
            </tr>
            <tr>
              <td>Weight:</td>
              <td> kg</td>
            </tr>
          </tbody>
        </table>

        <PlanList plans={medicationPlan} />
      </div>
    </>
  );
}
