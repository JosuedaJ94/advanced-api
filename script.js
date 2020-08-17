function handleSearch() {
  
  $('form').submit(event => {
    event.preventDefault();

    let handle = document.getElementById("user").value;
    
    getRepos(handle);
  });
}

function getRepos(handle) {
  fetch('https://api.github.com/users/' + handle + '/repos').then(response => response.json()).then(responseJson => extractInfo(responseJson)).catch(error => alert("User not Found"));


}

function extractInfo(list) {
  let name, link = "";

  $("ul").empty();
  console.log(list);

  for(let i = 0; i < list.length; i++) {
    name = list[i].name;
    link = list[i].html_url;

    updateList(name, link);
  }
}

function updateList(name, link) {
  $("main").removeClass("hidden");
  $("ul").append(`<li>${name}: <a href="${link}">${link}</a></li>`);
}

$(handleSearch);