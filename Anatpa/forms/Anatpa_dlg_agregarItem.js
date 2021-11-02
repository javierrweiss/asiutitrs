/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F13CECE7-1527-4F2C-87D2-64D77DF7D740",variableType:4}
 */
var f_tipoNom = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"277457A8-9EA8-475F-A37C-D28628DE6A89"}
 */
var f_descripcion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E661C52B-6783-4C6E-83FA-BED34B8749EE"}
 */
var f_codigo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1F7A0A82-E7B4-440F-8FCA-55B787C6C75F"}
 */
var f_observacion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DAEAFC9B-A3BC-4990-AD3F-AB7CF37985CE",variableType:4}
 */
var f_cantidad = null;

/**
 * @properties={typeid:35,uuid:"CA2555F5-9E45-45FC-A4B7-32D431C80555",variableType:-4}
 */
var $item = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B9C1D298-5554-4D1A-9AB0-B24691A61687"}
 */
var $messageErrorItem = '';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"FC1C2E3C-28D4-4A5F-869D-82184E80DB43"}
 */
function onAction_btnAgregarItem(event) {
	
	var item = {};
	item.cantidad = f_cantidad;
	item.observacion = f_observacion;
	item.codigo = f_codigo;
	item.descripcion = f_descripcion;
	item.tipoNom = f_tipoNom;
	//item.fecha_recepcion = utils.timestampToDate(application.getServerTimeStamp());
	
	if(isValidItemProtesis(item)){
					
		if($item == null || $item == 'null'){
			forms.Anatpa_tbl_anatpade.foundset.newRecord();
		}
		
		forms.Anatpa_tbl_anatpade.foundset['id'] = null;
		forms.Anatpa_tbl_anatpade.foundset['apde_cantidad'] = item.cantidad;
		forms.Anatpa_tbl_anatpade.foundset['apde_observa'] = utils.stringTrim(item.observacion).length > 0 ? 1:0;
		forms.Anatpa_tbl_anatpade.foundset['apde_codnom'] = item.codigo;
		forms.Anatpa_tbl_anatpade.foundset['descripcion'] = item.descripcion;
		forms.Anatpa_tbl_anatpade.foundset['observacion'] = item.observacion;
		forms.Anatpa_tbl_anatpade.foundset['apde_tipnom'] = item.tipoNom;
		
		forms.Anatpa_frm_anatpaca.actualizarObservaPractica();
		//forms.prote_tbl_protesisSubItems.foundset['fecha_recepcion'] = item.fecha_recepcion;
		
		databaseManager.saveData(forms.Anatpa_tbl_anatpade.foundset);
		
		if($item == null || $item == 'null'){
			nuevoSubItem();
		}
		else{
			var $name = application.getActiveWindow().getName()
			var $win = application.getWindow($name)
			if($win!=null){
				$win.hide()
				$win.destroy()
			}
		}
		
		forms.Anatpa_frm_anatpaca.$isDirty = true;
	}else{
		var messageError = "No ha sido posible agregar el item. Corrija los siguientes errores y vuelva a intentar." + $messageErrorItem;
		globals.DIALOGS.showWarningDialog("Atención!",messageError,"Aceptar")
	}		
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DEFD6853-1DB4-4890-A317-1FD54A53E747"}
 */
function onShow_inicializarForm(firstShow, event) {
	
	if($item == null || $item == 'null'){
		f_cantidad = null;
		f_observacion = null;
		f_codigo = null;
		f_descripcion = null;
		f_tipoNom = null;
		elements.txt_descripcion.enabled = true;
	}
	else{
		f_cantidad = $item.cantidad;
		f_descripcion = $item.descripcion;
		f_codigo =  $item.codigo;
		f_observacion = $item.observacion;
		f_tipoNom = $item.tipoNom;
		elements.txt_descripcion.enabled = false;
		
	}
	
	elements.txt_descripcion.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"DB2B0B97-FC9D-4031-9856-2AFE3F41A5B2"}
 */
function nuevoSubItem(){
	
	f_cantidad = null,
	f_codigo = null;
	f_observacion = null;
	f_descripcion = null;
	f_tipoNom = null;
	
	elements.txt_descripcion.enabled = true;
	elements.txt_descripcion.requestFocus();
}

/**

 * @private
 *
 * @properties={typeid:24,uuid:"0BAFE89D-BE96-4997-87C3-85B977CBB3D9"}
 * @AllowToRunInFind
 */
function isValidItemProtesis(data) {
	
	var valid = true;
	$messageErrorItem = '';
	
	if(data.codigo == null ||  data.codigo == ""){
		$messageErrorItem += "\nDebe ingresar la descripcion.";
		valid = false;
		elements.txt_descripcion.requestFocus();
	}
	else{
		if(data.cantidad == null || data.cantidad < 0){
			$messageErrorItem += "\nDebe ingresar cantidad.";
			valid = false;
			elements.txt_cantidad.requestFocus();
		}
		
		if($item == null || $item == 'null'){
			
			var item;
			for(var i=1; i<= forms.Anatpa_tbl_anatpade.foundset.getSize(); i++){
				
				item = forms.Anatpa_tbl_anatpade.foundset.getRecord(i);
				if(item['apde_codnom'] == data['codigo']){
					$messageErrorItem += "\nYa existe la pratica " + data['codigo'] + ' - ' + data['descripcion'];
					valid = false;
					elements.btn_buscarPaciente.requestFocus();
					break;
				}
			}
			/*
			var items = forms.Anatpa_tbl_anatpade.foundset.duplicateFoundSet();
			items.find();
			items['apde_codnom'] = data['codigo'];
			items.search();
			if(items.getSize() > 0){
				$messageErrorItem += "\nYa existe la pratica " + data['codigo'] + ' - ' + data['descripcion'];
				valid = false;
				elements.btn_buscarPaciente.requestFocus();
			}
			*/
		}
	}
	
	/*
	if(data.descripcion == null && utils.stringTrim(data.descripcion).length > 0 ){
		$messageErrorItem += "\nDebe ingresar el laboratorio.";
		valid = false;
	}
*/
	return valid;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A359AC06-87D2-4804-841C-FA4B6ACAC99F"}
 */
function onAction_buscarPractica(event) {
	
	globals.Anatpa_eventSourceButton = 1;
	openSearch();
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"72471A65-BAB0-45E4-97B0-C170A3224504"}
 */
function onAction_txtBusquedaRapida(event) {
	
	globals.Anatpa_f_cajaAlfa = f_descripcion;
	if(globals.Anatpa_f_cajaAlfa != '' && globals.Anatpa_f_cajaAlfa != null){
		globals.Anatpa_eventSourceButton = 0;
		openSearch();
		//$isDirty = true;
	}
	else{
		globals.DIALOGS.showWarningDialog("Atención",'Debe ingresar las primeras letras de la descripción.',"Aceptar")
	}
}

/**
 * @properties={typeid:24,uuid:"EC391409-DC9C-4472-9BE2-6C724B0BB712"}
 */
function openSearch() {
	
	var win = application.createWindow("buscar_practica",JSWindow.MODAL_DIALOG);
	win.title = "Búsqueda de prácticas";
	win.resizable = false;
	win.show(forms.Anatpa_dlg_buscarPractica);
}
