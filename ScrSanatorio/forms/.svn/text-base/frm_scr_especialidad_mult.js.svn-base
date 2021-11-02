/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6B273823-A962-4D59-B92B-B0E55F7435C8",variableType:4}
 */
var enabled = 0
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"64914D19-E6DC-4F49-90E6-901606F74F6A",variableType:4}
 */
var codigo = 0
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B3BFAF9D-C201-4B27-9CAB-1002C2B41661"}
 */
var descripcion = ''

/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"4068F5DE-7097-4558-9394-36673C4F9755"}
 */
function onRecordSelection_frm_scr_visitantes(event) {
	globals.gbl_especialidad = foundset.codigo
	application.getWindow('Busca_espe_mult').hide();
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"80EBCE63-898F-4586-A703-13D70FBFAD78"}
 */
function filtra(){
	var largo = globals.gbl_con_busca.length;
    var esnumero = true;
    
    for (var i= 0;i<largo && esnumero == true; i++){
	   if (globals.gbl_con_busca.charCodeAt(i)< 48 || globals.gbl_con_busca.charCodeAt(i) > 57){
		   esnumero = false
	   }
    }

    foundset.find()
	if(esnumero){
		foundset.codigo = '>= ' +  utils.stringToNumber(globals.gbl_con_busca.valueOf())
	}else{
		foundset.descripcion = '>' +  globals.gbl_con_busca.valueOf()		
	}	          

	foundset.search()	
	
	if(esnumero){
		foundset.sort('codigo asc')
	}else{
		foundset.sort('descripcion asc')	
	}
}
/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"166D09A8-5ABA-4708-906F-6B494B7AD94B"}
 */
function onAction_enabled(event) {
	if(foundset.enabled == 0 || null){		
		forms.frm_tab_especialidad_mult.frm_total_sel--
	}else{
		forms.frm_tab_especialidad_mult.frm_total_sel++		
	}
}


/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"A618A0A4-B926-4EB0-A6F5-A43F335271CE"}
 */
function onAction_selec(event) {
	var $max = databaseManager.getFoundSetCount(foundset)
	forms.frm_tab_especialidad_mult.elements.lbl_procesando.visible = true
	application.updateUI()
	/*for (var i= 1; i <= $max; i++){
		foundset.setSelectedIndex(i)		
		if(foundset.enabled == 0){
		    foundset.enabled = 1
		    forms.frm_tab_especialidad_mult.frm_total_sel++
		}		
	}*/
	var fsUpdater = databaseManager.getFoundSetUpdater(foundset)
	fsUpdater.setColumn('enabled',1)	
	fsUpdater.performUpdate()
	forms.frm_tab_especialidad_mult.frm_total_sel = $max
	controller.setSelectedIndex(1)
	forms.frm_tab_especialidad_mult.elements.lbl_procesando.visible = false
}

/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"EF57E98F-1D07-4C03-872F-7C31D4B1AC9E"}
 */
function onAction_desel(event) {
	var $max = databaseManager.getFoundSetCount(foundset)
	forms.frm_tab_especialidad_mult.elements.lbl_procesando.visible = true
	application.updateUI()
	/*for (var i= 1; i <= $max; i++){
		foundset.setSelectedIndex(i)
		if(foundset.enabled == 1){
		    foundset.enabled = 0
			forms.frm_tab_especialidad_mult.frm_total_sel--			
		}
	}*/
	var fsUpdater = databaseManager.getFoundSetUpdater(foundset)
	fsUpdater.setColumn('enabled',0)	
	fsUpdater.performUpdate()
	if(forms.frm_tab_especialidad_mult.frm_total_sel > 0){
        forms.frm_tab_especialidad_mult.frm_total_sel = 
    	  forms.frm_tab_especialidad_mult.frm_total_sel - $max
		if(forms.frm_tab_especialidad_mult.frm_total_sel < 0){
			forms.frm_tab_especialidad_mult.frm_total_sel = 0
		}
	}
	controller.setSelectedIndex(1)
	forms.frm_tab_especialidad_mult.elements.lbl_procesando.visible = false
}
