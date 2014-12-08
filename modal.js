(function() {
	// Define the contructor function
	this.Modal = function() {
		this.closeButton = null;
		this.modal = null;
		this.overlay = null;

		//Default options
		var defaults = {
			className: "fade-and-drop",
			closeButton: true,
			content: "",
			maxWidth: 600,
			minWidth: 280,
			overlay: true
		}

		//create options by extending defaults with the passed in args
		if(arguments[0] && typeof arguments[0] === "object") {
			this.options = extendDefaults(defaults, arguments[0]);
		}

	}

	 // Utility method to extend defaults with user options
	 function extendDefaults(source, properties) {
	 	var property;
	 	for(property in properties) {
	 		if(properties.hasOwnProperty(property)) {
	 			source[property] = properties[property];
	 		}
	 	}
	 	return source;
	 }
})();

var myModal = new Modal();