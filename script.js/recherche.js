const container = document.querySelector(".profiles-grid"); // garde une seule référence

async function loadProfils() {
  try {
    const response = await fetch("../profils.json");
    if (!response.ok) {
      throw new Error("Erreur de chargement JSON : " + response.status);
    }

    const profils = await response.json();
    console.log("✅ Profils chargés :", profils);

    profils.forEach(profil => {
      const card = document.createElement("div");
      card.classList.add("search-card");

      const img = document.createElement("img");
      img.src = profil.imageUrl;
      img.alt = profil.firstname;

      const info = document.createElement("div");
      info.classList.add("search-info");

      const activity = document.createElement("span");
      activity.classList.add("activity");
      activity.textContent = profil.type;

      const name = document.createElement("h3");
      name.classList.add("searchName");
      name.textContent = profil.firstname;

      const details = document.createElement("div");
      details.classList.add("searchDetails");

      const spanJobAge = document.createElement("span");
      spanJobAge.textContent = `${profil.job} • ${profil.age}`;

      const spanCity = document.createElement("span");
      spanCity.textContent = profil.city;

      details.appendChild(spanJobAge);
      details.appendChild(spanCity);

      const description = document.createElement("p");
      description.textContent = profil.description;

      const btn = document.createElement("a");
      btn.classList.add("btn", "btn-primary");
      btn.href = "#";
      btn.textContent = "Programmer un moment";

      info.appendChild(activity);
      info.appendChild(name);
      info.appendChild(details);
      info.appendChild(description);
      info.appendChild(btn);

      card.appendChild(img);
      card.appendChild(info);

      container.appendChild(card);
    });

  } catch (err) {
    console.error("❌ Erreur :", err);
  }
}

loadProfils();
