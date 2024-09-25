import { faSpinnerThird } from "@fortawesome/pro-duotone-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { zodResolver } from "@hookform/resolvers/zod"
import { HTMLAttributes, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { z } from "zod"
import { useGoogleReCaptcha } from "../../hooks/useGoogleReCaptcha"
import { cn } from "../../utils"
import { Button } from "../Button"
import { Field } from "../controls/Field"
import { Form } from "../Form"

interface Props extends HTMLAttributes<HTMLFormElement> {
  onComplete?: () => void
}

const validationSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message is required" }),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept Terms and Conditions" }),
  }),
})

type ValidationSchema = z.infer<typeof validationSchema>

const subjects = {
  partnership: "Partnership",
  press: "Press",
  general_inquiry: "General Inquiry",
  job_application: "Job Application",
}

export function ContactUs({ onComplete, className, ...rest }: Props) {
  const [submitting, setSubmitting] = useState(false)

  const { execute, executing } = useGoogleReCaptcha()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  })

  // const contactUs = trpc.web.forms.contactUs.useMutation({
  //   async onSuccess() {
  //     toast.success("Message sent successfully. We will get back to you shortly!")
  //     reset()
  //     onComplete?.()
  //   },
  //   async onError(error) {
  //     toast.error(error.message)
  //   },
  // })

  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    if (!execute) return

    // contactUs.mutate({
    //   token: await execute(),
    //   name: data.name,
    //   email: data.email,
    //   subject: data.subject,
    //   message: data.message,
    // })
  }

  const isLoading = submitting || executing // || contactUs.isLoading

  return (
    <Form className={cn("flex flex-col gap-4", className)} onSubmit={handleSubmit(onSubmit)} {...rest}>
      <div className="text-xl font-bold">Send a message</div>

      <div className="-mx-4 flex flex-wrap">
        <Field
          disabled={isLoading}
          className="mb-4 w-full px-4 md:mb-0 md:w-1/2"
          label="Your Name"
          placeholder="Enter your name"
          type="text"
          error={errors.name?.message}
          fields={register("name")}
        />
        <Field
          disabled={isLoading}
          className="w-full px-4 md:w-1/2"
          label="Your Email"
          placeholder="Enter your email"
          type="email"
          error={errors.email?.message}
          fields={register("email")}
        />
      </div>
      <Field
        disabled={isLoading}
        label="Your Subject"
        placeholder="Enter your subject"
        type="select"
        error={errors.subject?.message}
        options={subjects}
        fields={register("subject")}
      />
      <Field
        disabled={isLoading}
        label="Your Message"
        placeholder="Enter your message"
        type="textarea"
        error={errors.message?.message}
        fields={register("message")}
      />
      <Field
        disabled={isLoading}
        placeholder="Accept Terms & Conditions"
        type="checkbox"
        error={errors.terms?.message}
        fields={register("terms")}
      />
      <div>
        <Button type="submit" color="secondary" disabled={isLoading}>
          <span className={cn(isLoading && "invisible")}>Send Message</span>
          {isLoading && <FontAwesomeIcon icon={faSpinnerThird} className="absolute size-4 animate-spin" />}
        </Button>
      </div>
    </Form>
  )
}
