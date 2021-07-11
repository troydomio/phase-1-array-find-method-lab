
// function superbowlWin(array){
//     array.find((item) => {
//         if (item.result === 'W'){
//             console.log(item.year)
//         } 
//     })
// }

function superbowlWin(array){
   let a =  array.find((item) =>{
        if (item.result === "W"){return item}});
        if (a) {
            return a.year
        }
       
    
    }

