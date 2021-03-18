//  http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d849f74ae0d8e55dd10666a12adfd084 

function getUrl(town){
    let url1 = 'http://api.openweathermap.org/data/2.5/weather?q='
    
    let url2 = '&APPID=d849f74ae0d8e55dd10666a12adfd084'
    
    return url1+town+url2
}

let anapa = document.querySelector('#anapa')
let kiev = document.querySelector('#kiev')
let male = document.querySelector('#male')
let paris = document.querySelector('#paris')
let bangkok = document.querySelector('#bangkok')
let uruguay = document.querySelector('#uruguay')
let сairo = document.querySelector('#сairo')
let singapore= document.querySelector('#singapore')
let washington = document.querySelector('#washington')
let rio = document.querySelector('#rio')


let display = document.querySelector('.right')
rio.addEventListener('click', () => {
    let url = getUrl('Rio')
    getData(url)
})

kiev.addEventListener('click', () => {
    let url = getUrl('Kiev')
    getData(url)
})

washington.addEventListener('click', () => {
    let url = getUrl('Washington')
    getData(url)
})

singapore.addEventListener('click', () => {
    let url = getUrl('Singapore')
    getData(url)
})

сairo.addEventListener('click', () => {
    let url = getUrl('Cairo')
    getData(url)
})


uruguay.addEventListener('click', () => {
    let url = getUrl('Uruguay')
    getData(url)
})

bangkok.addEventListener('click', () => {
    let url = getUrl('Bangkok')
    getData(url)
})

paris.addEventListener('click', () => {
    let url = getUrl('Paris')
    getData(url)
})

male.addEventListener('click', () => {
    let url = getUrl('Male')
    getData(url)
})

anapa.addEventListener('click', () => {
    let url = getUrl('Anapa')
    getData(url)
})


async function getData(url){

    let promise = await fetch(url)
    if (promise.ok) {

        let json = await promise.json()

        console.log(json)
        console.log(json.name)
        let photoTown = '';


        if (json.name =='Anapa'){
            photoTown = ' <img height = "300px" src  = "https://yataxi-info.com/wp-content/uploads/2019/07/anapa.jpg">';
        }
        else if (json.name =='Male'){
            photoTown = ' <img height = "300px" src  = "https://www.flagman-travel.ru/upload/resize_cache/iblock/13b/1386_924_199139c8f4ec2b19729d2246557347328/13b59dd6950dbdc834ab8025ef0e16d5.jpg">';
        }
        


        let photo = '';
        if (json.weather[0].main == 'Clouds') {
            photo = '<img height="100px" src = "https://st.depositphotos.com/1000641/1387/i/600/depositphotos_13876018-stock-photo-cloud-and-blue-sky.jpg">';
        } else if (json.weather[0].main == 'Mist'){
            photo = '<img height="100px" src = "https://www.pnp.ru/upload/entities/2017/09/28/article/detailPicture/b8/0d/30/99/ae0d3c454db8ccf0f971e803e1c57b2b.jpg">';
        }
        else if (json.weather[0].main =='Rain'){
            
        photo = ' <img height = "100px" src = "https://kubnews.ru/upload/iblock/9c7/9c738e263843e87dec2637b454ad645c.jpg">';
        }
        else if (json.weather[0].main =='Clear'){
            photo = ' <img height = "100px" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/280px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg">';
        }


        let temp = parseFloat(json.main.temp) - 273.15

        display.innerHTML = `
        <div> ${photoTown}</div>
        <div>${photo}</div>
        <div> Скорость ветра: ${json.wind.speed} м/с </div>
        <div> Температура: ${temp.toFixed(2)} C </div>
        `
    }
}


