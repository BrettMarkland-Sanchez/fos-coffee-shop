module.exports = {
    format_date: (date) => {
        // Format date as MM/DD/YYYY
        return date.toLocaleDateString();
    },
    format_amount: (amount) => {
        // format large numbers with commas
        return parseInt(amount).toLocaleString();
    },
    format_name: (string) => {
        // format text to lowercase and replace spaces with hyphens
        string.replace(/\s+/g, '-').toLowerCase();
        return string;
    }
};