# Development manual

### Git
In this project we use a simple branching workflow. We have 7 branches, master, development, docuements, indexpage, style, board and game. Only when we have completed a feature we push to the master and deploy.

First you need to create a working copy of a local repository, with the command:
`git clone username@host:/path/to/repository`

Before coding you should check for available branches, with the command:
`git branch`

To Switch from one branch to another branch, enter the command:
`git checkout <filename>`

To create a new branch and switch to it, enter the command:
`git checkout -b <branchname>`

Before you start coding you should always pull changes that have been made to the repository:
`git pull`

Before pushing you need to add the files that you have made changes to.
To add one file use this command:
`git add <filename>`
To add many files use this command:
`git add .`

After adding the file/s you need to make a commit with a message to describe the changes you made, enter the command:
`git commit -m "Commit message"`

To begin the integration test, you only have to push the branch to github, everything else is automated.
`git push`

To deploy the features you have **completed** you'll have to merge the master branch with the development branch:
`git checkout master`
`git merge development`
`git push`

### JavaScript
When we make a variable out of two compound words, the second word begins with a capital letter(pascal casing): 
```javascript
var firstSecond
```
Two slashes // make a remainder of a line a comment.
Everything between a slash and a star /* */ will become a comment.
We use curlybrackets { } to create an object

```javascript
//some comment 
/* more
comments
*/
function testCode() {
    console.log("some text");
}
```
We use brackets for arrays.
We use single quotes for text unless the text contains a single quote, then we use double quotes.
We use , to seperate the values in the array.

```javascript
var array = ['a', 'b', 'c', 0, 1, 2];
```
To access items from the array we use .

```javascript
var array = {
    item1: 'one',
    item2: 'two',
    item3: 'three',
    item4: 'four'
};
array.item1;
array.item2;
```



```javascript
function person() {
  firstName: "John",
  lastName: "Smith",
  age: 25
};
```
### HTML

Headings:
# H1
## H2
### H3

Text:
**bold text** or __bold text__
*italic text* or _italic text_
If we want to combine them together
_Italic**bold**italic_

Lists:
Unordered list:
..* First item
..* Second item
..* Third item

Ordered list:
1. First item
2. Second item
3. Third item

Links and emails:
An email <example@example.com> link