//Credit : Resume project
//Credit : CI course content


function sendMail(contactForm) {
    emailjs.send('service_m2ymfqq', 'Thejobhut', {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "new_message": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
        return false;
}
 
