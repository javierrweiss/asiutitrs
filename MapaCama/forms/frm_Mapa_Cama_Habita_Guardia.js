/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"73D3D4D0-871F-4744-BB6C-0069DE55289C"}
 */
var html = null;



/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6671D344-A1FD-4ED3-8A32-74FEAEC305D5"}
 */
function onShow_carga_consulta(firstShow, event) {
	globals.gbl_hab_30_est_guardia[4] = globals.gbl_hab_30_est_guardia[2] -
                                        globals.gbl_hab_30_est_guardia[3]
    globals.gbl_hab_321_est_guardia[4] = globals.gbl_hab_321_est_guardia[2] -
                                         globals.gbl_hab_321_est_guardia[3]
	var aArgs = new Array();
    var aArgs_i = new Array();
    	
	html = '<html><body>'
    html += '<TABLE border=1 cellspacing=0 cellpadding=1 width=100%>'
    
    html += '<tr>'
    html += '<td align=right width=30>' + globals.gbl_hab_30_est_guardia[1] + '</td>'	
    html += '<td align=right width=60>' + globals.gbl_hab_30_est_guardia[2] + '</td>'   
    html += '<td align=right width=60>' + globals.gbl_hab_30_est_guardia[3] + '</td>'    
    html += '<td align=right width=60>' + globals.gbl_hab_30_est_guardia[4] + '</td>'  
    html += '<td align=right width=70>' + globals.gbl_hab_30_est_guardia[5] + '</td>'   
    html += '<td align=right width=60>' + globals.gbl_hab_30_est_guardia[6] + '</td>'
    html += '<td align=right width=70>' + globals.gbl_hab_30_est_guardia[7] + '</td>'
    //html += '<td align=right width=20>' + ' ' + '</td>'
    html += '<IMG align=right WIDTH=20 HEIGHT=20 SRC="media:///fr_nueva_vista.png" >'
	html += '</tr>' 
	
	html += '</TABLE>'   
    html += '</body></html>'
    aArgs.push(html)
    aArgs_i.push(1) 
    
	html = '<html><body>'    
    html += '<TABLE border=1 cellspacing=0 cellpadding=1 width=100%>'
    html += '<tr>'
    html += '<td align=right width=30>' + globals.gbl_hab_321_est_guardia[1] + '</td>' 
    html += '<td align=right width=60>' + globals.gbl_hab_321_est_guardia[2] + '</td>'    
    html += '<td align=right width=60>' + globals.gbl_hab_321_est_guardia[3] + '</td>'    
    html += '<td align=right width=60>' + globals.gbl_hab_321_est_guardia[4] + '</td>'    
    html += '<td align=right width=70>' + globals.gbl_hab_321_est_guardia[5] + '</td>'    
    html += '<td align=right width=60>' + globals.gbl_hab_321_est_guardia[6] + '</td>'    
    html += '<td align=right width=70>' + globals.gbl_hab_321_est_guardia[7] + '</td>'
    //html += '<td align=right width=20>' + ' ' + '</td>'
    html += '<IMG align=right WIDTH=20 HEIGHT=20 SRC="media:///fr_nueva_vista.png" >'
    html += '</tr>'
    html += '</table>'
    html += '</body></html>'
    
    aArgs.push(html)
    aArgs_i.push(2)
	
    application.setValueListItems('vl_consultas_1',aArgs,aArgs_i)
	globals.gbl_consultas_1 = 1
	
	//elements.com_consulta_1.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"330E68AB-3896-4895-B3BE-DC118CE8E575"}
 */
function onAction_buscar_camas(event) {
	globals.gbl_pres_guardia = 0
	switch (globals.gbl_html_prn){
		case '1.0': globals.gbl_habitacion = 30; break;
		case '2.0': globals.gbl_habitacion = 321; break;
	}
	
	elements.lbl_procesando.visible = true
	application.updateUI() 
	forms.Mapa_Cama_todos.Carga_aux(0,globals.gbl_habitacion,0,'',1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',0)
	
    elements.lbl_procesando.visible = false	
    var win = application.createWindow("Det_Habita",JSWindow.MODAL_DIALOG)	
	win.title= 'Detalle de la Habitacion '
	win.resizable = false
	solutionModel.removeForm
	win.show(forms.frm_Mapa_Cama_Habita)
	application.getWindow('Det_Habita').hide()	    
	application.getWindow('Det_Habita').destroy()
}