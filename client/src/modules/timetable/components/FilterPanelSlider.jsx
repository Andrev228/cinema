import React from 'react';

require('../styles/FilterPanelSlider.css');

class FilterPanelSlider extends React.Component {
    render() {
        return (
            <div id="range" />)
    }
    componentDidMount() {

        const slider = document.getElementById('range');

        const _setMinTime = this.props.setMinTime;
        const _setMaxTime = this.props.setMaxTime;

        function slideHandler(position) {
            let min = position[0],
                max = position[1];
            $('#si1').text(toTime(min));
            $('#si2').text(toTime(max));
            _setMinTime(min);
            _setMaxTime(max);
        }

        const toTime = (time) => {
            let hours = (Math.floor(time/60)).toString();
            if (hours.length === 1) hours = '0' + hours;
            let minutes = (time % 60);
            if (minutes === 0) minutes = '0' + minutes.toString();
            return hours + ':' + minutes.toString();
        };

        noUiSlider.create(slider, {
            start: [this.props.minTime, this.props.maxTime],
            step: 15,
            connect: [false, true, false],
            range: {
                'min': 540,
                'max': 1440
            }
        });

        $("#si1").text(toTime(slider.noUiSlider.get()[0])).appendTo($('.noUi-handle-lower'));
        $("#si2").text(toTime(slider.noUiSlider.get()[1])).appendTo($('.noUi-handle-upper'));

        slider.noUiSlider.on('slide', slideHandler);
    }
}

export default FilterPanelSlider;
