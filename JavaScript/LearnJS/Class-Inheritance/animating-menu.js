function AnimatingMenu(state) {
	Menu.call(this, state);
}

AnimatingMenu.prototype = Object.create(Menu.prototype);
AnimatingMenu.prototype.constructor = AnimatingMenu;

AnimatingMenu.STATE_ANIMATING = 2;

AnimatingMenu.prototype.open = function() {
	this._state = AnimatingMenu.STATE_ANIMATING;
	this._timer = setTimeout(Menu.prototype.open.bind(this), 1000);
}

AnimatingMenu.prototype.close = function() {
	clearTimeout(this._timer);
	Menu.prototype.close.call(this);
}

AnimatingMenu.prototype._stateAsString = function() {
	if (this._state == AnimatingMenu.STATE_ANIMATING)
		return "анимация";
	return Menu.prototype._stateAsString.call(this);
}