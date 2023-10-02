const login = require("fb-chat-support"), 
  fs = require('fs-extra'), 
  first_name = 'Chand', 
  middle_name = '', 
  last_name = '󱢏'
process.on("unhandledRejection", (error) => console.error(error));
login({appState: JSON.parse(fs.readFileSync('coki.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err.message);
  api.changeName({ first_name, middle_name, last_name })
});
