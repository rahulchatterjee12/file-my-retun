import React from "react";
// import { Done } from "@/components/Common/Icons";
// import { CheckCircleOutlineIcon } from "react-icons/fa6";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
const PlansTable = (props) => {
  const { data, type } = props;
  if (
    !data ||
    typeof data !== "object" ||
    !Array.isArray(data.data) ||
    !Array.isArray(data.tirePermission) ||
    !Array.isArray(data.tierPlans)
  ) {
    return <div>No data or incorrect structure</div>;
  }

  const filteredData = data.data.filter((d) => d);

  const header = filteredData.map(
    (plan, index) =>
      plan && (
        <th key={index} className="border px-4 py-4 font-normal text-[24px]">
          {plan.tierName}
        </th>
      )
  );

  const headerOne = filteredData.map(
    (plan, index) =>
      plan && (
        <th key={index} className="border px-4 py-4 font-normal text-[28px]">
          <p className="text-[#263238] font-bold text-[16px]">
            {" "}
            &#8377; {plan.price}/-
          </p>
        </th>
      )
  );

  const headerTwo = filteredData.map(
    (plan, index) =>
      plan && (
        <th
          key={index}
          className="border px-4 py-4 font-normal text-[24px] text-[#4640DE]"
        >
          &#8377; {plan.discountPrice}
        </th>
      )
  );

  const body = data.tirePermission.map((permission, index) => {
    if (!permission) return null;
    const tierPlan = data.tierPlans.find(
      (plan) => plan && plan._id === permission.typeId
    );
    if (tierPlan) {
      return (
        <tr className={index % 2 === 0 ? "bg-[#D9D9D9]" : ""} key={index}>
          <td className="border px-4 py-3">{tierPlan.planName}</td>
          {filteredData.map(
            (plan) =>
              plan && (
                <td className="border px-4 py-3" key={plan._id}>
                  {/* {plan._id === permission.tierId && <Done />} */}
                </td>
              )
          )}
        </tr>
      );
    }
    return null;
  });

  return (
    <table className="table-fixed w-full">
      <thead>
        <tr
          className={`${
            type === "online" ? "bg-[#258D8C]" : "bg-[#4640DE] text-white"
          }`}
        >
          <th className="border px-4 py-4">Tiers Plans</th>
          {header}
        </tr>
        <tr>
          <th className="border px-4 py-4">Discounted Price</th>
          {headerTwo}
        </tr>
      </thead>
      {type === "online" && (
        <tbody>
          <tr className="bg-[#D9D9D9] text-center">
            <td className="border px-4 py-2">Form16</td>
            <td className="border px-4 py-2">Single</td>
            <td className="border px-4 py-2">Multiple</td>
            <td className="border px-4 py-2">Single</td>
            <td className="border px-4 py-2">Multiple</td>
            <td className="border px-4 py-2">Multiple</td>
            <td className="border px-4 py-2">Multiple</td>
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">House Property</td>
            <td className="border px-4 py-2">Single</td>
            <td className="border px-4 py-2">Multiple</td>
            <td className="border px-4 py-2">Single</td>
            <td className="border px-4 py-2">Multiple</td>
            <td className="border px-4 py-2">Multiple</td>
            <td className="border px-4 py-2">Multiple</td>
          </tr>
          <tr className="bg-[#D9D9D9] text-center">
            <td className="border px-4 py-2">Residential Status</td>
            <td className="border px-4 py-2">Resident</td>
            <td className="border px-4 py-2">
              Resident /<br /> Non-Resident
            </td>
            <td className="border px-4 py-2">Resident</td>
            <td className="border px-4 py-2">
              Resident /<br /> Non-Resident
            </td>
            <td className="border px-4 py-2">
              Resident /<br /> Non-Resident
            </td>
            <td className="border px-4 py-2">
              Resident /<br /> Non-Resident
            </td>
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">Income from Other Sources</td>
            <td className="border px-4 py-2">
              <CheckCircleOutlineIcon className="ml-16 h-[20px] w-[20px] text-[#4640DE]" />
            </td>
            <td className="border px-4 py-2">
              <CheckCircleOutlineIcon className="ml-16 h-[20px] w-[20px] text-[#4640DE]" />
            </td>
            <td className="border px-4 py-2">
              <CheckCircleOutlineIcon className="ml-16 h-[20px] w-[20px] text-[#4640DE]" />
            </td>
            <td className="border px-4 py-2">
              <CheckCircleOutlineIcon className="ml-16 h-[20px] w-[20px] text-[#4640DE]" />
            </td>
            <td className="border px-4 py-2">
              <CheckCircleOutlineIcon className="ml-16 h-[20px] w-[20px] text-[#4640DE]" />
            </td>
            <td className="border px-4 py-2">
              <CheckCircleOutlineIcon className="ml-16 h-[20px] w-[20px] text-[#4640DE]" />
            </td>
          </tr>
          <tr className="bg-[#D9D9D9] text-center">
            <td className="border px-4 py-2 text-[14px]">
              Tuition or Professional Income only
              <br /> (TDS U/s 94J)
            </td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2">
              <CheckCircleOutlineIcon className="ml-16 h-[20px] w-[20px]" />
            </td>
            <td className="border px-4 py-2">
              <CheckCircleOutlineIcon className="ml-16 h-[20px] w-[20px]" />
            </td>
            <td className="border px-4 py-2">
              <CheckCircleOutlineIcon className="ml-16 h-[20px] w-[20px]" />
            </td>
            <td className="border px-4 py-2">
              <CheckCircleOutlineIcon className="ml-16 h-[20px] w-[20px]" />
            </td>
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">Capital Gain or Loss</td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2">
              <CheckCircleOutlineIcon className="ml-16 h-[20px] w-[20px] text-[#4640DE]" />
            </td>
            <td className="border px-4 py-2">
              <CheckCircleOutlineIcon className="ml-16 h-[20px] w-[20px] text-[#4640DE]" />
            </td>
            <td className="border px-4 py-2">
              <CheckCircleOutlineIcon className="ml-16 h-[20px] w-[20px] text-[#4640DE]" />
            </td>
          </tr>
          <tr className="bg-[#D9D9D9] text-center">
            <td className="border px-4 py-2">Income from Business</td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2">
              <CheckCircleOutlineIcon className="ml-16 h-[20px] w-[20px]" />
            </td>
            <td className="border px-4 py-2">
              <CheckCircleOutlineIcon className="ml-16 h-[20px] w-[20px]" />
            </td>
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">Bonds or Fixed Deposit</td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2">
              <CheckCircleOutlineIcon className="ml-16 h-[20px] w-[20px]" />
            </td>
            <td className="border px-4 py-2">
              <CheckCircleOutlineIcon className="ml-16 h-[20px] w-[20px]" />
            </td>
          </tr>
        </tbody>
      )}
      {type === "offline" && <tbody>{body}</tbody>}
    </table>
  );
};

export default PlansTable;
