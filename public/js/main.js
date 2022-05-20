const searchBtn = document.getElementById('searchBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.data_hide');
const day = document.querySelector('#day');
const today_date = document.querySelector('#today_date');


const date = new Date();

const array = new Array();
array.push('Sunday');
array.push('Monday');
array.push('Tuesday');
array.push('Wednesday');
array.push('Thursday');
array.push('Friday');
array.push('Saturday');
console.log(array)
const currentDay = array[date.getDay()];




const month = new Array();
month.push('Jan');
month.push('Feb');
month.push('Mar');
month.push('Apr');
month.push('May');
month.push('Jun');
month.push('Jul');
month.push('Aug');
month.push('Sep');
month.push('Oct');
month.push('Nov');
month.push('Dec');
console.log(month);
const currentMonth = month[date.getMonth()];
console.log(currentMonth);
const currentDate = date.getDate();
console.log(currentDate);

day.innerHTML = currentDay;
today_date.innerHTML = currentDate +" " +currentMonth;


async function getTemparature(api){
    const response = await fetch(api);
    const user = await response.json();
    return user;
}

const getInfo =(event)=>{
    event.preventDefault();
    // alert('hello');
    // console.log('hello');
    //http://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=03db699376207b0cdd07408c970bc476
    
    let city =  cityName.value
    if(city=== ""){
        city_name.innerText = "Plz Write name befor you search";
        datahide.classList.add('data_hide');
        
    }else{
        try{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=03db699376207b0cdd07408c970bc476`;
            getTemparature(url).then(data=>{
                console.log(data);
                arr = [data];
                city_name.innerHTML =` ${arr[0].name } ,${arr[0].sys.country}`;
                temp_real_val.innerHTML = Math.round((arr[0].main.temp)-273);
                const tempMood = arr[0].weather[0].main
                if(tempMood=="Clear")
                {
                    temp_status.innerHTML="<i class='fa fa-sun-o' style='font-size:36px;color:#eccc68;'></i>"
                }
                else if(tempMood=="Clouds")
                {
                    temp_status.innerHTML="<i class='fa fa-cloud' style='color:#f1f2f6;'></i>"
                }
                else if(tempMood=="Rain")
                {
                    temp_status.innerHTML="<i class='fa fa-rain' style='color:#a4b0be;'></i>"
                }
                else
                {
                    temp_status.innerHTML="<i class='fa fa-cloud' style='color:#f1f2f6;'></i>"
                }
                datahide.classList.remove('data_hide');

            });
            
        }catch(error){
            city_name.innerText = "Plz Write name befor you search";
            console.log(error)
        }
    }


}

searchBtn.addEventListener('click',getInfo);

