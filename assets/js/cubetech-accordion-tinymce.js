tinymce.create( 
	'tinymce.plugins.cubetech_accordion', 
	{
	    /**
	     * @param tinymce.Editor editor
	     * @param string url
	     */
	    init : function( editor, url ) {
			/**
			*  register a new button
			*/
			editor.addButton(
				'cubetech_accordion_button', 
				{
					cmd   : 'cubetech_accordion_button_cmd',
					title : editor.getLang( 'cubetech_accordion.buttonTitle', 'cubetech Accordion' ),
					image : url + '/../img/toolbar-icon.png'
				}
			);
			/**
			* and a new command
			*/
			editor.addCommand(
				'cubetech_accordion_button_cmd',
				function() {
					/**
					* @param Object Popup settings
					* @param Object Arguments to pass to the Popup
					*/
					editor.windowManager.open(
						{
							// this is the ID of the popups parent element
							id       : 'cubetech_accordion_dialog',
							width    : 480,
							title    : editor.getLang( 'cubetech_accordion.popupTitle', 'cubetech Accordion' ),
							height   : 'auto',
							wpDialog : true,
							display  : 'block',
						},
						{
							plugin_url : url
						}
					);
				}
			);
		}
	}
);

// register plugin
tinymce.PluginManager.add( 'cubetech_accordion', tinymce.plugins.cubetech_accordion );