import { faSpinnerThird } from "@fortawesome/pro-duotone-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ToasterProps } from "react-hot-toast"

export const toaster: ToasterProps = {
  containerClassName: "",
  containerStyle: {},
  toastOptions: {
    duration: 5000,
    style: {
      background: "var(--color-acorn)",
      border: "none",
      boxShadow: "none",
      color: "#ffffff",
      fontSize: "16px",
      borderRadius: "4px",
    },
    success: {
      style: {
        background: "var(--color-acorn)",
        color: "var(--color-armor)",
      },
      iconTheme: {
        primary: "var(--color-armor)",
        secondary: "var(--color-acorn)",
      },
    },
    error: {
      style: {
        background: "var(--color-red-1)",
        color: "#fff",
      },
      iconTheme: {
        primary: "#fff",
        secondary: "var(--color-red-1)",
      },
    },
    loading: {
      style: {
        background: "var(--color-acorn)",
        color: "var(--color-armor)",
      },
      icon: <FontAwesomeIcon icon={faSpinnerThird} className="text-acorn h-[20px] w-[20px] animate-spin" />,
      iconTheme: {
        primary: "var(--color-armor)",
        secondary: "var(--color-acorn)",
      },
    },
  },
}
