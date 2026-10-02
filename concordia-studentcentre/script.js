var drops = document.querySelectorAll('.ui-collapsible[data-collapsed="false"]');
for (const drop of drops) {
	console.log("drop\n");
  drop.classList.add('ui-collapsible-collapsed');
}
