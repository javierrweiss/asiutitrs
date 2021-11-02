/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"32AB6C09-F301-4140-AA6C-226822B48FE1"}
 */
var f_diagnos = '\'\'';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8E99B18F-B6F8-4799-95FC-2B35FBB27880"}
 */
function onAction_btnBuscarDiagno(event) {
	scopes.globals.AtCons_eventSourceButton = 1;  
	openSearch();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"97DF578B-F8E9-4661-A177-C16006594A4D"}
 */
function onAction_txtBusquedaRapida(event) {

	scopes.globals.gbl_con_diagnostico = f_diagnos
	histpacdiagno = f_diagnos
	scopes.globals.gbl_diagnostico = null
	if(scopes.globals.gbl_con_diagnostico != '' && scopes.globals.gbl_con_diagnostico!= null){
		scopes.globals.AtCons_eventSourceButton = 0;
		openSearch()
	}
	else{
		//globals.DIALOGS.showWarningDialog("Atención",'Debe ingresar Nro. de diagnostico o la descripcion.',"Aceptar")
		histpacdiagno = null
		histpacpatolo = null
		}
	if  (histpacdiagno == '' ||
	histpacdiagno == null ||
	histpacdiagno == ' ')		
	{forms.AtCons_carga.elements.tabs.setTabFGColorAt(3, '#E60026')
		histpacpatolo = null}
	else{forms.AtCons_carga.elements.tabs.setTabFGColorAt(3,  '#000000')}
}

/**
 * @properties={typeid:24,uuid:"2315FD88-D97C-4668-A231-2C1FE691CCBC"}
 */
function openSearch() {
	scopes.globals.gbl_con_diagnostico = f_diagnos
	var win = application.createWindow("busca_diagnos",JSWindow.MODAL_DIALOG);	
    win.title= 'Búsqueda de Diagnosticos';
    win.resizable = false;
    win.show(forms.frm_tab_diagnostico);

    f_diagnos = scopes.globals.gbl_con_diagnostico
    histpacdiagno = scopes.globals.gbl_con_diagnostico
    histpacpatolo = scopes.globals.gbl_diagnostico  
    if  (histpacdiagno == '' ||
    	histpacdiagno == null ||
    	histpacdiagno == ' ')		
    	{forms.AtCons_carga.elements.tabs.setTabFGColorAt(3, '#E60026')
    		histpacpatolo = null}
    	else{forms.AtCons_carga.elements.tabs.setTabFGColorAt(3,  '#000000')
    		elements.diagno.enabled = false}  // TODO 25/06/2018 se saca evento on data change
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"79A35C53-C834-4F5D-AD34-E7CD0450D437"}
 */
function onShow(firstShow, event) {
if (histpacdiagno != null && histpacdiagno != '' && histpacdiagno != ' ')
{	scopes.globals.gbl_con_diagnostico = histpacdiagno
	scopes.globals.gbl_diagnostico = histpacpatolo
	f_diagnos = histpacdiagno
	elements.diagno.enabled = false}
 
if  (histpacdiagno == '' ||
	histpacdiagno == null ||
	histpacdiagno == ' ')		
		{forms.AtCons_carga.elements.tabs.setTabFGColorAt(3, '#E60026')
		histpacpatolo = null
		elements.diagno.enabled = true}
else{forms.AtCons_carga.elements.tabs.setTabFGColorAt(3,  '#000000')}
	//elements.diagno.requestFocus()
elements.btn_BuscarDiag.requestFocus()
}
