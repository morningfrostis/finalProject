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
   getBooks();
}

startApp()