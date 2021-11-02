/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B74656B5-2553-4F28-A22B-46AFCF292730",variableType:4}
 */
var frm_campo_N1 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2C71982B-CC03-4085-8C01-F318591309E6",variableType:4}
 */
var frm_campo_N2 = 0;
/**
 * @properties={typeid:35,uuid:"DB5F1016-00D8-48D6-9CD2-B831CDA46C16",variableType:-4}
 */
var frm_ds2 = new Array();
/** 
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"CD2E391D-9FEE-4212-8B58-CE84AFF4E51A"}
 */
function onShow_carga_formulario(firstShow, event) {
	elements.tabless.tabIndex= 1
	frm_campo_N1 = 0
	frm_campo_N2 = 0
	forms.frm_scr_profesionales.filtra()
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
 * @properties={typeid:24,uuid:"473D58D3-47E1-485C-BA54-EBB92402C9E0"}
 */
function onDataChange_filtra(oldValue, newValue, event) {	
	forms.frm_scr_profesionales.filtra()
	elements.tabless.tabIndex = globals.gbl_con_indice
	controller.setSelectedIndex(1)
	return true
}
/**
 * @properties={typeid:24,uuid:"6CA8ED44-5A07-4378-8F21-C12A3E781E4A"}
 */
function cargar_tabla(){
	var $Args
	var $catalogo = globals.gbl_catalogo
	var $SQL = "select * from tbc_profesional order by prof2_2 asc"	  	  
    var $ds = databaseManager.getDataSetByQuery($catalogo, $SQL, $Args, -1);
    var $max = $ds.getMaxRowIndex()
	
	if ($max != 0){		
	    frm_ds2 = databaseManager.createEmptyDataSet()		
	    frm_ds2.addColumn('enabled'        ,1,JSColumn.NUMBER)   
	    frm_ds2.addColumn('codigo'         ,2,JSColumn.NUMBER)
	    frm_ds2.addColumn('descripcion'    ,3,JSColumn.TEXT)
		frm_ds2.addColumn('tipo'           ,4,JSColumn.TEXT)	
		frm_ds2.addColumn('estado'         ,5,JSColumn.TEXT)
		frm_ds2.addColumn('cod_espe'       ,6,JSColumn.NUMBER)
	    frm_ds2.addColumn('legajo_personal',7,JSColumn.NUMBER)
		frm_ds2.addColumn('legajo_medico'  ,8,JSColumn.NUMBER)
		frm_ds2.addColumn('sit_iva'        ,9,JSColumn.NUMBER)
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
			}else{
				$estado  = 'No Operativo'
			}			
			
		    frm_ds2.addRow([$enabled, $codigo, $descripcion, $tipo, $estado, $cod_espe, $ds.getValue(i,15),$ds.getValue(i,25) ,$ds.getValue(i,4)])
		}
		
		var $tipos = [JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.NUMBER, JSColumn.NUMBER,
		              JSColumn.NUMBER, JSColumn.NUMBER]
        var $frm = solutionModel.getForm('frm_scr_profesionales')
        $frm.dataSource = frm_ds2.createDataSource('Ds_Aux_scr_profesionales', $tipos)
        forms.frm_scr_profesionales.controller.recreateUI()
	}
}
