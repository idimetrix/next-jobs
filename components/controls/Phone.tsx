import { FieldValues } from "react-hook-form/dist/types/fields"
import { Control } from "react-hook-form/dist/types/form"
import "react-phone-number-input/style.css"
import { DefaultInputComponentProps } from "react-phone-number-input"
import PhoneInputWithCountry, {
  DefaultFormValues,
  Props as PhoneInputWithCountryProps,
} from "react-phone-number-input/react-hook-form"
import { cn } from "../../utils"

interface Props extends PhoneInputWithCountryProps<DefaultInputComponentProps, DefaultFormValues> {
  fields?: FieldValues
  control?: Control
}

export function Phone({ name, fields, control, className, css, ...rest }: Props) {
  return (
    <PhoneInputWithCountry
      css={{
        ".PhoneInputInput": {
          padding: "16px",
          borderRadius: "4px",
          borderColor: "#ddd",
        },
        ...css,
      }}
      className={cn(className, "p-0")}
      control={control}
      defaultCountry="US"
      international
      maxLength="16"
      limitMaxLength
      withCountryCallingCode
      name={name}
      {...rest}
    />
  )
}
