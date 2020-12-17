import React, { forwardRef } from "react";

export const Select = forwardRef(function Select(
  { name, label, values }: { name?: string; label: string; values: string[] },
  ref: any
) {
  return (
    <div>
      <label>
        {label}
        <br />
        <select name={name} ref={ref}>
          {values.map((v) => (
            <option value={v} key={v}>
              {v}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
});
