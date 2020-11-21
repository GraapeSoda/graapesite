var button = document.getElementById("dark")
var button2 = document.getElementById("dark2")
var target = document.getElementById("target")
var non = document.getElementById("non")
var yes = document.getElementById("yes")
checkCookie("theme")

function checkCookie (name) {
    if (getCookie(name) == "dark") {
        target.classList.add("dark")
        non.classList.remove("inv")
        yes.classList.add("inv")
    } else {
        target.classList.remove("dark")
        non.classList.add("inv")
        yes.classList.remove("inv")
    } 
}

function setCookie(name, value, options = {}) {

    options = {
      path: '/',
      // при необходимости добавьте другие значения по умолчанию
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
  }

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  function deleteCookie(name) {
    setCookie(name, "", {
      'max-age': -1
    })
  }

button.addEventListener("click", function(){
    target.classList.add("dark")
    non.classList.remove("inv")
    yes.classList.add("inv")
    setCookie("theme","dark",{'max-age': 363300})
})

button2.addEventListener("click", function(){
    target.classList.remove("dark")
    non.classList.add("inv")
    yes.classList.remove("inv")
    setCookie("theme","light",{'max-age': 363300})
})