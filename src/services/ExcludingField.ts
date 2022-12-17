
export function excludingField<Obj, Key extends keyof Obj>(
  obj: Obj,
  keys: Key[]
): Omit<Obj, Key> {
  for (const key of keys) {
    delete obj[key]
  }
  return obj
}
