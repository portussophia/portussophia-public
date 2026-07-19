document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("details.anchor-menu").forEach((menu) => {
    const trigger = menu.querySelector("summary.menu-trigger");

    if (!trigger) return;

    trigger.addEventListener("click", (event) => {
      event.preventDefault();

      const shouldOpen = !menu.open;

      document.querySelectorAll("details.anchor-menu[open]").forEach((otherMenu) => {
        if (otherMenu !== menu) otherMenu.open = false;
      });

      menu.open = shouldOpen;
      trigger.setAttribute("aria-expanded", String(shouldOpen));
    });
  });
});
