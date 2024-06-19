export function formatDate(dateStr) {
    const date = new Date(dateStr);

    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date);

    return formattedDate;
}