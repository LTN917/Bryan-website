import { parseISO, format } from "date-fns";

export default function Date({ dateString }: any) {
  let formattedDate = "";

  try {
    const date = parseISO(dateString);
    formattedDate = format(date, "LLLL d, yyyy");
  } catch (error) {
    console.error("Error parsing or formatting date:", error);
  }

  return <time dateTime={dateString}>{formattedDate}</time>;
}
