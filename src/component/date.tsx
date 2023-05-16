import { parseISO, format, isValid } from "date-fns";

export default function Date({ dateString = "1970-01-01T00:00:00" }: any) {
  // 在進行日期轉換之前，先進行有效性檢查
  const date = parseISO(dateString);

  if (!isValid(date)) {
    console.error("Invalid ISO 8601 date string:", dateString);
    return <time dateTime=""></time>; // 如果日期無效，返回一個空的 <time> 元素
  }

  let formattedDate = "";

  try {
    formattedDate = format(date, "LLLL d, yyyy");
  } catch (error) {
    console.error("Error formatting date:", error);
  }

  return <time dateTime={dateString}>{formattedDate}</time>;
}
