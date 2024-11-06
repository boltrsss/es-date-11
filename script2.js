// BackUnder by affLIFT
// https://afflift.com

if (typeof under !== "undefined" && under !== null) {

	if (typeof cta !== "undefined" && cta !== null) {

		document.addEventListener('click', function(event) {
			var target = event.target;
			while (target) {
				if (target.tagName === 'A' && target.classList.contains(cta)) {
					const linkHref = target.href;
					event.preventDefault();
					window.open(linkHref, '_blank');
					window.location.replace(under);
					break;
				}
		