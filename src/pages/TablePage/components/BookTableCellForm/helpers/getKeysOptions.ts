export const getKeysOptions = (keys: VitalKeyDto[]) =>
  keys.map((key) => ({ label: key.name, value: key.keyId }))
