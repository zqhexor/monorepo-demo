import dayjs from 'dayjs'

export const dayjsFormat = (time, format="YYYY-MM-DD") => {
  return dayjs(time).format(format)
}