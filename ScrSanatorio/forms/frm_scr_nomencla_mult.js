/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7EF4CF92-EB40-4BAC-8190-213D818A443E",variableType:4}
 */
var enabled = 0
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"46B318C0-4CE3-4CF2-8F36-19FEC26034E7",variableType:4}
 */
var tipo = 0
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BC81ECFE-F3CF-48A1-9730-3F590B50603A",variableType:4}
 */
var codigo = 0
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6B0D994A-EB48-456E-B8E7-1047935A9C5D",variableType:4}
 */
var grupo = 0
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"41BE50C6-E256-404A-BFD5-88B34482BB33"}
 */
var descripcion = ''

/*** 
 * @param event
 *
 * @properties={typeid:24,uuid:"2A0CA493-D271-46D4-A3CB-AD32148BFEE7"}
 */
function onRecordSelection_frm_scr_visitantes(event) {
	globals.gbl_nomencla = foundset.codigo
	application.getWindow('Busca_nome_mult').hide();
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"22D4F35C-184E-4212-B0B5-C79F71D403AD"}
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
		foundset.sort('tipo asc, codigo asc')
	}else{
		foundset.sort('descripcion asc')	
	}
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"B7C30085-8AB4-4E8F-ACF4-1FEB44A6F0BC"}
 */
function onAction_enabled(event) {
	if(foundset.enabled == 0 || null){		
		forms.frm_tab_nomencla_mult.frm_total_sel--
	}else{
		forms.frm_tab_nomencla_mult.frm_total_sel++		
	}
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"47FB4FDE-1E1B-4AA7-B98D-A90567D1AE31"}
 */
function onAction_selec(event) {
	var $max = databaseManager.getFoundSetCount(foundset)
	forms.frm_tab_nomencla_mult.elements.lbl_procesando.visible = true
	application.updateUI()
	/*for (var i= 1; i <= $max; i++){
		foundset.setSelectedIndex(i)		
		if(foundset.enabled == 0){
		    foundset.enabled = 1
		    forms.frm_tab_nomencla_mult.frm_total_sel++
		}		
	}*/
	var fsUpdater = databaseManager.getFoundSetUpdater(foundset)
	fsUpdater.setColumn('enabled',1)	
	fsUpdater.performUpdate()
	forms.frm_tab_nomencla_mult.frm_total_sel = $max
	controller.setSelectedIndex(1)
	forms.frm_tab_nomencla_mult.elements.lbl_procesando.visible = false
}

/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"8C73F373-C726-4C8A-ACEB-74F104FEDD9F"}
 */
function onAction_desel(event) {
	var $max = databaseManager.getFoundSetCount(foundset)
	forms.frm_tab_nomencla_mult.elements.lbl_procesando.visible = true
	application.updateUI()
	/*for (var i= 1; i <= $max; i++){
		foundset.setSelectedIndex(i)
		if(foundset.enabled == 1){
		    foundset.enabled = 0
			forms.frm_tab_nomencla_mult.frm_total_sel--			
		}
	}*/
	var fsUpdater = databaseManager.getFoundSetUpdater(foundset)
	fsUpdater.setColumn('enabled',0)	
	fsUpdater.performUpdate()
	if(forms.frm_tab_nomencla_mult.frm_total_sel > 0){
        forms.frm_tab_nomencla_mult.frm_total_sel = 
    	  forms.frm_tab_nomencla_mult.frm_total_sel - $max
		if(forms.frm_tab_nomencla_mult.frm_total_sel < 0){
			forms.frm_tab_nomencla_mult.frm_total_sel = 0
		}
	}
	controller.setSelectedIndex(1)
	forms.frm_tab_nomencla_mult.elements.lbl_procesando.visible = false
}
