/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"77F7CDE3-7734-4F6A-8E4C-3888B4CCEC3F"}
 */
function onShow_cargar_txt(firstShow, event) {
	elements.lbl_no_hay_datos.visible = false
	elements.lbl_procesando.visible = true
	application.updateUI()
	var aArgs = new Array();
	var SQL = "Select MedcTipo, MedcArti, MedcCant, Art.art_descrip, Art.art_presenta from tbc_medic_cir_filas inner join maestros.tbc_articulos Art on MedcArti = Art.art_codigo " 
    SQL+="where MedcProtocolo = ? "
    aArgs.push(globals.gbl_protocolo)		  	   
	var _ds = databaseManager.getDataSetByQuery("asistencial", SQL, aArgs, -1);
	
	if (_ds.getMaxRowIndex() == 0){
		elements.lbl_no_hay_datos.visible = true
	}else{
		
		var ant_tipart = 0
		var html = ''
	    globals.gbl_txt_medica ='<html><body>'
	    for (var i= 1; i <= _ds.getMaxRowIndex(); i++){
	       if (ant_tipart != _ds.getValue(i,1)){
	    	   ant_tipart = _ds.getValue(i,1)
    	       html += '<table width=100% cellpadding=0 cellspacing=0>'
	           html += '<tr>'
               html += '<td width=100% valign="middle" align="center">' 
               if (_ds.getValue(i,1) == 1){
                   html += '<H2> <U> Medicamentos de Cirugía </U> </H2>'
               }else{
                   if (_ds.getValue(i,1) == 2){
                       html += '<H2> <U> Medicamentos de Anestesia </U> </H2>'
                   }else{
                       html += '<H2> <U> Medicamentos para Profilaxis </U> </H2>'
                   }
               }
               html += '</td>'
               html += '</tr>'
		       html += '</table>'
		       html += '<br>'
               globals.gbl_txt_medica += html
	    	}
		
            html = ''         	
		  	globals.column0=_ds.getValue(i,2)
			globals.column1=_ds.getValue(i,4)
			globals.column2=_ds.getValue(i,5)
			globals.column3=_ds.getValue(i,3)
			           
	   	    html += '<table width=100% cellpadding=0 cellspacing=0>'
	        html += '<tr>'
            html += '<td width=10% valign="middle" align="right">' + globals.column0 + '</td>'
            html += '<td width=5% valign="middle" align="right">     </td>'
            html += '<td width=35% valign="middle" align="left">' + globals.column1 + '</td>'
            html += '<td width=30% valign="middle" align="left">' + globals.column2 + '</td>'
            html += '<td width=10% valign="middle" align="right">' + globals.column3 + '</td>'
            html += '<td width=10% valign="middle" align="right">     </td>'
	        html += '</tr>'
	        html += '</table>'
            globals.gbl_txt_medica += html
			html = ''
        }
	    elements.lbl_procesando.visible = false
	    globals.gbl_txt_medica += '</body></html>'
	}
}
