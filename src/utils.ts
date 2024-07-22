export function textToHex(text: string) {
    return text.split('').map(char => {
        return char.charCodeAt(0).toString(16);
    }).join('_')
}

export function hexToText(hex: string) {
    return hex.split('_').map(code => {
        return String.fromCharCode(parseInt(code, 16));
    }).join('');
}