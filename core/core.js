const anime = require("../database/anime.json");
const cuddle = require("../database/cuddle.json");
const hi = require("../database/hi.json");
const hug = require("../database/hug.json");
const kiss = require("../database/kiss.json");
const nervous = require("../database/nervous.json");
const pat = require("../database/pat.json");
const pout = require("../database/pout.json");
const punch = require("../database/punch.json");
const run = require("../database/run.json");
const slap = require("../database/slap.json");
const sleep = require("../database/sleep.json");
const wasted = require("../database/wasted.json");

const dog = require("../database/dog.json");

const animeRandom = () => {
  return {
    anime: () => anime[mathRandom(anime.length)],
    cuddle: () => cuddle[mathRandom(cuddle.length)],
    hi: () => hi[mathRandom(hi.length)],
    hug: () => hug[mathRandom(hug.length)],
    kiss: () => kiss[mathRandom(kiss.length)],
    nervous: () => nervous[mathRandom(nervous.length)],
    pat: () => pat[mathRandom(pat.length)],
    pout: () => pout[mathRandom(pout.length)],
    punch: () => punch[mathRandom(punch.length)],
    run: () => run[mathRandom(run.length)],
    slap: () => slap[mathRandom(slap.length)],
    sleep: () => sleep[mathRandom(sleep.length)],
    wasted: () => wasted[mathRandom(wasted.length)],

    dog: () => dog[mathRandom(dog.length)],
  };
};

const mathRandom = (number) => ~~(Math.random() * number);

module.exports = animeRandom();