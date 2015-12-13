const DEFAULTS = {
	delay: 0,
	duration: 300,
	easing: 'linear'
};

function fade(t, params) {
	var targetOpacity;

	params = t.processParams(params, DEFAULTS);

	if (t.isIntro) {
		targetOpacity = t.getStyle('opacity');
		t.setStyle('opacity', 0);
	} else {
		targetOpacity = 0;
	}

	t.animateStyle('opacity', targetOpacity, params).then(t.complete);
}

export default fade;