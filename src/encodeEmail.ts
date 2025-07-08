export const sendEmail = () => {
    window.location.href = 'mailto:' + getEmail();
};

export const getEmail = () => {
    return String.fromCharCode(110,105,99,111,100,116,104,101,111,64,111,117,116,108,111,111,107,46,102,114);
};