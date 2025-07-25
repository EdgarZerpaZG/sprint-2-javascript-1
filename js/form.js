const validate = () => {
	event.preventDefault();	
	let error = 0;
	const fName = document.getElementById("fName");
	const fLastN = document.getElementById("fLastN");
	const fEmail = document.getElementById("fEmail");
	const fAddress = document.getElementById("fAddress");
	const fPassword = document.getElementById("fPassword")
	const fPhone = document.getElementById("fPhone");
	
	[fName, fLastN, fEmail, fAddress, fPassword, fPhone].forEach(field => {
        field.classList.remove("is-invalid");
    });
    if (!/^[a-zA-Z]{3,}$/.test(fName.value.trim())){
		fName.classList.add("is-invalid");
		error++;
	}else{
		fName.classList.remove("is-invalid");
	}
    if (!/^[a-zA-Z]{3,}$/.test(fLastN.value.trim())){
        fLastN.classList.add("is-invalid");
        error++;
    }else{
		fLastN.classList.remove("is-invalid");
	}
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fEmail.value.trim())) {
        fEmail.classList.add("is-invalid");
        error++;
    }else{
		fEmail.classList.remove("is-invalid");
	}
    if (fAddress.value.trim().length < 3) {
        fAddress.classList.add("is-invalid");
        error++;
    }else{
		fAddress.classList.remove("is-invalid");
	}
    if (!/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}/.test(fPassword.value)) {
        fPassword.classList.add("is-invalid");
        error++;
    }else{
		fPassword.classList.remove("is-invalid");
	}
    if (!/^[0-9]{9,}$/.test(fPhone.value.trim())) {
        fPhone.classList.add("is-invalid");
        error++;
    }else{
		fPhone.classList.remove("is-invalid");
	}
	if (error > 0) {
        alert("Please correct the errors in the form.");
    } else {
        alert("Form submitted successfully!");
		document.querySelector(".form").reset();
    }
}