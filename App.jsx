import React,{useEffect} from "react";
import axios from "axios";


function App()
{ 

useEffect(()=>{
  async function Items()
  {
    let apiendpoint="https://panorbit.in/api/users.json";
      await axios.get(`${apiendpoint}`).then((data) => {      
        for (let i = 0; i < data.data.users.length; i++) {
            addNewLineElement(data.data.users[i].name,data.data.users[i].profilepicture);
        }

    });
}
Items();
});
function addNewLineElement(name,profilepicture)
  {
    let ul=document.getElementById("listofPeople");
    let li=document.createElement("li");
    let image=document.createElement("img");
    image.setAttribute("src",profilepicture);
    image.setAttribute("width", "33");
    image.setAttribute("height", "33");
    image.setAttribute("alt", "face");
    li.appendChild(image);
    let span=document.createElement("span");
    span.appendChild(document.createTextNode(name));
    li.appendChild(span);
    li.appendChild(document.createElement("hr"));
    ul.appendChild(li);
    
  }


 return(<>
<div className="card">

<div className="heading">
<h1>Select an account</h1>
</div>
<div className="menuItems">
<ul id="listofPeople"></ul>
</div>
</div>
 </>)
}

export default App;
