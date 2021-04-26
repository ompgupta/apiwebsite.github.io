 let container = document.querySelector('#container');
        const request = new XMLHttpRequest();
     
        request.open('GET', "https://restcountries.eu/rest/v2/name/bharat");
        request.send();
        request.addEventListener('load', function(){
           
            const [data] = JSON.parse(this.responseText);
            //  console.log(data.name);  
             console.log(this.responseText);
         const htmldata = `<div id="main">
        <img src="${data.flag}" alt="">
        <div class="two">
            <h2>${data.name}</h2><br>
            <h3>Capital:<span> ${data.capital}</span></h3>
        </div>
       
        <div class="last"> 
            <h3>Language <br><span>${data.languages[0].nativeName}</span></h3>
            <h3>Populations<br><span>${data.population}</span></h3>
            <h3>Area<br><span>${data.area}</span></h3>
        </div>
    </div>`;
          container.insertAdjacentHTML('afterbegin', htmldata);
        });