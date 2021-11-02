/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"55AF78DC-EB14-43B6-9187-444FC398607E"}
 */
function onAction_item(event) {
	globals.vtipo_aneste_ie = 0
	globals.vtipo_ciru_ie = 1
	globals.vtipo_instrumentadora_ie = 0
	globals.vtipo_neonato_ie = 0
	globals.vtipo_partero_ie = 0
	scopes.globals.fichaaneste_cirujano_cod = forms.fichaaneste_medicos_personal_scroll.foundset.medpercod
	scopes.globals.fichaaneste_cirujano_nombre = forms.fichaaneste_medicos_personal_scroll.foundset.medperapeynom
	switch(globals.vTipoMedico){
		case 1:globals.vtipo_ciru_ie    = forms.fichaaneste_medicos_personal_scroll.foundset.medpertipoie;break;
		case 2:globals.vtipo_partero_ie = forms.fichaaneste_medicos_personal_scroll.foundset.medpertipoie;break;
		case 3:globals.vtipo_neonato_ie = forms.fichaaneste_medicos_personal_scroll.foundset.medpertipoie;break;
		case 4:globals.vtipo_aneste_ie  = forms.fichaaneste_medicos_personal_scroll.foundset.medpertipoie;break;
		case 5:globals.vtipo_instrumentadora_ie = forms.fichaaneste_medicos_personal_scroll.foundset.medpertipoie;break;
	}
	//*// globals.protambu1400_vTipoIntrumentadora=globals.vtipo_instrumentadora_ie
   
	var name = application.getActiveWindow()
	name.getName()
	var $win = application.getWindow(name.getName())
	if($win != null){
		$win.hide()
		$win.destroy()
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F4066608-333D-49FF-A7F6-291C3538DEE1"}
 */
function onShow(firstShow, event) {
	controller.focusFirstField()
}

/**
 * @properties={typeid:24,uuid:"333EEAF6-8916-4517-A598-BDA61B4FDE95"}
 * @AllowToRunInFind
 */
function filtra() {
if(scopes.globals.fichaaneste_cirujano_alf == null)
	{var largo = 0
	esnumero = false}
else
	{var largo = scopes.globals.fichaaneste_cirujano_alf.length
	var esnumero = true}

for (var i = 0; i < largo && esnumero == true; i++){
   if (scopes.globals.fichaaneste_cirujano_alf.charCodeAt(i)< 48 || scopes.globals.fichaaneste_cirujano_alf.charCodeAt(i) > 57){
	   esnumero = false
   } 
}

foundset.find()
if(scopes.globals.fichaaneste_cirujano_alf == null)
	{scopes.globals.fichaaneste_cirujano_alf = ''}
if(esnumero){
	foundset.medpercod = '>= ' +  utils.stringToNumber(scopes.globals.fichaaneste_cirujano_alf.valueOf())
}else{
	foundset.medperapeynom = '>' +  scopes.globals.fichaaneste_cirujano_alf		
}	          

var cuantos = foundset.search()	

if(esnumero){
	foundset.sort('medpercod asc')
}else{
	foundset.sort('medperapeynom asc')	
}
}
