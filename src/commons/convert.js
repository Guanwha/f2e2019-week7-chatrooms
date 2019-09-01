

// fill zeros to the number (ex: 9 with 3 display digits => 009)
export const dec0X = (num, length) => (Array(length).join('0') + num).slice(-length);

export default dec0X;
