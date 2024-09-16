import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

</head>
<body>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <div class="container mt-5">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Contact</li>
            </ol>
        </nav>
        <div class="row">
            <div class="col-md-4">
                <div class="contact-info">
                    <div class="phone">
                        <i class="fas fa-phone-alt"></i>
                        <h3>Call To Us</h3>
                        <p>We are available 24/7, 7 days a week.</p>
                        <p>Phone: +880611112222</p>
                    </div>
                    <hr>
                    <div class="email">
                        <i class="fas fa-envelope"></i>
                        <h3>Write To Us</h3>
                        <p>Fill out our form and we will contact you within 24 hours.</p>
                        <p>Emails: customer&#64;exclusive.com</p>
                        <p>Emails: support&#64;exclusive.com</p>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="contact-form">
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <input type="text" class="form-control" placeholder="Your Name *">
                        </div>
                        <div class="form-group col-md-4">
                            <input type="email" class="form-control" placeholder="Your Email *">
                        </div>
                        <div class="form-group col-md-4">
                            <input type="tel" class="form-control" placeholder="Your Phone *">
                        </div>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" rows="5" placeholder="Your Message"></textarea>
                    </div>
                    <button class="btn btn-danger">Send Massage</button>
                </div>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {}