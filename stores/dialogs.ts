import { create } from "zustand"
import { devtools } from "zustand/middleware"

interface DialogsState {
  signIn: boolean
  setSignIn: (signIn?: boolean) => void
  signUp: boolean
  setSignUp: (signUp?: boolean) => void
}

export const useDialogsStore = create<DialogsState>()(
  devtools(
    (set) => ({
      signIn: false,
      setSignIn: (signIn?: boolean) => set({ signIn }),
      signUp: false,
      setSignUp: (signUp?: boolean) => set({ signUp }),
    }),
    { enabled: false }
  )
)
