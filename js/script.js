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

for(let i = 0; i < list.length; i++){
   if(i >= start && i <= end){
      finalList.push(list[i])
   }
}
addPagination(finalList,page)
return finalList


}



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list,page){
   console.log('inside add pagination')
   let btnCount = 0
   let btns = document.getElementById("pageBtns")
   if (list.length % 9 == 0){
      btnCount = list.length
   }else{
      btnCount = list.length + 1
   }
   for( let i = 0; i <btnCount.length; i++){
         let newBtn = document.createElement("button")
         newBtn.id = i
         newBtn.innerHtml = i
         newBtn.addEventListener(click,showPage(list,newBtn.id))

      if(i == page){
         newBtn.className = 'active'
            }else{
               newBtn.className = 'inactive' 
            }
      
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
   let results = []
   for (let i = 0; i < data.length; i++){
      if (data[i].name.first.includes(query) || data[i].name.last.includes(query)){
         results.push(data[i])
      }
   }

   showPage(results,1)
}




// Call functions

showPage(data,1)
var searchBtn = document.getElementById('searchBtn')
searchBtn.addEventListener('click', searchStudents())
