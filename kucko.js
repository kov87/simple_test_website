

//  Messenger Chat plugin Code
    var div = document.createElement("div");
    div.setAttribute("id","root");
    document.body.appendChild(div);

    var div1 = document.createElement("div");
               div1.setAttribute("id","fb-customer-chat");
               div1.setAttribute("class","fb-customerchat");
     document.body.appendChild(div1);
  
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "242499065762421");
      chatbox.setAttribute("attribution", "biz_inbox");
      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v10.0'
}); };
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src =
'https://connect.facebook.net/hu_HU/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
   
