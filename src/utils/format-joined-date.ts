function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date))
}

export function formatJoinedDate(date: string | Date) {
  return `Joined ${formatDate(date)}`
}

export function formatUpdatedDate(date: string | Date) {
  return `Updated ${formatDate(date)}`
}
