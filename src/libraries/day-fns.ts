import { subDays, format } from 'date-fns';

const date = new Date(1998, 1, 28);
const rta = subDays(date, 10);
const strDate = format(rta, 'yyyy-MM-dd');
console.log(strDate);
