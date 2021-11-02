/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4DA9C702-8493-4C03-A3F2-6C4475436164"}
 */
var fDescripcionEspecialidad = '';

/**
 * @properties={typeid:35,uuid:"A767AD0A-FB12-417E-A27D-6B858631E518",variableType:-4}
 */
var fEncontroEspecialidad = false;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0AF86533-4911-4BAF-AEAD-9C5D48E7517A"}
 */
function onAction_find_especialidad(event) {
	//globals.proes_especi=globals.vAlfaEspe
	//if(globals.proes_especi!=''){
	if(globals.vAlfaEspe !=''){
		fEncontroEspecialidad=false
		BuscoEspecialidad()
		if(fEncontroEspecialidad){
			
			elements.btn_graba.requestFocus()
			
		}else{
			elements.vAlfaEspe.requestFocus()
		}
	}else{
		elements.vAlfaEspe.requestFocus()
	}
}

/**
 * @properties={typeid:24,uuid:"C06EF98F-F3D0-4B53-9054-18304F008B5E"}
 * @AllowToRunInFind
 */
function BuscoEspecialidad() {
	var largo = globals.vAlfaEspe.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero; i++){
		if (globals.vAlfaEspe.charCodeAt(i)< 48 || globals.vAlfaEspe.charCodeAt(i) > 57){
			esnumero = false
		}
	}
	
    if (esnumero){
    	var fs = databaseManager.getFoundSet('maestros','tbc_especial')
		if(fs.find()){
			fs['esp_codi']=utils.stringToNumber(globals.vAlfaEspe.substr(0,largo))
			fs.search()
			if(fs.getSize()>0){
				fs.setSelectedIndex(1)
				fDescripcionEspecialidad=fs['esp_descrip']
				globals.vEspecial=fs['esp_codi']
				globals.proes_especi=fs['esp_codi']
				fEncontroEspecialidad=true
			}else{
				fDescripcionEspecialidad='Código Especialidad Inexistente'
				globals.vAlfaEspe=''
				fEncontroEspecialidad=false
			}
		}
    }else{
    	globals.vEspecial=0
        globals.vAlfaEspe = globals.vAlfaEspe.toLocaleUpperCase()
 	    var win = application.createWindow("f",JSWindow.MODAL_DIALOG)
 	    win.title = "Búsqueda de Código de Especialidad";
 	    win.setSize(600,500)
 	    win.show(forms.frm_tab_especial)
		if(globals.vEspecial>0){
			globals.proes_especi=globals.vEspecial
			globals.vAlfaEspe=globals.vEspecial
			fDescripcionEspecialidad=globals.vDescriEspecial
			fEncontroEspecialidad=true
		}else{
			fDescripcionEspecialidad='Código Especialidad Inexistente'
			globals.vAlfaEspe=''
			fEncontroEspecialidad=false
		}
    }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B2345D51-0463-44E7-90D1-5DD641487579"}
 */
function onAction_btn_cancela(event) {
	globals.vAltaEspecial=false
	globals.proes_especi=0
	globals.vAlfaEspe=''
	globals.vEspecial=0
	forms.frm_tab_especialidad_atiende.elements.tabless.tabIndex=1
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9E4DB618-0259-4442-BFE2-0B352A9C9F15"}
 */
function onAction_btn_graba(event) {
	if(globals.vAltaEspecial){
		if(vs_to_tbc_profmees.getSize()<1){
			vs_to_tbc_profmees.newRecord()
		}
	}
	vs_to_tbc_profmees.proes_codmed=globals.per_1
	vs_to_tbc_profmees.proes_tipmed=0
	vs_to_tbc_profmees.proes_especi=globals.proes_especi
	vs_to_tbc_profmees.proes_fec_modif=globals.fechaActual()
	vs_to_tbc_profmees.proes_hor_modif=globals.horaActual()
	vs_to_tbc_profmees.proes_codoper=globals.vLega
	vs_to_tbc_profmees.proes_tipoper=0
	databaseManager.saveData(vs_to_tbc_profmees.getRecord(1))
	forms.frm_tab_especialidad_atiende.elements.tabless.tabIndex=1
}
