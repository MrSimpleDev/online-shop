const sidebarBtn = document.querySelectorAll('.sidebar-btn');
const panelBtn = document.querySelectorAll('.main-panel');


console.log(sidebarBtn);
console.log(panelBtn);

sidebarBtn.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all panels
    panelBtn.forEach(panel => panel.classList.remove('sec-active'));

    // Get the target panel's ID from the button's data-target attribute
    const targetPanelId = button.getAttribute("data-target");
    console.log(targetPanelId);

    // Add 'active' class to the corresponding panel
    document.getElementById(targetPanelId).classList.add('sec-active');
    console.log(document.getElementById(targetPanelId).classList);
  });
});
