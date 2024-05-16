// logic for delete buttun
const deletePassword =(website)=>
{  
    let data = localStorage.getItem("passwords")
    let arr = JSON.parse(data);
    arrUpdated= arr.filter((e)=>{
        return e.website != website
    })
    localStorage.setItem("passwords", JSON.stringify(arrUpdated))
    alert(`Sucessfully deleted ${website}'s password`)
    showPassword()
}


// logic to fill the table
const showPassword = ()=>
{

   let tb = document.querySelector("table")
   let data = localStorage.getItem("passwords")
   if(data == null)
   {
      tb.innerHTML = "No Data To show"
   }
   else
   {
      tb.innerHTML = `<tr>
      <th>Website</th>
      <th>Username</th>
      <th>Password</th>
      <th>Delete</th>
    </tr>`
      let arr = JSON.parse(data)
      let str = ""
      for (let index = 0; index < arr.length; index++) 
      {
          const element = arr[index];
        
    

         str+= `<tr>
              <td>${element.website}</td>
              <td>${element.username}</td>
              <td>${element.password}</td>
              <td><button class="btnsm"  onclick="deletePassword('${element.website}')">Delete</button></td>
          </tr>`
       }
        tb.innerHTML = tb.innerHTML+str

    }
    website.value = ""
    username.value =""
    password.value ="" 
}



// popup logic
document.querySelector("#show-login")
.addEventListener("click", function(){document.querySelector(".popup").classList.add("activity");});

document.querySelector(".popup .close-btn")
.addEventListener("click",function(){document.querySelector(".popup").classList.remove("activity");});




// submit login password
console.log("Working")
showPassword()
document.querySelector("#submit")
.addEventListener("click",(e)=>{e.preventDefault()
    console.log("Clicked...")
    console.log(website.value, username.value , password.value)
    let passwords = localStorage.getItem("passwords")
    console.log(passwords)
    if (passwords == null) 
    {
        let json = []
        json.push({website:website.value, username:username.value, password:password.value})
        alert("Password Saved");
        localStorage.setItem("passwords", JSON.stringify(json))

    }
    else
    {
       let json = JSON.parse(localStorage.getItem("passwords"))
       json.push({website:website.value, username:username.value, password:password.value})
       alert("Password Saved");
       localStorage.setItem("passwords", JSON.stringify(json))
    }
    showPassword()
})

