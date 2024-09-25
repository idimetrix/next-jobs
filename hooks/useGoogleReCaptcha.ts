import { useCallback, useState } from "react"

// ---------------------------------------------------------------------------------------------------------------------

declare global {
  interface Window {
    grecaptcha: IReCaptchaInstance
  }
}

export interface IReCaptchaInstance {
  ready: (callback: () => void) => void

  /**
   * Will execute the ReCaptcha using the given SiteKey and the given options.
   * @param siteKey The ReCaptcha SiteKey.
   * @param options The options for the execution. (Only known property is "action")
   */
  execute: (siteKey: string, options: IExecuteOptions) => Promise<string>

  /**
   * Will render the ReCaptcha widget into the given container with the given parameters. This render function is
   * useful when using `badge: 'inline'`, which lets you render the ReCaptcha widget into the given container and
   * let's you style it with CSS by yourself.
   *
   * @param container The container into which the widget shall be rendered.
   * @param parameters The rendering parameters for the widget.
   */
  render: ((container: string | Element, parameters: IRenderParameters) => string) &
    ((parameters: IRenderParameters) => string)

  enterprise: Omit<IReCaptchaInstance, "enterprise">
}

/**
 * Describes the options for the ReCaptcha execution.
 *
 * @see https://developers.google.com/recaptcha/docs/v3#frontend_integration
 */
export declare interface IExecuteOptions {
  action?: string
}

/**
 * Describes the rendering parameters for the ReCaptcha widget.
 * The rendering parameters do not differ for v3.
 *
 * @see https://developers.google.com/recaptcha/docs/invisible#render_param
 * @see https://stackoverflow.com/a/53620039
 */
export declare interface IRenderParameters {
  sitekey: string
  badge?: "bottomright" | "bottomleft" | "inline"
  size?: "invisible"
  tabindex?: number
}

// ---------------------------------------------------------------------------------------------------------------------

type Options = {
  nonce?: string
}

export const useGoogleReCaptcha = (options: Options = {}) => {
  const [executing, setExecuting] = useState(false)

  const id = "google-recaptcha-v3"

  const handleOnLoadScript = useCallback(() => {
    window.grecaptcha.ready(() => {
      //
    })
  }, [])

  const handleOnErrorScript = useCallback(() => {}, [])

  const execute = useCallback(
    async (action?: string) => {
      if (!process.env.NEXT_PUBLIC_RECAPTHA_SITE_KEY) return ""

      setExecuting(true)

      if (!document.getElementById(id)) {
        const render = document.createElement("div")
        render.setAttribute("data-badge", "inline")
        render.setAttribute("data-size", "invisible")
        render.setAttribute("data-sitekey", process.env.NEXT_PUBLIC_RECAPTHA_SITE_KEY)
        document.body.appendChild(render)

        const js = document.createElement("script")
        js.id = id
        js.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTHA_SITE_KEY}`
        js.nonce = document.body.getAttribute("data-nonce") || undefined
        js.defer = true
        js.async = true
        js.onload = handleOnLoadScript
        js.onerror = handleOnErrorScript
        document.body.appendChild(js)
      }

      return new Promise<string>((resolve) => {
        if (window.grecaptcha?.execute) {
          window.grecaptcha
            .execute(process.env.NEXT_PUBLIC_RECAPTHA_SITE_KEY as string, { action })
            .then((value: string) => {
              resolve(value)

              setExecuting(false)
            })
        } else {
          const interval = setInterval(() => {
            if (window.grecaptcha?.execute) {
              clearInterval(interval)

              window.grecaptcha
                .execute(process.env.NEXT_PUBLIC_RECAPTHA_SITE_KEY as string, { action })
                .then((value: string) => {
                  resolve(value)

                  setExecuting(false)
                })
            }
          }, 200)
        }
      })
    },
    [handleOnLoadScript, handleOnErrorScript]
  )

  return {
    execute,
    executing,
  }
}
