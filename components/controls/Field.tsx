import * as Switch from "@radix-ui/react-switch"
import { HTMLAttributes, HTMLInputTypeAttribute, ReactNode } from "react"
import { FieldValues } from "react-hook-form/dist/types/fields"
import { Control } from "react-hook-form/dist/types/form"
import { PatternFormat } from "react-number-format"
import { File } from "./File"
import { Input } from "./Input"
import { Multiselect } from "./Multiselect"
import { Phone } from "./Phone"
import { Select } from "./Select"
import { Textarea } from "./Textarea"
import { cn } from "../../utils"

const DIVIDER = "_________"

interface Props extends HTMLAttributes<HTMLLabelElement> {
  readonly?: boolean
  label?: ReactNode
  placeholder?: string
  details?: string
  type?: HTMLInputTypeAttribute | "textarea" | "select" | "switch" | "multiselect" | "float" | undefined
  before?: ReactNode
  after?: ReactNode
  error?: string
  classNameInput?: string
  classNameDetails?: string
  classNameContainer?: string
  classNameWrapper?: string
  classNameError?: string
  fields?: FieldValues
  options?: Record<string, string>
  optionsOrdered?: [key: string, value: string][]
  hasError?: boolean
  disabled?: boolean
  control?: Control
}

export function Field({
  readonly = false,
  children,
  label,
  placeholder,
  details,
  type,
  before,
  after,
  error,
  classNameInput = "",
  classNameDetails = "",
  classNameContainer = "",
  classNameError = "",
  classNameWrapper = "",
  fields = {},
  options = {},
  optionsOrdered,
  hasError = true,
  className,
  disabled,
  control,
  ...rest
}: Props) {
  return (
    <label className={cn("flex w-full flex-col", className)} {...rest}>
      {label && <div className="">{label}</div>}

      <div className={cn("relative flex w-full flex-col", classNameWrapper)}>
        {before}
        {type === "textarea" && (
          <Textarea
            disabled={disabled || readonly}
            readOnly={readonly}
            className={cn("", classNameInput, error && "border-fever")}
            placeholder={placeholder}
            rows={5}
            {...fields}
          />
        )}

        {type === "select" && (
          <Select
            defaultValue=""
            disabled={disabled || readonly}
            readOnly={readonly}
            className={cn("", classNameInput, fields?.multiple && "", error && "border-fever")}
            {...fields}
          >
            {!fields?.multiple && (
              <option disabled value="" className="text-sm">
                {placeholder}
              </option>
            )}
            {optionsOrdered
              ? optionsOrdered.map(([key, value]) => (
                  <option
                    aria-label={value}
                    className={cn("", fields?.multiple && "")}
                    key={key}
                    value={key}
                    {...(key === DIVIDER && { disabled: true })}
                  >
                    {value}
                  </option>
                ))
              : Object.entries(options).map(([key, value]) => (
                  <option
                    aria-label={value}
                    className={cn("", fields?.multiple && "")}
                    key={key}
                    value={key}
                    {...(key === DIVIDER && { disabled: true })}
                  >
                    {value}
                  </option>
                ))}
          </Select>
        )}

        {type === "switch" && (
          <div className={cn("flex w-full items-center", classNameContainer)}>
            <Switch.Root
              {...fields}
              disabled={disabled || readonly}
              value={undefined}
              checked={fields?.value}
              onCheckedChange={(value: boolean) =>
                fields?.onChange({
                  target: { name: fields?.name, value },
                })
              }
              className="bg-light1 data-[state=checked]:bg-blue1 relative h-[25px] w-[42px] cursor-default select-none rounded-full outline-none"
            >
              <Switch.Thumb className="block size-[21px] rounded-full bg-white transition-transform duration-100 will-change-transform translate-x-0.5 data-[state=checked]:translate-x-[19px]" />
            </Switch.Root>

            <div className={cn(`ml-4 flex`, error && "")}>{children || placeholder}</div>
          </div>
        )}

        {type === "multiselect" && (
          <div className={cn("flex w-full items-center", classNameContainer)}>
            <Multiselect
              options={Object.entries(options).map(([value, label]) => ({
                value,
                label,
              }))}
              onChange={(option: any) => {
                fields?.onChange(option?.value)
              }}
            />
            <div className={cn(`ml-4 flex`, error && "")}>{children || placeholder}</div>
          </div>
        )}

        {type === "checkbox" && (
          <div className={cn("flex w-full cursor-pointer items-center", classNameContainer)}>
            <input
              readOnly={readonly}
              disabled={disabled || readonly}
              type="checkbox"
              style={{
                boxShadow: "none",
                "--tw-ring-color": "var(--color-nila-blue)",
                ...fields?.style,
              }}
              className={cn("shadow-none", fields?.className)}
              {...fields}
            />
            <div className={cn(`ml-4 flex`, error && "")}>{children || placeholder}</div>
          </div>
        )}

        {type === "radio" && (
          <div className={cn("flex w-full items-center", classNameContainer)}>
            <input
              readOnly={readonly}
              disabled={disabled || readonly}
              type="radio"
              style={{
                boxShadow: "none",
                "--tw-ring-color": "var(--color-nila-blue)",
                ...fields?.style,
              }}
              className={cn("shadow-none", fields?.className)}
              {...fields}
            />
            <div className={cn(`ml-4 flex`, error && "")}>{children || placeholder}</div>
          </div>
        )}

        {type === "file" && (
          <File
            readOnly={readonly}
            disabled={disabled || readonly}
            className={cn(classNameInput, error && "border-fever")}
            type={type}
            placeholder={placeholder}
            {...fields}
          />
        )}

        {type === "tel" && (
          <Phone
            readOnly={readonly}
            disabled={disabled || readonly}
            className={cn("", classNameInput, error && "border-fever")}
            placeholder={placeholder}
            fields={fields}
            control={control}
            name={fields?.name}
          />
        )}

        {type === "cardNumber" && (
          <PatternFormat
            readOnly={readonly}
            disabled={disabled || readonly}
            placeholder={placeholder}
            className={cn("", classNameInput, error && "border-fever", readonly && "border-transparent")}
            format="#### #### #### #### ###"
            name={fields?.name}
            getInputRef={fields?.ref}
            onBlur={fields?.onBlur}
            onValueChange={({ value }) => {
              fields?.onChange({ target: { name: fields?.name, value } })
            }}
          />
        )}

        {type === "cardDate" && (
          <PatternFormat
            readOnly={readonly}
            disabled={disabled || readonly}
            placeholder={placeholder}
            className={cn("", classNameInput, error && "border-fever", readonly && "border-transparent")}
            format="##/##"
            name={fields?.name}
            getInputRef={fields?.ref}
            onBlur={fields?.onBlur}
            onValueChange={({ value }) => {
              fields?.onChange({ target: { name: fields?.name, value } })
            }}
          />
        )}

        {type === "cardCode" && (
          <PatternFormat
            readOnly={readonly}
            disabled={disabled || readonly}
            placeholder={placeholder}
            className={cn("", classNameInput, error && "border-fever", readonly && "border-transparent")}
            format="####"
            name={fields?.name}
            getInputRef={fields?.ref}
            onBlur={fields?.onBlur}
            onValueChange={({ value }) => {
              fields?.onChange({ target: { name: fields?.name, value } })
            }}
          />
        )}

        {type === "float" && (
          <Input
            readOnly={readonly}
            disabled={disabled || readonly}
            className={cn("", classNameInput, error && "border-fever")}
            type="number"
            step={0.01}
            placeholder={placeholder}
            {...fields}
          />
        )}

        {type &&
          ![
            "textarea",
            "select",
            "checkbox",
            "radio",
            "file",
            "switch",
            "multiselect",
            "tel",
            "cardNumber",
            "cardDate",
            "cardCode",
            "float",
          ].includes(type) && (
            <Input
              readOnly={readonly}
              disabled={disabled || readonly}
              className={cn("", classNameInput, error && "border-fever")}
              type={type}
              placeholder={placeholder}
              {...fields}
            />
          )}

        {after}
      </div>

      {details && <div className={cn("mt-1 text-sm opacity-75", classNameDetails)}>{details}</div>}

      {hasError && (
        <div className={cn("text-fever h-4 text-sm", (!error || readonly) && "invisible", classNameError)}>{error}</div>
      )}
    </label>
  )
}
