startApp()

async function startApp() {
   const list = await getLists()
   let category = '';
   for (const item of list) {
      //console.log(item);
      category += `
      <div class="boxes"><h2>${item.display_name}</h2>
      <p>Oldest: ${item.oldest_published_date}</p>
      <p>Newest: ${item.newest_published_date}</p>
      <p>Updated: ${item.updated}</p><br>
      <button class="stylebutton" type="button" onclick="cargarDatos()">READ MORE!</button>
      </div>
      `
   }
   document.getElementById("container").innerHTML = category;
}

function cargarDatos(){
   alert('epitican');
   //location.replace('/views/details.html')
   fetch('https://api.nytimes.com/svc/books/v3/lists/current/Science.json?api-key=zDcNYZLAAAyz53sPI5rfz9DJnND9qEpO')
    .then((response) => response.json())
    .then ((data) => {display(data)})
    .catch (err=>console.log(err))

    function display(data) {

        for ( i=0;i<10;i++){
       // Declaramos los elementos del libro
        let img= document.createElement("img");
        img.src = `${data.results.books[i].book_image}`;
        let rank = document.createElement("rank");
        rank.innerHTML=`RANK : ${data.results.books[i].rank}`
        let name = document.createElement("name");
        name.innerHTML=`${data.results.books[i].title}`
        let author = document.createElement("author");
        author.innerHTML=`AUTHOR : ${data.results.books[i].author}`
        let publisher = document.createElement("publisher");
        publisher.innerHTML=`PUBLISHER : ${data.results.books[i].publisher}`
        let amazon = document.createElement('a');
        let link = data.results.books[i].amazon_product_url;
        amazon.setAttribute("href", link);
        amazon.innerHTML = "Buy From Amazon";

        // Agrego los elementos del libro al Card
        document.getElementById('book-card').appendChild(amazon)
        document.getElementById('book-card').appendChild(publisher)
        document.getElementById('book-card').appendChild(author)
        document.getElementById('book-card').appendChild(name)
        document.getElementById('book-card').appendChild(rank) 
        document.getElementById('book-card').appendChild(img) 
    
        }
    
    }
//   getBooks();
}

