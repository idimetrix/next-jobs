import { faChevronDown, faClose } from "@fortawesome/pro-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ReactSelect, {
  ClearIndicatorProps,
  components,
  DropdownIndicatorProps,
  MultiValueRemoveProps,
  Props as ReactSelectProps,
} from "react-select"
import { cn } from "../../utils"

interface Props extends ReactSelectProps {
  controlStyles?: {
    base?: string
    focus?: string
    nonFocus?: string
  }
  placeholderStyles?: string
  selectInputStyles?: string
  valueContainerStyles?: string
  singleValueStyles?: string
  multiValueStyles?: string
  multiValueLabelStyles?: string
  multiValueRemoveStyles?: string
  indicatorsContainerStyles?: string
  clearIndicatorStyles?: string
  indicatorSeparatorStyles?: string
  dropdownIndicatorStyles?: string
  menuStyles?: string
  menuPlacement?: "auto" | "bottom" | "top"
  groupHeadingStyles?: string
  optionStyles?: {
    base?: string
    focus?: string
    nonFocus?: string
    selected?: string
  }
  noOptionsMessageStyles?: string
}

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <FontAwesomeIcon icon={faChevronDown} className="" />
    </components.DropdownIndicator>
  )
}

const ClearIndicator = (props: ClearIndicatorProps) => {
  return (
    <components.ClearIndicator {...props}>
      <FontAwesomeIcon icon={faClose} className="" />
    </components.ClearIndicator>
  )
}

const MultiValueRemove = (props: MultiValueRemoveProps) => {
  return (
    <components.MultiValueRemove {...props}>
      <FontAwesomeIcon icon={faClose} className="" />
    </components.MultiValueRemove>
  )
}

export const Multiselect = ({
  controlStyles = {
    base: "border rounded-lg border-midnight-magic bg-ruined-smores ring-nila-blue transition-all duration-300 hover:border-nila-blue",
    focus: "border-nila-blue ring-1",
    nonFocus: "ring-0",
  },
  placeholderStyles = "text-midnight-magic",
  selectInputStyles = "",
  valueContainerStyles = "py-3.5 px-5 gap-1 flex",
  singleValueStyles = "",
  multiValueStyles = "bg-nila-blue text-white rounded text-sm px-2 py-1 gap-1",
  multiValueLabelStyles = "",
  multiValueRemoveStyles = "",
  indicatorsContainerStyles = "",
  clearIndicatorStyles = "px-5 cursor-pointer",
  indicatorSeparatorStyles = "bg-midnight-magic",
  dropdownIndicatorStyles = "px-5 cursor-pointer",
  menuStyles = "mt-2 border rounded border-midnight-magic bg-ruined-smores",
  groupHeadingStyles = "",
  menuPlacement = "top",
  optionStyles = {
    base: "px-5 py-3.5 hover:cursor-pointer hover:bg-nila-blue z-2",
    focus: "cursor-pointer z-2",
    selected: "bg-blue1/5 after:content-['✔'] after:ml-2 z-2",
  },
  noOptionsMessageStyles = "px-5 py-3.5",
  components,
  className,
  styles = {},
  classNames = {},
  ...rest
}: Props) => {
  return (
    <ReactSelect
      unstyled
      // isSearchable
      isMulti
      // menuIsOpen
      menuPlacement={menuPlacement}
      styles={{
        input: (base) => ({
          ...base,
          "input:focus": {
            boxShadow: "none",
          },
          display: "flex",
          width: "auto",
        }),
        // On mobile, the label will truncate automatically, so we want to
        // override that behaviour.
        multiValueLabel: (base) => ({
          ...base,
          whiteSpace: "normal",
          overflow: "visible",
        }),
        control: (base) => ({
          ...base,
        }),
        ...styles,
      }}
      components={{
        DropdownIndicator,
        ClearIndicator,
        MultiValueRemove,
        ...components,
      }}
      classNames={{
        control: ({ isFocused }) => cn(controlStyles?.base, isFocused ? controlStyles?.focus : controlStyles?.nonFocus),
        placeholder: () => placeholderStyles,
        input: () => selectInputStyles,
        valueContainer: () => valueContainerStyles,
        singleValue: () => singleValueStyles,
        multiValue: () => multiValueStyles,
        multiValueLabel: () => multiValueLabelStyles,
        multiValueRemove: () => multiValueRemoveStyles,
        indicatorsContainer: () => indicatorsContainerStyles,
        clearIndicator: () => clearIndicatorStyles,
        indicatorSeparator: () => indicatorSeparatorStyles,
        dropdownIndicator: () => dropdownIndicatorStyles,
        menu: () => menuStyles,
        groupHeading: () => groupHeadingStyles,
        option: ({ isFocused, isSelected }) =>
          cn(
            optionStyles?.base,
            isFocused ? optionStyles?.focus : optionStyles?.nonFocus,
            isSelected && optionStyles?.selected
          ),
        noOptionsMessage: () => noOptionsMessageStyles,
        ...classNames,
      }}
      className={cn("", className)}
      {...rest}
    />
  )
}
