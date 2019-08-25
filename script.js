var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://rickandmortyapi.com/api/', true)

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  data.forEach(CharacterData => {
    // Log each movie's title
    console.log(charactersData.name)
  })

  }
}

// Send request
request.send()