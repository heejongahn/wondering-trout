import { parseISO, format } from "date-fns";
import { ko } from "date-fns/locale";

export function parseDate(dateString: string) {
  return parseISO(dateString);
}

export function formatDate(date: Date, dateFormat?: string) {
  return format(date, dateFormat ?? `PPP`, { locale: ko });
}

export function prettifyDate(date: Date, dateFormat?: string) {
  return formatDate(date, dateFormat);
}

export function prettifyDateString(dateString: string, dateFormat?: string) {
  return prettifyDate(parseDate(dateString), dateFormat);
}
