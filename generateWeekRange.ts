export const generateWeekRange = (date?: string | undefined) => {
  let newDate: Date

  if (typeof date === "string") {
    newDate = new Date(date)
  } else {
    newDate = new Date()
  }

  const milisecondsAt24Hours = 86400000
  const daysToEndWeek = 6

  const getStartWeek = () => {
    let dias = newDate.getDay() * milisecondsAt24Hours

    return new Date(newDate.getTime() - dias)
  }

  const getEndWeek = () => {
    let daysToSum =
      getStartWeek().getTime() + daysToEndWeek * milisecondsAt24Hours

    return new Date(daysToSum)
  }

  const todayStartWeek = new Date(getStartWeek().toDateString())
  const todayEndWeek = new Date(getEndWeek().toDateString())

  const getNextStartWeek = (date: string | undefined) => {
    let nextDay

    if (typeof date === "string") {
      nextDay = new Date(date).getTime() + 1 * milisecondsAt24Hours
    } else {
      nextDay = new Date().getTime() + 1 * milisecondsAt24Hours
    }

    return new Date(nextDay).toDateString()
  }

  return {
    startWeek: todayStartWeek.toDateString(),
    endWeek: todayEndWeek.toDateString(),
    nextWeek: getNextStartWeek,
  }
}
