
document.getElementById('submitName').addEventListener('click', function(){
    let requests = new XMLHttpRequest();
    project = document.getElementById('projectName').value;
    requests.open('GET', 'http://127.0.0.1:5000/ospnc-v2/api/v1/all?name='+project);
    requests.onload = function() {
        console.log(this.response)
        data = JSON.parse(this.response)
        console.log(data)
    };
    requests.send();
});

