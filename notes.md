# Routing Notes

## REST vs Non REST

| Non REST         | REST                   | Action    |
| :--------------- | :--------------------- | :-------- |
| /listAllLessons  | /api/lessons           | GET       |
| /createLesson    | /api/lessons           | POST      |
| /deleteLesson    | /api/lessons/:id       | DELETE    |
| /updateUser      | /api/users/:id         | PATCH/PUT |
| /listHubMessages | /api/hubs/:id/messages | GET       |
| /viewMessage     | /api/hubs/messages/:id | GET       |

## MENU

- CommonJS modules (require/export).
- Express Router (break up server into sub components).
- Different ways to read data from the client.
   - body ---> req.body
   - query string ---> req.query
   - URL parameter ---> req.params
   - 
- using sub-routes


## Requirements

- list all hubs
- add a hub
- update a hub
- remove a hub
- view hub messages
- post a message to a hub


## Data Access

- use `hubs-model.js` to talk to databade
   - find(query)
   - findById(id)
   - add(hub)
   - remove(id)
   - update(id, changes)
   - findHubMessages(hubId)
   - findmessageById(messageId)
   - addMessage(message)

**Everyone of these methods returns a promise**


## Basic Application Architecture

- UI layer/code.
- Business Logic layer/code.
- Database layer/code.

## Using Query String Parameters

https://www.google.com/search?channel=tus2&client=firefox-b-1-d&q=corona+virus

https://www.google.com    ---> domain

/search                   ---> endpoint

?                         ---> start of query string

channel=tus2              ---> key/value pair

&                         ---> separates key/value pairs

client=firefox-b-1-d

&

q=corona+virus

Express will parse the query string into an object:

``` js
req.query ={
   channel: tus2,
   client: firefox-b-1-d,
   q: corona+virus
}
```