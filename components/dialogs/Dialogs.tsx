import { Dialog } from "./Dialog"
import { useDialogsStore } from "../../stores/dialogs"

export function Dialogs() {
  const dialogs = useDialogsStore()

  return (
    <>
      <Dialog
        className="max-w-[90%] lg:max-w-[600px]"
        title="Sign In"
        open={dialogs.signIn}
        onOpenChange={() => dialogs.setSignIn()}
      >
        {dialogs.signIn && <div>Sign In</div>}
      </Dialog>

      <Dialog
        className="max-w-[90%] lg:max-w-[600px]"
        title="Sign Up"
        open={dialogs.signUp}
        onOpenChange={() => dialogs.setSignUp()}
      >
        {dialogs.signUp && <div>Sign Up</div>}
      </Dialog>
    </>
  )
}
