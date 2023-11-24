import { Select, Option } from "@material-tailwind/react";

export default function SelectOptions({
  selections,
}: {
  selections: string[];
}) {
  return (
    <div className="w-72">
      <Select label="Selection">
        {selections.map((selection) => (
          <Option>{selection}</Option>
        ))}
      </Select>
    </div>
  );
}

// export default function SelectOptions({
//   selections,
// }: {
//   selections: string[];
// }) {
//   return (
//     <div>
//       <select
//         name="HeadlineAct"
//         id="HeadlineAct"
//         className="mt-1.5 w-full rounded-none border-gray-300 text-gray-700 sm:text-sm"
//       >
//         {selections.map((selection) => (
//           <option value={selection}>{selection}</option>
//         ))}
//       </select>
//     </div>
//   );
// }
