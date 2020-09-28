/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*  @@param: LIST -> the students to show on a page
*  @@param: PAGE -> page index number to show
*/


function showPage(list,page){
   console.log('inside show page')
let end = page*9 //1=9 2=18 3=27
let start = end-9
let finalList = []

if(list.length < 9){
   end = list.length
}

for(let i = start; i < end; i++){
      
      let item = document.createElement("li") //MAKE STUDENT TEMPLATE
      let div = document.createElement("div")
      let img = document.createElement("img")
      let email = document.createElement("span")
      let joined = document.createElement("span")

      //insert dynamic data from object array
      let name = document.createElement("h3")
      img.src = list[i].picture.medium
      name.innerHTML = list[i].name.first+" "+list[i].name.last
      email.innerHTML = list[i].email
      joined.innerHTML = list[i].registered.date+" "+"Age"+ " "+list[i].registered.age

      //add classes
      item.className = "student-item cf"
      div.className = "student-details"
      img.className = "avatar"
      img.alt = "profile picture"
      email.className = "email"
      joined.className = "date"

      //append to parent elements
      div.appendChild(img)
      div.appendChild(name)
      div.appendChild(email)
      div.appendChild(joined)
      item.appendChild(div)

      finalList.push(item)
      document.getElementById('students').appendChild(item) 
}
//addPagination(finalList,page)


}



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list,page){
   console.log('inside add pagination')
   let btnCount = Math.ceil(list.length/9)
   for( let i = 0; i < btnCount.length; i++){
         let newBtn = document.createElement("button")
         newBtn.id = i
         newBtn.innerHtml = i.toString()
         newBtn.addEventListener(click,showPage(list,newBtn.id))

      if(i == page){
         newBtn.className = 'active'
            }else{
               newBtn.className = 'inactive' 
            }
      let btns = document.getElementById("pageBtns")
      btns.appendChild(newBtn)

   }
}


/*
Create the `searchStudents` function
This function will search for any students matching the parameters
*/

function searchStudents(){
   console.log('inside search students')
   let query = document.getElementById('search').value
   const result = data.filter(student => student.name.first.toLowerCase().includes(query));
   console.log(result)
   if(result.length > 0 && query !== ''){
      document.getElementById('students').innerHTML = ''
   }else{
      document.getElementById('students').innerHTML = "Sorry, we couldn't find anyone matching that query"
   }
   showPage(result,1)
}




// Call functions

showPage(data,1)
var searchBtn = document.getElementById('searchBtn')
searchBtn.addEventListener("click",searchStudents,false)
