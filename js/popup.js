// popup.js
document.addEventListener("DOMContentLoaded", function() {
    // Dynamically load popup HTML
    fetch('Highlights 2024/highlights2024.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('popup-container').innerHTML = data;

            // Popup and close button after content has been loaded
            const popup = document.getElementById("video-popup");
            const closeBtn = document.getElementsByClassName("close-btn")[0];
            const openPopupLinks = document.querySelectorAll(".open-popup");

            // Add click event to all links with the class 'open-popup'
            openPopupLinks.forEach(link => {
                link.onclick = function(event) {
                    event.preventDefault();
                    popup.style.display = "block";
                };
            });

            // Close the popup when clicking the close button
            closeBtn.onclick = function() {
                popup.style.display = "none";
            };

            // Close the popup when clicking outside the popup content
            window.onclick = function(event) {
                if (event.target == popup) {
                    popup.style.display = "none";
                }
            };
        });
});
