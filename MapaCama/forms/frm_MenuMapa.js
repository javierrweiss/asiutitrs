/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"80A9C01F-FC5A-4EAC-B853-3745E8747587"}
 */
function onShow_inicio(firstShow, event) {		
	/*
	//Login
	if (globals.gbl_title == ''){
	   	var win = application.createWindow("Psw",JSWindow.MODAL_DIALOG)	
    	win.title= 'Login'
    	win.resizable = false
    	solutionModel.removeForm
    	win.show(forms.psw_login_adm)
    	win.hide()
		win.destroy()
	}
	
	//Fin login
	
    globals.gbl_fecha_hoy = application.getServerTimeStamp()
	globals.gbl_empresa = "Desarrollo"
	globals.gbl_usuario = globals.vOperador
    */
	
    // control del elemento por perfil	
	var $form = controller.getName()
	globals.controlar_elementos($form)	
	// fin control del elemento por perfil
	if (elements.lbl_obra_social_OSECAC.visible == true){
		globals.gbl_solo_OSECAC = 1
	}else{
		globals.gbl_solo_OSECAC = 0
	}
	
	// Buscar fecha del dia de ayer.
    var final_mes = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	var resto = globals.gbl_fecha_hoy.getFullYear() % 4;
	
	globals.gbl_fecha_ayer	= application.getServerTimeStamp() 
	
	//guarda fecha del dia de hoy en Integer.
	var anio = globals.gbl_fecha_ayer.getFullYear()
	var mes = globals.gbl_fecha_ayer.getMonth() + 1
	var dia = globals.gbl_fecha_ayer.getDate()
	var mes_ed
	var dia_ed
	if (mes < 10){
		mes_ed = '0' + mes
	}else{
		mes_ed = mes
	}
	if (dia < 10){
		dia_ed = '0' + dia
	}else{
		dia_ed = dia
	}
	globals.gbl_fecha_hoy_int = anio + ''+mes_ed+'' + dia_ed 

	//Calcula la fecha de un día anterior
	if (resto == 0) final_mes[1] = 29;
	if(globals.gbl_fecha_ayer.getDate() == 1){
		if (globals.gbl_fecha_ayer.getMonth() == 0){
			globals.gbl_fecha_ayer = globals.gbl_fecha_ayer.setMonth(11)
			globals.gbl_fecha_ayer = globals.gbl_fecha_ayer.setDate(final_mes [globals.gbl_fecha_ayer.getMonth()])
			globals.gbl_fecha_ayer = globals.gbl_fecha_ayer.setFullYear(globals.gbl_fecha_ayer.getFullYear()-1)
			
		}else{
			globals.gbl_fecha_ayer = globals.gbl_fecha_ayer.setMonth(globals.gbl_fecha_ayer.getMonth()-1)
			globals.gbl_fecha_ayer = globals.gbl_fecha_ayer.setDate(final_mes [globals.gbl_fecha_ayer.getMonth()])
		}
	}else{
		globals.gbl_fecha_ayer = globals.gbl_fecha_ayer.setDate(globals.gbl_fecha_ayer.getDate()-1)
	}
	
	//Ahora guarda la fecha del día de ayer en Integer.
	anio = globals.gbl_fecha_ayer.getFullYear()
	mes = globals.gbl_fecha_ayer.getMonth() + 1
	dia = globals.gbl_fecha_ayer.getDate()
	
	if (mes < 10){
		mes_ed = '0' + mes
	}else{
		mes_ed = mes
	}
	if (dia < 10){
		dia_ed = '0' + dia
	}else{
		dia_ed = dia
	}
	globals.gbl_fecha_ayer_int = anio + ''+mes_ed+'' + dia_ed 
	globals.gbl_hora_hoy_int = globals.gbl_fecha_ayer.getHours()
	
	//Carga mapa de Habitaciones
	forms.Mapa_Cama_todos.onShow_inicializa()
	
	//Cargar items de menú
	var $dataArray
	$dataArray = globals.gbl_permisos.getColumnAsArray(3)
	var tr_Args   = new Array()
	var tr_Args_i = new Array()
	var co_Args   = new Array()
	var co_Args_i = new Array()
	var cb_Args   = new Array()
	var cb_Args_i = new Array()
	var $html = ''
	$html = '<html><body><table width=100% cellpadding=0 cellspacing=0>'
	$html += '<tr>'	
	$html += '<td width=50>&#160 &#160 &#160' + '   │Refrescar</td>'   
    $html += '</tr>'
	$html += '</table></body></html>'
    tr_Args.push($html)
    tr_Args_i.push('1')
	$html = '<html><body><table width=100% cellpadding=0 cellspacing=0>'
	$html += '<tr>'	
	$html += '<td width=50>&#160 &#160 &#160' + '   │Salir</td>'    
    $html += '</tr>'
	$html += '</table></body></html>'
    tr_Args.push($html)
    tr_Args_i.push('2')
	
	$html = '<html><body><table width=100% cellpadding=0 cellspacing=0>'
	$html += '<tr>'	
	$html += '<td width=110>&#160 &#160 &#160' + '   │Resumen</td>' 
	$html += '<td width=10>' + '  ►' +'</td>'
    $html += '</tr>'
	$html += '</table></body></html>'
    co_Args.push($html)
    co_Args_i.push('1')
	$html = '<html><body><table width=100% cellpadding=0 cellspacing=0>'
	$html += '<tr>'	
	$html += '<td width=50>&#160 &#160 &#160' + '   │Detalle</td>'    
    $html += '</tr>'
	$html += '</table></body></html>'
    co_Args.push($html)
    co_Args_i.push('2')
	
	$html = '<html><body><table width=100% cellpadding=0 cellspacing=0>'
	$html += '<tr>'	
	$html += '<td width=220>&#160 &#160 &#160' + '   │<B>Camas</B></td>' 	
    $html += '</tr>'
	$html += '</table></body></html>'
    cb_Args.push($html)
    cb_Args_i.push('1')
	
	var $id = $dataArray.indexOf('frm_Mapa_Cama_Habita_res_ocupa_sector') + 1
	if(globals.gbl_permisos.getValue($id,5)== true){
	    $html = '<html><body><table width=100% cellpadding=0 cellspacing=0>'
	    $html += '<tr>'	
	    $html += '<td width=220>&#160 &#160 &#160' + '   │&#160 &#160 &#160Ocupación por Sector</td>' 	
        $html += '</tr>'
	    $html += '</table></body></html>'
        cb_Args.push($html)
        cb_Args_i.push('2')
	}
	$id = $dataArray.indexOf('frm_Mapa_Cama_Habita_res_ocupa_cober') + 1
	if(globals.gbl_permisos.getValue($id,5)== true){
	    $html = '<html><body><table width=100% cellpadding=0 cellspacing=0>'
	    $html += '<tr>'	
	    $html += '<td width=220>&#160 &#160 &#160' + '   │&#160 &#160 &#160Ocupación por Cobertura</td>'    
        $html += '</tr>'
	    $html += '</table></body></html>'
        cb_Args.push($html)
        cb_Args_i.push('3')
	}
	$id = $dataArray.indexOf('frm_Mapa_Cama_Habita_res_reserva_cober') + 1
	if(globals.gbl_permisos.getValue($id,5)== true){
	    $html = '<html><body><table width=100% cellpadding=0 cellspacing=0>'
	    $html += '<tr>'	
	    $html += '<td width=220>&#160 &#160 &#160' + '   │&#160 &#160 &#160Reservas por Cobertura</td>' 	
        $html += '</tr>'
	    $html += '</table></body></html>'
        cb_Args.push($html)
        cb_Args_i.push('4')
	}
	$id = $dataArray.indexOf('frm_Mapa_Cama_Habita_Guardia') + 1
	if(globals.gbl_permisos.getValue($id,5)== true){
	    $html = '<html><body><table width=100% cellpadding=0 cellspacing=0>'
	    $html += '<tr>'	
	    $html += '<td width=220>&#160 &#160 &#160' + '   │&#160 &#160 &#160Estado de Guardia</td>'    
        $html += '</tr>'
	    $html += '</table></body></html>'
        cb_Args.push($html)
        cb_Args_i.push('5')
	}
	$id = $dataArray.indexOf('frm_Mapa_Cama_Dias_Camas') + 1
	if(globals.gbl_permisos.getValue($id,5)== true){
	    $html = '<html><body><table width=100% cellpadding=0 cellspacing=0>'
	    $html += '<tr>'	
	    $html += '<td width=220>&#160 &#160 &#160' + '   │&#160 &#160 &#160Días Camas Ostee</td>'    
        $html += '</tr>'
	    $html += '</table></body></html>'
        cb_Args.push($html)
        cb_Args_i.push('6')
	}
	// Acá se pueden agregar más items para Resumen
	
	$html = '<html><body><table width=100% cellpadding=0 cellspacing=0>'
	$html += '<tr>'	
	$html += '<td width=220>&#160 &#160 &#160' + '   │<B>Pacientes</B></td>' 	
    $html += '</tr>'
	$html += '</table></body></html>'
    cb_Args.push($html)
    cb_Args_i.push('7')
	$html = '<html><body><table width=100% cellpadding=0 cellspacing=0>'
	$html += '<tr>'	
	$html += '<td width=220>&#160 &#160 &#160' + '   │&#160 &#160 &#160con Respirador</td>'    
    $html += '</tr>'
	$html += '</table></body></html>'
    cb_Args.push($html)
    cb_Args_i.push('8')
	application.setValueListItems('vl_accion',tr_Args, tr_Args_i)		
	application.setValueListItems('vl_consultas',co_Args, co_Args_i)		
	application.setValueListItems('vl_consulta_1',cb_Args, cb_Args_i)
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FB923C39-89B4-48DB-AD3C-7485408D2447"}
 */
function onAction_btn_ayuda(event) {
	var win = application.createWindow("Ayuda",JSWindow.MODAL_DIALOG)	
	win.title= 'Ayuda'
	win.resizable = false
	solutionModel.removeForm
	win.show(forms.frm_Mapa_Ayuda)
	win.hide()
	win.destroy()
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B75ED1C8-EDE6-4EB6-B11B-07D42ED0532F"}
 */
function onFocusLost_cierra_acciones(event) {
	cierra_items()
}
/**
 * @properties={typeid:24,uuid:"0E941667-3549-4480-8E97-399104987F17"}
 */
function cierra_items() {
	elements.com_acciones.visible = false
	if (globals.gbl_con_1 == 0){
		elements.com_consultas.visible = false
	    elements.com_consultas_1.visible = false
	}	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"99CC907C-85C9-41AA-AE3A-D881D02C880D"}
 */
function onAction_abrir_items_accion(event) {
		cierra_items()
		globals.gbl_acciones = 1
		elements.com_acciones.visible = true
		elements.com_acciones.requestFocus()
	}
/**
 * @properties={typeid:24,uuid:"EEE132AC-1437-46FD-B2CF-6AA66FBF1525"}
 */
function opcion_acciones(){
	switch (globals.gbl_acciones){	           
	   case '1': cierra_items()
			  forms.Mapa_Cama_todos.onShow_inicializa();break;
	   case '2': application.closeAllWindows();break;				
	   default:plugins.dialogs.showInfoDialog("Opción en construcción","Opción no Operativa");break;
	}
}	
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"80DB6D22-E184-44BC-8135-D7951B480481"}
 */
function onAction_abrir_items_consulta(event) {
	cierra_items()
	globals.gbl_con = 0
	globals.gbl_con_1 = 0
	elements.com_consultas.visible = true
	elements.com_consultas.requestFocus()
}
	
	/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"633D93F7-3C69-4348-AD27-21BB34882A1B"}
 */
function onFocusLost_cierra_consulta(event) {
	cierra_items()
}
/**
 * @properties={typeid:24,uuid:"6F141504-EB65-4883-8E4E-50C992482474"}
 */
function opcion_consulta(){
	globals.gbl_con_1 = 0
	switch (globals.gbl_con){
	   case 1:	   
		  globals.gbl_con_1 = 1
	      elements.com_consultas_1.visible = true
	      elements.com_consultas_1.requestFocus()
		  ;break;
	   case 2:
	      cierra_items() 
		  muestra_detalle();break;	          
	}
}
/**
 * @properties={typeid:24,uuid:"461F86A2-6F2E-407B-84BA-2FF73B50E89F"}
 */
function muestra_detalle(){
	var win = application.createWindow("detalle_prn",JSWindow.MODAL_DIALOG)	
	win.title= 'Consulta -Detalle-'
	win.resizable = false
	solutionModel.removeForm
	win.show(forms.frm_Mapa_Cama_prn)
	win.hide()
    win.destroy()	
}
	
/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"96580F4C-1531-4715-8E48-EECA49F27087"}
 */
function onFocusLost_cierra_listado(event) {
	cierra_items()
}

/**
 * @properties={typeid:24,uuid:"5D734777-D28E-4B5B-B0EF-0F6706B2C52D"}
 */
function opcion_consultas_1(){
	var win
	switch (globals.gbl_con_1){
	   case 1: case 7:	   
	       elements.com_consultas_1.requestFocus()		   
           ;break;   
	   case 2: 
		   win = application.createWindow("resumen_prn1",JSWindow.MODAL_DIALOG)	
		   win.title= 'Resumen'
		   win.resizable = false
		   solutionModel.removeForm
		   win.show(forms.frm_Mapa_Cama_Habita_res_ocupa_sector)
		   win.hide()
		   win.destroy()	
		   ;break;
	   case 3:
	       win = application.createWindow("resumen_prn2",JSWindow.MODAL_DIALOG)	
	       win.title= 'Resumen'
	       win.resizable = false
	       solutionModel.removeForm
	       win.show(forms.frm_Mapa_Cama_Habita_res_ocupa_cober)
	       win.hide()
		   win.destroy()
		   ;break;		
	   case 4:
           win = application.createWindow("resumen_prn3",JSWindow.MODAL_DIALOG)	
           win.title= 'Resumen'
           win.resizable = false
           solutionModel.removeForm
           win.show(forms.frm_Mapa_Cama_Habita_res_reserva_cober)
           win.hide()
	       win.destroy()
	       ;break;
	   case 5:
	       globals.gbl_habita = 30
           win = application.createWindow("resumen_prn4",JSWindow.MODAL_DIALOG)	
           win.title= 'Resumen'
           win.resizable = false
           solutionModel.removeForm
           win.show(forms.frm_Mapa_Cama_Habita_Guardia)
           win.hide()
	       win.destroy()
		   ;break;
	   case 6:           
           win = application.createWindow("resumen_prn5",JSWindow.MODAL_DIALOG)	
           win.title= 'Resumen'
           win.resizable = false
           solutionModel.removeForm
           win.show(forms.frm_Mapa_Cama_Dias_Camas)
           win.hide()
           win.destroy()
	       ;break;		   
		   
	   case 8:
           win = application.createWindow("resumen_prn6",JSWindow.MODAL_DIALOG)	
           win.title= 'Resumen'
           win.resizable = false
           solutionModel.removeForm
           win.show(forms.frm_Mapa_Cama_Habita_res_respirador)
           win.hide()
           win.destroy()
           ;break;
	   default:plugins.dialogs.showInfoDialog("Opción en construcción","Opción no Operativa");break;
	}
	if(globals.gbl_con_1 == 1 || globals.gbl_con_1 == 6){
	}else{
	    cierra_items()
	    elements.com_consultas.visible = false
        elements.com_consultas_1.visible = false
	}
}
	
	/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"973B1BE6-CD0D-4AAD-B76B-16C71902CEE8"}
 */
function onFocusLost_cierra_consulta_1(event) {
	cierra_items()
	elements.com_consultas.visible = false
	elements.com_consultas_1.visible = false	
}	

	