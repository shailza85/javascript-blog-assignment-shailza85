
const arrArticleObject = {
    title: [],
    content: []
};

//console.log(arrArticleObject.title);
//console.log(arrArticleObject.content);

class Article {
    constructor(title = [], content = []) {
        this.title = title;
        this.content = content;
    }
    createTitle() {
        const titleElement = document.createElement("h2"); //Creates element heading of blog post.
        titleElement.textContent = `${this.title}`; //Template literal for title text.
        document.body.appendChild(titleElement); //append the title to the body of webpage.
    }
    createContent() {
        const contentElement = document.createElement("p"); //Creates paragrapg element for content of blog post.
        contentElement.textContent = `${this.content}`;  //Template literal for content.
        document.body.appendChild(contentElement); //append the content to the tile of blog post.

    }

    addTitle(titleText = "") {  //Method to add title to blog post
        if (titleText.length > 0) {
            this.title.push(titleText); //title text will be pushed in the array.
        }
    }
    addcontentText(contentText = "") { //Method to add content to blog post
        if (contentText.length > 0) {
            this.content.push(contentText); //content text will be pushed in the array.
        }

    }

   outputBlogPost() {   //Method to output text and content

        const blogTitle = document.createElement("article");
        const blogContent = document.createElement("span");
        
        for (let index = 0; (index < this.title.length && index < this.content.length); index++) { //Loop terminates based on the length of array (title and content).
            const titleBlogItem = document.createElement("h2");  //creates "h2" element to hold title of blog
            const contentBlogItem = document.createElement("p"); //creates "p" element to hold title of blog
            titleBlogItem.textContent = this.title[index];  //inserting the text to the HTML element
            blogTitle.appendChild(titleBlogItem);
            contentBlogItem.textContent = this.content[index];  //inserting the text to the HTML element
            blogContent.appendChild(contentBlogItem);
        }
        // Adding the title and content to the body of webpage.
        document.body.appendChild(blogTitle);
        console.log(blogTitle);
        document.body.appendChild(blogContent);
        console.log(blogContent);

    }

   /* outputBlogContent() {

        const blogContent = document.createElement("article");
        for (let index = 0; index < this.content.length; index++) {
            const contentBlogItem = document.createElement("p");
            contentBlogItem.textContent = this.content[index];
            blogContent.appendChild(contentBlogItem);
        }
        document.body.appendChild(blogContent);
        console.log(blogContent);

    }*/
}

const blog1 = new Article(["My first blog C#..."],["Content of first blog output using classes and objects in JavaScript!!"]);
blog1.addTitle();
blog1.addcontentText();

const blog2 = new Article(["My second blog HTML..."],["Content of second blog output using classes and objects in JavaScript!!"]);
blog2.addTitle();
blog2.addcontentText();

const blog3 = new Article(["My third blog CSS..."],["Content of third blog output using classes and objects in JavaScript!!"]);
blog3.addTitle();
blog3.addcontentText();

const blog4 = new Article(["My fourth blog CSS..."],["Content of fourth blog output using classes and objects in JavaScript!!"]);
blog4.addTitle();
blog4.addcontentText();

const blog5 = new Article(["My fifth blog CSS..."],["Content of fifth blog output using classes and objects in JavaScript!!"]);
blog5.addTitle();
blog5.addcontentText();

const blog6= new Article(["My sixth blog CSS..."],["Content of sixth blog output using classes and objects in JavaScript!!"]);
blog6.addTitle();
blog6.addcontentText();
