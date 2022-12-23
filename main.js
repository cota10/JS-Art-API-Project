let art;
let seeArt;

// Function to get painting Info when image figure is clicked
/**
 * @param img_index
 * @param item_index
 * 
 * Function gets painting from art institute of chicago using the image index of our gallery.
 * Then finds the correct item_index inside of the JSON response data from art institute
 * which will produce a preview url that will be used to show info of painting.
 */

async function clickedEvent(img_index){
    let painting = document.getElementsByTagName('img')[img_index].attributes[2].value;

    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json'],
    ]);

    let request = new Request(`https://api.artic.edu/api/v1/artworks/search?q=${painting}&fields=id,title,artist_display`,{
        method: 'GET',
        headers: headers
    });

    let result = await fetch(request);

    let response = await result.json();

    console.log(response.data[0])
    var painting_1 = document.getElementById('picasso')
    painting_1.innerHTML = response.data[0].title
    console.log(painting_1.innerHTML)

}

async function clickedEvent2(img_index){
    let painting = document.getElementsByTagName('img')[img_index].attributes[2].value;

    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json'],
    ]);

    let request = new Request(`https://api.artic.edu/api/v1/artworks/search?q=${painting}&fields=id,title,artist_display`,{
        method: 'GET',
        headers: headers
    });

    let result = await fetch(request);

    let response = await result.json();

    console.log(response.data[0])
    var painting_1 = document.getElementById('vangogh')
    painting_1.innerHTML = response.data[0].title
    

}

async function clickedEvent3(img_index){
    let painting = document.getElementsByTagName('img')[img_index].attributes[2].value;

    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json'],
    ]);

    let request = new Request(`https://api.artic.edu/api/v1/artworks/search?q=${painting}&fields=id,title,artist_display`,{
        method: 'GET',
        headers: headers
    });

    let result = await fetch(request);

    let response = await result.json();

    console.log(response.data[0])
    var painting_1 = document.getElementById('pablo')
    painting_1.innerHTML = response.data[0].title
    

}

async function clickedEvent4(img_index){
    let painting = document.getElementsByTagName('img')[img_index].attributes[2].value;

    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json'],
    ]);

    let request = new Request(`https://api.artic.edu/api/v1/artworks/search?q=${painting}&fields=id,title,artist_display`,{
        method: 'GET',
        headers: headers
    });

    let result = await fetch(request);

    let response = await result.json();

    console.log(response.data[0])
    var painting_1 = document.getElementById('matta')
    painting_1.innerHTML = response.data[0].title
    

}



 /**
  * @param id
  * @param event
  * 
  * id = image id for gallery image
  * event = Mouse event given by the action from our user
  * 
  * Function produces painting info from the clickedEvent based 
  * on index of images.
  */

 function getPainting(id,event){
    switch(id){
        case 'fig1': {
            event.stopPropagation();
            clickedEvent(0,0)
            break;
        }
        case 'fig2': {
            event.stopPropagation();
            clickedEvent2(1,0)
            break;
        }
        case 'fig3': {
            event.stopPropagation();
            clickedEvent3(2,0)
            break;
        }
        case 'fig4': {
            event.stopPropagation();
            clickedEvent4(3,0)
            break;
        }
    }
}
