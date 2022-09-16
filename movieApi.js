
    const root = document.getElementById("root");
    console.log(root);


    class ApiData{
      constructor(rank, title, openDt){
        this.rank = rank;
        this.title =title;
        this.openDt = openDt;
      }
    }

    function movie (children,tag){
      let totalData = [];
        const api_KEY = '19d2a86ba729ecb37eccaba04437d50b';
        const targetDt = '20220915';
        const api_URL = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${api_KEY}&targetDt=${targetDt}`;
        const request = new XMLHttpRequest();
        request.open("GET", api_URL);
        request.responseType = "json";
        request.send();
        request.addEventListener("load", ()=>{
          const data = request.response;
          console.log(data);
          // console.log(data);
          const List = data.boxOfficeResult.dailyBoxOfficeList;
          console.log(List);


          // for(let i = 0; i<count; i++){
            // let setObj = {
            //   id : List[count].rank,
            //   title : List[count].movieNm,
            //   openDt : List[count].openDt
            // }
            // console.log(setObj);

            // let tempObject = new ApiData(setObj.id, setObj.title, setObj.openDt);
          // }

          List.forEach((value)=>{
            totalData.push(new ApiData(value.rank,value.movieNm,value.openDt));
          })
          
          totalData.push(tempObject);
          console.log(totalData);
        //   let ul = document.createElement('ul');
        //   totalData.forEach(value=>{
        //     let li = document.createElement('li');
        //     li.textContent = value;
        //     ul.appendChild(li);
        //   })
        //   root.appendChild(ul);
        });
        
    }
    movie();