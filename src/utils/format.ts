export function formatDDMMYY(value: string | number): any {
  if (!value) {
    return ''
  }
  const date = new Date(value)
  return (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '/' + (date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/' + date.getFullYear()
}

export function formatHHMM(value: string | number): any {
  if (!value) {
    return ''
  }
  const date = new Date(value)
  const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  return hour + ':' + minutes
}

export function timeAgo(time: string | number): string {
  if (time) {
    const thisTime = new Date(time).getTime()
    const now = new Date().getTime()
    const elapsed = now - thisTime

    const msPerMinute = 60 * 1000
    const msPerHour = msPerMinute * 60
    const msPerDay = msPerHour * 24
    const msPerMonth = msPerDay * 30
    const msPerYear = msPerDay * 365

    if (elapsed < 1000) {
      return 'Vừa xong'
    } else if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + ' giây'
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + ' phút'
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + ' giờ'
    } else if (elapsed < msPerMonth) {
      const day = Math.round(elapsed / msPerDay)
      if (day < 7) {
        return day + ' ngày'
      } else {
        return Math.round(day / 7) + ' tuần'
      }
    } else if (elapsed < msPerYear) {
      return Math.round(elapsed / msPerMonth) + ' tháng'
    } else {
      return Math.round(elapsed / msPerYear) + ' năm'
    }
  }
  return ''
}

export function bytesToSize(bytes: number): string {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (bytes === 0) return '0 Byte'
  const i = Math.floor(Math.floor(Math.log(bytes) / Math.log(1024)))
  return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i]
}
