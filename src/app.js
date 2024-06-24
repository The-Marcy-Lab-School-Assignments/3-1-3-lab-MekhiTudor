import {
  renderBookList,
  renderAuthorInfo,
  renderNewUserForm,
  renderNewUser,
} from "./render-functions.js";
import {
  getFirstThreeFantasyBooks,
  getAuthor,
  createNewUser,
} from "./fetch-functions.js";

export default async function app(appDiv) {
  const bookListEl = document.createElement("ul");
  bookListEl.id = "book-list";
  appDiv.append(bookListEl);

  const authorInfoEl = document.createElement("div");
  authorInfoEl.id = "author-info";
  appDiv.append(authorInfoEl);

  const newUserEl = document.createElement("div");
  newUserEl.id = "new-user";
  appDiv.append(newUserEl);

  const newUserFormEl = document.createElement("form");
  newUserFormEl.id = "new-user-form";
  appDiv.append(newUserFormEl);
  // Render the form!
  renderNewUserForm(newUserFormEl);

  // Fetch the books!
  const books = await getFirstThreeFantasyBooks();

  // render out the books, don't forget the two arguments or forEach wont run;
  renderBookList(bookListEl, books);
  //console.log(getAuthor(books[0].author.urlKey));
  const bookHelper = async (e) => {
    //console.log(e.target);
    if (e.target.matches("button")) {
      let key = e.target.dataset.authorUrlKey;
      const authorData = await getAuthor(key);
      console.log(authorData);
      console.log(renderAuthorInfo(authorInfoEl, authorData));
    }
  };

  bookListEl.addEventListener("click", bookHelper);

  const submissionHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData);

    console.log(formData);
    console.log(formObject);

    const newUser = await createNewUser(formObject);
    renderNewUser(newUserEl, newUser);
  };

  newUserFormEl.addEventListener("submit", submissionHandle);
}
