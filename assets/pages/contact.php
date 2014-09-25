<?php
    if (isset($_POST['email'])) {
        // RECIEVING EMAIL
        $email = 'tim.storey@yahoo.com';

        // MESSAGE SUBJECT
        $subject = 'New Message from '.$_POST['full_name'];

        $name = $_POST['full_name'];
        $from = $_POST['email'];
        $message = $_POST['message'];

        $headers .= "Reply-To: ". $from ."\r\n";
        $headers .= "Return-Path: ". $from ."\r\n";
        $headers .= "X-Mailer: PHP\n";
        $headers .= 'MIME-Version: 1.0' . "\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 

        // Additional headers
        $headers .= 'From: '. $name .' <"'. $from .'">' . "\r\n";

        mail($email, $subject, $message, $headers);

        exit;
    }
?>

<div class="contact">
    <h1>Contact Me</h1>
    <p>If you have any questions, feel free to contact me using the form below.</p>
    <form class="form" name="contact">
        <p class="error_message"><strong>ERROR:</strong> please fill the required fields (Full Name, Email and Message).</p>
        <p>
            <label for="full_name">Full Name</label>
            <input type="text" name="full_name" class="required" id="full_name" />
        </p>
        <p>
            <label for="email">Email</label>
            <input type="text" name="email" class="required"  id="email" />
        </p>
        <p>
            <label for="message">Message</label>
            <textarea name="message" class="required" id="message"></textarea>
        </p>
        <p>
            <input type="submit" class="btn" value="Send" />
            <span class="confirm">Thank you - I have now received your mail and will get back to you as soon as possible</span>
        </p>
    </form>
</div>