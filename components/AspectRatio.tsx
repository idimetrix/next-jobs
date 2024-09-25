import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

interface AspectRatioProps extends AspectRatioPrimitive.AspectRatioProps {}

export const AspectRatio = ({ children, ...rest }: AspectRatioProps) => {
  return <AspectRatioPrimitive.Root {...rest}>{children}</AspectRatioPrimitive.Root>
}
