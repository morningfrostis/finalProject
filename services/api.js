const localStorageListKey = 'bookList'
//const localStorageListKeyDetail = 'bookdetails'

async function getLists() {
const prevValues = localStorage.getItem(localStorageListKey)
let list = []
if (prevValues) {
    list = JSON.parse(prevValues)
} else {
    const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=zDcNYZLAAAyz53sPI5rfz9DJnND9qEpO');
        const data = await response.json()
    if (data.num_results > 0) {
        list = data.results
        localStorage.setItem(localStorageListKey, JSON.stringify(list))
    }
}

//localStorage.clear();
return list
}


/*async function getBooks() {
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
    }*/


/****vamos a probar la función getBooks de otra manera (domingo 2.58 de la madrugada)*****/
/*async function getBooks() {
    //console.log(listName);
    localStorage.clear();
    const prevValues = localStorage.getItem(localStorageListKey)
    let list = []
        if (prevValues) {
        list = JSON.parse(prevValues)

    } else {
        const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=zDcNYZLAAAyz53sPI5rfz9DJnND9qEpO`);
        const data = await response.json()
        console.log(data);
        if (data.num_results > 0) {

            list = data.results

            localStorage.setItem(localStorageListKey, JSON.stringify(list))
        }
    }
//alert(list.list_name);
    return list;
    }*/




    /*const getBooks = async () => {
        //console.log()
        //localStorage.clear();

        try {
            const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${item.list_name}.json?api-key=zDcNYZLAAAyz53sPI5rfz9DJnND9qEpO`)
            const bookDetails = await response.json()
            const detalle = bookDetails.results
            window.localStorage.setItem(localStorageListKeyDetail, JSON.stringify(bookDetails.results))
            console.log(detalle)
            return bookDetails
        } catch (error) {
            console.log(error)
        }
    }*/


    /***********************otra que tampoco va :( **********/
    /*async function getData () {
    const localStorageBooks = localStorage.getItem(localStorageKey);
    let list = localStorageBooks ? JSON.parse(localStorageBooks) : [];
    if (!list || list.length === 0) {
    try {
        const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=FZi6T0tvXiCmPowsTGjVWaT4r0XgcVnw')
        const data = await response.json()
        const results = data.results
        if (results && results.length >0){
            localStorage.setItem(localStorageKey, JSON.stringify(results))
            list = results
        }
        bool = true
    }
    catch (error) {
        console.log('Hubo un error')
    }
    
}
return list
}*/