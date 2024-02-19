export const getKeysOptions = (keys: KeyDto[]) => keys.map((key) => ({ label: key.room, value: key.id }))
