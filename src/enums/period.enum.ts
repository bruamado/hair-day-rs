export const Period = {
  MORNING: 1,
  AFTERNOON: 2,
  EVENING: 3,
} as const

export type Period = (typeof Period)[keyof typeof Period]
