export function formatJoinedDate(date: Date) {
  const formatted = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date)

  return `Joined ${formatted}`
}
