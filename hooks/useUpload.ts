// import { trpc } from "@elevance/trpc/react"
import { S3 } from "aws-sdk"
import { useCallback, useMemo, useState } from "react"
import toast from "react-hot-toast"

export const useUpload = () => {
  // const [isUploading, setIsUploading] = useState<boolean>(false)
  //
  // const s3CreatePresignedPost = trpc.web.aws.s3CreatePresignedPost.useMutation()
  //
  // const upload = useCallback(
  //   async (files: File[]): Promise<string[]> =>
  //     new Promise<string[]>((resolve, reject) => {
  //       s3CreatePresignedPost.mutate(
  //         Array.from(files || []).map((file) => ({
  //           fileName: file.name,
  //           fileType: file.type,
  //         })),
  //         {
  //           async onSuccess(presignedPosts: S3.PresignedPost[]) {
  //             setIsUploading(true)
  //
  //             const responses = await Promise.all(
  //               presignedPosts.map((presignedPost, index) => {
  //                 const formData = new FormData()
  //
  //                 for (const [key, value] of Object.entries({
  //                   ...presignedPost.fields,
  //                   file: files[index],
  //                 })) {
  //                   formData.append(key, value as string)
  //                 }
  //
  //                 return fetch(presignedPost.url, {
  //                   method: "POST",
  //                   body: formData,
  //                   mode: "no-cors",
  //                 })
  //               })
  //             )
  //
  //             resolve(
  //               responses.map((response, index) =>
  //                 response.ok || response.status === 0
  //                   ? `${presignedPosts[index].url}/${presignedPosts[index].fields.key}`
  //                   : ""
  //               )
  //             )
  //
  //             setIsUploading(false)
  //           },
  //           async onError(error: any) {
  //             toast.error(error.message)
  //             reject(error)
  //           },
  //         }
  //       )
  //     }),
  //   [s3CreatePresignedPost]
  // )
  //
  // return useMemo(
  //   () => ({
  //     upload,
  //     isUploading: s3CreatePresignedPost.isLoading || isUploading,
  //   }),
  //   [upload, isUploading, s3CreatePresignedPost]
  // )
}
