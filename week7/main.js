$(function() {
    
    // var debounceTimeout = null;
 
    // $('#searchInput').on('input', function() {
    //     clearTimeout(debounceTimeout);
    //     debounceTimeout = setTimeout(() => {
    //         getWeather($(this).val().trim())
    //     }, 500);
    // });

    $('#searchInput').on('keyup', function(e) {
        if(e.key === 'Enter') {
            
            getWeather($(this).val().trim())
        }
    })

})
 
function getWeather(city) { 
    if (!city) return;
    onBeforeSend()
    fentchCityLatLong(city)
    reset()
}


function fentchCityLatLong(city) {
    
    let xhr = new XMLHttpRequest();
 
    xhr.open('GET', `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&lang=el&appid=d8a0f537a6456d3db71701bfbaa90195`, true);
    xhr.timeout = 5000;
    xhr.ontimeout = (e) => onApiError(e);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                handleResultsLatLon(JSON.parse(xhr.responseText));
            } else {
                onApiError();
            }
        }
    };
    xhr.send();
   
}

function handleResultsLatLon(response) { 
    
    if (_.isEmpty(response)) {
        showNotFound();
    }
    else {
        let lat =  response[0].lat
        console.log(`${lat}`)
        let lon = response[0].lon
        console.log(`${lon}`)
        $('#city').html(response[0].local_names.el)
        fentchWeather(lat, lon)
    }
}


function fentchWeather(lat, lon) {
    let xhr = new XMLHttpRequest();
    
 
    xhr.open('GET', `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=el&appid=03b9f6a0cb0e5e07341868b46b47da7c`, true);
    xhr.timeout = 2000;
    xhr.ontimeout = (e) => onApiError(e);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                handleResultsWeather(JSON.parse(xhr.responseText));
            } 
        }
    };
    xhr.send();
   
}


function handleResultsWeather(response) {  
    
    const weatherList = response.list
    console.log(`${weatherList[0].dt}`)
    manipulateData(weatherList)
    
    
}

function manipulateData(weatherList) {
    $('#weatherForcast').removeClass('hidden')
    weatherList.forEach(element => {
        let cloneWeatherPer = $('#weatherPer').clone().removeClass('hidden')
        cloneWeatherPer.find('#dt').html(element.dt_txt)
        cloneWeatherPer.find('#description').html(element.weather[0].description)
        cloneWeatherPer.find('#image').attr('src', `https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`)
        cloneWeatherPer.find('#image').attr('alt', `${element.weather[0].description}`)
        $('#showWeather').append(cloneWeatherPer)
        
    });     
    
}

function reset(){
    $('#searchInput').empty()
}

function onApiError() {
    
    showError();
}

function showNotFound() {
    $('#city').html('')
    $('#weatherForcast').removeClass('hidden')
    $('#notFound').clone().removeClass('hidden').appendTo($('#weatherForcast'))
}

function onBeforeSend() {
    deleteComponent()
    hideShowNotFound();
    hideError();
}

function deleteComponent() {
    $('#showWeather').empty()
}

function hideShowNotFound() {
    $('.container').find('#notFound').remove()
}


function showError() {
    $('#city').html('')
    $('#weatherForcast').removeClass('hidden')
    $('#errorFound').removeClass('hidden').appendTo($('#weatherForcast'));
}
 
function hideError() {
    $('.container').find('#errorFound').remove();
}

 