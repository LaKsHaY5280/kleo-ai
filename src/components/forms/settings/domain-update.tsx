import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import FormGenerator from "../form-generator";

type DomainUpdateProps = {
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

export const DomainUpdate = ({ name, register, errors }: DomainUpdateProps) => {
  return (
    <div className="flex w-[400px] items-end gap-2 pt-5">
      <FormGenerator
        label="Domain name"
        register={register}
        name="domain"
        errors={errors}
        type="text"
        inputType="input"
        placeholder={name}
      />
    </div>
  );
};
