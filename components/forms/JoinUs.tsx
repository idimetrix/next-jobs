import { faSpinnerThird } from "@fortawesome/pro-duotone-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { zodResolver } from "@hookform/resolvers/zod"
import { HTMLAttributes, useEffect, useMemo, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { z } from "zod"
import { FILE_SIZE_LIMIT } from "../../constants"
import { useGoogleReCaptcha } from "../../hooks/useGoogleReCaptcha"
import { useUpload } from "../../hooks/useUpload"
import { cn } from "../../utils"
import { Button } from "../Button"
import { Field } from "../controls/Field"
import { Form } from "../Form"

interface Props extends HTMLAttributes<HTMLFormElement> {
  preSelectedJob?: string
  onComplete?: () => void
}

const validationSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message is required" }),
  file: z
    .any()
    .refine((value) => (value?.[0]?.size || 0) / 1024 ** 2 > 0, "Attachment is required")
    .refine((value) => (value?.[0]?.size || 0) / 1024 ** 2 <= FILE_SIZE_LIMIT, `Attachment ${FILE_SIZE_LIMIT}MB limit`),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept Terms and Conditions" }),
  }),
})

type ValidationSchema = z.infer<typeof validationSchema>

const subjects = {
  "seo-expert": "SEO Expert",
  "marketing-expert": "Marketing Expert",
  "manual-qa": "Manual QA",
  "product-manager": "Product Manager",
  developer: "Developer / Engineer",
  "customer-support": "Customer Support",
  other: "Other",
}

export function JoinUs({ preSelectedJob, onComplete, className, ...rest }: Props) {
  const [submitting, setSubmitting] = useState(false)

  const { execute, executing } = useGoogleReCaptcha()

  // const { isUploading, upload } = useUpload()

  const {
    setValue,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  })

  // const joinUs = trpc.web.forms.joinUs.useMutation({
  //   async onSuccess() {
  //     toast.success("Message sent successfully. We will get back to you shortly!")
  //     reset()
  //     onComplete?.()
  //
  //     setSubmitting(false)
  //   },
  //   async onError(error) {
  //     toast.error(error.message)
  //
  //     setSubmitting(false)
  //   },
  // })

  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    if (!execute) return

    setSubmitting(true)

    // const [files, token] = await Promise.all([upload(data.file), execute()])

    // joinUs.mutate({
    //   token,
    //   file: files[0],
    //   name: data.name,
    //   email: data.email,
    //   subject: data.subject,
    //   message: data.message,
    // })
  }

  const loading = submitting || executing // || isUploading || joinUs.isLoading

  const fieldsCV = useMemo(
    () => ({
      ...register("file"),
      accept: ".pdf, .csv, .xls, .xlsx, .doc, .docx, .rtf, .txt, .htm, .html",
    }),
    [register]
  )

  useEffect(() => {
    if (preSelectedJob) {
      setValue("subject", preSelectedJob)
    }
  }, [preSelectedJob, setValue])

  return (
    <Form className={cn("flex flex-col gap-4", className)} onSubmit={handleSubmit(onSubmit)} {...rest}>
      <div className="text-2xl font-semibold">Apply here</div>

      <div className="-mx-4 flex flex-wrap">
        <Field
          disabled={loading}
          className="mb-4 w-full px-4 md:mb-0 md:w-1/2"
          label="Your Name"
          placeholder="Enter your name"
          type="text"
          error={errors.name?.message}
          fields={register("name")}
        />
        <Field
          disabled={loading}
          className="w-full px-4 md:w-1/2"
          label="Your Email"
          placeholder="Enter your email"
          type="email"
          error={errors.email?.message}
          fields={register("email")}
        />
      </div>
      <Field
        disabled={loading}
        label="Your Position"
        placeholder="Choose your position"
        type="select"
        error={errors.subject?.message}
        options={subjects}
        fields={register("subject")}
      />
      <Field
        disabled={loading}
        label="Your Message"
        placeholder="Enter your message"
        type="textarea"
        error={errors.message?.message}
        fields={register("message")}
      />
      <Field
        disabled={loading}
        label="Your File (CV/Resume)"
        type="file"
        error={errors.file?.message as string}
        fields={fieldsCV}
      />
      <Field
        disabled={loading}
        placeholder="Accept Terms & Conditions"
        type="checkbox"
        error={errors.terms?.message}
        fields={register("terms")}
      />
      <div>
        <Button type="submit" color="secondary" disabled={loading}>
          <span className={cn(loading && "invisible")}>Submit</span>
          {loading && <FontAwesomeIcon icon={faSpinnerThird} className="absolute animate-spin" />}
        </Button>
      </div>
    </Form>
  )
}
