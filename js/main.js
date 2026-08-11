// Mobilmeny
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

// Kontaktskjema: stopp innsending til skjematjenesten er koblet på,
// og gi tydelig tilbakemelding når den er det.
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

if (form && status) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (form.action.includes("FORM_ID")) {
      status.className = "form-status err";
      status.textContent =
        "Skjemaet er ikke aktivert ennå. Ring 930 84 494 eller send e-post til vatromskonsulenten@outlook.com.";
      return;
    }

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        status.className = "form-status ok";
        status.textContent = "Takk for henvendelsen! Vi svarer normalt innen én virkedag.";
      } else {
        throw new Error("Feil ved innsending");
      }
    } catch {
      status.className = "form-status err";
      status.textContent =
        "Noe gikk galt ved innsending. Ring oss gjerne på 930 84 494 i stedet.";
    }
  });
}
