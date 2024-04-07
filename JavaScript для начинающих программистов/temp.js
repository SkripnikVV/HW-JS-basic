const isDate = (str) => {
    const rsm = str.match(/(\d{2})[\.|\-](\d{2})[\.|\-](\d{4})+/);
    if (rsm) {
        console.log('найдена дата: ', str);
        return true;
    }
    return false;
}

const isPhone = (str) => {
    let cleanStr = str.split('').filter(x => x === '+' || !isNaN(x)).join('');
    const rsm = cleanStr.match(/\b[8|\+\d{1,4}]\d{10,}\b/);
    if (rsm) {
        console.log('найден телефон: ', str);
        return true;
    }
    return false;
}

const isMail = (str) => {
    const rsm = str.match(/(\w+[\.|\d|\-|_|\w]+)(@\w+[\.|\d|\-|_|\w]+)(\.\w{2,5})/);
    if (rsm) {
        console.log('найдена почта: ', rsm, str);
        return true;
    }
    return false;
}

const strings = ['23.08.1983', '+7-903-903-93-93','8-903-903-93-96', 'vova.1983.goo-gle@rus-mail.ru']

strings.forEach(string => {
    isDate(string) || isPhone(string) || isMail(string);
})
