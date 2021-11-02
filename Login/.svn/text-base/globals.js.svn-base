/**
 * Callback method for when solution is opened.
 *
 * @properties={typeid:24,uuid:"EF23458A-83EA-4052-91FF-14BF98E4530C"}
 */
function onSolutionOpen_login() {
	if(application.getApplicationType()<=2){
	plugins.window.getMenuBar().setVisible(false)
	plugins.window.setToolBarAreaVisible(false)
	
	var names1 = plugins.window.getToolbarNames();
    for (var i = 0 ; i < names1.length ; i++) {
     	plugins.window.removeToolBar(names1[i])
    }	
    plugins.window.setFullScreen(false)
	plugins.window.maximize()
    plugins.window.getMenuBar().setVisible(false)
	plugins.window.setToolBarAreaVisible(false)
	}
}
