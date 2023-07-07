API ASSIGNMENT

1.Create new user:
Path: http://127.0.0.1:5000/register
Method: POST
Sample request:
 {   
    "firstname":"vijay",
    "lastname":"aravind",
    "username":"vijayaravind",
    "email":"vijayaravind@email",
    "password":"password",
    "contact":"7878786",
    "companyname":"Propel",
    "role":"Normal",
    "title":"Analyst"
}
	Response:
		1. Successful response:               Status:  200 OK
{
    "message": "User created",
    "user": 
{
        "email": "vijayaravind@email",
        "username": "vijayaravind"
    }
}
2. Short username:        Status:  400 Bad Request
{
    "error": "User is too short"
}
		3. Short password:  	     Status:  400 Bad Request
{
    "error": "Password is too short"
}
		4. Invalid username:  	     Status:  400 Bad Request
{
"error": "Username should be alphanumeric, also no spaces"
}
		5. Invalid email:  	     Status:  400 Bad Request
			{
"error": "Email is not valid”
}
		6. Email already taken:  	     Status:  409 Conflict
			{
"error": "Email is taken”
}
		7. Username already taken:	 Status:  409 Conflict
			{
"error": "Username is taken”
}
2.Login:
	Path: http://127.0.0.1:5000/login
	Method: POST
Sample request:
{  
    "username":"vijayaravind",
    "Password":"password”
}
Response:
	Status:  200 OK
{
    "customUI": 
{
        "fontcolor": "#ffffff",
        "primarycolor": "#ffffff",
        "secondarycolor": "#ffffff"
           },
    "logourl": "default.jpg",
    "token": "JqpTABxTs_CcvLi6y4es2Q"
}
 
Login Failed Response:
	Status:  401 UNAUTHORIZED
{
    "message": "Wrong Login credentials"
}
3.Logout:
	Path: http://127.0.0.1:5000/logout
	Method: POST
Response:
	Status : 200 OK
{
    "message": "Logout Successful"
}
4.Custom UI:
	Path: http://127.0.0.1:5000/custom-ui
	Method: POST
Sample Request: 
{  
    "primarycolor":"#ffffff",
    "secondarycolor":"#ffffff",
    "fontcolor":"#fffffff"
}

	Response:
		Status: 200 OK
		{
"Success,The changes are added to the user id": "1c97515f-edb8-4c69-9f46-fcbb13fab1cf"
}

5. Update:
Path: http://127.0.0.1:5000/update/<user-id>	 
http://127.0.0.1:5000/update/1c97515f-edb8-4c69-9f46-fcbb13fab1cf
Method: UPDATE

	Sample Request:
{   
    "firstname":"ram",
    "lastname":"charan",
    "username":"ram",
    "email":"ramcharan@email",
    "password":"password",
    "contact":"45643272",
    "companyname":"Acies",
    "role":"Normal user",
    "title":"Developer"
}

		
	Response:
		Status: 200 OK
{
"The user was updated id ":	1c97515f-edb8-4c69-9f46-fcbb13fab1cf
,"firstname":"ram",
    "lastname":"charan",
    "username":"ram",
    "email":"ramcharan@email",
    "password":"password",
    "contact":"45643272",
    "companyname":"Acies",
    "role":"Normal user",
    "title":"Developer”
}
Status: 404 Not found
	"NO users  found"
 
6. Delete:
	Path: http://127.0.0.1:5000/delete/<user-id>
http://127.0.0.1:5000/delete/1c97515f-edb8-4c69-9f46-fcbb13fab1cf
Method: DELETE
Response:
	Status: 200 OK
{
"The user was deleted id ":      1c97515f-edb8-4c69-9f46-fcbb13fab1cf
}
Status: 404 Not found
	"NO users  found"

7. Get user list:
	Path: http://127.0.0.1:5000/user-list
	Method: GET
	Sample Request:
{  
    "search-key":"vijayaravind",
    "starting-index":"1",
    "row-size":"10"
}
Response:
	Status : 200 OK
{
    "companyname": "Propel",
    "firstname": "vijay",
    "lastname": "aravind",
    "user-id": "1c97515f-edb8-4c69-9f46-fcbb13fab1cf",
    "useremail": "vijayaravind@email",
    "username": "vijayaravind"
}
Response:
	Status: 404 Not found
	"NO users  found"
 
8. Custom Logo:
Path: http://127.0.0.1:5000/custom-logo
Method: POST
Sample Request: {  
    				"file":"vijay.jpg" #blobfile
      }
Response: 
	Status: 200 OK
{
    "The logo file is added to the user": "vijayaravind"
}
