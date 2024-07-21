document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var closeBtn = document.getElementsByClassName("close")[0];

    // Function to open the modal
    function openModal(img) {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Add click event to images in the grid
    function addImageClickListeners() {
        document.querySelectorAll(".works-grid img").forEach(function(image) {
            image.onclick = function() {
                openModal(this);
            };
        });
    }

    // Initialize click listeners for existing images
    addImageClickListeners();

    // Handle "See More" button click
    document.getElementById("seemore-button").addEventListener("click", function() {
        // Load more content
        var moreImages = [
            { src: "C:\Users\Jaimie\OneDrive\Desktop\JAIMIE\Portfolio\Graphics_AVAmodular.png", alt: "Work 7" },
            { src: "C:\Users\Jaimie\OneDrive\Desktop\JAIMIE\Portfolio\Graphics_GamingBanner.png", alt: "Work 8" },
            { src: "C:\Users\Jaimie\OneDrive\Desktop\JAIMIE\Portfolio\Express Delivery.png", alt: "Work 9" }
        ];
        var worksGrid = document.getElementById("works-grid");

        moreImages.forEach(function(image) {
            var div = document.createElement("div");
            div.classList.add("work-item");
            var img = document.createElement("img");
            img.src = image.src;
            img.alt = image.alt;
            div.appendChild(img);
            worksGrid.appendChild(div);
        });

        // Remove the See More button after loading more content
        this.style.display = "none";

        // Re-attach modal click listeners to the new images
        addImageClickListeners();
    });

    // Close the modal when clicking on the close button
    closeBtn.onclick = function() {
        closeModal();
    }

    // Close the modal when clicking outside the modal content
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }

    // Navigation underline effect
    var navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            navLinks.forEach(function(link) {
                link.classList.remove("active");
            });
            this.classList.add("active");
        });
    });
});
