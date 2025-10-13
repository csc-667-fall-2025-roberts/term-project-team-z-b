const button: Element | null = document.querySelector("#test-button");

button?.addEventListener("click", (event) =>{
    event.preventDefault();

    setTimeout(() => {
        alert("you clicked about 5 seconds ago");
    }, 5000);
});