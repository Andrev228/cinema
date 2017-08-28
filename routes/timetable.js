var express = require('express');
var router  = express.Router();

router.get('', function (req, res, next) {
    res.render('index');
});

router.get('/api', function(req, res, next) {
    res.send(JSON.stringify([
            {
                    id: 0,
                    title: 'Чужой: Завет',
                    image: '../images/alien.jpg',
                    genre: ['Фантастика', 'Ужасы', 'Триллер'],
                    timetable: {
                        '01.01.2017': [{
                            time: '10:30',
                            format: '3D'
                        }, {
                            time: '12:45',
                            format: ''
                        }, {
                            time: '16:00',
                            format: '3DX'
                        }, {
                            time: '20:00',
                            format: ''
                        }],
                        '02.01.2017': [{
                            time: '11:00',
                            format: '3DX'
                        }, {
                            time: '14:30',
                            format: '3D'
                        }, {
                            time: '16:00',
                            format: ''
                        }, {
                            time: '21:30',
                            format: '3DX'
                        }],
                        '03.01.2017': [{
                            time: '11:30',
                            format: '3D'
                        }, {
                            time: '13:30',
                            format: ''
                        }, {
                            time: '17:45',
                            format: ''
                        }],
                        '04.01.2017': [{
                            time: '10:30',
                            format: '3D'
                        }, {
                            time: '13:45',
                            format: ''
                        }, {
                            time: '18:00',
                            format: '3D'
                        }],
                    }
                }, {
                    id: 1,
                    title: 'Синяя бездна',
                    image: '../images/bezdn.jpg',
                    genre: ['Фантастика', 'Комедия'],
                    timetable: {
                        '01.01.2017': [{
                            time: '10:30',
                            format: '3DX'
                        }, {
                            time: '13:45',
                            format: ''
                        }, {
                            time: '17:00',
                            format: '3D'
                        }],
                        '02.01.2017': [{
                            time: '10:30',
                            format: ''
                        }, {
                            time: '14:00',
                            format: ''
                        }, {
                            time: '19:30',
                            format: '3DX'
                        }],
                        '03.01.2017': [{
                            time: '11:30',
                            format: '3D'
                        }, {
                            time: '14:30',
                            format: ''
                        }, {
                            time: '17:00',
                            format: '3DX'
                        }],
                        '04.01.2017': [{
                            time: '10:45',
                            format: ''
                        }, {
                            time: '12:30',
                            format: '3D'
                        }, {
                            time: '20:00',
                            format: '3DX'
                        }],
                    }
                },
            {id: 2,
                    title: 'Тачки 3',
                    genre: ['Детский', 'Комедия'],
                    image: '../images/cars.jpg',
                    timetable: {
                        '01.01.2017': [{
                            time: '11:30',
                            format: ''
                        }, {
                            time: '14:00',
                            format: ''
                        }, {
                            time: '17:30',
                            format: '3DX'
                        }, {
                            time: '21:00',
                            format: '3D'
                        }],
                        '02.01.2017': [{
                            time: '10:30',
                            format: '3DX'
                        }, {
                            time: '14:00',
                            format: '3D'
                        }, {
                            time: '17:00',
                            format: ''
                        }, {
                            time: '21:00',
                            format: '3DX'
                        }],
                        '03.01.2017': [{
                            time: '10:30',
                            format: '3D'
                        }, {
                            time: '12:30',
                            format: '3DX'
                        }, {
                            time: '14:45',
                            format: ''
                        }],
                        '04.01.2017': [{
                            time: '11:30',
                            format: ''
                        }, {
                            time: '13:45',
                            format: '3D'
                        }, {
                            time: '20:30',
                            format: '3DX'
                        }],
                    }
                },
            {
                    id: 3,
                    title: 'Мумия 2',
                    image: '../images/mumiya.jpg',
                    genre: ['Ужасы', 'Триллер', 'Приключения'],
                    timetable: {
                        '01.01.2017': [{
                            time: '10:30',
                            format: ''
                        }, {
                            time: '12:15',
                            format: '3D'
                        }, {
                            time: '15:15',
                            format: '3DX'
                        }, {
                            time: '15:15',
                            format: '3D'
                        }],
                        '02.01.2017': [{
                            time: '10:00',
                            format: ''
                        }, {
                            time: '12:30',
                            format: ''
                        }, {
                            time: '20:30',
                            format: '3DX'
                        }],
                        '03.01.2017': [{
                            time: '10:00',
                            format: ''
                        }, {
                            time: '10:30',
                            format: '3DX'
                        }, {
                            time: '17:45',
                            format: '3D'
                        }],
                        '04.01.2017': [{
                            time: '10:30',
                            format: '3D'
                        }, {
                            time: '12:30',
                            format: ''
                        }, {
                            time: '16:00',
                            format: '3DX'
                        }],
                    }
                },
            {
                id: 4,
                title: 'Пираты Карибского моря',
                image: '../images/pirates.jpg',
                genre: ['Фантастика', 'Приключения'],
                timetable: {
                    '01.01.2017': [{
                        time: '10:30',
                        format: ''
                    }, {
                        time: '14:00',
                        format: '3DX'
                    }, {
                        time: '21:00',
                        format: ''
                    }],
                    '02.01.2017': [{
                        time: '11:45',
                        format: ''
                    }, {
                        time: '15:30',
                        format: '3DX'
                    }, {
                        time: '19:00',
                        format: '3D'
                    }],
                    '03.01.2017': [{
                        time: '10:45',
                        format: '3D'
                    }, {
                        time: '15:30',
                        format: ''
                    }, {
                        time: '20:30',
                        format: ''
                    }],
                    '04.01.2017': [{
                        time: '10:45',
                        format: '3D'
                    }, {
                        time: '14:00',
                        format: '3DX'
                    }, {
                        time: '21:00',
                        format: ''
                    }],
                }
            }
        ]));
});

module.exports = router;

