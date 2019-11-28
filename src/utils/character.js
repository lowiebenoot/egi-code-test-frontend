export const getName = character => {
  if (character.name && character.name.length) {
    return character.name
  }

  if (character.aliases && character.aliases.length) {
    return character.aliases[0]
  }

  return "Unknown"
}
