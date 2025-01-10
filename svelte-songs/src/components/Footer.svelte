<script>
    let year = new Date().getFullYear();
</script>
  
<footer class="footer">
    <div class="footer-container">
        <!-- Logo and Description -->
        <div class="footer-logo">
            <img src="/images/logo_new.png" alt="Nimadi Dhun Logo" />
            
            <!-- Copyright Notice (moved here) -->
            <div class="footer-bottom">
                <p>&copy; {year} Nimadi Dhun. All rights reserved.</p>
                <p>Made with <span class="heart-icon">&#9829;</span></p>
            </div>
        </div>

        <!-- Navigation Links -->
        <div class="footer-links">
            <h3 class="footer-heading">Quick Links</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>

        <!-- Contact Information -->
        <div class="footer-contact">
            <h3 class="footer-heading">Contact Us</h3>
            <p>Email: <a href="mailto:info@nimadidhun.com">info@nimadidhun.com</a></p>
            <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
        </div>
    </div>
</footer>

<style>
    .footer {
        background-color: #93B874; /* matching the header's color */
        color: #465347; /* matching the header's text color */
        padding: 2rem 1rem;
    }

    .footer-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 2rem;
    }

    .footer-logo {
        flex: 1;
        text-align: center;
        position: relative;
    }

    .footer-logo img {
        height: 10rem;
    }

    .footer-links,
    .footer-contact {
        flex: 1;
        text-align: center;
    }

    .footer-heading {
        font-size: 1.25rem;
        margin-bottom: 1rem;
        font-weight: bold;
    }

    .footer-links ul {
        list-style: none;
        padding: 0;
    }

    .footer-links li {
        margin: 0.5rem 0;
    }

    .footer-links a {
        color: white; /* matching header link color */
        text-decoration: none;
    }

    .footer-links a:hover {
        color: #7c7d7d; /* hover color from header */
    }

    .footer-contact a {
        color: white; /* matching header contact color */
        text-decoration: none;
    }

    .footer-contact a:hover {
        color: #7c7d7d; /* hover color from header */
    }

    .footer-bottom {
        text-align: center;
        font-size: 0.8rem;
        position: absolute;
        bottom: -2rem;
        width: 100%;
        font-weight: bolder;
    }

    .footer-bottom p{
        margin: 0.5rem;
    }

    .heart-icon {
        color: #e31d1d; /* Red color for heart */
        font-size: 1.2rem;
        margin-left: 5px;
    }

    @media (max-width: 768px) {
        .footer-container {
            flex-direction: column;
            align-items: center;
        }

        .footer-logo,
        .footer-links,
        .footer-contact {
            text-align: center;
        }
    }
</style>
