document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    if (!form) return;

    const loadingEl = form.querySelector(".loading");
    const errorEl = form.querySelector(".error-message");
    const successEl = form.querySelector(".sent-message");

    function fadeOutElement(el, delayMs = 60000) {
        el.style.opacity = "1";
        setTimeout(() => {
            el.style.transition = "opacity 1s ease";
            el.style.opacity = "0";

            // убрать элемент полностью, когда затухнет
            setTimeout(() => {
                el.style.display = "none";
                el.style.opacity = "1"; // сброс на будущее
            }, 1000);
        }, delayMs);
    }

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        // Reset messages
        loadingEl.style.display = "none";
        errorEl.style.display = "none";
        successEl.style.display = "none";

        // Validate required fields
        let valid = true;
        form.querySelectorAll("[required]").forEach(field => {
            if (!field.value.trim()) {
                valid = false;
                field.classList.add("is-invalid");
            } else {
                field.classList.remove("is-invalid");
            }
        });

        if (!valid) {
            errorEl.textContent = "Please fill in all required fields.";
            errorEl.style.display = "block";
            fadeOutElement(errorEl);
            return;
        }

        // Show loading
        loadingEl.style.display = "block";

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: { "Accept": "application/json" }
            });

            loadingEl.style.display = "none";

            if (response.ok) {
                successEl.style.display = "block";
                form.reset();
                fadeOutElement(successEl);
            } else {
                const data = await response.json();
                errorEl.textContent = data.error || "Something went wrong. Please try again.";
                errorEl.style.display = "block";
                fadeOutElement(errorEl);
            }

        } catch (err) {
            loadingEl.style.display = "none";
            errorEl.textContent = "Network error. Please try again later.";
            errorEl.style.display = "block";
            fadeOutElement(errorEl);
        }
    });
});