import {Select, Option} from '@material-tailwind/react';

export default function SelectOptions({selections}: {selections: string[]}) {
  return (
    <div className='w-72'>
      <Select label='Selection'>
        {selections.map((selection, index) => (
          <Option key={index}>{selection}</Option>
        ))}
      </Select>
    </div>
  );
}
