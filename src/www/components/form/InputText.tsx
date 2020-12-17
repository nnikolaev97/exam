import React, { forwardRef } from "react";

export const InputText = forwardRef(function InputText(
  { name, label }: { name?: string; label: string },
  ref: any
) {
  return (
    <div>
      <label>
        {label}
        <br />
        <input name={name} ref={ref} />
      </label>
    </div>
  );
});
