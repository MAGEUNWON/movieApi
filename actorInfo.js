
class ApiData{
  constructor(peopleNm, filmoNames, peopleCd){
    this.peopleNm = peopleNm;
    this.filmoNames =filmoNames;
    this.peopleCd = peopleCd;
  }
}


function actor(){
  let actorInfo = [];
  const api_KEY = '19d2a86ba729ecb37eccaba04437d50b';
  const peopleNm = '이정재';
  const api_URL = `http://kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=${api_KEY}&peopleNm=${peopleNm}`;
  const request = new XMLHttpRequest();
  request.open("GET", api_URL);
  request.responseType = "json";
  request.send();
  request.addEventListener("load", ()=>{
    const date = request.response;
    console.log('영화배우');
    console.log(date);

    const information = data.peopleListResult.peopleList[0];
    console.log(information);
  });

}
actorInfo();