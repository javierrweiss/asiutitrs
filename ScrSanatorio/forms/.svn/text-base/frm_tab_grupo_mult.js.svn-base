/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"53273FEA-07F3-432F-9D7B-A68379333C28",variableType:4}
 */
var frm_total_sel = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E864D25C-E469-4F5C-9697-96D4E89F2BAC",variableType:4}
 */
var frm_total_reg = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D43F31BB-DBFE-4498-95B4-D93D8A49AADE",variableType:4}
 */
var frm_campo_N1 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E35D8D0A-AB89-44C1-9E36-6DDA2B08EB60",variableType:4}
 */
var frm_campo_N2 = 0;

/**
 * @properties={typeid:35,uuid:"FE126A61-7EE5-45C2-9EE4-18F0BBC4B8CC",variableType:-4}
 */
var frm_ds2 = new Array();

/** 
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"0653FEEF-26F5-4813-BA3D-F29CFE7FCBA9"}
 */
function onShow_carga_formulario(firstShow, event) {
	elements.tabless.tabIndex= globals.gbl_con_indice
	forms.frm_scr_grupo_mult.filtra()
}

/**
 * @properties={typeid:24,uuid:"683E85FB-7FC0-4402-8AAF-A35E10BE3887"}
 */
function cargar_tabla(){
	var $Args
	var $SQL = "select * from tbc_grupos where gru1 = "
		$SQL+= globals.gbl_con_tipo_nom	  	  
    var $ds = databaseManager.getDataSetByQuery("maestros", $SQL, $Args, -1);
    var $max = $ds.getMaxRowIndex()
	frm_total_reg = $ds.getMaxRowIndex()
	frm_total_sel = 0
	if ($max != 0){		
	    frm_ds2 = databaseManager.createEmptyDataSet()		
	    frm_ds2.addColumn('enabled',1,JSColumn.NUMBER)   
	    frm_ds2.addColumn('codigo',2,JSColumn.NUMBER)
	    frm_ds2.addColumn('descripcion',3,JSColumn.TEXT)				
		frm_ds2.addColumn('tipo',4,JSColumn.NUMBER)	
		var $enabled     = 0
		var $codigo      = 0		
	    var $descripcion = ''		
		var $tipo        = 0
		
		for (var i= 1; i <= $max; i++){
			$codigo      = $ds.getValue(i,2)
			$descripcion = $ds.getValue(i,6)
			$tipo        = $ds.getValue(i,1)
			$enabled = 1
			frm_total_sel++
			
		    frm_ds2.addRow([$enabled, $codigo, $descripcion, $tipo])
		}
		
		var $tipos = [JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.TEXT, JSColumn.NUMBER]
        var $frm = solutionModel.getForm('frm_scr_grupo_mult')
        $frm.dataSource = frm_ds2.createDataSource('Ds_Aux_scr_grupos', $tipos)
        forms.frm_scr_grupo_mult.controller.recreateUI()
	}
}

/** 
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"9B9EC1C1-3618-46CD-BBFE-82FDA54E3F6C"}
 */
function onDataChange_filtra(oldValue, newValue, event) {
	globals.gbl_con_indice = 1
	forms.frm_scr_grupo_mult.filtra()
	elements.tabless.tabIndex = globals.gbl_con_indice	
	return true
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"1A2150FC-4457-4A4E-B292-99353CE54A48"}
 */
function onAction_selec(event) {
	forms.frm_scr_grupo_mult.onAction_selec(event)
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"FD23510E-17D9-4929-95EE-AF76B3479835"}
 */
function onAction_desel(event) {
	forms.frm_scr_grupo_mult.onAction_desel(event)
}

/**
 * @AllowToRunInFind
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"AA095E47-4A80-4270-B005-26015E36B2FC"}
 */
function onAction_desel_uno(event) {
	forms.frm_scr_grupo_mult.onAction_desel(event)
    forms.frm_scr_grupo_mult.foundset.find()    
    forms.frm_scr_grupo_mult.foundset.tipo    =gbl_grup_to_grupo.gru1
    forms.frm_scr_grupo_mult.foundset.codigo  =gbl_grup_to_grupo.gru2
    forms.frm_scr_grupo_mult.foundset.search()
    forms.frm_scr_grupo_mult.foundset.enabled = 1
    						
    frm_total_sel = 1
}
