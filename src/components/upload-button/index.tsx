import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Edit } from "lucide-react";
import { ErrorMessage } from "@hookform/error-message";

type Props = {
  register: UseFormRegister<any>;
  errors: FieldErrors<FieldValues>;
  label: string;
};

const UploadButton = ({ errors, label, register }: Props) => {
  return (
    <>
      <div className="felx items-center gap-2">
        <Label
          htmlFor="upload-button"
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-cream p-3 text-sm font-semibold text-gray-600"
        >
          <Input
            {...register("image")}
            className="hidden"
            type="file"
            id="upload-button"
          />
          <Edit />
          {label}
        </Label>
        <p className="ml-6 text-sm text-gray-400">
          Recommended size is 300px * 300px, size <br /> less than 2MB
        </p>
      </div>
      <ErrorMessage
        errors={errors}
        name="image"
        render={({ message }) => (
          <p className="mt-2 text-red-400">
            {message === "Required" ? "" : message}
          </p>
        )}
      />
    </>
  );
};

export default UploadButton;
