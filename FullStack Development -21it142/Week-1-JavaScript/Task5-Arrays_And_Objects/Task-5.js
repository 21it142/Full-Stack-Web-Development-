var  _selectedBooks = [
    "Panchtantra",
    "Pride of Amazon",
    "Success Stroy of Ellen Musk",
    "Lonley Boy",
  ];
  
  
  function displayBooks(books) {
      
    for (let i = 0; i < books.length; i++) {
      console.log(books[i]);
      //document.getElementById("show").innerHTML=books[i];
    }
  }
  
  function displayed(){
      displayBooks(_selectedBooks);
  }