export const renderBookList = (bookListEl, books) => {
  bookListEl.innerHTML = ``;

  books.forEach((book) => {
    //created my elements for each book
    const li = document.createElement("li");
    const img = document.createElement("img");
    const pTag = document.createElement("p");
    const button = document.createElement("button");
    //manipulated the elements so they can have what I want
    img.src = book.coverUrl;
    img.alt = `An old cover of ${book.title}`;
    pTag.textContent = `Title: ${book.title}`;
    button.dataset.authorUrlKey = book.author.urlKey;
    button.textContent = `View ${book.author.name}`;
    //append
    li.append(img, pTag, button);
    bookListEl.append(li);
    console.log(bookListEl);
  });
};

export const renderAuthorInfo = (authorInfoEl, author) => {
  authorInfoEl.innerHTML = ``;

  const h2 = document.createElement("h2");
  const img = document.createElement("img");
  const pTagBirth = document.createElement("p");
  const pTagBio = document.createElement("p");
  const a = document.createElement("a");

  h2.textContent = author.name;
  img.src = author.pictureUrl;
  img.alt = `A picture of ${author.name}`;
  pTagBirth.textContent = `Born: ${author.birthDate}`;
  pTagBio.textContent = author.bio;
  a.href = author.wikipediaUrl;
  a.textContent = "Wikipedia Link";
  authorInfoEl.append(h2, img, pTagBirth, pTagBio, a);
};

export const renderNewUserForm = (newUserFormEl) => {
  const usernameLabel = document.createElement("label");
  const userInput = document.createElement("input");
  const isCoolLabel = document.createElement("label");
  const isCoolInput = document.createElement("input");
  const favLangLabel = document.createElement("label");
  const favLangSelect = document.createElement("select");
  const none = document.createElement("option");
  const javaScript = document.createElement("option");
  const python = document.createElement("option");
  const ruby = document.createElement("option");
  favLangSelect.append(none, javaScript, python, ruby);

  const button = document.createElement("button");

  usernameLabel.textContent = "Username";
  userInput.id = "username";
  userInput.name = "username";
  usernameLabel.htmlFor = "username";
  isCoolLabel.textContent = "Is this user cool?";
  isCoolInput.id = "is-cool";
  isCoolInput.name = "isCool";
  isCoolLabel.htmlFor = "is-cool";
  isCoolInput.type = "checkbox";
  favLangLabel.textContent = "Favorite Language";
  favLangLabel.htmlFor = "favorite-language";
  favLangSelect.id = "favorite-language";
  favLangSelect.name = "favoriteLanguage";
  none.textContent = "None";
  none.value = "None";
  javaScript.textContent = "JavaScript";
  javaScript.value = "JavaScript";
  python.textContent = "Python";
  python.value = "Python";
  ruby.textContent = "Ruby";
  ruby.value = "Ruby";

  button.textContent = "Create User";
  newUserFormEl.append(
    usernameLabel,
    userInput,
    isCoolLabel,
    isCoolInput,
    favLangLabel,
    favLangSelect,
    button
  );
  /*
  FEEDBACK
    Great job on this! Excellent attention to detail!
    For future reference, you could have also used innerHTML here
    and write the form directly in there,
    either way, great job!
  */
};

export const renderNewUser = (newUserEl, newUser) => {
  newUserEl.innerHTML = ``;
  const h2 = document.createElement("h2");
  const pIsCool = document.createElement("p");
  const pLang = document.createElement("p");

  h2.textContent = newUser.username;
  h2.dataset.userId = newUser.id;
  pIsCool.textContent = newUser.isCool
    ? "The hippest in the house!"
    : "A real square";
  pLang.textContent = `Favorite Language: ${newUser.favoriteLanguage}`;

  newUserEl.append(h2, pIsCool, pLang);
};
