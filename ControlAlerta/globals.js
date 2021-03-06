/**
 * // TODO generated, please specify type and doc for the params
 * @param {number} tipo
 * @param {number} hclin
 * @param {number} muestra   (0= no muestra  1= muestra )
 * @param {number} sicarga   (0= no carga    1= si carga)
 * 
 * @properties={typeid:24,uuid:"9D44F95E-DD95-4362-8A48-B6BB94D9572F"}
 * @AllowToRunInFind
 */
function ControlAlerta(tipo, hclin, muestra, sicarga) {
	var fs1 = databaseManager.getFoundSet("asistencial", "tbc_alerta")
	fs1.find()
	fs1['aler_tipadmi'] = tipo
	fs1['aler_histclin'] = hclin
	fs1.search()
	globals.vtipo=tipo
	//plugins.dialogs.showInfoDialog('Cantidad registros', fs1.getSize(), 'Continuar')
	if (fs1.getSize() > 0) {
		var mensaje = BuscarCamposCargados(fs1)
		if (mensaje != '' && muestra == 1) {
			plugins.dialogs.showInfoDialog('Alerta', mensaje, '  OK  ')
			return 1
		}
		if (mensaje == '' && sicarga == 1) {
			globals.vcargaalerta = plugins.dialogs.showQuestionDialog('Alerta', ' El paciente no tiene Alertas asistenciales, desea cargarle patología/s? ', ' Sí ', ' No ')
			if (globals.vcargaalerta == ' Sí '){
				globals.vhclin9 = hclin
				//globals.vhisclini = hclin.toString()
				//application.showForm(forms.frm_tablesalerta)
				var win = application.createWindow('form',JSWindow.MODAL_DIALOG)
				//win.setLocation(100,100)  
				//win.setSize(1407,1221)
				win.title = 'Alerta asistencial'
				win.resizable = false
				if (tipo == 0){
					win.show(forms.frm_tablesalerta)
				}else{
					win.show(forms.frm_tablesalerta_ambulatorio)
				}
				//forms.frm_tablesalerta.controller.show(win)
				return 0
			}
		}
	}
	else {
		if (sicarga == 1) {
			globals.vcargaalerta = plugins.dialogs.showQuestionDialog('Alerta', ' El paciente no tiene Alertas asistenciales, desea cargarle patología/s? ', ' Si ', ' No ')
			if (globals.vcargaalerta == ' Si '){
				globals.vhclin9 = hclin
				//globals.vhisclini = hclin.toString()
				//application.showForm(forms.frm_tablesalerta)
				var win1 = application.createWindow('form',JSWindow.MODAL_DIALOG)
				//win1.setLocation(100,100)  
				//win1.setSize(1407,1221)
				//win1.resizable = false
				if (tipo == 0){
					win1.show(forms.frm_tablesalerta)
				}else{
					win1.show(forms.frm_tablesalerta_ambulatorio)
				}
								
				return 0
			}
		}
	}
	return 0
}

/**
 * @properties={typeid:24,uuid:"497CA38F-B5EC-4906-B1B2-062462F340D6"}
 */
function BuscarCamposCargados(fs1) {
	var mensaje = ''
	var mensaje1 = '   PACIENTE CON ALERTA asistencial   ' + '\n'
	var mensaje2 = ''
	if (fs1['aler_tipaler_1'] == 1)  mensaje2 += ' - ' + 'Alérgico a ' + fs1['aler_alergico'] + '\n'
	if (fs1['aler_tipaler_2'] == 1)  mensaje2 += ' - ' + 'Hipertenso' + '\n'
	if (fs1['aler_tipaler_3'] == 1)  mensaje2 += ' - ' + 'Farmacodependiente' + '\n'
	if (fs1['aler_tipaler_4'] == 1)  mensaje2 += ' - ' + 'Diabético' + '\n'
	if (fs1['aler_tipaler_5'] == 1)  mensaje2 += ' - ' + 'Epiléptico' + '\n'
	if (fs1['aler_tipaler_6'] == 1)  mensaje2 += ' - ' + 'Con Glaucoma' + '\n'
	if (fs1['aler_tipaler_7'] == 1)  mensaje2 += ' - ' + 'Inmunodeprimido' + '\n'
	if (fs1['aler_tipaler_8'] == 1)  mensaje2 += ' - ' + 'Anticoagulado' + '\n'
	if (fs1['aler_tipaler_9'] == 1)  mensaje2 += ' - ' + 'Coronario' + '\n'
	if (fs1['aler_tipaler_10'] == 1) mensaje2 += ' - ' + 'Asmático' + '\n'
	if (fs1['aler_tipaler_11'] == 1) mensaje2 += ' - ' + 'Testigo de Jehova' + '\n'
	if (fs1['aler_tipaler_12'] == 1) mensaje2 += ' - ' + 'Con Marcapasos' + '\n'
	if (fs1['aler_tipaler_13'] == 1) mensaje2 += ' - ' + 'Con Prótesis metalica' + '\n'
	if (fs1['aler_tipaler_14'] == 1) mensaje2 += ' - ' + 'Obesidad clase II' + '\n'
	if (fs1['aler_tipaler_15'] == 1) mensaje2 += ' - ' + 'Obesidad clase III' + '\n'
	if (fs1['aler_tipaler_16'] == 1) mensaje2 += ' - ' + 'Insuficiencia renal' + '\n'
	if (fs1['aler_tipaler_17'] == 1) mensaje2 += ' - ' + 'Escaras' + '\n'
	if (fs1['aler_tipaler_18'] == 1) mensaje2 += ' - ' + 'Trombosis venosa profunda' + '\n'
	if (fs1['aler_tipaler_19'] == 1) mensaje2 += ' - ' + 'Alerta epidemiológica' + '\n'
	if (fs1['aler_tipaler_20'] == 1) mensaje2 += ' - ' + 'Rechazo Terapéutico' + '\n'
	if (fs1['aler_tipaler_21'] == 1) mensaje2 += ' - ' + 'Alerta Social' + '\n'
	if (fs1['aler_tipaler_22'] == 1) mensaje2 += ' - ' + 'Alérgico a la Penicilina' + '\n'
	if (mensaje2 != '') {
		mensaje = mensaje1 + mensaje2 + '\n'
	}
	return mensaje
}
