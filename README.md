# Sales API (PPB API)

RESTful API built with Express.js and Supabase for managing products, categories, and customers.

## Project Structure

```
.
├── src/
│   ├── config/
│   │   └── supabaseClient.js
│   ├── controllers/
│   │   ├── categoryController.js
│   │   ├── customerController.js
│   │   └── productController.js
│   ├── models/
│   │   ├── categoryModel.js
│   │   ├── customerModel.js
│   │   └── productModel.js
│   ├── routes/
│   │   ├── categoryRoutes.js
│   │   ├── customerRoutes.js
│   │   └── productRoutes.js
│   └── index.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── PPB_API_Postman_Collection.json
├── PPB_API_Postman_Environment.json
├── README.md
└── vercel.json
```

## Setup & Running

1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure `.env` with your Supabase credentials.
3. Start the server:
   ```bash
   npm start
   ```
