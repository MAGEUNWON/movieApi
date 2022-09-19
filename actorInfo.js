
class actorData{
  constructor(peopleNm, filmoNames, peopleCd, repRoleNm){
    this.peopleNm = peopleNm;
    this.filmoNames =filmoNames;
    this.peopleCd = peopleCd;
    this.repRoleNm = repRoleNm
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
    // console.log('영화배우');
    // console.log(date);

    const information =date.peopleListResult.peopleList;
    // console.log(information);

    
    information.forEach((value)=>{
      actorInfo.push(new actorData(value.peopleNm, value.filmoNames, value.peopleCd, value.repRoleNm));
    })


    // console.log(actorInfo[0].repRoleNm);
    
    // actorInfo.forEach((item, index, arr)=>{
    //   if(item.repRoleNm === '배우'){
    //     console.log(item.repRoleNm)
    //   }
      
    // });

    // actorInfo.filter((item, index, arr)=>{
    //   console.log(item.repRoleNm );
    //   return itme.repRoleNm === '배우';
    // });

    const newrepRoleNm = actorInfo.filter(item => {
        if(item.repRoleNm === '배우'){
          return true;
        }
        return false;
    });
    console.log(newrepRoleNm);
    
  
  

    

    let ul = document.createElement('ul');
    newrepRoleNm.forEach(value=>{
      let li = document.createElement('li');
      li.textContent = `배우 이름 : ${value.peopleNm}, 출연작품 : ${value.filmoNames}, 배우코드명 : ${value.peopleCd}`;
      ul.appendChild(li);
    })
    root.appendChild(ul);

  
  });

}

actor();