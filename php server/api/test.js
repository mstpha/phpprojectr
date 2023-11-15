fetch("http://localhost/api/api.php").then(d => d.json())
    .then(d => console.log(d))
    .catch(err => console.error(err))