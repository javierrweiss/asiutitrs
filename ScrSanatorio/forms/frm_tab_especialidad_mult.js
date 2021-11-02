/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7349166C-F560-488A-9F29-7FB52E7B09A5",variableType:4}
 */
var frm_total_sel = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F44A3909-E831-461F-8031-37B8EEF52489",variableType:4}
 */
var frm_total_reg = 0;
/**
 * @properties={typeid:35,uuid:"6788ED5B-0AA2-451A-B5B7-541E82E55C4C",variableType:-4}
 */
var frm_ds2 = new Array();
/**
 * 
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"18680388-AC70-41A1-8778-5A486C5CBC3F"}
 */
function onShow_carga_formulario(firstShow, event) {
	elements.tabless.tabIndex= 1
	forms.frm_scr_especialidad_mult.filtra()
}

/**
 * @properties={typeid:24,uuid:"205C7166-FC0F-4678-A025-35D874E588CC"}
 * @AllowToRunInFind
 */
function cargar_tabla(){
	var $Args
//ojo	var $SQL = "select ESP.Esp_Codi, ESP.Esp_Descrip from tbc_profesional " 
//ojo        $SQL+= "inner join tbc_ESPECIAL ESP on ESP.Esp_Codi = tbc_profesional.Prof19 "
	var $SQL = "select ESP.Esp_Codi, ESP.Esp_Descrip from tbc_ESPECIAL ESP "
//ojo 	     $SQL+= "where Prof23 = 0 "       
//ojo        $SQL+= "group by ESP.Esp_Codi, ESP.Esp_Descrip " 
	  	  
    var $ds = databaseManager.getDataSetByQuery("maestros", $SQL, $Args, -1);
    var $max = $ds.getMaxRowIndex()
	frm_total_reg = $ds.getMaxRowIndex()
	frm_total_sel = 0		
	if ($max != 0){		
	    frm_ds2 = databaseManager.createEmptyDataSet()		
	    frm_ds2.addColumn('enabled',1,JSColumn.NUMBER)   
	    frm_ds2.addColumn('codigo',2,JSColumn.NUMBER)
	    frm_ds2.addColumn('descripcion',3,JSColumn.TEXT)					
		var $enabled     = 0
		var $codigo      = 0		
	    var $descripcion = ''		
				
		for (var i= 1; i <= $max; i++){
			$codigo      = $ds.getValue(i,1)
			$descripcion = $ds.getValue(i,2)			
			if($codigo != null){
			    frm_total_sel++
			    $enabled = 1						
			    frm_ds2.addRow([$enabled, $codigo, $descripcion])
			}
		}
		
		var $tipos = [JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.TEXT]
        var $frm = solutionModel.getForm('frm_scr_especialidad_mult')
        $frm.dataSource = frm_ds2.createDataSource('Ds_Aux_scr_especialidad', $tipos)
		forms.frm_scr_especialidad_mult.controller.recreateUI()				
	}
}
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"267F81EC-FE85-4583-B2CD-894B3F3984EE"}
 */
function cargar_tabla_desde_profesionales(){
	forms.frm_scr_profesionales_mult.foundset.find()
	forms.frm_scr_profesionales_mult.foundset.enabled = 1
	forms.frm_scr_profesionales_mult.foundset.search()
	var $max = databaseManager.getFoundSetCount(forms.frm_scr_profesionales_mult.foundset)
			
	frm_ds2 = databaseManager.createEmptyDataSet()		
	frm_ds2.addColumn('enabled',1,JSColumn.NUMBER)   
	frm_ds2.addColumn('codigo',2,JSColumn.NUMBER)
	frm_ds2.addColumn('descripcion',3,JSColumn.TEXT)					
	var $enabled     = 0
	var $codigo      = 0		
	var $descripcion = ''		
	frm_total_sel    = 0	
	frm_total_reg    = 0
	forms.frm_scr_especialidad_mult.foundset.clear()
	if ($max != 0){
		for (var i= 1; i <= $max; i++){
			forms.frm_scr_profesionales_mult.foundset.setSelectedIndex(i)
			if(forms.frm_scr_profesionales_mult.foundset.cod_espe !=0){
			    $codigo      = forms.frm_scr_profesionales_mult.foundset.cod_espe
			    globals.gbl_especialidad = $codigo
			    $descripcion = buscar_num_to_especialidad.esp_descrip			
			    $enabled = 1
			    var $encontro = 0
			    for(var j= 0; j < i; j++){				
				    if(frm_ds2.getValue(j,2) == globals.gbl_especialidad){
				        $encontro = 1
					    j = i + 1
				    }
			    }
			    if($encontro == 0){
			       frm_ds2.addRow([$enabled, $codigo, $descripcion])
			       frm_total_reg++
			       frm_total_sel++
			    }
			}
		}
	}	
	var $tipos = [JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.TEXT]
    var $frm = solutionModel.getForm('frm_scr_especialidad_mult')
    $frm.dataSource = frm_ds2.createDataSource('Ds_Aux_scr_especialidad', $tipos)
	forms.frm_scr_especialidad_mult.controller.recreateUI()
	forms.frm_scr_especialidad_mult.foundset.sort('codigo asc')
}
/**
 * 
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"98A2431F-2426-4157-BC48-B3AE46C4AB86"}
 */
function onDataChange_filtra(oldValue, newValue, event) {	
	forms.frm_scr_especialidad_mult.filtra()
	elements.tabless.tabIndex = globals.gbl_con_indice
	controller.setSelectedIndex(1)
	return true
}
/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"D902AFDA-68C5-448F-8CB6-1C61E55EE6BA"}
 */
function onAction_selec(event) {
	forms.frm_scr_especialidad_mult.onAction_selec(event)
}

/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"151269D4-FF5A-4EE1-8DA8-F8A634FFEC0A"}
 */
function onAction_desel(event) {
	forms.frm_scr_especialidad_mult.onAction_desel(event)
}
/**
 * @AllowToRunInFind
 *  
 * @param event
 *
 * @properties={typeid:24,uuid:"AB70422B-45BB-42A8-9DFE-8E31744E4FFC"}
 */
function onAction_desel_uno(event) {
	forms.frm_scr_especialidad_mult.onAction_desel(event)
    forms.frm_scr_especialidad_mult.foundset.find()
    forms.frm_scr_especialidad_mult.foundset.codigo = globals.gbl_especialidad
    forms.frm_scr_especialidad_mult.foundset.search()
    forms.frm_scr_especialidad_mult.foundset.enabled = 1
    						
    frm_total_sel = 1
}
