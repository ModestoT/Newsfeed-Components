// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"
class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Click to Expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", () => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle("article-open");
    //checks if the expand button is equal to click to expand if it is changes text to click to close
    if(this.expandButton.textContent === "Click to Expand"){
      this.expandButton.textContent = "Click to Close";
    } else {
      this.expandButton.textContent = "Click to Expand";
    }
    //checks if the domElement contains the class article-open if it does/doesn't it will play the appropriate animation
    if(this.domElement.classList.contains("article-open")){
      TweenMax.to(this.domElement, 1, {height:400});
    } else {
      TweenMax.to(this.domElement, 1, {height:50});
    }
    
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll(".article").forEach(article => {
  return new Article(article);
});