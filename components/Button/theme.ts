import { tv } from "tailwind-variants"
import { BUTTON_VARIANTS } from "../../enums"

export const ButtonTheme = tv({
  base: "px-4 py-2.5 font-medium border dark:bg-opacity-10 hover:scale-105 disabled:opacity-80 disabled:cursor-not-allowed dark:hover:bg-opacity-100 hover:bg-opacity-100 bg-opacity-100 active:opacity-90 transition-all duration-300 hover:text-white rounded-full",
  variants: {
    variant: {
      primary: "text-primary-500 bg-primary-100 dark:bg-primary-500 border-primary-500 hover:bg-primary-500",
      // secondary:
      //   "text-secondary-500 bg-secondary-100 dark:bg-secondary-500 border-secondary-500 hover:bg-secondary-500",
      // success: "text-success-500 bg-success-100 dark:bg-success-500 border-success-500 hover:bg-success-500",
      // danger: "text-danger-500 bg-danger-100 dark:bg-danger-500 border-danger-500 hover:bg-danger-500",
      // warning: "text-warning-500 bg-warning-100 dark:bg-warning-500 border-warning-500 hover:bg-warning-500",
      // info: "text-info-500 bg-info-100 dark:bg-info-500 border-info-500 hover:bg-info-500",
      // light: "bg-secondary-50 dark:bg-secondary-50/10 border-secondary-50/10 hover:bg-secondary-500",
      // dark: "text-dark-500 dark:text-dark-100 bg-dark-100 dark:bg-dark-500 border-dark-500 hover:bg-dark-500",
    },
    dark: {
      true: "bg-opacity-100 dark:bg-opacity-100",
    },
    outline: {
      true: "bg-transparent dark:bg-transparent",
      false: "border-transparent dark:border-transparent text-white",
    },
  },
  // compoundVariants: [
  //   {
  //     variant: "link",
  //     class: "text-primary-500 hover:underline hover:text-primary-500",
  //   },
  //   // {
  //   //   variant: "link",
  //   //   dark: true,
  //   //   class: "text-primary-500 hover:text-primary-500 hover:underline",
  //   // },
  //   // {
  //   //   variant: 'light',
  //   //   dark: true,
  //   //   class: `bg-secondary-500`,
  //   // },
  //   ...["primary", "secondary", "success", "danger", "warning", "info", "dark"].map((variant) => ({
  //     variant: variant as unknown as BUTTON_VARIANTS,
  //     dark: true,
  //     class: `bg-${variant}-500`,
  //   })),
  // ],
  defaultVariants: {
    variant: "primary",
  },
})
