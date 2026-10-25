
document.getElementById("form").onsubmit = async e => {
  e.preventDefault();
  const form = e.target, btn = form.querySelector("button");
  const status = document.getElementById("status");
  btn.disabled = true;
  status.textContent = "Sending...";

  try {
    const res = await fetch("/contact", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(Object.fromEntries(new FormData(form)))
    });
    status.textContent = await res.text();
    if (res.ok) form.reset();
  } catch {
    status.textContent = "Failed. Please try again.";
  }
  btn.disabled = false;
};