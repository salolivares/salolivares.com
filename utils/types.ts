// stackoverflow.com/questions/54826012/using-omit-type-on-classes-with-a-index-type-signature-results-in-minimum-proper
export type EnhancedOmit<T, K extends PropertyKey> = { [P in keyof T as Exclude<P, K>]: T[P] }
