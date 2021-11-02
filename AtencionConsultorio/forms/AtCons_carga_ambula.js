/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"45465BCB-B506-4D91-8212-27465EB86906",variableType:4}
 */
var fectra_int = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7169C32A-91AB-4968-A677-D360F848C476"}
 */
var fectra_aux = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2C98BF39-3D35-4865-BA49-B9251F22B9C8",variableType:4}
 */
var f_min_tra = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9C532C09-9619-4935-83F5-F0A3C87F241C",variableType:4}
 */
var f_hora_tra = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"30129545-4062-431D-A8DD-BC4534771D9F",variableType:93}
 */
var f_fecha_dia = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DCFBCDC9-46EF-421A-B2F6-61FE1D68C99D"}
 */
function onShow(firstShow, event) {
	if (firstShow)
	{ambulacodmed = forms.AtCons_carga.reservasmed }
	/*  
	if (reservasatendi_orig == 0)
	{f_hora_tra  = null
	 f_min_tra   = null}  */
	
	forms.AtCons_carga_ambula.elements.ambulatxt.requestFocus()
	
	/*
	if (ambulafecped == null)
	{f_fecha_dia = application.getServerTimeStamp()  
		 //ambulafecped = scopes.globals.DateToInteger(f_fecha_dia) devuelve mal dia y mes cuando tiene un solo digito
			if (f_fecha_dia != null) {
				var dia = f_fecha_dia.getDate()
				if (dia < 10)
					{dia = '0' + dia}
				var mes = f_fecha_dia.getMonth() + 1 
				if (mes < 10)
					{mes = '0' + mes}
				var anio = f_fecha_dia.getFullYear()
			ambulafecped  = anio + '' + mes + '' + dia
	}
	
	if (ambulahorped == null)
	{ambulahorped = scopes.globals.TimeToInteger(f_fecha_dia, 'hhmmss')}
	}  */
	
	var $hora_min_string = ambulahortra + ''
	if (ambulahortra != null && ambulahortra != 0)	{
		if (ambulahortra < 1000) 
			{$hora_min_string = '0' + ambulahortra + ''}
	    var $hora_string = $hora_min_string.substr(0,2)
	    var $min_string  = $hora_min_string.substr(2,2)
		f_hora_tra  = utils.stringToNumber($hora_string) 
		f_min_tra   = utils.stringToNumber($min_string)
	
	}
	else
	{f_hora_tra  = null
	 f_min_tra   = null}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9ADA7F36-8F01-43D6-A2A9-FE84159E0F10"}
 */
function onAction_imprimir(event) {
// TODO 05/06/2018  pasado
/*
	forms.AtCons_imp_ambula.f_fecha_impresion = application.getServerTimeStamp()
	forms.AtCons_imp_ambula.controller.loadRecords(atcons_histpac_ing_id)    
	forms.AtCons_imp_ambula.controller.setPageFormat(210,297,10,10,10,10,1,0);
	forms.AtCons_imp_ambula.controller.print(true,false)
	*/
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
 * @properties={typeid:24,uuid:"1CE17CA4-ED84-4398-9F6E-3BB69E468F43"}
 */
function onDataChange_hora_tra(oldValue, newValue, event) {
	if (f_hora_tra >= 0 && f_hora_tra < 25)  {
		ambulahortra  =  f_hora_tra * 100 + f_min_tra 
		forms.AtCons_carga_ambula.elements.mintra.requestFocus() }
	else {
		scopes.globals.AtCons_vmensaje = 'Hora Traslado invalida ';
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
		forms.AtCons_carga_ambula.elements.hortra.requestFocus() }
	return true
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
 * @properties={typeid:24,uuid:"6D74F0C9-8109-464F-B5A5-5D42C523DE4E"}
 */
function onDataChange_min_tra(oldValue, newValue, event) {
	if (f_min_tra >= 0 && f_min_tra < 60)  {
		ambulahortra  =  f_hora_tra * 100 + f_min_tra 
		// TODO forms.AtCons_carga_ambula.elements.btn_confirmar.requestFocus() // se va a sacar
		}
	else {
		scopes.globals.AtCons_vmensaje = 'Minutos de Traslado invalido ';
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
		forms.AtCons_carga_ambula.elements.mintra.requestFocus() }
	return true
}

/**
 * Handle changed data.
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"ACFCB9DF-044E-4888-8DF7-0B58D2427030"}
 */
function onDataChange_fectraslado() {
if (ambulafectra == null)
	{ambulafecped = null
	 ambulahorped = null
	 return true }	

f_fecha_dia = application.getServerTimeStamp()  
var dia = f_fecha_dia.getDate()
if (dia < 10)
	{dia = '0' + dia}
var mes = f_fecha_dia.getMonth() + 1 
if (mes < 10)
	{mes = '0' + mes}
var anio = f_fecha_dia.getFullYear()
var $hora = f_fecha_dia.getHours()
if ($hora < 10)
	{$hora = '0' + $hora}
var $min  = f_fecha_dia.getMinutes()
if ($min< 10)
	{$min = '0' + $min}			
ambulafecped  = anio + '' + mes + '' + dia	
ambulahorped = $hora  + '' + $min

dia = ambulafectra.getDate()
if (dia < 10)
	{dia = '0' + dia}
mes = ambulafectra.getMonth() + 1 
if (mes < 10)
	{mes = '0' + mes}
anio = ambulafectra.getFullYear()
fectra_aux  = anio + '' + mes + '' + dia
fectra_int = 0
fectra_int = utils.stringToNumber(fectra_aux)
if (fectra_int < ambulafecped)
	{scopes.globals.AtCons_vmensaje = 'Fecha de Traslado no puede ser menor que la fecha actual ';
	globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
	return false}
forms.AtCons_carga_ambula.elements.hortra.requestFocus()
return true
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"FC4E6BF1-5ED2-44D2-A99A-DB488EC4D4A8"}
 */
function onHide(event) {
	// TODO probar  // 05/06/2018
	var $falta = 0
	if ((ambulatxt == null    || ambulatxt == ''    || ambulatxt    == ' ') &&
		(ambulatipo == null   || ambulatipo == ''   || ambulatipo   == ' ') &&	
		(ambulaoxig == null   || ambulaoxig  == ''  || ambulaoxig   == ' ') && 
		(ambulafectra == null || ambulafectra == '' || ambulafectra == ' ') &&
		(ambulahortra == null || ambulahortra == '' || ambulahortra  == ' ') )
			{ambulafecped = null      // NO se cargo pedido ambulancia
			 ambulahorped = null
			 ambulatxt = null    
			 ambulatipo = null   
			 ambulaoxig = null    
			 ambulafectra = null 
			 ambulahortra = null
			 return true}  
	
	if ((ambulatxt != null ) &&
			 (ambulatipo != null   ) &&
			 (ambulaoxig != null   ) && 
			 (ambulafectra != null ) &&
			 (ambulahortra != null ) )
			 {  }// SI se cargo pedido ambulancia
	else{
			$falta = 1
			scopes.globals.AtCons_vmensaje = 'Falta ingresar en Pedido de Ambulancia: ' 
			if (ambulatxt == null)
				{scopes.globals.AtCons_vmensaje = scopes.globals.AtCons_vmensaje + '\n' + 'Motivo de Traslado'}
			if (ambulatipo == null)
				{scopes.globals.AtCons_vmensaje = scopes.globals.AtCons_vmensaje + '\n' + 'Tipo de Ambulancia'}
			if (ambulaoxig == null)
				{scopes.globals.AtCons_vmensaje = scopes.globals.AtCons_vmensaje + '\n' + 'Con o Sin Oxigeno'}	
			if (ambulafectra == null)
				{scopes.globals.AtCons_vmensaje = scopes.globals.AtCons_vmensaje + '\n' + 'Fecha de Traslado'}	
			if (ambulahortra == null)
				{scopes.globals.AtCons_vmensaje = scopes.globals.AtCons_vmensaje + '\n' + 'Hora de Traslado'}
	
			if ($falta == 1) 
				{scopes.globals.AtCons_vmensaje = scopes.globals.AtCons_vmensaje + '\n' + 'Completa los datos faltantes ahora?'
				var resp = globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,'Si', 'No')
				if (resp == 'Si')
					{return false}
				}
			}
	// FECHA pedido
	if (ambulafectra == null) 
		{ambulahortra = null
		return true}
		/*  {scopes.globals.AtCons_vmensaje = 'Debe ingresar Fecha de Traslado ';
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
		return false}		 */	
	f_fecha_dia = application.getServerTimeStamp()  
	var dia = f_fecha_dia.getDate()
	if (dia < 10)
		{dia = '0' + dia}
	var mes = f_fecha_dia.getMonth() + 1 
	if (mes < 10)
		{mes = '0' + mes}
	var anio = f_fecha_dia.getFullYear()
	var $hora = f_fecha_dia.getHours()
	if ($hora < 10)
		{$hora = '0' + $hora}
	var $min  = f_fecha_dia.getMinutes()
	if ($min< 10)
		{$min = '0' + $min}			
	ambulafecped  = anio + '' + mes + '' + dia	
	ambulahorped = $hora  + '' + $min
	
	dia = ambulafectra.getDate()
	if (dia < 10)
		{dia = '0' + dia}
	mes = ambulafectra.getMonth() + 1 
	if (mes < 10)
		{mes = '0' + mes}
	anio = ambulafectra.getFullYear()
	fectra_aux  = anio + '' + mes + '' + dia
	fectra_int = 0
	fectra_int = utils.stringToNumber(fectra_aux)
	if (fectra_int < ambulafecped)
		{scopes.globals.AtCons_vmensaje = 'Fecha de Traslado no puede ser menor que la fecha actual ';
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
		return false}
	
	// HORA pedido
	if (ambulahortra == null)  {return true}
		/*  {scopes.globals.AtCons_vmensaje = 'Debe ingresar Hora de Traslado ';
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
		return false}  */
	if (fectra_int == ambulafecped && ambulahortra < ambulahorped)
		{scopes.globals.AtCons_vmensaje = 'Hora de Traslado no puede ser menor que la hora actual ';
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
		return false}
	
	return true
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B42DD54C-E01F-4B9E-8590-CCD61215FA54"}
 */
function onFocusLost_minutos(event) {
if (ambulafectra == null )
	{scopes.globals.AtCons_vmensaje = 'Ingrese fecha de Traslado';
	globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
	elements.ambulafectra.requestFocus()
	return true}

if (f_hora_tra == null)  {
	scopes.globals.AtCons_vmensaje = 'Ingrese hora de Traslado';
	globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
	elements.hortra.requestFocus()
	return true}

if (f_min_tra == null)  {
	scopes.globals.AtCons_vmensaje = 'Ingrese minutos de Traslado ';
	globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
	return true}

if (fectra_int == ambulafecped && ambulahortra < ambulahorped)
	{scopes.globals.AtCons_vmensaje = 'Hora de Traslado no puede ser menor que la hora actual ';
	globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
	return true}

return true

}
