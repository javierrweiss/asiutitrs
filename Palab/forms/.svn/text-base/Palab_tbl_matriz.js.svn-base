/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D59864E5-C4AF-49B2-A290-49CE8B491FB3"}
 */
var $_callerFormName = '';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"302DCDA2-D24F-4F7D-9E48-E50B5777D58A"}
 */
function onAction_registro(event){
	
	var res = globals.DIALOGS.showQuestionDialog('¡Atención!','¿ Esta seguro que desea agregar la matriz de análisis seleccionada ?', 'Si', 'No');
	if( res == 'Si'){
		
		cerrarForm();
		
		for(var i=1; i<=forms.Palab_tbl_matriz_analisis.foundset.getSize() ; i++){
			forms.Palab_tbl_matriz_analisis.foundset.setSelectedIndex(i);
			var item = new Object();
			item.codigo = forms.Palab_tbl_matriz_analisis.foundset['codigo'];
			item.analisis = forms.Palab_tbl_matriz_analisis.foundset['analisis'];
			item.cantidad = '1';
			item.ana19 = forms.Palab_tbl_matriz_analisis.foundset['ana19'];
			item.ana24 = forms.Palab_tbl_matriz_analisis.foundset['ana24'];
			item.ana21 = forms.Palab_tbl_matriz_analisis.foundset['ana21'];
			item.ana3 = forms.Palab_tbl_matriz_analisis.foundset['ana3'];
			item.anaestado = forms.Palab_tbl_matriz_analisis.foundset['anaestado'];
			item.ana25 = forms.Palab_tbl_matriz_analisis.foundset['ana25'];
			item.ana30 = forms.Palab_tbl_matriz_analisis.foundset['ana30'];
			item.anasinourg = forms.Palab_tbl_matriz_analisis.foundset['anasinourg'];
			item.ana40 = forms.Palab_tbl_matriz_analisis.foundset['ana40'];
			 
			forms[$_callerFormName].agregarItem(item,false);
		}
		
	}	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C05ED9D0-0EC5-4117-ABE0-5546C7615283"}
 */
function onAction_elementField(event) {
	
	elements.btn_seleccionar.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"4CA57349-8497-4E8F-8A8E-A5BCEAD3653A"}
 */
function cerrarForm () {
	
	var $name = application.getActiveWindow().getName();
	var $win = application.getWindow($name);
	if($win!=null){
		$win.hide();
		$win.destroy();
	}
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"F4BB2521-2356-43EE-8E04-9FDF5904750E"}
 */
function onRender_codigo(event) {
	
	if (event.isRecordSelected()) {
		//var record = event.getRecord();
		//application.output(record['matrizlabccod']);
		elements.btn_seleccionar.requestFocus();
		forms.Palab_tbl_matriz_analisis.actualizarAnalisis(foundset.matrizlabccod);
	} 
}
