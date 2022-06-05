
let name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope']
    
function filterItems(keyWord, limit, arr) {

    return batas (arr.filter(function(el) {
       return el.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1
    }),limit)
  }
  const searchName = (keyWord,limit,calback) => {

    return calback (keyWord,limit,name )
}
 function batas (batasArr, limit) {
     if (batasArr.length > 3) {
       return batasArr.slice (0,limit )
     }
 }
    
//   console.log(filterItems(name, 'an'))
  console.log (searchName ('an', 3 , filterItems))  