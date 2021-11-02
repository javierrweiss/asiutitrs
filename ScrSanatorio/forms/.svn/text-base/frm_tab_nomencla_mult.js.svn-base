
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"50270227-0FEC-4B79-BFC1-D8434F995CA2",variableType:4}
 */
var frm_total_sel = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"58210C8D-9580-4595-AE4B-1F511ED1C1D6",variableType:4}
 */
var frm_total_reg = 0;

/**
 * @properties={typeid:35,uuid:"CACCA3F6-95C7-4DE2-A07D-709B590D5855",variableType:-4}
 */
var frm_ds2 = new Array();

/** 
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"9B886C79-D52B-4DF2-B6C9-1501DA342184"}
 */
function onShow_carga_formulario(firstShow, event) {
	elements.tabless.tabIndex= 1
	forms.frm_scr_nomencla_mult.filtra()
}


/**
 * @properties={typeid:24,uuid:"08096E0F-BA31-4648-9AD8-95399D707C5A"}
 */
function cargar_tabla(){
	var $Args
	var $SQL = "select NOM.nome_tipo, NOM.nome_codigo, tbc_grupos.gru2, NOM.nome_descr, NOM.nome_grupo from tbc_grupos " 
        $SQL+= "left join tbc_nomencla NOM on NOM.nome_tipo = tbc_grupos.gru1 and NOM.nome_grupo = tbc_grupos.gru2 "
        $SQL+= "where tbc_grupos.gru1 = "
    	$SQL+= globals.gbl_con_tipo_nom
    	
    var $ds = databaseManager.getDataSetByQuery("maestros", $SQL, $Args, -1);
    var $max = $ds.getMaxRowIndex()
	frm_total_reg = 0
	frm_total_sel = 0		
	if ($max != 0){		
	    frm_ds2 = databaseManager.createEmptyDataSet()		
	    frm_ds2.addColumn('enabled',1,JSColumn.NUMBER)
		frm_ds2.addColumn('tipo',2,JSColumn.NUMBER)
	    frm_ds2.addColumn('codigo',3,JSColumn.NUMBER)
	    frm_ds2.addColumn('descripcion',4,JSColumn.TEXT)
		frm_ds2.addColumn('grupo',5,JSColumn.NUMBER)
		var $enabled     = 0
		var $tipo        = 0		
		var $codigo      = 0		
	    var $descripcion = ''	
	    var $grupo       = 0
				
		for (var i= 1; i <= $max; i++){
			$tipo        = $ds.getValue(i,1)
			$codigo      = $ds.getValue(i,2)
			$descripcion = $ds.getValue(i,4)
			$grupo       = $ds.getValue(i,5)
			if($tipo != null){
			    frm_total_sel++
			    frm_total_reg++ 
			    $enabled = 1						
			    frm_ds2.addRow([$enabled, $tipo, $codigo, $descripcion, $grupo])
			}
		}
		
		var $tipos = [JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.TEXT, JSColumn.NUMBER]
        var $frm = solutionModel.getForm('frm_scr_nomencla_mult')
        $frm.dataSource = frm_ds2.createDataSource('Ds_Aux_scr_nomencla', $tipos)
        forms.frm_scr_nomencla_mult.controller.recreateUI()	        		
	}
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"3DEE4FDA-A9E4-4290-85BA-DEC1D615FA0B"}
 */
function cargar_tabla_desde_grupo(){
	forms.frm_scr_grupo_mult.foundset.find()
	forms.frm_scr_grupo_mult.foundset.enabled = 1
	forms.frm_scr_grupo_mult.foundset.search()
	
	var $max = databaseManager.getFoundSetCount(forms.frm_scr_grupo_mult.foundset)
	var $Grup = ""
	if ($max != 0){
		for (var j= 1; j <= $max; j++){
			forms.frm_scr_grupo_mult.foundset.setSelectedIndex(j)
			$Grup += "tbc_grupos.Gru2 = "
		    $Grup += forms.frm_scr_grupo_mult.foundset.codigo
			if(j < $max){
				$Grup += " or "
			}
		}
	}
	var $Args	
	var $SQL = "select NOM.nome_tipo, NOM.nome_codigo, tbc_grupos.gru2, NOM.nome_descr , NOM.nome_grupo from tbc_grupos " 
        $SQL+= "left join tbc_nomencla NOM on NOM.nome_tipo = tbc_grupos.gru1 and NOM.nome_grupo = tbc_grupos.gru2 "
        $SQL+= "where tbc_grupos.gru1 = "
    	$SQL+= globals.gbl_con_tipo_nom
    	$SQL+= " and ( "
    	$SQL+= $Grup
    	$SQL+= " )"
    var $ds = databaseManager.getDataSetByQuery("maestros", $SQL, $Args, -1);
    var $max2 = $ds.getMaxRowIndex()
	
		
	frm_ds2 = databaseManager.createEmptyDataSet()		
	frm_ds2.addColumn('enabled',1,JSColumn.NUMBER)
	frm_ds2.addColumn('tipo',2,JSColumn.NUMBER)
	frm_ds2.addColumn('codigo',3,JSColumn.NUMBER)
	frm_ds2.addColumn('descripcion',4,JSColumn.TEXT)
	frm_ds2.addColumn('grupo',5,JSColumn.NUMBER)
	var $enabled     = 0
	var $tipo        = 0
	var $codigo      = 0		
	var $descripcion = ''
	var $grupo       = 0
	frm_total_sel    = 0	
	frm_total_reg    = 0
	forms.frm_scr_nomencla_mult.foundset.clear()
	if ($max2 != 0){
		for (var i= 1; i <= $max2; i++){
			$tipo        = $ds.getValue(i,1)
			$codigo      = $ds.getValue(i,2)
			$descripcion = $ds.getValue(i,4)
			$grupo       = $ds.getValue(i,5)
			if($tipo != null){
			    frm_total_sel++
			    frm_total_reg++ 
			    $enabled = 1						
			    frm_ds2.addRow([$enabled, $tipo, $codigo, $descripcion, $grupo])
			}
		}
	}	
	var $tipos = [JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.TEXT, JSColumn.NUMBER]
    var $frm = solutionModel.getForm('frm_scr_nomencla_mult')
    $frm.dataSource = frm_ds2.createDataSource('Ds_Aux_scr_nomencla', $tipos)
    forms.frm_scr_nomencla_mult.controller.recreateUI()	
}
/***
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"0A160FB0-9C97-497B-8CAC-0F8F7D730AA4"}
 */
function onDataChange_filtra(oldValue, newValue, event) {	
	forms.frm_scr_nomencla_mult.filtra()
	elements.tabless.tabIndex = globals.gbl_con_indice
	controller.setSelectedIndex(1)
	return true
}

/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"352AB503-6F67-4B36-8DAA-822E43364AE3"}
 */
function onAction_selec(event) {
	forms.frm_scr_nomencla_mult.onAction_selec(event)
}

/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"CC734D31-620B-4054-B347-DA37988E08D1"}
 */
function onAction_desel(event) {
	forms.frm_scr_nomencla_mult.onAction_desel(event)
}
/**
 * @AllowToRunInFind
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"8E2C7AC6-FD9A-4A9B-92BC-A14BB339E156"}
 */
function onAction_desel_uno(event) {
	forms.frm_scr_nomencla_mult.onAction_desel(event)
    forms.frm_scr_nomencla_mult.foundset.find()
    forms.frm_scr_nomencla_mult.foundset.codigo = globals.gbl_nomencla
    forms.frm_scr_nomencla_mult.foundset.search()
    forms.frm_scr_nomencla_mult.foundset.enabled = 1
    						
    frm_total_sel = 1
}