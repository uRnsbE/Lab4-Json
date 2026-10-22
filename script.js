fetch("userProfiles.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (users) {
        const outputArea = document.getElementById("output");

        users.forEach(function (user) {
            const card = document.createElement("div");
            card.className = "user-card";
            card.innerHTML = `
                <h2>${user.firstName} ${user.lastName}</h2>
                <p>Email: ${user.email}</p>
                <p>Born: ${user.dateOfBirth}</p>
                <p>Theme: ${user.preferences.theme} | Language: ${user.preferences.language}</p>
                <p>Subscription: ${user.preferences.subscription ? "Active" : "None"}</p>
                <p>${user.address.street}, ${user.address.city} ${user.address.zipCode}</p>
            `;
            outputArea.appendChild(card);
        });
    })
    .catch(function (error) {
        console.log("Fetch failed: " + error);
    });