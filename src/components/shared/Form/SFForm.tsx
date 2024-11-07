import { ReactNode } from "react";
import { FormProvider,  useForm } from "react-hook-form";

interface SFFormProps {
  onSubmit: any;
  children: ReactNode;
}
const SFForm = ({ onSubmit, children }: SFFormProps) => {
  // const {handleSubmit} = useForm();
  const methods = useForm();
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
      </FormProvider>
    </>
  );
};

export default SFForm;
