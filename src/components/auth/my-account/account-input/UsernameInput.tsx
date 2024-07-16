import { UseFormReturn } from "react-hook-form";
import { AccountFormValues } from "@/components/auth/my-account/accountFormSchema";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type Props = {
  form: UseFormReturn<AccountFormValues>;
  disabled?: boolean;
  value ?: string
};

// ... (imports)

export default function UsernameInput({ form, disabled,value }: Props) {
  const hasError = !!form.formState.errors.username;
  console.log('value',value)
  const inputValue = form.watch("username"); // Get the current value of the "username" field

  return (
    <div className="relative my-6">
      <label className="mb-2 block text-sm leading-[22px] font-medium md:font-bold text-[#343434]">會員名稱</label>
      <FormField
        control={form.control}
        name="username"
        disabled={disabled}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                placeholder=" "
                id="floating_filled-10 username"
                className={`textfield ${hasError ? "error" : ""} textfield-container disabled:opacity-100 placeholder:-translate-y-6 peer`}
                name="username"
                // value={inputValue || ""} // Set the value manually
                onChange={(e) => form.setValue("username", e.target.value)} // Update the form value manually
                disabled={disabled}
              />
            </FormControl>
            <label
              htmlFor="floating_filled-10 username"
              className={`${disabled ? "textfield-label-disabled" : "textfield-label-account"} peer-focus:text-[#1A1818] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1 peer-focus:scale-[.65] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}
            >
              {value ? value :"請輸入會員名稱"}
              {/* {inputValue ? inputValue : inputValue} */}
            </label>
            <FormMessage className="text-xs font-normal text-primary-800 pt-1" />
          </FormItem>
        )}
      />
    </div>
  );
}

