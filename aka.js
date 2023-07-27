const readline = require("readline").createInterface({ input: process.stdin, output: process.stdout });


console.log("> Developed by Aka");
console.log("> https://discord.gg/uxC5DM8bhW");
console.log("> https://discord.gg/lacademie");
console.log(

`  
  ______   __                        __    __            __                           
 /      \ /  |                      /  \  /  |          /  |                          
/$$$$$$  |$$ |   __   ______        $$  \ $$ | __    __ $$ |   __   ______    ______  
$$ |__$$ |$$ |  /  | /      \       $$$  \$$ |/  |  /  |$$ |  /  | /      \  /      \ 
$$    $$ |$$ |_/$$/  $$$$$$  |      $$$$  $$ |$$ |  $$ |$$ |_/$$/ /$$$$$$  |/$$$$$$  |
$$$$$$$$ |$$   $$<   /    $$ |      $$ $$ $$ |$$ |  $$ |$$   $$<  $$    $$ |$$ |  $$/ 
$$ |  $$ |$$$$$$  \ /$$$$$$$ |      $$ |$$$$ |$$ \__$$ |$$$$$$  \ $$$$$$$$/ $$ |      
$$ |  $$ |$$ | $$  |$$    $$ |      $$ | $$$ |$$    $$/ $$ | $$  |$$       |$$ |      
$$/   $$/ $$/   $$/  $$$$$$$/       $$/   $$/  $$$$$$/  $$/   $$/  $$$$$$$/ $$/ \n\n`);
  
console.log(`
[1] Tokens join a server      [2] Tokens check
[3] Account Nuker             [4] Token onliner   
[5] Webhook Spammer           [6] Token voice join  
[7] Server Nuker              [8] Token dm message
                [9] Dm cleaner               
`);
readline.question("> ", async (reply) => {
if(reply == 1) {
readline.close();
console.clear();
require("./tools/server-joiner.js");
} else if(reply == 2) {
readline.close();
console.clear();
require("./tools/tokens-check.js");
}else if(reply == 3) {
readline.close();
console.clear();
require("./tools/account-nuker.js");
} else if(reply == 4) {
readline.close();
console.clear();
require("./tools/tokens-onliner.js");
} else if(reply == 5) {
readline.close();
console.clear();
require("./tools/webhook-spammer.js");
}else if(reply == 6) {
readline.close();
console.clear();
require("./tools/tokens-voice-join.js");
}else if(reply == 7) {
readline.close();
console.clear();
require("./tools/server-nuker.js");
}else if(reply == 8) {
readline.close();
console.clear();
require("./tools/tokens-dm-message.js");
} else if(reply == 9) {
readline.close();
console.clear();
require("./tools/dm-clear.js");
}else {
console.log("[!] Error...");
process.exit();
}

})
