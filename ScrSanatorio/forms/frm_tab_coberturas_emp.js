/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"884051E2-860A-4C57-8897-078F67EC94D1",variableType:4}
 */
var frm_campo_N1 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B2699EE8-5ECF-4C33-8FEE-D803900CD3F5",variableType:4}
 */
var frm_campo_N2 = 0;

/**
 * @properties={typeid:35,uuid:"13CCDDE7-5BD7-4354-972E-39EFE441E7A8",variableType:-4}
 */
var frm_ds2 = new Array();

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C2293545-372E-4652-8B9D-0A5A0DA4ECB8"}
 */
function onShow_carga_formulario(firstShow, event) {
	elements.tabless.tabIndex= 1
	frm_campo_N1 = 0
	frm_campo_N2 = 0
	forms.frm_scr_coberturas_emp.filtra()
}

/**
 * @properties={typeid:24,uuid:"62C8CD4D-EC06-4522-8C63-DDBC53E07FC3"}
 */
function cargar_tabla(){
	var $Args
	var $catalogo = globals.gbl_catalogo
	var $SQL = "select obr_codigo, obr_razonsoc, obr_tipclie, obr_estado from tbc_obras " 
	  	  
    var $ds = databaseManager.getDataSetByQuery($catalogo, $SQL, $Args, -1);
    var $max = $ds.getMaxRowIndex()
	
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
			}else{
				$enabled = 0
			}
		    frm_ds2.addRow([$enabled, $codigo, $descripcion, $tipo, $estado])
		}
		
		var $tipos = [JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT]
        var $frm = solutionModel.getForm('frm_scr_coberturas_emp')
        $frm.dataSource = frm_ds2.createDataSource('Ds_Aux_scr_coberturas_emp', $tipos)
        forms.frm_scr_coberturas_emp.controller.recreateUI()       	
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
 * @properties={typeid:24,uuid:"E99B6604-A39C-4FBF-8876-10A43EB65699"}
 */
function onDataChange_filtra(oldValue, newValue, event) {
	forms.frm_scr_coberturas_emp.filtra()
	elements.tabless.tabIndex = globals.gbl_con_indice
	controller.setSelectedIndex(1)
	return true
}
