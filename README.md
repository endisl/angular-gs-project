# Products

Angular project about registering products using a straightforward backend built with JSON server for quick prototyping and mocking.

## Executing the app

With `npm`, `Angular` and `JSON server` installed in the development server,  
- First run the backend:  
Execute `json-server --watch db.json` in the backend directory.  
The products are available on `http://localhost:3000/products`   
- Then run the frontend:  
Execute `ng serve` in the frontend directory.  
Navigate to `http://localhost:4200/`  

## Building the app
Run `ng build --prod` to build the project applying optimization techniques such as   minification, uglification, bundling, dead code elimination and AOT.  
The build artifacts are stored in the `dist` directory and ready for deployment in a production environment.

## Home Page
![Screenshot](screens/home.png)

## List of Products
![Screenshot](screens/products.png)

## Create a new Product
![Screenshot](screens/new.png)

## Update a Product
![Screenshot](screens/update.png)

## Product updated
![Screenshot](screens/updated.png)

## Delete a Product
![Screenshot](screens/delete.png)

## Product deleted
![Screenshot](screens/deleted.png)
