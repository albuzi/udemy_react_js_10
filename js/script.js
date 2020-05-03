window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
  
    let ulHeader = document.getElementsByTagName('ul')[0],
        liHeaders = document.getElementsByTagName('li'),
        slider = document.getElementsByClassName('test');
        for (let i = 0; i < slider.length; i++) {
            slider[i].style.display = 'none';
        }

    ulHeader.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.tagName('li')) {
            for (let i = 1; i < liHeaders.length; i++) {
                if (target == liHeaders[i]) {
                    slider[i].style.display = 'none';
                    break;
                }
            }
        }
    });    
  
    //Timer 
    let deadline = '2020-05-04';

    function getTimerRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
            
            //00:00:00
            seconds = (seconds >= 10 ? seconds : '0' + seconds);
            minutes = (minutes >= 10 ? minutes : '0' + minutes);
            hours = (hours >= 10 ? hours : '0' + hours);

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimerRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadline);
    
}); 