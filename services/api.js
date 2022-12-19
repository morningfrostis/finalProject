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


async function getBooks() {
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
    }

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