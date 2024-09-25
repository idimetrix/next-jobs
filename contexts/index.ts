import { combineProviders } from "react-combine-providers"
import { ConstantsProvider } from "./constants"

const provider = combineProviders()

for (const contentProvider of [ConstantsProvider]) {
  provider.push(contentProvider)
}

// Master provider is used to provide the context to all components
export default provider.master()

export { useConstants } from "./constants"
