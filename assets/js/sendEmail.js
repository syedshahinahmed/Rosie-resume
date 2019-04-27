function sendMail(contactForm) {

    var template_params = {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    };

    var service_id = "default_service";
    var template_id = "rosie";
    emailjs.send(service_id, template_id, template_params)
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page
}