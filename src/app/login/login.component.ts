import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <html>
 <head>
  <title>
   Exclusive - Create an Account
  </title>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet"/>
 </head>
 <style>
 body {
  font-family: "Poppins", sans-serif;
font-weight: 400;
font-style: normal;
  background-color: #fff;
  margin: 0;
  padding: 0;
}
.header-top {
    background-color: #000;
    color: #fff;
    text-align: center;
    padding: 15px 0;
    font-size: 14px;
    position: relative;
}
.header-top a {
    color: #fff;
    text-decoration: underline;
}
.header-top .language {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
}
.header-top .language select {
    border: none;
    background: none;
    font-size: 14px;
    color: #fff;
}
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
    border-bottom: 1px solid #e0e0e0;
}
.header .logo {
    font-size: 24px;
    font-weight: 700;
}
.header nav a {
    margin: 0 15px;
    text-decoration: none;
    color: #000;
    font-weight: 600;
    position: relative;
}
.header nav a:hover::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #000;
    bottom: -5px;
    left: 0;
}
.header .search-bar {
    display: flex;
    align-items: center;
    position: relative;
}
.header .search-bar input {
    padding: 10px 15px;
    border: 1px solid #e0e0e0;
    background-color: #f0f0f0;
    width: 250px;
}
.header .search-bar i {
    position: absolute;
    right: 10px;
    color: #000;
}
.main {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
}
.main .image {
    flex: 1;
    text-align: center;
}
.main .image img {
    max-width: 100%;
    height: 550px;
    object-fit: contain;
    display: block;
    margin-left: -40px;
    margin-top: -70px;
    margin-bottom: -100px;
    margin-right: 0;
}
.main .form-container {
    flex: 1;
    max-width: 400px;
    padding: 20px;
    text-align: center;
    margin-right: 350px; /* Add margin-right to shift it left */
}
.main .form-container h2 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: left;
}
.main .form-container p {
    font-size: 20px;
    color: #666;
    margin-bottom: 30px;
    text-align: left;
}
.main .form-container input {
    width: 900%; /* Set width to 100% to make the underline long */
    max-width: 500px; /* You can control the maximum width */
    padding: 15px;
    margin-bottom: 30px;
    border: none;
    border-bottom: 2px solid #e0e0e0; /* Increased border width for emphasis */
    background: none;
    font-size: 18px;
    outline: none;
    margin-right: 100px;

}

.main .form-container .btn {
    width: 80%;
    padding: 15px;
    background-color: #ff4d4d;
    color: #fff;
    border: none;
    font-size: 18px;
    cursor: pointer;
    margin-right: -100px;
    border-radius: 5px;

}
.main .form-container .login-link {
    
    margin-top: 20px;
    font-size: 16px;
    text-align: center;
    margin-right: -100px;

}
.main .form-container .login-link a {
    color: #ff4d4d;
    text-decoration: none;
    font-weight: 600;
    position: relative;
}
.main .form-container .login-link a:hover::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #000;
    bottom: -2px;
    left: 0;
}

/* Media Queries */
/* Tablet View */
@media (max-width: 768px) {
    .header {
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;
    }
    .main {
        flex-direction: column;
        padding: 30px;
    }
    .main .form-container {
        margin-right: 0;
        padding: 0;
    }
    .header .search-bar input {
        width: 200px;
    }
}

/* Mobile View */
@media (max-width: 480px) {
    .header {
        padding: 10px;
    }
    .header-top .language {
        right: 10px;
    }
    .header .search-bar input {
        width: 150px;
    }
    .main {
        padding: 20px;
        flex-direction: column;
    }
    .main .image img {
        max-width: 100%;
    }
    .main .form-container {
        padding: 10px;
        margin-right: 0;
    }
    .main .form-container input, .main .form-container .btn {
        font-size: 14px;
        padding: 10px;
    }
}

.google-signup-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.google-signup-btn {
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #1d1a1a1c;
  border-radius: 6px;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  cursor: pointer;
  width: 100%;
  max-width: 320px;
  justify-content: center;
  transition: background-color 0.3s ease;
  margin-right: -100px;

  &:hover {
    background-color: #f5f5f5;
  }

  .google-icon {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }
}

 </style>
 <body>
  <div class="main">
   <div class="image">
    <img alt="A shopping cart with a smartphone and shopping bags" src="https://mostaql.hsoubcdn.com/uploads/thumbnails/1589342/66802106ea8c5/logo.png?s=medium" width="1300px">
   </div>
   <div class="form-container">
    <h2>
     Create an Account
    </h2>
    <p>
     Enter your details below
    </p>
    <input placeholder="Name" type="text" />
    <input placeholder="Email or Phone Number" type="text"/>
    <input placeholder="Password" type="password"/>
    <button class="btn">
     Create account
    </button>
    <!-- Google Sign Up Button -->
<div class="google-signup-container">
  <button class="google-signup-btn">
    <img src="https://w7.pngwing.com/pngs/344/344/png-transparent-google-logo-google-logo-g-suite-google-text-logo-symbol-thumbnail.png" alt="Google icon" class="google-icon" />
    Sign up with Google
  </button>
</div>
    <div class="login-link">
     Already have account?
     <a href="#">
      Log in
     </a>

    </div>
   </div>
  </div>
 </body>
</html>
  `,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {}
