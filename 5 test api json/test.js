async function populate() {

    const requestURL = 'https://api.weather.gov/gridpoints/OKX/33,36/forecast';
    const request = new Request(requestURL);
  
    const response = await fetch(request);


    const superHeroesText = await response.text();
    for (let i = 0; i < cars.length; i++) {
        text += cars[i] + "<br>";
    } 
    document.getElementById("content").innerHTML =  JSON.stringify(JSON.parse(superHeroesText).properties.periods[0]);
  
    // const superHeroes = JSON.parse(superHeroesText);
    // populateHeader(superHeroes);
    // populateHeroes(superHeroes);

    // let myObj = { name: "Chris", age: 38 };
    // myObj
    // let myString = JSON.stringify(myObj);
    // myString
  }
  



function populateHeader(obj) {
    const header = document.querySelector('header');
    const myH1 = document.createElement('h1');
    myH1.textContent = obj.squadName;
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
    header.appendChild(myPara);
}




function populateHeroes(obj) {
    const section = document.querySelector('section');
    const heroes = obj.members;

    for (const hero of heroes) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');

        myH2.textContent = hero.name;
        myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
        myPara2.textContent = `Age: ${hero.age}`;
        myPara3.textContent = 'Superpowers:';

        const superPowers = hero.powers;
        for (const power of superPowers) {
            const listItem = document.createElement('li');
            listItem.textContent = power;
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}
populate()