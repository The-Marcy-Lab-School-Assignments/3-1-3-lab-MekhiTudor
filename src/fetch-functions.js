export const getFirstThreeFantasyBooks = async () => {
  //functions labeled async return  a promise
  //returns 3 books
  try {
    //fetch data
    const url = "https://openlibrary.org/subjects/fantasy.json";
    const response = await fetch(url);
    //check to see if response is okay
    if (!response.ok) {
      throw new Error("Failed to get fantasy books");
    }
    //parse the response body from JSON ino JS object
    const isJSON = await response.json();
    // console.log(isJSON);
    return await isJSON.works.slice(0, 3).map((work) => {
      return {
        title: work.title,
        author: {
          name: work.authors[0].name,
          urlKey: work.authors[0].key,
        },
        coverUrl: `https://covers.openlibrary.org/a/id/${work.cover_id}-M.jpg`,
      };
    });
  } catch (error) {
    console.warn(error.message);
    return null;
  }
};

export const getAuthor = async (urlKey) => {
  //fetch data
  //save base url in variable called base
  //save parameter in own parameter
  // put together in template literal with .json
  const base = `https://openlibrary.org`;
  const key = urlKey;

  try {
    const response = await fetch(`${base}${key}.json`);
    //check to see if response is okay
    if (!response.ok) {
      throw new Error("Failed to get author");
    } //parse the response body from JSON ino JS object
    const isJSON = await response.json();
    //console.log(isJSON);
    // return isJSON;
    //isJSON doesn't work because isJSON is not an array its an object

    const obj = {
      birthDate: isJSON.birth_date,
      bio: isJSON.bio,
      wikipediaUrl: isJSON.wikipedia,
      name: isJSON.name,
      pictureUrl: `https://covers.openlibrary.org/a/id/${isJSON.photos[0]}-M.jpg`,
    };
    return obj;
  } catch (error) {
    //returns authors
    console.warn(error);
    return null;
  }
};

export const createNewUser = async (obj) => {
  const options = {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const url = `https://jsonplaceholder.typicode.com/users`;
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Failed to create new user");
    }
    const parse = await response.json();
    // console.log(parse);
    return parse;
  } catch (error) {
    console.warn(error);
    return null;
  }
};
