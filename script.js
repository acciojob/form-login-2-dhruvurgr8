//your JS code here. If required.
 function submitForm() {
            const form = document.getElementById('myForm');
            const firstName = form.elements['First Name'].value;
            const lastName = form.elements['Last Name'].value;
            const phoneNumber = form.elements['Phone Number'].value;
            const email = form.elements['Email ID'].value;

            const alertMessage = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${email}`;

            alert(alertMessage);
        }