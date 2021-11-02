/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E97C1D59-54E0-4B87-A9C1-BFE759C88514",variableType:4}
 */
var frm_total_sel = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"25D0602C-BD9B-440C-A290-11536128494C",variableType:4}
 */
var frm_total_reg = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"99DA3006-7B2B-4C84-90FB-254EC592180B",variableType:4}
 */
var frm_campo_N1 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"82CF6B61-0E00-499C-B1AD-5F14F63F753A",variableType:4}
 */
var frm_campo_N2 = 0;
/**
 * @properties={typeid:35,uuid:"6FCF6EFF-E02C-4D39-B238-188557261549",variableType:-4}
 */
var frm_ds2 = new Array();
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E4E56943-6D97-4339-899E-4D3828C73A24"}
 */
function onShow_carga_formulario(firstShow, event) {
	elements.tabless.tabIndex= 1
	forms.frm_scr_coberturas_mult.filtra()
}

/**
 * @properties={typeid:24,uuid:"75C9E99A-C68C-4241-B9F5-C78947EFFCE4"}
 */
function cargar_tabla(){
	var $Args
	var $catalogo = globals.gbl_catalogo
	var $SQL = "select obr_codigo, obr_razonsoc, obr_tipclie, obr_estado from tbc_obras " 
	  	  
    var $ds = databaseManager.getDataSetByQuery($catalogo, $SQL, $Args, -1);
    var $max = $ds.getMaxRowIndex()
	frm_total_reg = $ds.getMaxRowIndex()
	frm_total_sel = 0
	forms.frm_tab_coberturas_mult.frm_campo_N1 = 0
	forms.frm_tab_coberturas_mult.frm_campo_N2 = 0	
	if ($max != 0){		
	    frm_ds2 = databaseManager.createEmptyDataSet()		
	    frm_ds2.addColumn('enabled',1,JSColumn.NUMBER)   
	    frm_ds2.addColumn('codigo',2,JSColumn.NUMBER)
	    frm_ds2.addColumn('descripcion',3,JSColumn.TEXT)
		frm_ds2.addColumn('tipo',4,JSColumn.TEXT)	
		frm_ds2.addColumn('estado',5,JSColumn.TEXT)				
		var $enabled     = 0
		var $codigo      = 0		
	    var $descripcion = ''		
		var $tipo        = ''		
		var $estado      = ''
		
		for (var i= 1; i <= $max; i++){
			$codigo      = $ds.getValue(i,1)
			$descripcion = $ds.getValue(i,2)
			if($ds.getValue(i,3) != null){
			    $tipo    = application.getValueListDisplayValue('vl_Obras_tipclie',$ds.getValue(i,3))
			}else{
				$tipo    = ''
			}
			if($ds.getValue(i,4) != null){
			    $estado  = application.getValueListDisplayValue('vl_Obras_estado',$ds.getValue(i,4))
			}else{
				$estado  = ''
			}
			if($ds.getValue(i,4) == 0){
			    $enabled = 1
			    frm_total_sel++
			}else{
				$enabled = 0
			}
		    frm_ds2.addRow([$enabled, $codigo, $descripcion, $tipo, $estado])
		}
		
		var $tipos = [JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT]
        var $frm = solutionModel.getForm('frm_scr_coberturas_mult')
        $frm.dataSource = frm_ds2.createDataSource('Ds_Aux_scr_coberturas', $tipos)
        forms.frm_scr_coberturas_mult.controller.recreateUI()       	
	}
}
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"6FAB1235-B298-439F-A3E4-D4C4775E61F6"}
 */
function onDataChange_filtra(oldValue, newValue, event) {
	forms.frm_scr_coberturas_mult.filtra()
	elements.tabless.tabIndex = globals.gbl_con_indice
	controller.setSelectedIndex(1)
	return true
}

/*** 
 * @param event
 *
 * @properties={typeid:24,uuid:"C1228996-FB5D-4E15-BF91-3107F35D74FB"}
 */
function onAction_selec(event) {
	forms.frm_scr_coberturas_mult.onAction_selec(event)
}
/*** 
 * @param event
 *
 * @properties={typeid:24,uuid:"D83FEFB1-8254-4B88-863C-74E32E95E0C5"}
 */
function onAction_desel(event) {
	forms.frm_scr_coberturas_mult.onAction_desel(event)
}
/**
 * @AllowToRunInFind
 *  
 * @param event
 *
 * @properties={typeid:24,uuid:"F296D914-3EC4-4BAA-A80B-1122FC0AC93D"}
 */
function onAction_desel_uno(event) {
	forms.frm_scr_coberturas_mult.onAction_desel(event)
    forms.frm_scr_coberturas_mult.foundset.find()
    forms.frm_scr_coberturas_mult.foundset.codigo = globals.gbl_cobertura
    forms.frm_scr_coberturas_mult.foundset.search()
    forms.frm_scr_coberturas_mult.foundset.enabled = 1
    						
    frm_total_sel = 1
}