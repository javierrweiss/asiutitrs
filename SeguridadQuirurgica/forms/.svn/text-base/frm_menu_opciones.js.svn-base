/**
 * @properties={typeid:24,uuid:"1590E250-3A56-4C69-8347-F2784AE70AB4"}
 */
function Antes_Circulante(event) {
	forms.frm_menu_0.elements.btn_volveramenu.visible=false
	globals.vopcionfrm = 2
	forms.frm_menu_0.elements.tabless_opciones.tabIndex = globals.vopcionfrm
	forms.frm_acirculante_new.controller.focusFirstField()
	forms.frm_acirculante_new.elements.circu_ident.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"F7A0793A-8C3A-4F8F-8A7F-4CA64F15AAA9"}
 */
function Antes_Anestesiologo(event) {
	if (globals.vexistesegu == 'N') {
		globals.vanestesia = plugins.dialogs.showQuestionDialog('Seleccione una opción', 'Interviene el Anestesiólogo?     ', '  Si  ', '  No  ')
		
		//forms.frm_aanestesiologo_new.MuestroAnestesiologo()
		
		if(globals.vanestesia== '  Si  '){
			forms.frm_menu_0.elements.btn_volveramenu.visible=false
			globals.vopcionfrm = 3
			forms.frm_menu_0.elements.tabless_opciones.tabIndex = globals.vopcionfrm
			forms.frm_aanestesiologo_new.controller.focusFirstField()
			forms.frm_aanestesiologo_new.elements.anest_ident.requestFocus()
		}else{
			vs_to_tbc_seguqui_new.newRecord()
			globals.InicializarDatosDeRelacion(vs_to_tbc_seguqui_new,'asistencial','tbc_seguqui_new')
			vs_to_tbc_seguqui_new.segtipohc = 0
			vs_to_tbc_seguqui_new.segtipohc1 = 0
			vs_to_tbc_seguqui_new.seghistclinica= globals.vhiscli
			vs_to_tbc_seguqui_new.seghistclinica1 = globals.vhiscli
			var fec = application.getServerTimeStamp()
			var fecha_actual = application.getServerTimeStamp()
			var anio=fecha_actual.getFullYear()
			var mes=fecha_actual.getMonth()+1
			var mes_ed
			if((fecha_actual.getMonth()+1)> 9){
				mes_ed=mes
			}else{
				mes_ed="0"+mes
			}
			var dia=fecha_actual.getDate()
			var dia_ed
			if(fecha_actual.getDate()>9){
				dia_ed=dia
			}else{
				dia_ed="0"+dia
			}
			var fecha_hoy=anio.toString()+mes_ed.toString()+dia_ed.toString()
			vs_to_tbc_seguqui_new.segfechacarga  = fecha_hoy
			vs_to_tbc_seguqui_new.seghoracarga = globals.FormatearFecha(fec,'HHMM')
			vs_to_tbc_seguqui_new.segprotocolo = 0
			vs_to_tbc_seguqui_new.seganestident=1
			vs_to_tbc_seguqui_new.seganestpulso=1
			vs_to_tbc_seguqui_new.seganestseguri=1
			vs_to_tbc_seguqui_new.seganestalergia=1
			vs_to_tbc_seguqui_new.seganestviaaerea=1
			vs_to_tbc_seguqui_new.seganestacceso=1
			vs_to_tbc_seguqui_new.seganestsangre=1
			vs_to_tbc_seguqui_new.seganestocular=1
			vs_to_tbc_seguqui_new.seganestdecubi=1
			vs_to_tbc_seguqui_new.seganestcomorb=1
			vs_to_tbc_seguqui_new.seglegaanestini=999999
			vs_to_tbc_seguqui_new.segtipoanestini=9
			databaseManager.saveData(vs_to_tbc_seguqui_new.getRecord(1))
			vs_to_tbc_seguqui_new.loadAllRecords()
			globals.vexistesegu = 'S'
			forms.frm_menu_opciones.elements.btn_aanestesiologo.imageURL = "media:///check.png"	
		}
	} else {
		if (vs_to_tbc_seguqui_new.seganestident == 0 && vs_to_tbc_seguqui_new.seganestpulso == 0 && vs_to_tbc_seguqui_new.seganestseguri == 0 && vs_to_tbc_seguqui_new.seganestalergia == 0 && vs_to_tbc_seguqui_new.seganestviaaerea == 0 && vs_to_tbc_seguqui_new.seganestacceso == 0 && vs_to_tbc_seguqui_new.seganestsangre == 0 && vs_to_tbc_seguqui_new.seganestocular == 0 && vs_to_tbc_seguqui_new.seganestdecubi == 0) {
			globals.vanestesia = plugins.dialogs.showQuestionDialog('Seleccione una opción', 'Interviene el Anestesiólogo?     ', '  Si  ', '  No  ')
			
			//forms.frm_aanestesiologo_new.MuestroAnestesiologo()
			
			if(globals.vanestesia== '  Si  '){
				forms.frm_menu_0.elements.btn_volveramenu.visible=false
				globals.vopcionfrm = 3
				forms.frm_menu_0.elements.tabless_opciones.tabIndex = globals.vopcionfrm
				forms.frm_aanestesiologo_new.controller.focusFirstField()
				forms.frm_aanestesiologo_new.elements.anest_ident.requestFocus()
			}else{
				vs_to_tbc_seguqui_new.seganestident=1
				vs_to_tbc_seguqui_new.seganestpulso=1
				vs_to_tbc_seguqui_new.seganestseguri=1
				vs_to_tbc_seguqui_new.seganestalergia=1
				vs_to_tbc_seguqui_new.seganestviaaerea=1
				vs_to_tbc_seguqui_new.seganestacceso=1
				vs_to_tbc_seguqui_new.seganestsangre=1
				vs_to_tbc_seguqui_new.seganestocular=1
				vs_to_tbc_seguqui_new.seganestdecubi=1
				vs_to_tbc_seguqui_new.seganestcomorb=1
				vs_to_tbc_seguqui_new.seglegaanestini=999999
				vs_to_tbc_seguqui_new.segtipoanestini=9
				databaseManager.saveData(vs_to_tbc_seguqui_new.getRecord(1))
				//globals.MuestroTildeSeguqui('frm_aanestesiologo_new')
				vs_to_tbc_seguqui_new.loadAllRecords()
				globals.vexistesegu = 'S'
				forms.frm_menu_opciones.elements.btn_aanestesiologo.imageURL = "media:///check.png"	
			}
			
		} else {
			if (vs_to_tbc_seguqui_new.seganestident == 1 && vs_to_tbc_seguqui_new.seganestpulso == 1 && vs_to_tbc_seguqui_new.seganestseguri == 1 && vs_to_tbc_seguqui_new.seganestalergia == 1 && vs_to_tbc_seguqui_new.seganestviaaerea == 1 && vs_to_tbc_seguqui_new.seganestacceso == 1 && vs_to_tbc_seguqui_new.seganestsangre == 1 && vs_to_tbc_seguqui_new.seganestocular == 1 && vs_to_tbc_seguqui_new.seganestdecubi == 1) {
				plugins.dialogs.showInfoDialog('Info', 'No interviene el Anestesiologo  ', 'Aceptar')
				forms.frm_menu_opciones.elements.btn_aanestesiologo.imageURL = "media:///check.png"
			} else {
				globals.vanestesia = '  Si  '
				//forms.frm_aanestesiologo_new.MuestroAnestesiologo()
				forms.frm_menu_0.elements.btn_volveramenu.visible=false
				globals.vopcionfrm = 3
				forms.frm_menu_0.elements.tabless_opciones.tabIndex = globals.vopcionfrm
				forms.frm_aanestesiologo_new.controller.focusFirstField()
				forms.frm_aanestesiologo_new.elements.anest_ident.requestFocus()
				
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"0898693F-D30E-48AC-9474-E17B85BD3C1D"}
 */
function Antes_Cirujano(event) {
	forms.frm_menu_0.elements.btn_volveramenu.visible=false
	globals.vopcionfrm = 4
	forms.frm_menu_0.elements.tabless_opciones.tabIndex = globals.vopcionfrm
	forms.frm_acirujano_new.controller.focusFirstField()
	forms.frm_acirujano_new.elements.ciru_ident.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"54373686-28CC-4395-8C4B-C65B763A20D5"}
 */
function Antes_Todo(event) {
	if (globals.vexistesegu == 'S') {
		if (vs_to_tbc_seguqui_new.seganestident == 0 || vs_to_tbc_seguqui_new.seganestpulso == 0 || vs_to_tbc_seguqui_new.seganestseguri == 0 || vs_to_tbc_seguqui_new.seganestalergia == 0 || vs_to_tbc_seguqui_new.seganestviaaerea == 0 || vs_to_tbc_seguqui_new.seganestacceso == 0 || vs_to_tbc_seguqui_new.seganestsangre == 0 || vs_to_tbc_seguqui_new.seganestocular == 0 || vs_to_tbc_seguqui_new.seganestdecubi == 0) {
			plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Anestesiólogo - ANTES DE LA CIRUGIA ', 'Aceptar')
		} else {
			forms.frm_menu_0.elements.btn_volveramenu.visible=false
			globals.vopcionfrm = 5
			forms.frm_menu_0.elements.tabless_opciones.tabIndex = globals.vopcionfrm
			forms.frm_atodo_new.controller.focusFirstField()
		}
	} else {
		plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Circulante - ANTES DE LA CIRUGIA ', 'Aceptar')
	}
}

/**
 * @properties={typeid:24,uuid:"BF9C49E4-834F-4664-878B-964AF27E29E9"}
 */
function Desp_Cirujano(event) {
	if (globals.vexistesegu == 'S') {
		if (vs_to_tbc_seguqui_new.segcirculident == 0 || vs_to_tbc_seguqui_new.segadmindiag == 0 || vs_to_tbc_seguqui_new.segcirculbanio == 0 || vs_to_tbc_seguqui_new.segcirculmate == 0 || vs_to_tbc_seguqui_new.segcirculhiscli == 0 || vs_to_tbc_seguqui_new.segcirculestu == 0 || vs_to_tbc_seguqui_new.segcirculprote == 0 || vs_to_tbc_seguqui_new.segcirculconsen == 0 || vs_to_tbc_seguqui_new.seglegaadmin == 0 || vs_to_tbc_seguqui_new.seglegacirculini == 0) {
			plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Circulante - ANTES DE LA CIRUGIA ', 'Aceptar')
		} else {
			if (vs_to_tbc_seguqui_new.seganestident == 0 || vs_to_tbc_seguqui_new.seganestpulso == 0 || vs_to_tbc_seguqui_new.seganestseguri == 0 || vs_to_tbc_seguqui_new.seganestalergia == 0 || vs_to_tbc_seguqui_new.seganestviaaerea == 0 || vs_to_tbc_seguqui_new.seganestacceso == 0 || vs_to_tbc_seguqui_new.seganestsangre == 0 || vs_to_tbc_seguqui_new.seglegaanestini == 0) {
				plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Anestesiólogo - ANTES DE LA CIRUGIA ', 'Aceptar')
			} else {
				if (vs_to_tbc_seguqui_new.segciruident == 0 || vs_to_tbc_seguqui_new.segciruantibiot == 0 || vs_to_tbc_seguqui_new.segcirubisturi == 0 || vs_to_tbc_seguqui_new.segciruincidentes == 0 || vs_to_tbc_seguqui_new.seglegaciruini == 0) {
					plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Cirujano - ANTES DE LA CIRUGIA ', 'Aceptar')
				} else {
					if (vs_to_tbc_seguqui_new.seganestrepasaini == 0 || vs_to_tbc_seguqui_new.seginstrurepasaini == 0 || vs_to_tbc_seguqui_new.seginstrugasasini == 0 || vs_to_tbc_seguqui_new.seginstrupinzasini == 0 || vs_to_tbc_seguqui_new.seglegaanestrepi == 0 || vs_to_tbc_seguqui_new.seglegainstruini == 0) {
						plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones de Todo el Equipo - ANTES DE LA CIRUGIA ', 'Aceptar')
					} else {
						forms.frm_menu_0.elements.btn_volveramenu.visible=false
						globals.vopcionfrm = 7
						forms.frm_menu_0.elements.tabless_opciones.tabIndex = globals.vopcionfrm
						forms.frm_dcirujano_new.controller.focusFirstField()
						forms.frm_dcirujano_new.elements.ciru_proced.requestFocus()
					}
				}
			}
		}
	} else {
		plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Circulante - ANTES DE LA CIRUGIA ', 'Aceptar')
	}
}

/**
 * @properties={typeid:24,uuid:"E8F664B4-E419-4666-A430-8BCEA1377039"}
 */
function Desp_Anestesiologo(event) {
	if (globals.vexistesegu == 'S') {
		if (vs_to_tbc_seguqui_new.segcirculident == 0 || vs_to_tbc_seguqui_new.segadmindiag == 0 || vs_to_tbc_seguqui_new.segcirculbanio == 0 || vs_to_tbc_seguqui_new.segcirculmate == 0 || vs_to_tbc_seguqui_new.segcirculhiscli == 0 || vs_to_tbc_seguqui_new.segcirculestu == 0 || vs_to_tbc_seguqui_new.segcirculprote == 0 || vs_to_tbc_seguqui_new.segcirculconsen == 0 || vs_to_tbc_seguqui_new.seglegaadmin == 0 || vs_to_tbc_seguqui_new.seglegacirculini == 0) {
			plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Circulante - ANTES DE LA CIRUGIA ', 'Aceptar')
		} else {
			if (vs_to_tbc_seguqui_new.seganestident == 0 || vs_to_tbc_seguqui_new.seganestpulso == 0 || vs_to_tbc_seguqui_new.seganestseguri == 0 || vs_to_tbc_seguqui_new.seganestalergia == 0 || vs_to_tbc_seguqui_new.seganestviaaerea == 0 || vs_to_tbc_seguqui_new.seganestacceso == 0 || vs_to_tbc_seguqui_new.seganestacceso == 0 || vs_to_tbc_seguqui_new.seganestsangre == 0 || vs_to_tbc_seguqui_new.seglegaanestini == 0) {
				plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Anestesiólogo - ANTES DE LA CIRUGIA ', 'Aceptar')
			} else {
				if (vs_to_tbc_seguqui_new.segciruident == 0 || vs_to_tbc_seguqui_new.segciruantibiot == 0 || vs_to_tbc_seguqui_new.segcirubisturi == 0 || vs_to_tbc_seguqui_new.segciruincidentes == 0 || vs_to_tbc_seguqui_new.seglegaciruini == 0) {
					plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Cirujano - ANTES DE LA CIRUGIA ', 'Aceptar')
				} else {
					if (vs_to_tbc_seguqui_new.seganestrepasaini == 0 || vs_to_tbc_seguqui_new.seginstrurepasaini == 0 || vs_to_tbc_seguqui_new.seginstrugasasini == 0 || vs_to_tbc_seguqui_new.seginstrupinzasini == 0 || vs_to_tbc_seguqui_new.seglegaanestrepi == 0 || vs_to_tbc_seguqui_new.seglegainstruini == 0) {
						plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones de Todo el Equipo - ANTES DE LA CIRUGIA ', 'Aceptar')
					} else {
						if (vs_to_tbc_seguqui_new.seganestident == 1 && vs_to_tbc_seguqui_new.seganestpulso == 1 && vs_to_tbc_seguqui_new.seganestseguri == 1 && vs_to_tbc_seguqui_new.seganestalergia == 1) {
							plugins.dialogs.showInfoDialog('Info', 'No interviene el Anestesiologo  ', 'Aceptar')
							vs_to_tbc_seguqui_new.seganestplan=1
							vs_to_tbc_seguqui_new.seglegaanestfin=999999
							databaseManager.saveData(vs_to_tbc_seguqui_new.getRecord(1))
							//globals.MuestroTildeSeguqui('frm_danestesiologo_new')
							vs_to_tbc_seguqui_new.loadAllRecords()
							forms.frm_menu_opciones.elements.btn_danestesiologo.imageURL = "media:///check.png"
						} else {
							forms.frm_menu_0.elements.btn_volveramenu.visible=false
							globals.vopcionfrm = 8
							forms.frm_menu_0.elements.tabless_opciones.tabIndex = globals.vopcionfrm
							forms.frm_danestesiologo_new.controller.focusFirstField()
							forms.frm_danestesiologo_new.elements.anest_plan.requestFocus()
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
 * @properties={typeid:24,uuid:"F786687F-9F66-43F2-8A3E-9DF5FE22B0D3"}
 */
function Desp_Instrumentadora(event) {
	if (globals.vexistesegu == 'S') {
		if (vs_to_tbc_seguqui_new.segcirculident == 0 || vs_to_tbc_seguqui_new.segadmindiag == 0 || vs_to_tbc_seguqui_new.segcirculbanio == 0 || vs_to_tbc_seguqui_new.segcirculmate == 0 || vs_to_tbc_seguqui_new.segcirculhiscli == 0 || vs_to_tbc_seguqui_new.segcirculestu == 0 || vs_to_tbc_seguqui_new.segcirculprote == 0 || vs_to_tbc_seguqui_new.segcirculconsen == 0 || vs_to_tbc_seguqui_new.seglegaadmin == 0 || vs_to_tbc_seguqui_new.seglegacirculini == 0) {
			plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Circulante - ANTES DE LA CIRUGIA ', 'Aceptar')
		} else {
			if (vs_to_tbc_seguqui_new.seganestident == 0 || vs_to_tbc_seguqui_new.seganestpulso == 0 || vs_to_tbc_seguqui_new.seganestseguri == 0 || vs_to_tbc_seguqui_new.seganestalergia == 0 || vs_to_tbc_seguqui_new.seganestviaaerea == 0 || vs_to_tbc_seguqui_new.seganestacceso == 0 || vs_to_tbc_seguqui_new.seganestacceso == 0 || vs_to_tbc_seguqui_new.seganestsangre == 0 || vs_to_tbc_seguqui_new.seglegaanestini == 0) {
				plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Anestesiólogo - ANTES DE LA CIRUGIA ', 'Aceptar')
			} else {
				if (vs_to_tbc_seguqui_new.segciruident == 0 || vs_to_tbc_seguqui_new.segciruantibiot == 0 || vs_to_tbc_seguqui_new.segcirubisturi == 0 || vs_to_tbc_seguqui_new.segciruincidentes == 0 || vs_to_tbc_seguqui_new.seglegaciruini == 0) {
					plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Cirujano - ANTES DE LA CIRUGIA ', 'Aceptar')
				} else {
					if (vs_to_tbc_seguqui_new.seganestrepasaini == 0 || vs_to_tbc_seguqui_new.seginstrurepasaini == 0 || vs_to_tbc_seguqui_new.seginstrugasasini == 0 || vs_to_tbc_seguqui_new.seginstrupinzasini == 0 || vs_to_tbc_seguqui_new.seglegaanestrepi == 0 || vs_to_tbc_seguqui_new.seglegainstruini == 0) {
						plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones de Todo el Equipo - ANTES DE LA CIRUGIA ', 'Aceptar')
					} else {
						forms.frm_menu_0.elements.btn_volveramenu.visible=false
						globals.vopcionfrm = 9
						forms.frm_menu_0.elements.tabless_opciones.tabIndex = globals.vopcionfrm
						forms.frm_dinstrumentadora_new.controller.focusFirstField()
						forms.frm_dinstrumentadora_new.elements.instru_gasasfin.requestFocus()
					}
				}
			}
		}
	} else {
		plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Circulante - ANTES DE LA CIRUGIA ', 'Aceptar')
	}
}

/**
 * @properties={typeid:24,uuid:"21784360-5BC4-400E-9738-492767EBA838"}
 */
function Desp_Circulante(event) {
	if (globals.vexistesegu == 'S') {
		if (vs_to_tbc_seguqui_new.segcirculident == 0 || vs_to_tbc_seguqui_new.segadmindiag == 0 || vs_to_tbc_seguqui_new.segcirculbanio == 0 || vs_to_tbc_seguqui_new.segcirculmate == 0 || vs_to_tbc_seguqui_new.segcirculhiscli == 0 || vs_to_tbc_seguqui_new.segcirculestu == 0 || vs_to_tbc_seguqui_new.segcirculprote == 0 || vs_to_tbc_seguqui_new.segcirculconsen == 0 || vs_to_tbc_seguqui_new.seglegaadmin == 0 || vs_to_tbc_seguqui_new.seglegacirculini == 0) {
			plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Circulante - ANTES DE LA CIRUGIA ', 'Aceptar')
		} else {
			if (vs_to_tbc_seguqui_new.seganestident == 0 || vs_to_tbc_seguqui_new.seganestpulso == 0 || vs_to_tbc_seguqui_new.seganestseguri == 0 || vs_to_tbc_seguqui_new.seganestalergia == 0 || vs_to_tbc_seguqui_new.seganestviaaerea == 0 || vs_to_tbc_seguqui_new.seganestacceso == 0 || vs_to_tbc_seguqui_new.seganestacceso == 0 || vs_to_tbc_seguqui_new.seganestsangre == 0 || vs_to_tbc_seguqui_new.seglegaanestini == 0) {
				plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Anestesiólogo - ANTES DE LA CIRUGIA ', 'Aceptar')
			} else {
				if (vs_to_tbc_seguqui_new.segciruident == 0 || vs_to_tbc_seguqui_new.segciruantibiot == 0 || vs_to_tbc_seguqui_new.segcirubisturi == 0 || vs_to_tbc_seguqui_new.segciruincidentes == 0 || vs_to_tbc_seguqui_new.seglegaciruini == 0) {
					plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Cirujano - ANTES DE LA CIRUGIA ', 'Aceptar')
				} else {
					if (vs_to_tbc_seguqui_new.seganestrepasaini == 0 || vs_to_tbc_seguqui_new.seginstrurepasaini == 0 || vs_to_tbc_seguqui_new.seginstrugasasini == 0 || vs_to_tbc_seguqui_new.seginstrupinzasini == 0 || vs_to_tbc_seguqui_new.seglegaanestrepi == 0 || vs_to_tbc_seguqui_new.seglegainstruini == 0) {
						plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones de Todo el Equipo - ANTES DE LA CIRUGIA ', 'Aceptar')
					} else {
						forms.frm_menu_0.elements.btn_volveramenu.visible=false
						globals.vopcionfrm = 10
						forms.frm_menu_0.elements.tabless_opciones.tabIndex = globals.vopcionfrm
						forms.frm_dcirculante_new.controller.focusFirstField()
						forms.frm_dcirculante_new.elements.rad_muestras.requestFocus()
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
 * @properties={typeid:24,uuid:"89A226AE-9D7D-4459-8D15-CCD6DAD8BB8D"}
 */
function onShowMenu(firstShow, event) {
	//globals.MuestroTildeSeguqui('frm_acirculante_new')
}

/**
 * @properties={typeid:24,uuid:"36E225DE-9EAA-4265-8A10-71C599EF8454"}
 */
function onLoadMenu(event) {
	//globals.ControlAlerta(globals.vtipo, globals.vhiscli, 1, 1)
	globals.vtipohist = 0
	//globals.vhiscli = 0
	//globals.vhisclinica = ''
	
	elements.lbl_antes.visible = false
	elements.lbl_despues.visible = false
	elements.btn_acirculante.visible = false
	elements.btn_aanestesiologo.visible = false
	elements.btn_acirujano.visible = false
	elements.btn_atodo.visible = false
	elements.btn_dcirujano.visible = false
	elements.btn_danestesiologo.visible = false
	elements.btn_dinstrumentadora.visible = false
	elements.btn_dcirculante.visible = false
}

/**
 * @properties={typeid:24,uuid:"3C2DC52D-2AB6-4546-8CE6-908C00336F4D"}
 */
function OtroPaciente(event) {
	//onLoadMenu(event)
	//elements.vhiscli.enabled = true
	//elements.vhiscli.editable = true
	//application.showForm(forms.frm_ingreso)
	//history.back()
	application.showForm("frm_menu_principal")
}

/**
 * @properties={typeid:24,uuid:"4010332B-9276-4297-86D1-235B62D7F840"}
 * @AllowToRunInFind
 */
function ValidarAdmision(event) {
	var fs = databaseManager.getFoundSet("maestros", "tbc_obras")
	fs.find()		
	fs['obr_codigo'] = vhiscli_to_tbc_admision.adm_obrsoc_7
	fs.search()
	
	if (fs.getSize() == 0){
		fs['obr_espami'] = 0
		fs['obr_razonsoc'] = fs['obr_codigo']
	}
	if (vhiscli_to_tbc_admision.adm_fecepic > 0 && fs['obr_espami'] != 2) {
		plugins.dialogs.showInfoDialog('Atencion', 'Paciente con Alta Clínica', 'OK')
		globals.vvalhisto = false
	} 
	if (vhiscli_to_tbc_admision.adm_fecaltaefec > 0 && fs['obr_espami'] != 2) {
		plugins.dialogs.showInfoDialog('Atencion', 'Paciente egresó del Sanatorio', 'OK')
		globals.vvalhisto = false
	}
	return globals.vvalhisto
}

/**
 * // TODO generated, please specify type and doc for the params
 * 
 *
 * @properties={typeid:24,uuid:"82B6B509-C66D-4E55-85F5-8509359D0A23"}
 * @AllowToRunInFind
 */
function BuscarCirugint() {
	//foundset.vhiscli_to_tbc_cirugint.find()
	//foundset.vhiscli_to_tbc_cirugint.ciri_tipnome  = 0
	//foundset.vhiscli_to_tbc_cirugint.ciri_codnome  = 0
	//foundset.vhiscli_to_tbc_cirugint.ciri_histclin = globals.vhiscli
	//foundset.vhiscli_to_tbc_cirugint.ciri_est      = 0
	//foundset.vhiscli_to_tbc_cirugint.search()

	var fs = databaseManager.getFoundSet("asistencial", "tbc_cirugint")
	fs.clear()
	fs.find()
	fs['ciritiponome'] = 0
	fs['ciricodnome'] = 0
	fs['cirihistcl'] = globals.vhiscli
	fs['ciriestado'] = 0
	fs.search()

	//var x = forms.frm_menu.foundset.vhiscli_to_tbc_admision.tbc_admision_to_tbc_cirugint.getSize()
	//var c = forms.frm_menu.foundset.vhiscli_to_tbc_admision.tbc_admision_to_tbc_cirugint.getRecord(x)
	//application.output(c)
	//application.output(x)
	//application.output(globals.vhiscli)
	//forms.frm_menu.controller.setSelectedIndex(forms.frm_menu.foundset.vhiscli_to_tbc_cirugint.getSize())

	//plugins.dialogs.showInfoDialog('Atencion',forms.frm_menu.foundset.vhiscli_to_tbc_cirugint.getSize() ,' OK ')
	//plugins.dialogs.showInfoDialog('Atencion', fs.getSize(), ' OK ')

	//if (foundset.vhiscli_to_tbc_cirugint.getSize() > 0) {
	if (fs.getSize() > 0) {
		foundset.setSelectedIndex(fs.getSize())

		globals.vprotocolo = fs['ciriprotocolo']
		globals.vexisteciru = 'S'
		//plugins.dialogs.showErrorDialog('Error', 'Estado = 0 en CIRUGINT   ', ' OK ')
		BuscarSeguquiSi()
	} 
	else {
		globals.vprotocolo = 0
		globals.vexisteciru = 'N'
		//plugins.dialogs.showErrorDialog('Error', 'Estado = 1 en CIRUGINT   ', ' OK ')
		BuscarSeguquiNo()
	}
	
}

/**
 * // TODO generated, please specify type and doc for the params
 *
 * @properties={typeid:24,uuid:"5C58F583-7B08-4261-AC06-E9CE9EAB7C78"}
 * @AllowToRunInFind
 */
function BuscarSeguquiSi() {
	//forms.frm_menu.foundset.vhiscli_to_tbc_seguqui.find()
	//forms.frm_menu.foundset.vhiscli_to_tbc_seguqui.seg_tiphistclin_1 = 0
	//forms.frm_menu.foundset.vhiscli_to_tbc_seguqui.seg_histclin_1    = globals.vhiscli
	//forms.frm_menu.foundset.vhiscli_to_tbc_seguqui.seg_protocolo     = globals.vprotocolo
	//forms.frm_menu.foundset.vhiscli_to_tbc_seguqui.search()

	var fs = databaseManager.getFoundSet("asistencial", "tbc_seguqui_new")
	fs.clear()
	fs.find()
	fs['segtipohc1'] = 0
	fs['seghistclinica1'] = globals.vhiscli
	fs['segprotocolo'] = globals.vprotocolo
	fs.search()

	//plugins.dialogs.showInfoDialog('Atencion', globals.vprotocolo, ' OK ')
	//plugins.dialogs.showInfoDialog('Atencion', forms.frm_menu.foundset.vhiscli_to_tbc_seguqui.getSize(), ' OK ')
	//plugins.dialogs.showInfoDialog('Atencion', fs.getSize(), ' OK ')

	//if (forms.frm_menu.foundset.vhiscli_to_tbc_seguqui.getSize() > 0) {
	if (fs.getSize() > 0) {
		globals.vexistesegu = 'S'
		//plugins.dialogs.showErrorDialog('Error', 'Está en SEGUQUI       ', 'OK')
	} 
	else {
		globals.vexistesegu = 'N'
		//plugins.dialogs.showErrorDialog('Error', 'No está en SEGUQUI    ', 'OK')
	}
	return true
}

/**
 * // TODO generated, please specify type and doc for the params
 *
 * @properties={typeid:24,uuid:"30BAB80E-17B6-4F0D-9F17-66DAE30465D3"}
 * @AllowToRunInFind
 */
function BuscarSeguquiNo() {
	//forms.frm_menu.foundset.vhiscli_to_tbc_seguqui.find()
	//forms.frm_menu.foundset.vhiscli_to_tbc_seguqui.seg_tiphistclin_1 = 0
	//forms.frm_menu.foundset.vhiscli_to_tbc_seguqui.seg_histclin_1    = globals.vhiscli
	//forms.frm_menu.foundset.vhiscli_to_tbc_seguqui.seg_protocolo     = globals.vprotocolo
	//forms.frm_menu.foundset.vhiscli_to_tbc_seguqui.search()

	var fs = databaseManager.getFoundSet("asistencial", "tbc_seguqui_new")
	fs.clear()
	fs.find()
	fs['segtipohc1'] = 0
	fs['seghistclinica1'] = globals.vhiscli
	fs['segprotocolo'] = 0
	fs.search()

	//if (forms.frm_menu.foundset.vhiscli_to_tbc_seguqui.getSize() > 0) {
	if (fs.getSize() > 0) {
		globals.vexistesegu = 'S'
		//plugins.dialogs.showErrorDialog('Error', 'Está en SEGUQUI       ', 'OK')
	} else {
		globals.vexistesegu = 'N'
		//plugins.dialogs.showErrorDialog('Error', 'No está en SEGUQUI    ', 'OK')
	}
	return true
}

/**
 * @AllowToRunInFind
 *
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"24A92402-D888-4CAA-A42A-197221D25DCB"}
 */
function BuscarHisLectora(event) {
	globals.vexistelectora = 'N'
	vhiscli_to_tbc_hislectora.loadAllRecords()	
	vhiscli_to_tbc_hislectora.find()
	vhiscli_to_tbc_hislectora.hlec_tiphistclin = 0
	vhiscli_to_tbc_hislectora.hlec_histclin = globals.vhiscli
	vhiscli_to_tbc_hislectora.search()

	if (vhiscli_to_tbc_hislectora.getSize() > 0) {
		if ( (vhiscli_to_tbc_hislectora.hlec_estado == 1 || vhiscli_to_tbc_hislectora.hlec_estado == 3) && vhiscli_to_tbc_hislectora.hlec_fecped != 0 && vhiscli_to_tbc_hislectora.hlec_nomencla == 0 && vhiscli_to_tbc_hislectora.hlec_art == 9999) {
			globals.vexistelectora = 'S'
		}
		if ( (vhiscli_to_tbc_hislectora.hlec_estado == 1 || vhiscli_to_tbc_hislectora.hlec_estado == 3) && vhiscli_to_tbc_hislectora.hlec_fecped != 0 && vhiscli_to_tbc_hislectora.hlec_nropedunico != 0 && vhiscli_to_tbc_hislectora.hlec_art == 9999) {
			globals.vexistelectora = 'S'
		}
	}
	if (globals.vexistelectora == 'S') {
		MostrarIntervencion(event)
	}
	if (globals.vexistelectora == 'N') {
		IngresarIntervencion(event)
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"4B5C7999-366B-4E37-8D28-E63C248F7E50"}
 * @AllowToRunInFind
 */
function MostrarIntervencion(event) {
	var vinterven = '      '

	var fs = databaseManager.getFoundSet("maestros", "tbc_imacodi")
	fs.find()
	fs['icodtiponom'] = 01
	fs['icodcodinom'] = vhiscli_to_tbc_hislectora.hlec_nomencla
	fs.search()

	if (fs.getSize() > 0) {
		

		//vinterven = plugins.dialogs.showQuestionDialog('Seleccione una opción', 'Confirma la Intervención?     ', '  Si  ', '  No  ')
		if (vinterven == '  No  ' && vhiscli_to_tbc_hislectora.hlec_nropedunico !== 0 && vhiscli_to_tbc_hislectora.hlec_nropedunico !== '  ') {
			plugins.dialogs.showInfoDialog('Información', 'Existe Seguridad Quirurgica asociada: ' + vhiscli_to_tbc_hislectora.hlec_nropedunico, '  OK  ')
		} else {
			if (vinterven == '  No  ') {
				globals.vexistelectora = 'N'
				IngresarIntervencion(event)
			}
		}
	}
	//elements.vservicio.enabled   = false
	BuscarCirugint()
	elements.lbl_antes.visible = true
	elements.lbl_despues.visible = true
	elements.btn_acirculante.visible = true
	elements.btn_aanestesiologo.visible = true
	elements.btn_acirujano.visible = true
	elements.btn_atodo.visible = true
	elements.btn_dcirujano.visible = true
	elements.btn_danestesiologo.visible = true
	elements.btn_dinstrumentadora.visible = true
	elements.btn_dcirculante.visible = true
	elements.btn_acirculante.requestFocus()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"E81F5622-B54A-4F46-B42F-7D0EF380F909"}
 */
function IngresarIntervencion(event) {

}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"483CB80B-6E53-40BC-99B8-E40F2F6A8FD4"}
 * @AllowToRunInFind
 */
function onDataChangeVcodnome(oldValue, newValue, event) {
	var fs1 = databaseManager.getFoundSet("maestros", "tbc_imacodi")
	fs1.find()
	fs1['icodtiponom'] = globals.vtiponome
	fs1['icodcodinom'] = globals.vcodnome
	fs1['icodestado'] != 9
	fs1.search()

	//foundset.vcodnome_to_tbc_imacodi.icod_tiponom = globals.vtiponome
	//foundset.vcodnome_to_tbc_imacodi.icod_codinom = globals.vcodnome
	//foundset.vcodnome_to_tbc_imacodi.icod_estado != 9

	if (fs1.getSize() > 0) {
		//if (foundset.vcodnome_to_tbc_imacodi.getSize() > 0){
		
		GrabarHisLectora()

		BuscarCirugint()
		elements.lbl_antes.visible = true
		elements.lbl_despues.visible = true
		elements.btn_acirculante.visible = true
		elements.btn_aanestesiologo.visible = true
		elements.btn_acirujano.visible = true
		elements.btn_atodo.visible = true
		elements.btn_dcirujano.visible = true
		elements.btn_danestesiologo.visible = true
		elements.btn_dinstrumentadora.visible = true
		elements.btn_dcirculante.visible = true
		elements.btn_acirculante.requestFocus()
	} else {
		globals.vcodnome = 0
		
	}

	return true
}

/**
 * // TODO generated, please specify type and doc for the params
 *
 *
 * @properties={typeid:24,uuid:"F0936974-C136-42E6-AA7E-0CCD6FC5C5BB"}
 */
function GrabarHisLectora() {
	if (globals.vexistelectora == 'N') {
		//if (foundset.vhiscli_to_tbc_admision.tbc_admision_to_tbc_obras.obr_espami != 2){
		//var fs2 = databaseManager.getFoundSet("maestros", "tbc_param2")
		//globals.vnropedunico = fs2['prm2_54'] + 1
		//fs2['prm2_54'] = globals.vnropedunico
		//databaseManager.saveData()
		//}
		//else{
		//globals.vnropedunico = 0
		//}
		globals.vnropedunico = 0
		var done0 = plugins.rawSQL.executeSQL("parametros", "param2", "begin; lock table param2 in row exclusive mode;")
		if (!done0) {
			var msg0 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg0, 'Ok')
		}
		var done = plugins.rawSQL.executeSQL("parametros", "param2", "select * from param2 where key_param2 = 1 for update;")
		if (!done) {
			var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg, 'Ok')
		}
		var vQuery = " SELECT * FROM param2 WHERE key_param2 = 1";
		var vDataset = databaseManager.getDataSetByQuery("parametros", vQuery, null, 1);
		
		var nombre_campo='prm2_54';
		var numero_campo=54;
		globals.vnropedunico=vDataset.getValue(1,numero_campo)+1;
		var done1 = plugins.rawSQL.executeSQL("parametros", "param2", "update param2 set " + nombre_campo + " = " + nombre_campo +" + 1 where key_param2 = 1; commit;")
		if (!done1) {
			var msg1 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg1, 'Ok')
		}
		
		var fs3 = databaseManager.getFoundSet("asistencial", "tbc_his_lectora")
		fs3.newRecord()
		InicializarHisLectora(fs3, 'asistencial', 'tbc_his_lectora')
		fs3['hlec_histclin'] = globals.vhiscli
		fs3['hlec_tiphistclin'] = 0
		if (globals.vservicio == 5)
			fs3['hlec_estado'] = 3
		if (globals.vservicio == 6)
			fs3['hlec_estado'] = 1
		var fecha0 = new Date()

		fs3['hlec_fec'] = utils.stringToNumber(globals.FormatearFecha(fecha0,'AAAAMMDD'))
		fs3['hlec_hora'] = utils.stringToNumber(globals.FormatearFecha(fecha0,'HHMMSSMM'))
		fs3['hlec_fecped'] = utils.stringToNumber(globals.FormatearFecha(fecha0,'AAAAMMDD'))
		fs3['hlec_horped'] = utils.stringToNumber(globals.FormatearFecha(fecha0,'HHMM'))

		fs3['hlec_art'] = 9999
		fs3['hlec_sector'] = 34
		fs3['hlec_nomencla'] = globals.vcodnome
		fs3['hlec_nropedunico'] = globals.vnropedunico
		databaseManager.saveData()

		//if (foundset.vhiscli_to_tbc_admision.tbc_admision_to_tbc_obras.obr_espami != 2) {
		var fecha = utils.stringToNumber(fs3['hlec_fec'])
		var hora = utils.stringToNumber(fs3['hlec_hora'])
		globals.GenerarTXTInterfaseVisualMedica(2, globals.vservicio, 0, globals.vhiscli, fecha, hora, 0)
		//}
	}
	return true
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSFoundset} fs
 * @param {String}     base
 * @param {String}     tabla
 *
 * @properties={typeid:24,uuid:"86BD4D29-1422-4066-88C2-9E656B7F0275"}
 */
function InicializarHisLectora(fs, base, tabla) {
	var table = databaseManager.getTable(base, tabla);
	var columnNamesArray = table.getColumnNames();
	for (var i = 0; i < columnNamesArray.length; i++) {
		var name = fs.alldataproviders[i];
		var columnNames = table.getColumnNames()
		var firstColumnName = columnNamesArray[i];
		var jscolumn = table.getColumn(firstColumnName);

		switch (jscolumn.getType()) {
		case JSColumn.TEXT:
			fs[firstColumnName] = " "
			break
		case JSColumn.INTEGER:
		case JSColumn.NUMBER:
			fs[firstColumnName] = 0
			break
		default:
			fs[firstColumnName] = 0
			break
		}
	}
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"79E1836F-FE5E-44EA-A186-4C041E9967A3"}
 */
function onFocusLostVservicio(event) {
	if (globals.vservicio == 5 || globals.vservicio == 6) {
		globals.vcodnome = 0
		
	}
	if (globals.vservicio == 1) {
		
		BuscarCirugint()
		elements.lbl_antes.visible = true
		elements.lbl_despues.visible = true
		elements.btn_acirculante.visible = true
		elements.btn_aanestesiologo.visible = true
		elements.btn_acirujano.visible = true
		elements.btn_atodo.visible = true
		elements.btn_dcirujano.visible = true
		elements.btn_danestesiologo.visible = true
		elements.btn_dinstrumentadora.visible = true
		elements.btn_dcirculante.visible = true
		elements.btn_acirculante.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"67352F4D-03E4-4950-8D5B-C5A2A505F33A"}
 */
function onAction_busco_Imacodi(event) {
	var win = application.createWindow("f",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código del Imacodi";
	win.show(forms.frm_busqueda_imacodi)
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"F0F8D008-2140-4EE1-A9FC-AE0D48D1EFB8"}
 */
function onDataChange_vservicio(oldValue, newValue, event) {
	if (globals.vservicio == 5 || globals.vservicio == 6) {
		globals.vcodnome = 0
		
	}
	if (globals.vservicio == 1) {
		
		BuscarCirugint()
		elements.lbl_antes.visible = true
		elements.lbl_despues.visible = true
		elements.btn_acirculante.visible = true
		elements.btn_aanestesiologo.visible = true
		elements.btn_acirujano.visible = true
		elements.btn_atodo.visible = true
		elements.btn_dcirujano.visible = true
		elements.btn_danestesiologo.visible = true
		elements.btn_dinstrumentadora.visible = true
		elements.btn_dcirculante.visible = true
		elements.btn_acirculante.requestFocus()
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"35B1085A-2206-48CE-9308-3A624BE4F12B"}
 * @AllowToRunInFind
 */
function onAction_vcodnome(event) {
	var fs1 = databaseManager.getFoundSet("maestros", "tbc_imacodi")
	fs1.find()
	fs1['icodtiponom'] = globals.vtiponome
	fs1['icodcodinom'] = globals.vcodnome
	fs1['icodestado'] != 9
	fs1.search()

	//foundset.vcodnome_to_tbc_imacodi.icod_tiponom = globals.vtiponome
	//foundset.vcodnome_to_tbc_imacodi.icod_codinom = globals.vcodnome
	//foundset.vcodnome_to_tbc_imacodi.icod_estado != 9

	if (fs1.getSize() > 0) {
		//if (foundset.vcodnome_to_tbc_imacodi.getSize() > 0){
		
		GrabarHisLectora()

		BuscarCirugint()
		elements.lbl_antes.visible = true
		elements.lbl_despues.visible = true
		elements.btn_acirculante.visible = true
		elements.btn_aanestesiologo.visible = true
		elements.btn_acirujano.visible = true
		elements.btn_atodo.visible = true
		elements.btn_dcirujano.visible = true
		elements.btn_danestesiologo.visible = true
		elements.btn_dinstrumentadora.visible = true
		elements.btn_dcirculante.visible = true
		elements.btn_acirculante.requestFocus()
	} else {
		globals.vcodnome = 0
		
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2484F153-86B8-4CBC-A005-D0BE408258F6"}
 */
function Antes_Incision(event) {
	if (vs_to_tbc_seguqui_new.seganestident == 0 || vs_to_tbc_seguqui_new.seganestpulso == 0 || vs_to_tbc_seguqui_new.seganestseguri == 0 || vs_to_tbc_seguqui_new.seganestalergia == 0 || vs_to_tbc_seguqui_new.seganestviaaerea == 0 || vs_to_tbc_seguqui_new.seganestacceso == 0 || vs_to_tbc_seguqui_new.seganestsangre == 0 || vs_to_tbc_seguqui_new.seganestocular == 0 || vs_to_tbc_seguqui_new.seganestdecubi == 0) {
		plugins.dialogs.showErrorDialog('Error', 'Faltan completar opciones A Cargo del Anestesiólogo - ANTES DE LA CIRUGIA ', 'Aceptar')
	} else {
		forms.frm_menu_0.elements.btn_volveramenu.visible=false
		globals.vopcionfrm = 6
		forms.frm_menu_0.elements.tabless_opciones.tabIndex = globals.vopcionfrm
		forms.frm_aincisioncirculante_new.controller.focusFirstField()
		forms.frm_aincisioncirculante_new.elements.segcirculequipres.requestFocus()
	}
}
