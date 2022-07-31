<h3 align="center"><strong>Generate random anime images with a huge database.</strong></h3>

## Installation
```bash
$ npm install clachoverclan/discord-anime
```

## Usage
```javascript
const randomanime = require('discord-anime')
const anime = randomanime.anime()
const nsfw = randomanime.nsfw()

console.log(anime) //https://anime.jpg
console.log(nsfw)  //https://nsfw.jpg
```

## Discord Bot
```javascript
const randomanime = require("discord-anime");
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", async message => {
  /* Plain Text */
  if (message.content === "plain") {
    const anime = randomanime.anime();
    message.channel.send(anime);
  }
  /* Embed Image (D.JS Version 12) */
  if (message.content === "embed") {
    const anime = randomanime.anime();
    const embed = new Discord.MessageEmbed().setImage(anime);
    message.channel.send(embed);
  }
});

client.login("BOT_TOKEN");
```

## Options
**Options** | **Description** | **Usage**
:---: | --- | ---
anime | Random anime images. | `randomanime.anime()`
cuddle | Random cuddle anime images. | `randomanime.cuddle()`
hi | Random hi anime images. | `randomanime.hi()`
hug | Random hug anime images. | `randomanime.hug()`
kiss | Random kiss anime images. | `randomanime.kiss()`
nervous | Random nervous anime images. | `randomanime.nervous()`
pat | Random pat anime images. | `randomanime.pat()`
pout | Random pout anime images. | `randomanime.pout()`
punch | Random punch anime images. | `randomanime.punch()`
run | Random run anime images. | `randomanime.run()`
slap | Random slap anime images. | `randomanime.slap()`
sleep | Random sleep anime images. | `randomanime.sleep()`
wasted | Random wasted anime images. | `randomanime.wasted()`
nsfw | Random NSFW anime images. | `randomanime.nsfw()`

## License
[MIT](https://github.com/clachoverclan/discord-anime/blob/master/LICENSE) © C1ach0
