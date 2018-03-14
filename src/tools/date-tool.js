export const getDate = (date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const dateUTC = new Date(date);
    return dateUTC.getDate() + ' ' + months[dateUTC.getMonth()] + ' ' + dateUTC.getFullYear();
}
