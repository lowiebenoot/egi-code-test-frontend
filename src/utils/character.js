export const getName = character => {
  if (character.name && character.name.length) {
    return character.name
  }

  if (character.aliases && character.aliases.length) {
    return character.aliases[0]
  }

  return "Unknown"
}

export const getPlayedBy = character => {
  if (!character.playedBy) {
    return null
  }

  const playedBy = character.playedBy.filter(Boolean)

  return playedBy.length ? playedBy : null
}
