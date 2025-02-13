document.getElementById("leadForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("popup").classList.remove("hidden");
});

document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popup").classList.add("hidden");
});