/**
 * @properties={typeid:24,uuid:"CBA16C03-DFF9-4F53-8FFE-7DF2565775AE"}
 */
function Antes_Circulante(event) {
	forms.seguquiambu_frm_menu_0.elements.btn_volveramenu.visible=false
	globals.segambu_vopcionfrm = 2
	forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex = globals.segambu_vopcionfrm
	forms.seguquiambu_frm_acirculante.controller.focusFirstField()
	forms.seguquiambu_frm_acirculante.elements.circu_ident.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"F2B86604-28DE-4779-BF82-4C3E946AB31D"}
 */
function Antes_Anestesiologo(event) {
	if (seguquiambu_vs_to_tbc_seguqui_new.getSize()>0) {
		globals.segambu_vanestesia = plugins.dialogs.showQuestionDialog('Seleccione una opción', 'Interviene el Anestesiólogo?     ', '  Si  ', '  No  ')
		
		//forms.frm_aanestesiologo_new.MuestroAnestesiologo()
		
		if(globals.segambu_vanestesia== '  Si  '){
			forms.seguquiambu_frm_menu_0.elements.btn_volveramenu.visible=false
			globals.segambu_vopcionfrm = 3
			forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex = globals.segambu_vopcionfrm
			forms.seguquiambu_frm_aanestesiologo.controller.focusFirstField()
			forms.seguquiambu_frm_aanestesiologo.elements.anest_ident.requestFocus()
		}else{
			seguquiambu_vs_to_tbc_seguqui_new.segtipohc = 1
			seguquiambu_vs_to_tbc_seguqui_new.segtipohc1 = 1
			seguquiambu_vs_to_tbc_seguqui_new.seganestident=1
			seguquiambu_vs_to_tbc_seguqui_new.seganestpulso=1
			seguquiambu_vs_to_tbc_seguqui_new.seganestseguri=1
			seguquiambu_vs_to_tbc_seguqui_new.seganestalergia=1
			seguquiambu_vs_to_tbc_seguqui_new.seganestviaaerea=1
			seguquiambu_vs_to_tbc_seguqui_new.seganestacceso=1
			seguquiambu_vs_to_tbc_seguqui_new.seganestsangre=1
			seguquiambu_vs_to_tbc_seguqui_new.seganestocular=1
			seguquiambu_vs_to_tbc_seguqui_new.seganestdecubi=1
			seguquiambu_vs_to_tbc_seguqui_new.seganestcomorb=1
			seguquiambu_vs_to_tbc_seguqui_new.seglegaanestini=999999
			seguquiambu_vs_to_tbc_seguqui_new.segtipoanestini=9
			
			try{
				databaseManager.saveData(seguquiambu_vs_to_tbc_seguqui_new.getRecord(1))
			}catch(msg){
				application.output(msg.message)
			}
			var error1 = ''
			var error2 = ''
			var array = databaseManager.getFailedRecords(seguquiambu_vs_to_tbc_seguqui_new)
			for (var i = 0; i < array.length; i++) {
				var record = array[i];
				var jstable = databaseManager.getTable(record);
				var tableSQLName = jstable.getSQLName();
				error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
				error2='Error en grabación '+record.exception;
				if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
					var thrown = record.exception.getValue()
				}
			}
			if(error1!=''){
				plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
				plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
				plugins.dialogs.showErrorDialog("Error en grabacion de Seguridad quirúrgica",error1,"Ok")
				plugins.dialogs.showErrorDialog("Error en grabacion de Seguridad quirúrgica",error2,"Ok")
			}
			seguquiambu_vs_to_tbc_seguqui_new.loadAllRecords()
			globals.segambu_vexistesegu = 'S'
			forms.seguquiambu_frm_menu_opciones.elements.btn_aanestesiologo.imageURL = "media:///check.png"	
		}
	} else {
		if (seguquiambu_vs_to_tbc_seguqui_new.seganestident == 0 && seguquiambu_vs_to_tbc_seguqui_new.seganestpulso == 0 && seguquiambu_vs_to_tbc_seguqui_new.seganestseguri == 0 && seguquiambu_vs_to_tbc_seguqui_new.seganestalergia == 0 && seguquiambu_vs_to_tbc_seguqui_new.seganestviaaerea == 0 && seguquiambu_vs_to_tbc_seguqui_new.seganestacceso == 0 && seguquiambu_vs_to_tbc_seguqui_new.seganestsangre == 0 && seguquiambu_vs_to_tbc_seguqui_new.seganestocular == 0 && seguquiambu_vs_to_tbc_seguqui_new.seganestdecubi == 0) {
			globals.segambu_vanestesia = plugins.dialogs.showQuestionDialog('Seleccione una opción', 'Interviene el Anestesiólogo?     ', '  Si  ', '  No  ')
			
			//forms.frm_aanestesiologo_new.MuestroAnestesiologo()
			
			if(globals.segambu_vanestesia== '  Si  '){
				forms.seguquiambu_frm_menu_0.elements.btn_volveramenu.visible=false
				globals.segambu_vopcionfrm = 3
				forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex = globals.segambu_vopcionfrm
				forms.seguquiambu_frm_aanestesiologo.controller.focusFirstField()
				forms.seguquiambu_frm_aanestesiologo.elements.anest_ident.requestFocus()
			}else{
				seguquiambu_vs_to_tbc_seguqui_new.newRecord()
				globals.InicializarDatosDeRelacion(seguquiambu_vs_to_tbc_seguqui_new,'asistencial','tbc_seguqui_new')
				seguquiambu_vs_to_tbc_seguqui_new.segtipohc=1
				seguquiambu_vs_to_tbc_seguqui_new.segtipohc1=1
				seguquiambu_vs_to_tbc_seguqui_new.seghistclinica= globals.vHiscli
				seguquiambu_vs_to_tbc_seguqui_new.seghistclinica1 = globals.vHiscli
				seguquiambu_vs_to_tbc_seguqui_new.segfechacarga  = globals.segambu_fecha_ingreso
				seguquiambu_vs_to_tbc_seguqui_new.seghoracarga = globals.segambu_hora_ingreso
				seguquiambu_vs_to_tbc_seguqui_new.segprotocolo = 0
				seguquiambu_vs_to_tbc_seguqui_new.seganestident=1
				seguquiambu_vs_to_tbc_seguqui_new.seganestpulso=1
				seguquiambu_vs_to_tbc_seguqui_new.seganestseguri=1
				seguquiambu_vs_to_tbc_seguqui_new.seganestalergia=1
				seguquiambu_vs_to_tbc_seguqui_new.seganestviaaerea=1
				seguquiambu_vs_to_tbc_seguqui_new.seganestacceso=1
				seguquiambu_vs_to_tbc_seguqui_new.seganestsangre=1
				seguquiambu_vs_to_tbc_seguqui_new.seganestocular=1
				seguquiambu_vs_to_tbc_seguqui_new.seganestdecubi=1
				seguquiambu_vs_to_tbc_seguqui_new.seganestcomorb=1
				seguquiambu_vs_to_tbc_seguqui_new.seglegaanestini=999999
				seguquiambu_vs_to_tbc_seguqui_new.segtipoanestini=9
				try{
					databaseManager.saveData(seguquiambu_vs_to_tbc_seguqui_new.getRecord(1))
				}catch(msg){
					application.output(msg.message)
				}
				var error3 = ''
				var error4 = ''
				var array1 = databaseManager.getFailedRecords(seguquiambu_vs_to_tbc_seguqui_new)
				for (i = 0; i < array1.length; i++) {
					var record1 = array1[i];
					var jstable1 = databaseManager.getTable(record1);
					var tableSQLName1 = jstable1.getSQLName();
					error3='Error de Grabación en Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
					error4='Error en grabación '+record1.exception;
					if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
						var thrown1 = record1.exception.getValue()
					}
				}
				if(error3!=''){
					plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
					plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown1)
					plugins.dialogs.showErrorDialog("Error en grabacion de Seguridad quirúrgica",error3,"Ok")
					plugins.dialogs.showErrorDialog("Error en grabacion de Seguridad quirúrgica",error4,"Ok")
				}
				//globals.MuestroTildeSeguqui('frm_aanestesiologo_new')
				seguquiambu_vs_to_tbc_seguqui_new.loadAllRecords()
				globals.segambu_vexistesegu = 'S'
				forms.seguquiambu_frm_menu_opciones.elements.btn_aanestesiologo.imageURL = "media:///check.png"	
			}
			
		} else {
			if (seguquiambu_vs_to_tbc_seguqui_new.seganestident == 1 && seguquiambu_vs_to_tbc_seguqui_new.seganestpulso == 1 && seguquiambu_vs_to_tbc_seguqui_new.seganestseguri == 1 && seguquiambu_vs_to_tbc_seguqui_new.seganestalergia == 1 && seguquiambu_vs_to_tbc_seguqui_new.seganestviaaerea == 1 && seguquiambu_vs_to_tbc_seguqui_new.seganestacceso == 1 && seguquiambu_vs_to_tbc_seguqui_new.seganestsangre == 1 && seguquiambu_vs_to_tbc_seguqui_new.seganestocular == 1 && seguquiambu_vs_to_tbc_seguqui_new.seganestdecubi == 1) {
				plugins.dialogs.showInfoDialog('Info', 'No interviene el Anestesiologo  ', 'Aceptar')
				forms.seguquiambu_frm_menu_opciones.elements.btn_aanestesiologo.imageURL = "media:///check.png"
			} else {
				globals.segambu_vanestesia = '  Si  '
				//forms.frm_aanestesiologo_new.MuestroAnestesiologo()
				forms.seguquiambu_frm_menu_0.elements.btn_volveramenu.visible=false
				globals.segambu_vopcionfrm = 3
				forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex = globals.segambu_vopcionfrm
				forms.seguquiambu_frm_aanestesiologo.controller.focusFirstField()
				forms.seguquiambu_frm_aanestesiologo.elements.anest_ident.requestFocus()
				
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"31738684-BACE-45D5-B794-C2F236A4A24A"}
 */
function Antes_Cirujano(event) {
	forms.seguquiambu_frm_menu_0.elements.btn_volveramenu.visible=false
	globals.segambu_vopcionfrm = 4
	forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex = globals.segambu_vopcionfrm
	forms.seguquiambu_frm_acirujano.controller.focusFirstField()
	forms.seguquiambu_frm_acirujano.elements.ciru_ident.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"6B92A1F6-97EC-4A71-A661-C6B6CFAEC171"}
 */
function Antes_Todo(event) {
	if (seguquiambu_vs_to_tbc_seguqui_new.getSize()>0) {
		if (seguquiambu_vs_to_tbc_seguqui_new.seganestident == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestpulso == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestseguri == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestalergia == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestviaaerea == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestacceso == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestsangre == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestocular == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestdecubi == 0) {
			plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Anestesiólogo - ANTES DE LA CIRUGIA ', 'Aceptar')
		} else {
			forms.seguquiambu_frm_menu_0.elements.btn_volveramenu.visible=false
			globals.segambu_vopcionfrm = 5
			forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex = globals.segambu_vopcionfrm
			forms.seguquiambu_frm_atodo.controller.focusFirstField()
		}
	} else {
		if(seguquiambu_vs_to_tbc_seguqui_new.segcirculbanio==0 || seguquiambu_vs_to_tbc_seguqui_new.segadmindiag==0 || seguquiambu_vs_to_tbc_seguqui_new.segcirculconsen==0||seguquiambu_vs_to_tbc_seguqui_new.segcirculestu==0||seguquiambu_vs_to_tbc_seguqui_new.segcirculhiscli==0||seguquiambu_vs_to_tbc_seguqui_new.segcirculident==0||seguquiambu_vs_to_tbc_seguqui_new.segcirculmate==0||seguquiambu_vs_to_tbc_seguqui_new.segcirculprote==0||seguquiambu_vs_to_tbc_seguqui_new.seglegacirculini==0){
			plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Circulante - ANTES DE LA CIRUGIA ', 'Aceptar')
		}else{
			forms.seguquiambu_frm_menu_0.elements.btn_volveramenu.visible=false
			globals.segambu_vopcionfrm = 5
			forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex = globals.segambu_vopcionfrm
			forms.seguquiambu_frm_atodo.controller.focusFirstField()
		}
	}
}

/**
 * @properties={typeid:24,uuid:"12ECFA98-1331-4E4D-A748-521269007014"}
 */
function Desp_Cirujano(event) {
	if (seguquiambu_vs_to_tbc_seguqui_new.getSize()>0) {
		if (seguquiambu_vs_to_tbc_seguqui_new.segcirculident == 0 || seguquiambu_vs_to_tbc_seguqui_new.segadmindiag == 0 || seguquiambu_vs_to_tbc_seguqui_new.segcirculbanio == 0 || seguquiambu_vs_to_tbc_seguqui_new.segcirculmate == 0 || seguquiambu_vs_to_tbc_seguqui_new.segcirculhiscli == 0 || seguquiambu_vs_to_tbc_seguqui_new.segcirculestu == 0 || seguquiambu_vs_to_tbc_seguqui_new.segcirculprote == 0 || seguquiambu_vs_to_tbc_seguqui_new.segcirculconsen == 0 || seguquiambu_vs_to_tbc_seguqui_new.seglegaadmin == 0 || seguquiambu_vs_to_tbc_seguqui_new.seglegacirculini == 0) {
			plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Circulante - ANTES DE LA CIRUGIA ', 'Aceptar')
		} else {
			if (seguquiambu_vs_to_tbc_seguqui_new.seganestident == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestpulso == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestseguri == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestalergia == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestviaaerea == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestacceso == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestsangre == 0 || seguquiambu_vs_to_tbc_seguqui_new.seglegaanestini == 0) {
				plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Anestesiólogo - ANTES DE LA CIRUGIA ', 'Aceptar')
			} else {
				if (seguquiambu_vs_to_tbc_seguqui_new.segciruident == 0 || seguquiambu_vs_to_tbc_seguqui_new.segciruantibiot == 0 || seguquiambu_vs_to_tbc_seguqui_new.segcirubisturi == 0 || seguquiambu_vs_to_tbc_seguqui_new.segciruincidentes == 0 || seguquiambu_vs_to_tbc_seguqui_new.seglegaciruini == 0) {
					plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Cirujano - ANTES DE LA CIRUGIA ', 'Aceptar')
				} else {
					if (seguquiambu_vs_to_tbc_seguqui_new.seganestrepasaini == 0 || seguquiambu_vs_to_tbc_seguqui_new.seginstrurepasaini == 0 || seguquiambu_vs_to_tbc_seguqui_new.seginstrugasasini == 0 || seguquiambu_vs_to_tbc_seguqui_new.seginstrupinzasini == 0 || seguquiambu_vs_to_tbc_seguqui_new.seglegaanestrepi == 0 || seguquiambu_vs_to_tbc_seguqui_new.seglegainstruini == 0) {
						plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones de Todo el Equipo - ANTES DE LA CIRUGIA ', 'Aceptar')
					} else {
						forms.seguquiambu_frm_menu_0.elements.btn_volveramenu.visible=false
						globals.segambu_vopcionfrm = 7
						forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex = globals.segambu_vopcionfrm
						forms.seguquiambu_frm_dcirujano.controller.focusFirstField()
						forms.seguquiambu_frm_dcirujano.elements.ciru_proced.requestFocus()
					}
				}
			}
		}
	} else {
		plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Circulante - ANTES DE LA CIRUGIA ', 'Aceptar')
	}
}

/**
 * @properties={typeid:24,uuid:"AEDE65A6-C8E8-4318-9B57-95CE95D4AF24"}
 */
function Desp_Anestesiologo(event) {
	if (seguquiambu_vs_to_tbc_seguqui_new.getSize()>0) {
		if (seguquiambu_vs_to_tbc_seguqui_new.segcirculident == 0 || seguquiambu_vs_to_tbc_seguqui_new.segadmindiag == 0 || seguquiambu_vs_to_tbc_seguqui_new.segcirculbanio == 0 || seguquiambu_vs_to_tbc_seguqui_new.segcirculmate == 0 || seguquiambu_vs_to_tbc_seguqui_new.segcirculhiscli == 0 || seguquiambu_vs_to_tbc_seguqui_new.segcirculestu == 0 || seguquiambu_vs_to_tbc_seguqui_new.segcirculprote == 0 || seguquiambu_vs_to_tbc_seguqui_new.segcirculconsen == 0 || seguquiambu_vs_to_tbc_seguqui_new.seglegaadmin == 0 || seguquiambu_vs_to_tbc_seguqui_new.seglegacirculini == 0) {
			plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Circulante - ANTES DE LA CIRUGIA ', 'Aceptar')
		} else {
			if (seguquiambu_vs_to_tbc_seguqui_new.seganestident == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestpulso == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestseguri == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestalergia == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestviaaerea == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestacceso == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestacceso == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestsangre == 0 || seguquiambu_vs_to_tbc_seguqui_new.seglegaanestini == 0) {
				plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Anestesiólogo - ANTES DE LA CIRUGIA ', 'Aceptar')
			} else {
				if (seguquiambu_vs_to_tbc_seguqui_new.segciruident == 0 || seguquiambu_vs_to_tbc_seguqui_new.segciruantibiot == 0 || seguquiambu_vs_to_tbc_seguqui_new.segcirubisturi == 0 || seguquiambu_vs_to_tbc_seguqui_new.segciruincidentes == 0 || seguquiambu_vs_to_tbc_seguqui_new.seglegaciruini == 0) {
					plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Cirujano - ANTES DE LA CIRUGIA ', 'Aceptar')
				} else {
					if (seguquiambu_vs_to_tbc_seguqui_new.seganestrepasaini == 0 || seguquiambu_vs_to_tbc_seguqui_new.seginstrurepasaini == 0 || seguquiambu_vs_to_tbc_seguqui_new.seginstrugasasini == 0 || seguquiambu_vs_to_tbc_seguqui_new.seginstrupinzasini == 0 || seguquiambu_vs_to_tbc_seguqui_new.seglegaanestrepi == 0 || seguquiambu_vs_to_tbc_seguqui_new.seglegainstruini == 0) {
						plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones de Todo el Equipo - ANTES DE LA CIRUGIA ', 'Aceptar')
					} else {
						if (seguquiambu_vs_to_tbc_seguqui_new.seganestident == 1 && seguquiambu_vs_to_tbc_seguqui_new.seganestpulso == 1 && seguquiambu_vs_to_tbc_seguqui_new.seganestseguri == 1 && seguquiambu_vs_to_tbc_seguqui_new.seganestalergia == 1) {
							plugins.dialogs.showInfoDialog('Info', 'No interviene el Anestesiologo  ', 'Aceptar')
							seguquiambu_vs_to_tbc_seguqui_new.seganestplan=1
							seguquiambu_vs_to_tbc_seguqui_new.seglegaanestfin=999999
							
							try{
								databaseManager.saveData(seguquiambu_vs_to_tbc_seguqui_new.getRecord(1))
							}catch(msg){
								application.output(msg.message)
							}
							var error1 = ''
							var error2 = ''
							var array = databaseManager.getFailedRecords(seguquiambu_vs_to_tbc_seguqui_new)
							for (var i = 0; i < array.length; i++) {
								var record = array[i];
								var jstable = databaseManager.getTable(record);
								var tableSQLName = jstable.getSQLName();
								error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
								error2='Error en grabación '+record.exception;
								if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
									var thrown = record.exception.getValue()
								}
							}
							if(error1!=''){
								plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
								plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
								plugins.dialogs.showErrorDialog("Error en grabacion de Seguridad quirúrgica",error1,"Ok")
								plugins.dialogs.showErrorDialog("Error en grabacion de Seguridad quirúrgica",error2,"Ok")
							}
							//globals.MuestroTildeSeguqui('frm_danestesiologo_new')
							seguquiambu_vs_to_tbc_seguqui_new.loadAllRecords()
							forms.seguquiambu_frm_menu_opciones.elements.btn_danestesiologo.imageURL = "media:///check.png"
						} else {
							forms.seguquiambu_frm_menu_0.elements.btn_volveramenu.visible=false
							globals.segambu_vopcionfrm = 8
							forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex = globals.segambu_vopcionfrm
							forms.seguquiambu_frm_danestesiologo.controller.focusFirstField()
							forms.seguquiambu_frm_danestesiologo.elements.anest_plan.requestFocus()
						}
					}
				}
			}
		}
	} else {
		plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Circulante - ANTES DE LA CIRUGIA ', 'Aceptar')
	}
}

/**
 * @properties={typeid:24,uuid:"81C16FA2-C364-4337-A5E4-8785F65DB2C8"}
 */
function Desp_Instrumentadora(event) {
	if (seguquiambu_vs_to_tbc_seguqui_new.getSize()>0) {
		if (seguquiambu_vs_to_tbc_seguqui_new.segcirculident == 0 || seguquiambu_vs_to_tbc_seguqui_new.segadmindiag == 0 || seguquiambu_vs_to_tbc_seguqui_new.segcirculbanio == 0 || seguquiambu_vs_to_tbc_seguqui_new.segcirculmate == 0 || seguquiambu_vs_to_tbc_seguqui_new.segcirculhiscli == 0 || seguquiambu_vs_to_tbc_seguqui_new.segcirculestu == 0 || seguquiambu_vs_to_tbc_seguqui_new.segcirculprote == 0 || seguquiambu_vs_to_tbc_seguqui_new.segcirculconsen == 0 || seguquiambu_vs_to_tbc_seguqui_new.seglegaadmin == 0 || seguquiambu_vs_to_tbc_seguqui_new.seglegacirculini == 0) {
			plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Circulante - ANTES DE LA CIRUGIA ', 'Aceptar')
		} else {
			if (seguquiambu_vs_to_tbc_seguqui_new.seganestident == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestpulso == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestseguri == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestalergia == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestviaaerea == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestacceso == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestacceso == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestsangre == 0 || seguquiambu_vs_to_tbc_seguqui_new.seglegaanestini == 0) {
				plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Anestesiólogo - ANTES DE LA CIRUGIA ', 'Aceptar')
			} else {
				if (seguquiambu_vs_to_tbc_seguqui_new.segciruident == 0 || seguquiambu_vs_to_tbc_seguqui_new.segciruantibiot == 0 || seguquiambu_vs_to_tbc_seguqui_new.segcirubisturi == 0 || seguquiambu_vs_to_tbc_seguqui_new.segciruincidentes == 0 || seguquiambu_vs_to_tbc_seguqui_new.seglegaciruini == 0) {
					plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Cirujano - ANTES DE LA CIRUGIA ', 'Aceptar')
				} else {
					if (seguquiambu_vs_to_tbc_seguqui_new.seganestrepasaini == 0 || seguquiambu_vs_to_tbc_seguqui_new.seginstrurepasaini == 0 || seguquiambu_vs_to_tbc_seguqui_new.seginstrugasasini == 0 || seguquiambu_vs_to_tbc_seguqui_new.seginstrupinzasini == 0 || seguquiambu_vs_to_tbc_seguqui_new.seglegaanestrepi == 0 || seguquiambu_vs_to_tbc_seguqui_new.seglegainstruini == 0) {
						plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones de Todo el Equipo - ANTES DE LA CIRUGIA ', 'Aceptar')
					} else {
						forms.seguquiambu_frm_menu_0.elements.btn_volveramenu.visible=false
						globals.segambu_vopcionfrm = 9
						forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex = globals.segambu_vopcionfrm
						forms.seguquiambu_frm_dinstrumentadora.controller.focusFirstField()
						forms.seguquiambu_frm_dinstrumentadora.elements.instru_gasasfin.requestFocus()
					}
				}
			}
		}
	} else {
		plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Circulante - ANTES DE LA CIRUGIA ', 'Aceptar')
	}
}

/**
 * @properties={typeid:24,uuid:"214F735A-449D-43DB-8494-8699255C9BA9"}
 */
function Desp_Circulante(event) {
	if (seguquiambu_vs_to_tbc_seguqui_new.getSize()>0) {
		if (seguquiambu_vs_to_tbc_seguqui_new.segcirculident == 0 || seguquiambu_vs_to_tbc_seguqui_new.segadmindiag == 0 || seguquiambu_vs_to_tbc_seguqui_new.segcirculbanio == 0 || seguquiambu_vs_to_tbc_seguqui_new.segcirculmate == 0 || seguquiambu_vs_to_tbc_seguqui_new.segcirculhiscli == 0 || seguquiambu_vs_to_tbc_seguqui_new.segcirculestu == 0 || seguquiambu_vs_to_tbc_seguqui_new.segcirculprote == 0 || seguquiambu_vs_to_tbc_seguqui_new.segcirculconsen == 0 || seguquiambu_vs_to_tbc_seguqui_new.seglegaadmin == 0 || seguquiambu_vs_to_tbc_seguqui_new.seglegacirculini == 0) {
			plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Circulante - ANTES DE LA CIRUGIA ', 'Aceptar')
		} else {
			if (seguquiambu_vs_to_tbc_seguqui_new.seganestident == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestpulso == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestseguri == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestalergia == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestviaaerea == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestacceso == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestacceso == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestsangre == 0 || seguquiambu_vs_to_tbc_seguqui_new.seglegaanestini == 0) {
				plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Anestesiólogo - ANTES DE LA CIRUGIA ', 'Aceptar')
			} else {
				if (seguquiambu_vs_to_tbc_seguqui_new.segciruident == 0 || seguquiambu_vs_to_tbc_seguqui_new.segciruantibiot == 0 || seguquiambu_vs_to_tbc_seguqui_new.segcirubisturi == 0 || seguquiambu_vs_to_tbc_seguqui_new.segciruincidentes == 0 || seguquiambu_vs_to_tbc_seguqui_new.seglegaciruini == 0) {
					plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Cirujano - ANTES DE LA CIRUGIA ', 'Aceptar')
				} else {
					if (seguquiambu_vs_to_tbc_seguqui_new.seganestrepasaini == 0 || seguquiambu_vs_to_tbc_seguqui_new.seginstrurepasaini == 0 || seguquiambu_vs_to_tbc_seguqui_new.seginstrugasasini == 0 || seguquiambu_vs_to_tbc_seguqui_new.seginstrupinzasini == 0 || seguquiambu_vs_to_tbc_seguqui_new.seglegaanestrepi == 0 || seguquiambu_vs_to_tbc_seguqui_new.seglegainstruini == 0) {
						plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones de Todo el Equipo - ANTES DE LA CIRUGIA ', 'Aceptar')
					} else {
						forms.seguquiambu_frm_menu_0.elements.btn_volveramenu.visible=false
						globals.segambu_vopcionfrm = 10
						forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex = globals.segambu_vopcionfrm
						forms.seguquiambu_frm_dcirculante.controller.focusFirstField()
						forms.seguquiambu_frm_dcirculante.elements.rad_muestras.requestFocus()
					}
				}
			}
		}
	} else {
		plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Circulante - ANTES DE LA CIRUGIA ', 'Aceptar')
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2B7EC9EF-6341-49E9-98A9-8A19D43308DF"}
 */
function onShowMenu(firstShow, event) {
	globals.seguquiambu_MuestroTildeSeguqui('seguquiambu_frm_acirculante')
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FC3EA402-BD3C-4124-A889-664C6D05E598"}
 */
function Antes_Incision(event) {
	if (seguquiambu_vs_to_tbc_seguqui_new.seganestident == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestpulso == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestseguri == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestalergia == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestviaaerea == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestacceso == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestsangre == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestocular == 0 || seguquiambu_vs_to_tbc_seguqui_new.seganestdecubi == 0) {
		plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Anestesiólogo - ANTES DE LA CIRUGIA ', 'Aceptar')
	} else {
		forms.seguquiambu_frm_menu_0.elements.btn_volveramenu.visible=false
		globals.segambu_vopcionfrm = 6
		forms.seguquiambu_frm_menu_0.elements.tabless_opciones.tabIndex = globals.segambu_vopcionfrm
		forms.seguquiambu_frm_aincisioncirculante.controller.focusFirstField()
		forms.seguquiambu_frm_aincisioncirculante.elements.segcirculequipres.requestFocus()
	}
}
