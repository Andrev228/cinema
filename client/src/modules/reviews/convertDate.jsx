const convertDate = (date) => {
    let now = new Date(),
        differenceSec = now.getTime()/1000 - date.getTime()/1000;
        if (differenceSec < 2) return 'только что';
        else if (differenceSec < 60) return parseInt(differenceSec) + ' секунд назад';
        else if (differenceSec/60 < 60) return parseInt(differenceSec/60) + ' минут назад';
        else if (differenceSec/60/60 < 24) return parseInt(differenceSec/60/60) + ' часов назад';
        else if (differenceSec/60/60/24 < 24) return parseInt(differenceSec/60/60/24) + ' дней назад';
};

export default convertDate;