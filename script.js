// // var myHeaders = new Headers();
// // myHeaders.append("Content-Type", "application/json");

// // var raw = "";

// // var requestOptions = {
// //     method: 'GET',
// //     headers: myHeaders,
// //     body: raw,
// //     redirect: 'follow'
// //   };

// fetch('https://backend.getlinked.ai/hackathon/categories-list', {
//     method: 'GET',
//     headers: {
//         "Content-Type": "application/json"
//     },
//     redirect: 'follow'
// })
//     .then(response => {return response.json()})
//     .then(data => {
//         // console.table(data[0]);
//         displayData(data);
//     })
//     .catch(error => console.log('ERROR', error));

// // looping through the array of objects
// function displayData(data) {
//     let num = data.length;
//     for (let index = 0; index < num; index++) {
//         // get the div in the html
//         let info = document.getElementById('stack');
//         // create new elements for each loop
//         let infoItem = document.createElement('li');
//         infoItem.innerHTML = data[index].name;
//         info.appendChild(infoItem);
//     }
// }

// displayData();