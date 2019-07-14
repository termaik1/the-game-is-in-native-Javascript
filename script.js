const films = [
  {
    title: "The Green Mile",
    creationYear: 1999,
    country: ["USA"],
    budget: "$60 000 000",
    actors: [
      {
        name: "Tom Hanks",
        age: 63,
        role: "Paul Edgecomb"
      },
      {
        name: "David Morse",
        age: 65,
        role: "Brutus Howell"
      },
      {
        name: "Michael Clarke Duncan",
        age: 54,
        role: "John Coffey"
      }
    ],
    director: {
      name: "Frank Darabont",
      age: 60,
      oscarsCount: 0
    }
  },
  {
    title: "Inception",
    creationYear: 2010,
    country: ["USA"],
    budget: "$160 000 000",
    actors: [
      {
        name: "Leonardo DiCaprio",
        age: 44,
        role: "Cobb"
      },
      {
        name: "Joseph Gordon-Levitt",
        age: 38,
        role: "Arthur"
      },
      {
        name: "Ellen Page",
        age: 32,
        role: "Ariadne"
      },
      {
        name: "Tom Hardy",
        age: 41,
        role: "Eames"
      }
    ],
    director: {
      name: "Christopher Nolan",
      age: 48,
      oscarsCount: 0
    }
  },
  {
    title: "Forrest Gump",
    creationYear: 1994,
    country: ["USA"],
    budget: "$55 000 000",
    actors: [
      {
        name: "Tom Hanks",
        age: 63,
        role: "Forrest Gump"
      },
      {
        name: "Robin Wright",
        age: 53,
        role: "Jenny Curran"
      },
      {
        name: "Sally Field",
        age: 72,
        role: "Mrs. Gump"
      }
    ],
    director: {
      name: "Robert Zemeckis",
      age: 68,
      oscarsCount: 1
    }
  },
  {
    title: "Interstellar",
    creationYear: 2014,
    budget: "$165 000 000",
    country: ["USA", "Great Britain", "Canada"],
    actors: [
      {
        name: "Matthew McConaughey",
        age: 49,
        role: "Cooper"
      },
      {
        name: "Anne Hathaway",
        age: 36,
        role: "Brand"
      },
      {
        name: "Jessica Chastain",
        age: 42,
        role: "Murph"
      },
      {
        name: "Michael Caine",
        age: 86,
        role: "Professor Brand"
      },
      {
        name: "Matt Damon",
        age: 48,
        role: "Mann"
      }
    ],
    director: {
      name: "Christopher Nolan",
      age: 48,
      oscarsCount: 0
    }
  },
  {
    title: "Catch Me If You Can",
    creationYear: 2002,
    budget: "$52 000 000",
    country: ["USA", "Canada"],
    actors: [
      {
        name: "Tom Hanks",
        age: 63,
        role: "Carl Hanratty"
      },
      {
        name: "Leonardo DiCaprio",
        age: 36,
        role: "Frank Abagnale Jr."
      },
      {
        name: "Christopher Walken",
        age: 76,
        role: "Frank Abagnale"
      },
      {
        name: "Amy Adams",
        age: 44,
        role: "Brenda Strong"
      }
    ],
    director: {
      name: "Steven Spielberg",
      age: 72,
      oscarsCount: 4
    }
  }
];

const avgAgeActor = films => {
  //debugger;
  // const director = prompt("Введите режисера фильма");
  const director = "Christopher Nolan";
  let items = [];
  let countI = [];
  for (let i = 0; i < films.length; i++) {
    if (
      films[i].director.name.toUpperCase() === director.toUpperCase() &&
      films[i].director.oscarsCount === 0
    ) {
      countI.push(films[i].actors.length);
      let tmp = films[i].actors.map(actors => actors.age);
      items.push(tmp.reduce((sum, current) => sum + current));
    }
  }
  countI = countI.reduce((sum, current) => sum + current);
  let rezult = (items.reduce((sum, current) => sum + current) / countI).toFixed(5);
  console.log("средний возраст актеров, где нету оскара = " + rezult);
  return;
};

const nameActors = films => {
  let tmp = [];
  let newTmp = [];
  let rezult = [];

  let newFilms = [];
  films.forEach((item, i, arr) => {
    if (item.creationYear > 1995) {
      newFilms.unshift(arr[i]);
    }
  });
  for (key in newFilms) {
    tmp.unshift(newFilms[key].actors);
  }
  tmp.forEach((item, i, arr) => {
    for (key1 in item) {
      if (item[key1].name == "Tom Hanks") {
        for (key2 in arr[i]) {
          newTmp.unshift(arr[i][key2].name);
        }
      }
    }
    return;
  });

  for (key3 in newTmp) {
    if (newTmp[key3] != "Tom Hanks") {
      rezult.unshift(newTmp[key3]);
    }
  }
  console.log("актеры которые играли с Томом Хэнксом : " + rezult);
  return;
};

const budgetFilm = films => {
  let tmp = [];
  let budget = [];
  let rezult = [];
  let sum = [];
  let check = false;
  tmp = films.filter((item, i, arr) => item.director.age < 70);

  tmp.filter((item, i, arr) => {
    item.actors.filter((newItem, newI, newArr) => {
      if (newItem.name == "Tom Hanks") {
        check = true;
      }
      let cout = newI + 1;
      if (cout == newArr.length) {
        if (check == false) {
          check = false;

          budget.splice(0, 0, arr[i].budget);
        } else {
          check = false;
        }
      }
    });
  });

  budget.filter((item, i, arr) => {
    sum.splice(0, 0, item.replace("$", "").replace(/ +/g, ""));
  });

  sum.filter((item, i, arr) => {
    rezult = +rezult + +item;
  });
  console.log(
    "общий бюджет фильмов без Тома Хэнка и с режисерам(и) младше 70 лет = " + "$" + rezult );
  return;
};

avgAgeActor(films);
nameActors(films);
budgetFilm(films);
