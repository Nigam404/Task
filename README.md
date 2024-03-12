1*Go to "http://localhost:3000/home.html" for using the app.

2-Functionality of home page:
  *click to fetch data from post api-clicking this button will fetch code from post api and store it to the database.
  *click to fetch data from comment api-clicking this button will fetch code from comment api and store it to the database.
  *click to fetch data from user api-clicking this button fetch will code from user api and store it to the database.

3- Searching post through post name/body or comment name/body:
  ->in the first field user have to enter searching string and in second field, user have to choose the type of searching that is
              -by post name/body
              or
              -by comment name/body
  ->searching post through post name/body will display the matching post(if found).
  ->searching post through comment name/body will display the matching comment(if found) and also will display the post associated with it.
  
API ENDPOINTS-
  Type                                               Path                                                                               Description
  GET                                     http://localhost:3000/post/                                        This will fetch posts from the api and will add those data to our local database.
  GET                                     http://localhost:3000/comment/                                     This will fetch comments from the api and will add those data to our local database.
  GET                                     http://localhost:3000/user/                                        This will fetch users from the api and will add those data to our local database.
  GET                                     http://localhost:3000/post/search/:searchText/:searchType          This will find the matching post by taking two parameters that are, 
                                                                                                             text to be searched and another is searching type("post" or "comment").
  GET                                     http://localhost:3000/home.html                                    Using this path we can access "Home page" of the application.


                                                                                      THE END
                                                                                     Thank You.
  
