# task_manager

Steps to run // requirement: need npm 

1. Clone the repo
2. npm install
3. npm start


#cUrls

Retrieve All Tasks
With default pagination to get the first 20:

```curl -H "x-api-key: abc123def456ghi789" http://localhost:3000/tasks```


Retrieve a Specific Task by its ID
Assuming ID = 2 as an example; also provides sorting, filtering, and pagination:

```curl -H "x-api-key: abc123def456ghi789" "http://localhost:3000/tasks/2?page=1&limit=10&title=SampleTitle&sortBy=id&order=asc"```



Create a New Task

```curl -X POST -H "x-api-key: abc123def456ghi789" -H "Content-Type: application/json" -d '{"title": "New Task", "description": "Description of the new task"}' http://localhost:3000/tasks```


Update a Task by its ID
Assuming ID = 3 as an example:

```curl -X PUT -H "x-api-key: abc123def456ghi789" -H "Content-Type: application/json" -d '{"title": "Updated Task", "description": "Updated Description"}' http://localhost:3000/tasks/3```



Delete a Task by its ID
For ID = 1:

```curl -X DELETE -H "x-api-key: abc123def456ghi789" http://localhost:3000/tasks/1```
