const localStorageListKey = 'bookList'
//Llamamos a la API
let url =  'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=zDcNYZLAAAyz53sPI5rfz9DJnND9qEpO'
//fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=zDcNYZLAAAyz53sPI5rfz9DJnND9qEpO')
fetch(url)
    .then(res => res.json())
    .then(data => showData(data))
    //console.log(data);
    .catch(error => console.log(error));

//Transformar el String generado usando JSON.stringify() y guardándolo en localStorage como objeto JSON otra vez
    const restoredSession = JSON.parse();
    console.log(restoredSession);

const showData = (data) => {
    console.log(data)
    const body = ""
    for (let i = 0; i< data.length; i++){
        body += `<div><h1>${data[i].id}</h1></div>`
        //<p>${data[i].oldest_published_date}</p><br>
        //<p>${data[i].newest_published_date}</p><br>
        //<p>${data[i].update}</p>
    }

    document.getElementById('data').innerHTML = body
}

//Primero creo una función para cargar las listas por categoría
//const chargeBooks = async() => {
//    try {
//        const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=zDcNYZLAAAyz53sPI5rfz9DJnND9qEpO');
//        console.log(response);
//si la respuesta es correcta
        //if (response.status === 200){
        //    const data = await response.json();
        //    let books = '';
        //    data.results.forEach(book => {
        //        books += `
        //        <div class = "book">
        //            <img class = "poster" src="https://storage.googleapis.com/du-prd/books/images/${books.list_image}">
        //        </div>
        //        <h1>${data.results.display_name}</h1>`;
        //    });
        //    document.getElementById('container').innerHTML = books;
//si la respuesta nos devuelve algún error
        //} else if(response.status === 401){
        //    console.log('bad key');
        //}  else if(response.status === 404){
        //    console.log('does not exist');
        //}
        //else {
        //    console.log('there was an error and we dont know what happened')
        //}
    //} catch(error){
    //    console.log(error);
    //}
//}

//Segundo creo una función para cargar los más vendidos de cada categoría

//chargeBooks();


