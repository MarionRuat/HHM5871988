var chats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
var info = 'Mes chat s appellent ';
var para = document.querySelector('p');

for (var i = 0; i < chats.length; i++) {
  info += chats[i] + ', ';
}

para.textContent = info;