import { parseISO, format } from "date-fns";

export function parseDate(dateString: string) {
  return parseISO(dateString);
}

export function formatDate(date: Date, dateFormat?: string) {
  return format(date, dateFormat ?? `yyyy. M. d`);
}

export function prettifyDate(date: Date, dateFormat?: string) {
  return formatDate(date, dateFormat);
}

export function prettifyDateString(dateString: string, dateFormat?: string) {
  return prettifyDate(parseDate(dateString), dateFormat);
}
