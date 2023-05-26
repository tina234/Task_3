const getIp = async() => {
    try {
        let response = await fetch('https://api.ipify.org/?format=json');
        let data = await response.json();
        return data.ip;
    } catch (error) {
        console.log(error);
    }
}

const getGeolocation = async() => {
    let ip = await getIp();
    let api_key = '334e8721a7675727fa9865aea692e1ae';

    if (ip && api_key) {
        try {
            let response = await fetch('http://api.ipapi.com/api/' + ip + '?access_key=' + api_key)
            let data = await response.json();
            let country = data.country_name;

            //set session data
            sessionStorage.setItem('country_name', country);

            //get session data and display
            let html_element = document.getElementById('1').textContent = sessionStorage.getItem('country_name');;
        } catch (error) {
            console.log(error);
        }
    }
}

getGeolocation();
