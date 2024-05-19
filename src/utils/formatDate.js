import { format } from "date-fns";
import { pt } from "date-fns/locale";

export const formatDate = (date, value) => {
  const formattedDate = format(String(new Date(date)), value, {
    locale: pt,
  });
  return String(formattedDate);
};
