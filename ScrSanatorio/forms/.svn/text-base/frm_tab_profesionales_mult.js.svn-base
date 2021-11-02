/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BAC96D8E-7F2F-4991-A35E-3C35B57B1488",variableType:8}
 */
var frm_total_sel = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1450D743-FC36-4684-B731-2D700CC15413",variableType:8}
 */
var frm_total_reg = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"88A526B3-D1A6-4E3D-BDCE-1E08C9810156",variableType:4}
 */
var frm_campo_N1 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4F77571F-58A5-481D-A68D-66BBA5E9872C",variableType:4}
 */
var frm_campo_N2 = 0;
/**
 * @properties={typeid:35,uuid:"D2039ED6-3A17-4B85-A715-4CCC57279A93",variableType:-4}
 */
var frm_ds2 = new Array();

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ECEF0ED9-1E7E-406A-B9AF-06608158B401"}
 */
function onShow_carga_formulario(firstShow, event) {
	elements.tabless.tabIndex= globals.gbl_con_indice
	forms.frm_scr_profesionales_mult.filtra()
}
/**
 * @properties={typeid:24,uuid:"9A8475AD-65C6-448C-B3D7-81C18FFF71BA"}
 */
function cargar_tabla(){
	var $Args
	var $catalogo = globals.gbl_catalogo
	var $SQL = "select * from tbc_profesional "	  	  
    var $ds = databaseManager.getDataSetByQuery($catalogo, $SQL, $Args, -1);
    var $max = $ds.getMaxRowIndex()
	frm_total_reg = $ds.getMaxRowIndex()
	frm_total_sel = 0
	forms.frm_tab_profesionales_mult.frm_campo_N1 = 0
	forms.frm_tab_profesionales_mult.frm_campo_N2 = 1	
	if ($max != 0){		
	    frm_ds2 = databaseManager.createEmptyDataSet()		
	    frm_ds2.addColumn('enabled',1,JSColumn.NUMBER)   
	    frm_ds2.addColumn('codigo',2,JSColumn.NUMBER)
	    frm_ds2.addColumn('descripcion',3,JSColumn.TEXT)
		frm_ds2.addColumn('tipo',4,JSColumn.TEXT)	
		frm_ds2.addColumn('estado',5,JSColumn.TEXT)
		frm_ds2.addColumn('cod_espe',6,JSColumn.NUMBER)	
		var $enabled     = 0
		var $codigo      = 0		
	    var $descripcion = ''		
		var $tipo        = ''		
		var $estado      = ''
		var $cod_espe    = 0
		
		for (var i= 1; i <= $max; i++){
			$codigo      = $ds.getValue(i,1)
			$descripcion = $ds.getValue(i,29)
			$cod_espe    = $ds.getValue(i,14)
			
			if($ds.getValue(i,18) == 0){
				$estado  = 'Operativo'
				$enabled = 1
				frm_total_sel++
			}else{
				$estado  = 'No Operativo'
				$enabled = 0
			}			
			
		    frm_ds2.addRow([$enabled, $codigo, $descripcion, $tipo, $estado, $cod_espe])
		}
		
		var $tipos = [JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.NUMBER]
        var $frm = solutionModel.getForm('frm_scr_profesionales_mult')
        $frm.dataSource = frm_ds2.createDataSource('Ds_Aux_scr_profesionales', $tipos)
        forms.frm_scr_profesionales_mult.controller.recreateUI()
	}
}
/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"AF42EB3E-CA11-4A87-868D-20D52B63A23F"}
 */
function onDataChange_filtra(oldValue, newValue, event) {
	globals.gbl_con_indice = 1
	forms.frm_scr_profesionales_mult.filtra()
	elements.tabless.tabIndex = globals.gbl_con_indice	
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F0751148-B2A4-4E69-9CD9-9FEFF4312E19"}
 */
function onAction_selec(event) {
	forms.frm_scr_profesionales_mult.onAction_selec(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0F2A8BC4-A0C5-46D7-888C-C0EDC17FDB64"}
 */
function onAction_desel(event) {
	forms.frm_scr_profesionales_mult.onAction_desel(event)
}

/**
 * @AllowToRunInFind
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"2DC03B83-44B9-44BF-8882-40594EADDE6D"}
 */
function onAction_desel_uno(event) {
	forms.frm_scr_profesionales_mult.onAction_desel(event)
    forms.frm_scr_profesionales_mult.foundset.find()
    forms.frm_scr_profesionales_mult.foundset.codigo = globals.gbl_profesional
    forms.frm_scr_profesionales_mult.foundset.search()
    forms.frm_scr_profesionales_mult.foundset.enabled = 1
    						
    frm_total_sel = 1
}
