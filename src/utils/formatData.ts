import {format} from 'date-fns';

export const formatReadebleDate = (
  date: Date | string,
  dateFormat?: string,
): string => {
  const newDate = new Date(date);

  return format(newDate, dateFormat ?? 'dd MMMM yyyy');
};

export const formatApiDate = (
  date: Date | string,
  dateFormat?: string,
): string => {
  const newDate = new Date(date);

  return format(newDate, dateFormat ?? 'yyyy-MM-dd');
};

export const formatReadebleTime = (
  time: Date | string,
  timeFormat?: string,
): string => {
  const newTime = new Date(time);

  return format(newTime, timeFormat ?? 'HH:mm');
};

export const formatCurrency = (money: string | number): string => {
  return `Rp ${money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}`;
};

export const currencyToNumber = (money: string): number => {
  const stringAmount = money.split(' ')[1]?.replace(/\./g, '');
  return parseInt(stringAmount, 10);
};

export const capitalizeFirstLetter = (text: string) =>
  `${text.charAt(0).toUpperCase()}${text.slice(1)}`;

export const getStatusName = (status: string) => {
  const newStatus = status.toLocaleLowerCase();
  switch (newStatus) {
    case 'pending':
      return 'Menunggu';
    case 'rejected':
      return 'Ditolak';
    case 'approved':
      return 'Disetujui';

    default:
      return 'Lunas';
  }
};

export const getStatusColor = (status: string) => {
  const newStatus = status.toLocaleLowerCase();
  switch (newStatus) {
    case 'pending':
      return '#D0AF00';
    case 'rejected':
      return '#E41F1F';

    default:
      return '#00E117';
  }
};
