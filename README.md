# message-list

## Objective

- Create a small web app using Vue that allows you to add messages and delete messages via a browser UI.

## Set Up

1. Clone this repository: `git clone `

2. Install dependencies: `npm install`

## Testing

```bash
npm test
```

## See the App in the Browser

1. Run the command: `npm run serve`

2. Open a web browser to the URL specified in your terminal

## Instructions

You only need to edit the file `src/MessageList.vue` to complete this challenge.

**Part 1: The Form**

1. Your app should allow text into the form input field.

2. Clicking the submit button or submitting the form will add the message to the messages list.

3. If the input field has no text or is all spaces then do not add the message to the message list.

4. Submitting the form must also clear the existing text from the text input field.

**Part 2: The Message List**

1. Initially this list must have no messages, although in the code provided to you three messages have been added as static HTML as an example of how to format the messages. You'll want to replace those with a dynamic list of messages.

2. Messages added to the list are added to the bottom of the list.

3. If the delete button associated with a message is clicked then that message should be removed.