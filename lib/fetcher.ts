/* eslint-disable @typescript-eslint/no-unsafe-argument */

// Copied this from SWR documentation

export async function fetcher(...args: unknown[]) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const res = await fetch(...args)
  return res.json()
}
