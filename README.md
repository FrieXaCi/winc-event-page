# winc_event_page_sass
Final project frontend development for WincAcademy:

see the project on youtube:
https://youtu.be/6SX0RZOq69s

Requirements:
The app contains a form.
You have used React Router.

Events page:
The page shows a list of all events that are retrieved from the back-end server with the following details: title, description, image, startTime, endTime and categories.
The user can click on an event that leads them to the ‘Event’ page using React Router.
There is a button that allows the user to add new events using a form. 
A query to add the event to the server is sent as well.
A succes message is displayed after successfully adding a new event.
You can search through the events based on the name of the event.
You can filter through the list/search results based on categories.

Event page:
The event page shows the following details:  title, description, image, startTime, endTime, categories and by who it’s created (display their name and image).
You can click on an edit button where the user can edit the details shown on the page. 
The back-end server data is updated after.
A succes or fail message is shown after a successful update.
You can click on a delete button to delete the event.
A delete query is sent to delete the data in the back-end.
A succes or fail message is shown after a successful delete.

Extra Challenge:
Make the app responsive.
Use Context to store the categories and users so that you only have to fetch them once.

