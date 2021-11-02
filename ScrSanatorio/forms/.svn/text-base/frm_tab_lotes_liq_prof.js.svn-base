/**
 * @properties={typeid:35,uuid:"F701CEB0-93BF-4521-AA6C-EE0A56349CBB",variableType:-4}
 */
var frm_ds2 = new Array();

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"461381FD-4895-40DC-B586-8A7ECCFBC85E"}
 */
function onShow_carga_formulario(firstShow, event) {
	elements.tabless.tabIndex= 1
	cargar_tabla()
}

/**
 * @properties={typeid:24,uuid:"AA7A7582-2629-4660-8054-C5A24CC26707"}
 */
function cargar_tabla(){
	var $Args
	var //$SQL = 'select profesional_des, lote, fecha_alta, tipo_prestacion from tbl_liquid_hon_prof_cons where profesional = '
	    $SQL = 'select * from tbl_liquid_hon_prof where profesional = '	
	    $SQL+= globals.gbl_profesional 
        //$SQL+= ' group by profesional_des, lote, fecha_alta, tipo_prestacion order by lote asc ' 
	  	  
    var $ds = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);
    var $max = $ds.getMaxRowIndex()	
	if ($max != 0){		
	    frm_ds2 = databaseManager.createEmptyDataSet()
	    frm_ds2.addColumn('profesional',    1,JSColumn.NUMBER)
	    frm_ds2.addColumn('lote',           2,JSColumn.NUMBER)
		frm_ds2.addColumn('fecha_desde',    3,JSColumn.DATETIME)
		frm_ds2.addColumn('fecha_hasta',    4,JSColumn.DATETIME)
		frm_ds2.addColumn('tipo_prestacion',5,JSColumn.TEXT)
		for (var i= 1; i <= $max; i++){
		    frm_ds2.addRow([$ds.getValue(i,2), $ds.getValue(i,3), $ds.getValue(i,5),$ds.getValue(i,6),
		    application.getValueListDisplayValue('vl_tipo_prestacion',$ds.getValue(i,4))])
		}
		
		var $tipos = [JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.DATETIME, JSColumn.DATETIME, JSColumn.TEXT]
        var $frm = solutionModel.getForm('frm_scr_lotes_liq_prof')
        $frm.dataSource = frm_ds2.createDataSource('Ds_Aux_scr_lote_liq', $tipos)
        forms.frm_scr_lotes_liq_prof.controller.recreateUI()       	
	}
}