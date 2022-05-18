# Final
# Project title : Clothing Ecom Website.

### Description:
In this project I'm going to create an ecommerce website where right now i'm creating only 'Login','Register','Cart','Product' and 'Signout' pages.To do this i've used HTML,CSS,Javascript and MySql technologies to fulfill my needs to complete  the website.
In this website an user can login into his page if already registered, if not user can have the option to register for it.After logging in he can browse variety of products on gender basis and the user can add products to cart where he also has the option to add multiple products to the cart.
Later user can logout from the page when the work is done, or else if user wish to signout from the page he can click on signout then the user details will be removed from the database.If he tries to login again using same credentials after signing out he'll get a message as the user doesnot exist.
These are the things i've worked on the website which is not fully functional but will fulfill the need for the present project.

In future i would like to make the webpage more responsive like when clicked on product it should show the entire product description like size,colour,etc; and when adding the product to cart it shouldn't go the cart page instead it should directly add into the cart without changing to next page.

### Issues
Unable to open the selected product in new tab.
Can't select the product to see it's description.

### Frontend technologies
HTML,CSS and Javascript

### Backend Technologies
MySql and NodeJs

### ERD
![ERD](https://user-images.githubusercontent.com/70013071/168950811-5c52dcf5-43ca-4349-a2dd-21b6f069be47.jpg)
---> User: In User entity user has ID,Username and lastname
---> Product: For this entity it has product ID,product name,product price
---> Cart: In this entity includes cart Id,cart number and cart total
---> Orders: In this entity it has order id,order arrival and order tracking.


### Login Page
In this page user logs into his website and starts shopping. If user didn't have the account then the user should register which is mentioned in next step.

![Login page](https://user-images.githubusercontent.com/70013071/168944855-f1d641f2-dab3-41ad-aaf5-a954a47ae2bd.jpg)

### Register Page
Here first time users registers to the website.
![Register Page](https://user-images.githubusercontent.com/70013071/168944905-6ee70573-dc34-4561-b58b-c0b9eeb7c345.jpg)

### Home Page
Once logged in a user can select category wise prodcuts which helps the user to decide what to buy 

![Home page](https://user-images.githubusercontent.com/70013071/168945089-e7ff1e90-c0b4-47eb-8cfb-1764df504969.jpg)

### Products page
Here in this page a user can see multiple products from wher he can shop according to his wish.
![Products page](https://user-images.githubusercontent.com/70013071/168944949-da6176e8-05a8-406d-8ed5-0036805c0303.jpg)

### Multiple products in cart
One can add multiple products to cart page which helps the user to shop quickly.
![Multiple prodcts in cart](https://user-images.githubusercontent.com/70013071/168945174-898d9ee9-e4a6-43a1-9410-b3efaa63a313.jpg)

### Cart Page
As the user selects the products to buy can see them in the carts page.
![Cart Page](https://user-images.githubusercontent.com/70013071/168945027-2e35bf59-c9ee-421c-ad65-8f266befe7db.jpg)

### User not exists Page
After signing out the user details will be removed from the database then the user will get a message like shown below.
![User not exists](https://user-images.githubusercontent.com/70013071/168945137-6e09104b-2dde-4ba4-b49c-33f0568b74c1.jpg)

### How can we execute
Download Nodejs and in terminal run npm run dev. After that server connects and open that in browser with localhost.




