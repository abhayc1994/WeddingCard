
(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);


$( document ).ready(function() {
    var body = document.getElementsByTagName("BODY")[0];
    var settings = {
        "url": "https://api.github.com/repos/abhayc1994/weddingFIles/contents/prewed",
        "method": "GET",
        "timeout": 0,
        "headers": {
          "Accept": "application/vnd.github+json",
          "Authorization": ""
        },
      };
      $.ajax(settings).done(function (response) {
        for (let res of response) {
          var div =document.createElement("div");
          div.setAttribute("class","img");
          var img=document.createElement("img");
          img.setAttribute("class","image");
          img.setAttribute("src",res.download_url);
          div.appendChild(img);
          body.appendChild(div);
        }
      });
});