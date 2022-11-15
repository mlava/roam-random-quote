const args = {
  text: "RANDOMQUOTE",
  help: "Import a Random Quote from Quotable.io",
  handler: (context) => fetchRandomQuote,
};

const args1 = {
  text: "STOICQUOTE",
  help: "Import a Random Stoic Quote from stoic-quotes.com",
  handler: (context) => fetchStoicQuote,
};

const args2 = {
  text: "TOLKIENQUOTE",
  help: "Import a Random Quote from lotr-random-quote-api.herokuapp.com",
  handler: (context) => fetchTolkienQuote,
};

const args3 = {
  text: "SWANSONQUOTE",
  help: "Import a random Ron Swanson quote from ron-swanson-quotes.herokuapp.com",
  handler: (context) => fetchSwansonQuote,
};

const args4 = {
  text: "GARDENQUOTE",
  help: "Import a random quote from Quote Garden",
  handler: (context) => fetchGardenQuote,
};

const args5 = {
  text: "GOTQUOTE",
  help: "Import a Game of Thrones quote",
  handler: (context) => fetchGOTQuote,
};

const args6 = {
  text: "ANIMEQUOTE",
  help: "Import a quote from Animechan",
  handler: (context) => fetchAnimeQuote,
};

const args7 = {
  text: "DADJOKE",
  help: "Import a random Dad joke",
  handler: (context) => fetchDadJoke,
};

export default {
  onload: ({ extensionAPI }) => {
    window.roamAlphaAPI.ui.commandPalette.addCommand({
      label: "Random Quote",
      callback: () => fetchRandomQuote().then(string =>
        window.roamAlphaAPI.updateBlock({
          block: {
            uid: window.roamAlphaAPI.ui.getFocusedBlock()?.["block-uid"],
            string: string,
          }
        })
      ),
    });
    window.roamAlphaAPI.ui.commandPalette.addCommand({
      label: "Stoic Quote",
      callback: () => fetchStoicQuote().then(string =>
        window.roamAlphaAPI.updateBlock({
          block: {
            uid: window.roamAlphaAPI.ui.getFocusedBlock()?.["block-uid"],
            string: string,
          }
        })
      ),
    });
    window.roamAlphaAPI.ui.commandPalette.addCommand({
      label: "Tolkien Quote",
      callback: () => fetchTolkienQuote().then(string =>
        window.roamAlphaAPI.updateBlock({
          block: {
            uid: window.roamAlphaAPI.ui.getFocusedBlock()?.["block-uid"],
            string: string,
          }
        })
      ),
    });
    window.roamAlphaAPI.ui.commandPalette.addCommand({
      label: "Ron Swanson Quote",
      callback: () => fetchSwansonQuote().then(string =>
        window.roamAlphaAPI.updateBlock({
          block: {
            uid: window.roamAlphaAPI.ui.getFocusedBlock()?.["block-uid"],
            string: string,
          }
        })
      ),
    });
    window.roamAlphaAPI.ui.commandPalette.addCommand({
      label: "Quote Garden Quote",
      callback: () => fetchGardenQuote().then(string =>
        window.roamAlphaAPI.updateBlock({
          block: {
            uid: window.roamAlphaAPI.ui.getFocusedBlock()?.["block-uid"],
            string: string,
          }
        })
      ),
    });
    window.roamAlphaAPI.ui.commandPalette.addCommand({
      label: "Game of Thrones Quote",
      callback: () => fetchGOTQuote().then(string =>
        window.roamAlphaAPI.updateBlock({
          block: {
            uid: window.roamAlphaAPI.ui.getFocusedBlock()?.["block-uid"],
            string: string,
          }
        })
      ),
    });
    window.roamAlphaAPI.ui.commandPalette.addCommand({
      label: "Animechan Quote",
      callback: () => fetchAnimeQuote().then(string =>
        window.roamAlphaAPI.updateBlock({
          block: {
            uid: window.roamAlphaAPI.ui.getFocusedBlock()?.["block-uid"],
            string: string,
          }
        })
      ),
    });
    window.roamAlphaAPI.ui.commandPalette.addCommand({
      label: "Random Dad Joke",
      callback: () => fetchDadJoke().then(string =>
        window.roamAlphaAPI.updateBlock({
          block: {
            uid: window.roamAlphaAPI.ui.getFocusedBlock()?.["block-uid"],
            string: string,
          }
        })
      ),
    });

    if (window.roamjs?.extension?.smartblocks) {
      window.roamjs.extension.smartblocks.registerCommand(args);
      window.roamjs.extension.smartblocks.registerCommand(args1);
      window.roamjs.extension.smartblocks.registerCommand(args2);
      window.roamjs.extension.smartblocks.registerCommand(args3);
      window.roamjs.extension.smartblocks.registerCommand(args4);
      window.roamjs.extension.smartblocks.registerCommand(args5);
      window.roamjs.extension.smartblocks.registerCommand(args6);
      window.roamjs.extension.smartblocks.registerCommand(args7);
    } else {
      document.body.addEventListener(
        `roamjs:smartblocks:loaded`,
        () =>
          window.roamjs?.extension.smartblocks &&
          window.roamjs.extension.smartblocks.registerCommand(args) &&
          window.roamjs.extension.smartblocks.registerCommand(args1) &&
          window.roamjs.extension.smartblocks.registerCommand(args2) &&
          window.roamjs.extension.smartblocks.registerCommand(args3) &&
          window.roamjs.extension.smartblocks.registerCommand(args4) &&
          window.roamjs.extension.smartblocks.registerCommand(args5) &&
          window.roamjs.extension.smartblocks.registerCommand(args6) &&
          window.roamjs.extension.smartblocks.registerCommand(args7)
      );
    }
  },
  onunload: () => {
    window.roamAlphaAPI.ui.commandPalette.removeCommand({
      label: 'Random Quote'
    });
    window.roamAlphaAPI.ui.commandPalette.removeCommand({
      label: 'Stoic Quote'
    });
    window.roamAlphaAPI.ui.commandPalette.removeCommand({
      label: 'Tolkien Quote'
    });
    window.roamAlphaAPI.ui.commandPalette.removeCommand({
      label: 'Ron Swanson Quote'
    });
    window.roamAlphaAPI.ui.commandPalette.removeCommand({
      label: 'Quote Garden Quote'
    });
    window.roamAlphaAPI.ui.commandPalette.removeCommand({
      label: 'Game of Thrones Quote'
    });
    window.roamAlphaAPI.ui.commandPalette.removeCommand({
      label: 'Animechan Quote'
    });
    window.roamAlphaAPI.ui.commandPalette.removeCommand({
      label: 'Random Dad joke'
    });
    if (window.roamjs?.extension?.smartblocks) {
      window.roamjs.extension.smartblocks.unregisterCommand("RANDOMQUOTE");
      window.roamjs.extension.smartblocks.unregisterCommand("STOICQUOTE");
      window.roamjs.extension.smartblocks.unregisterCommand("TOLKIENQUOTE");
      window.roamjs.extension.smartblocks.unregisterCommand("SWANSONQUOTE");
      window.roamjs.extension.smartblocks.unregisterCommand("GARDENQUOTE");
      window.roamjs.extension.smartblocks.unregisterCommand("GOTQUOTE");
      window.roamjs.extension.smartblocks.unregisterCommand("ANIMEQUOTE");
      window.roamjs.extension.smartblocks.unregisterCommand("DADJOKE");
    }
  }
}

async function fetchRandomQuote() {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  if (response.ok) {
    let string = "> ";
    string += data.content;
    string += " \n\n[[";
    string += data.author;
    string += "]]";
    return (string);
  } else {
    console.error(data);
  }
};

async function fetchStoicQuote() {
  const response = await fetch("https://stoic-quotes.com/api/quote");
  const data = await response.json();
  if (response.ok) {
    let string = "> ";
    string += data.text;
    string += " \n\n[[";
    string += data.author;
    string += "]]";
    return (string);
  } else {
    console.error(data);
  }
};

async function fetchTolkienQuote() {
  const response = await fetch("https://lotr-random-quote-api.herokuapp.com/api/quote");
  const data = await response.json();
  if (response.ok) {
    let string = "> ";
    string += data.quote;
    string += " \n\n[[";
    string += data.author;
    string += "]]";
    return (string);
  } else {
    console.error(data);
  }
};

async function fetchSwansonQuote() {
  const response = await fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes");
  const data = await response.json();
  if (response.ok) {
    let string = "> ";
    string += data[0];
    string += " \n\n[[Ron Swanson]]";
    return (string);
  } else {
    console.error(data);
  }
};

async function fetchGardenQuote() {
  const response = await fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random");
  const data = await response.json();
  if (response.ok) {
    let string = "> ";
    string += data.data[0].quoteText;
    string += " \n\n[[";
    string += data.data[0].quoteAuthor;
    string += "]]";
    return (string);
  } else {
    console.error(data);
  }
};

async function fetchGOTQuote() {
  const response = await fetch("https://api.gameofthronesquotes.xyz/v1/random");
  const data = await response.json();
  if (response.ok) {
    let string = "> ";
    string += data.sentence;
    string += " \n\n[[";
    string += data.character.name;
    string += "]]";
    return (string);
  } else {
    console.error(data);
  }
}

async function fetchAnimeQuote() {
  const response = await fetch("https://animechan.vercel.app/api/random");
  const data = await response.json();
  if (response.ok) {
    let string = "> ";
    string += data.quote;
    string += " \n\n[[";
    string += data.character;
    string += "]] in [[";
    string += data.anime;
    string += "]]";
    return (string);
  } else {
    console.error(data);
  }
}

async function fetchDadJoke() {
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch("https://icanhazdadjoke.com/", requestOptions);
  const data = await response.json();
  if (response.ok) {
    let string = "> ";
    string += data.joke;
    return (string);
  } else {
    console.error(data);
  }
}