interface Prop {
    number?: number | null
}
export function formatNumberWithCommas({number}: Prop) {
    if (number === undefined || number === null) {
        return "0";
    }
    return number.toLocaleString('en-US');
}
