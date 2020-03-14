# Routing Notes

## REST vs Non REST

| Non REST        | REST             | Action    |
| :-------------- | :--------------- | :-------- |
| /listAllLessons | /api/lessons     | GET       |
| /createLesson   | /api/lessons     | POST      |
| /deleteLesson   | /api/lessons/:id | DELETE    |
| /updateUser     | /api/users/:id   | PATCH/PUT |

## MENU

- CommonJS modules (require/export).
- Express Router (break up server into sub components).
- Different ways to read data from the client.
   - body
   - 
   -
   -


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
