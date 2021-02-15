class Alert{

    static showAlert(type){

        let classname;
        let message;

        // Create alert 
        const alertPlacement = document.querySelector("#quote-section .container");
        const node = alertPlacement.children[2];
        const alertBox = document.createElement("div");

        // Determine alert type
        if(type === "empty-fields"){
            classname = "alert-warning";
            message = "Please fill all required fields."
        }
        else if(type === "invalid-name"){
            classname = "alert-warning";
            message = "Please enter a valid first name."
        }
        else if(type === "invalid-number"){
            classname = "alert-warning";
            message = "Please enter a valid 10 digit number."
        }
        else if(type === "invalid-email"){
            classname = "alert-warning";
            message = "Please enter a valid email address."
        }

        // Place and remove alert
        alertBox.classList.add("alert", classname);
        alertBox.appendChild(document.createTextNode(message));
        document.querySelector("#contact-section .icon-boxes div:nth-child(2)").scrollIntoView();
        alertPlacement.insertBefore(alertBox, node);
        window.setTimeout(function(){
            alertBox.remove();
        }, 3000);
        
    }

}