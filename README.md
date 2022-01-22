# Bank API using Mongo Database

<p>This application is a client-server API built using Mongo DB and Node.js in the backend and React in the fron end. Mongoose library was utilized to interact with the database and express framework to develop server functionality. Database used is cloud hosted Atlas Mongo DB and both server and client are deployed successfully at Heroku 
https://samer-bank-api-mongoose.herokuapp.com/</p>
```
**All API functions were tested successfully using postman App**
# Bank API

## <a name='User'></a> User Functionality

### <a name='show-users'></a> Show All Users

<p>Get all active users stored in the system</p>

```
GET /api/users
```

### <a name='show-users-id'></a> Get a single user by ID

```
GET /api/users:id
```

### <a name='add-new-user'></a> Add a new User

```
POST api/users/
```

### Parameters - `Request Body Parameters`

| Name   | Type     | Description                              |
| ------ | -------- | ---------------------------------------- |
| id     | `Number` | <p>integer unique passport/id number</p> |
| name   | `String` | <p>user name</p>                         |
| cash   | `Number` | <p>float,amount of cash</p>              |
| credit | `Number` | <p>float,amount of credit</p>            |

## <a name='Account'></a> Account Functionality

### <a name=''></a> Deposit funds for both cash and credit

<p>This end point handles depositing cash as well as increasing credit for a specific user</p>

```
PUT /account/deposit/cash
PUT /account/deposit/credit
```

### Parameters - `req. params`

| Name | Type     | Description           |
| ---- | -------- | --------------------- |
| id   | `Number` | <p>Unique user ID</p> |

### Parameters - `Request Body Parameters`

| Name   | Type     | Description                             |
| ------ | -------- | --------------------------------------- |
| cash   | `Number` | <p>float,amount of cash deposited</p>   |
| credit | `Number` | <p>float,amount of credit deposited</p> |

### <a name=''></a> Withdraw funds for both cash and credit

<p>This end point handles withdrawing cash as well as  credit for a specific user</p>

```
PUT /account/withdraw/:type/:id/
```

### Parameters - `req. params`

| Name | Type     | Description                                    |
| ---- | -------- | ---------------------------------------------- |
| type | `String` | <p>Type of withdraw, either cash or credit</p> |
| id   | `Number` | <p>Unique user ID</p>                          |

### Parameters - `Request Body Parameters`

| Name   | Type     | Description                             |
| ------ | -------- | --------------------------------------- |
| cash   | `Number` | <p>float,amount of cash withdrawn</p>   |
| credit | `Number` | <p>float,amount of credit withdrawn</p> |

### <a name=''></a> Withdraw funds for both cash and credit

<p>This end point handles transfering cash as well as  credit from one user to another</p>

```
PUT /account/transfer/:type/:fromId/:toId
```

### Parameters - `req. params`

| Name   | Type     | Description                                    |
| ------ | -------- | ---------------------------------------------- |
| type   | `String` | <p>Type of transfer, either cash or credit</p> |
| fromId | `Number` | <p>Unique user ID transfering from</p>         |
| toId   | `Number` | <p>Unique user ID transfering to</p>           |

### Parameters - `Request Body Parameters`

| Name   | Type     | Description                                     |
| ------ | -------- | ----------------------------------------------- |
| cash   | `Number` | <p>float,amount of cash being transferred</p>   |
| credit | `Number` | <p>float,amount of credit being transferred</p> |
