function parseJson(fileName) {
    var request = new XMLHttpRequest();
    request.open("GET", fileName, false);
    request.send(null);
    return JSON.parse(request.responseText);
}