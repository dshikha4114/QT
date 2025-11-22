  
    <script>
    document.getElementById("signupForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const gender = document.getElementById("gender").value;
        
        console.log("Signup Form Data:");
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Phone No:", phone);
        console.log("Gender:", gender);
    });
</script>