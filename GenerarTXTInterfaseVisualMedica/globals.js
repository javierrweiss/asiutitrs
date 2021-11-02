/**
 * // TODO generated, please specify type and doc for the params
 * @param {Number} tabla   //1=tbc_imapedi 2=tbc_his_lectora 3=tbc_pracquiro
 * @param {Number} servicio
 * @param {Number} pedido  //cuando tabla = 1
 * @param {Number} hclin   //cuando tabla = 2 clave de tbc_his_lectora  hora8 de 8
 *                         //cuando tabla = 3 clave de tbc_pracquiro hora4 de 4
 * @param {Number} fecha   
 * @param {Number} hora8
 * @param {Number} hora4
 *
 * @properties={typeid:24,uuid:"487F50F2-4647-4238-A02E-75FD2E2A3822"}
 * @AllowToRunInFind
 */
function GenerarTXTInterfaseVisualMedica(tabla, servicio, pedido, hclin, fecha, hora8, hora4) {
	var apell, nombre, cobertura, paciente, estudio, descr, modalidad
	var modalidadwrl = ''
	var apeynomwrl = ''
	var sexowrl = ''
	var fecnacwrl = 0
	var fecturwrl = 0
	var estudiowrl = ''
	var horturwrl = ''
	var accnumberwrl = ''
	var institucionwrl = ''
	var zeroswrl = ''
	var opc1wrl = ''
	var opc2wrl = ''
	var opc3wrl = ''
	var opc4wrl = ''
	var opc5wrl = ''
	var opc6wrl = ''
	var opc7wrl = ''
	var opc8wrl = ''
	var opc9wrl = '               .'
	var descrwrl = ''
		
	var paci    = ''
	var largo, i = 0
	var relleno = ''
	var relleno1= ''
	var relleno2= ''
	var path, linea = ''
	//var fs, fs1, fs2, fs3, fs4, fs5, fs6, fs7, fs8 = new JSFoundset
	var fs, fs1, fs2, fs3, fs4, fs5, fs6, fs7, fs8
	var vDirServer='/interfaces/cirugiap';
	var vDirServerWrl='/interfaces/ciruwrl';
	fecturwrl=fecha
	if(hora8!=null && hora8!=0){
		if(hora8<100000){
			horturwrl="00:0"+hora8.toString().substr(0,1)
		}else{
			if(hora8<1000000){
				horturwrl="00:"+hora8.toString().substr(0,2)
			}else{
				if(hora8<10000000){
					horturwrl="0"+hora8.toString().substr(0,1)+":"+hora8.toString().substr(1,2)
				}else{
					horturwrl=hora8.toString().substr(0,2)+":"+hora8.toString().substr(2,2)					
				}
			}
		}
	}else{
		if(hora4<10){
			horturwrl="00:0"+hora4.toString().substr(0,1)
		}else{
			if(hora4<100){
				horturwrl="00:"+hora4.toString().substr(0,2)
			}else{
				if(hora4<1000){
					horturwrl="0"+hora4.toString().substr(0,1)+":"+hora4.toString().substr(1,2)
				}else{
					horturwrl=hora4.toString().substr(0,2)+":"+hora4.toString().substr(2,2)			
				}
			}
		}
	}
	
	switch (tabla) {
		
		case 1:
			
		fs = databaseManager.getFoundSet("asistencial", "tbc_imapedi_new")
		fs.find()
		fs['ipedservicio'] = servicio
		fs['ipedpedido']   = pedido
		fs.search()
		
		if (fs.getSize() > 0){
			if (fs['ipedadmis'] == 0){
				fs1 = databaseManager.getFoundSet("admisionscroll", "tbc_admision_scroll")
				fs1.find()
				fs1['adm_histclin'] = hclin
				fs1.search()
				if (fs1.getSize() > 0){
					
					apell  = globals.AjustoLongitudCampo(fs1['adm_apellido'],'texto',30,' ')
					
					nombre = globals.AjustoLongitudCampo(fs1['adm_nombre'],'texto',30,' ')
					
					apeynomwrl  = globals.AjustoLongitudCampo(fs1['adm_apelnom'],'texto',64,' ')
					fecnacwrl = fs1['adm_fecnac']
					
					if (fs1['adm_sexo']==1){
						sexowrl = globals.AjustoLongitudCampo('F','texto',3,' ')
					}else{
						sexowrl = globals.AjustoLongitudCampo('M','texto',3,' ')
					}
					
					paci  = hclin.toString()
					largo = paci.length
					paci  = paci.substr(0,largo-1) + '/' + paci.substr(largo-1,1)
					for (i = 0; i < 10 - paci.length; i++){
						relleno += ' '
					}
					paciente = relleno + paci
					
					fs2 = databaseManager.getFoundSet("maestros", "tbc_obras")
					fs2.find()
					fs2['obr_codigo'] = fs1['adm_obrsoc']
					fs2.search()
					
					if (fs2.getSize() > 0){
						cobertura = globals.AjustoLongitudCampo(fs2['obr_razonsoc'],'texto',30,' ')
					}else{
						cobertura = globals.AjustoLongitudCampo('','texto',30,' ')
					}
				}else{
					apell     = globals.AjustoLongitudCampo('','texto',30,' ')
					nombre    = globals.AjustoLongitudCampo('','texto',30,' ')
					paciente  = globals.AjustoLongitudCampo('','texto',10,' ')
					cobertura = globals.AjustoLongitudCampo('','texto',30,' ')
					apeynomwrl  = globals.AjustoLongitudCampo('','texto',64,' ')
					fecnacwrl = '00000000'
					sexowrl = '   '	
				}
			}else{
				if(fs['ipedadmis'] == 1){
					fs3 = databaseManager.getFoundSet("asistencial", "tbc_hist_cab_new")
					fs3.find()
					fs3['histcabnrounico'] = hclin
					fs3.search()
					
					if (fs3.getSize() > 0){
						apell  = globals.AjustoLongitudCampo(fs3['histcabapellido'],'texto',30,' ')
						nombre = globals.AjustoLongitudCampo(fs3['histcabnombres'],'texto',30,' ')
						apeynomwrl  = globals.AjustoLongitudCampo(fs3['histcabapellnom'],'texto',64,' ')
						fecnacwrl = fs3['histcabfechanac']
						if (fs3['histcabsexo']==1){
							sexowrl = globals.AjustoLongitudCampo('F','texto',3,' ')
						}else{
							sexowrl = globals.AjustoLongitudCampo('M','texto',3,' ')
						}

						for (i = 0; i < 10 - hclin.toString().length; i++){
							relleno += ' '
						}
						paciente = relleno + hclin

						fs4 = databaseManager.getFoundSet("maestros", "tbc_obras")
						fs4.find()
						fs4['obr_codigo'] = fs3['histcabobra']
						fs4.search()
						if (fs4.getSize() > 0){
							cobertura = globals.AjustoLongitudCampo(fs4['obr_razonsoc'],'texto',30,' ')
						}else{
							cobertura = globals.AjustoLongitudCampo('','texto',30,' ')
						}
					}else{
						apell     = globals.AjustoLongitudCampo('','texto',30,' ')
						nombre    = globals.AjustoLongitudCampo('','texto',30,' ')
						paciente  = globals.AjustoLongitudCampo('','texto',10,' ')
						cobertura = globals.AjustoLongitudCampo('','texto',30,' ')
						apeynomwrl  = globals.AjustoLongitudCampo('','texto',64,' ')
						fecnacwrl = '00000000'
						sexowrl = '   '	
					}
				}
			}
			
			estudio = globals.AjustoLongitudCampo(fs['ipednropedunico'],'',10,'0')
			
			estudiowrl = globals.AjustoLongitudCampo(fs['ipednropedunico'],'',16,' ')
			
			accnumberwrl = globals.AjustoLongitudCampo(fs['ipednropedunico'],'',16,' ')
			fs5 = databaseManager.getFoundSet("maestros", "tbc_servicios")
			fs5.find()
			fs5['servcodigo'] = servicio
			fs5.search()
			if (fs5.getSize() > 0){
				
				modalidad = globals.AjustoLongitudCampo(fs5['servmodalidadvisual'],'texto',2,' ')
				
				modalidadwrl = globals.AjustoLongitudCampo(fs5['servmodalidadvisual'],'texto',3,' ')
				
				if (fs5['servcodigo']==9){
					institucionwrl = globals.AjustoLongitudCampo('IONIC','texto',64,' ')
				}else{
					institucionwrl = globals.AjustoLongitudCampo('SANATORIO COLEGIALES','texto',64,' ')
				}
			}else{
				modalidad = '  '
				modalidadwrl = '   '
			}
			
			fs6 = databaseManager.getFoundSet("asistencial", "tbc_imapedet_new")
			fs6.find()
			fs6['idetservicio'] = servicio
			fs6['idetpedido']   = pedido
			fs6.search()
			
			zeroswrl = globals.AjustoLongitudCampo('','texto',54, ' ')
			opc1wrl =  globals.AjustoLongitudCampo('','texto',64, ' ')
			opc2wrl =  globals.AjustoLongitudCampo('','texto',30, ' ')
			opc3wrl =  globals.AjustoLongitudCampo('','texto',30, ' ')
			opc4wrl =  globals.AjustoLongitudCampo('','texto',16, ' ')
			opc5wrl =  globals.AjustoLongitudCampo('','texto',64, ' ')
			opc6wrl =  globals.AjustoLongitudCampo('','texto',4, ' ')
			opc7wrl =  globals.AjustoLongitudCampo('','texto',30, ' ')
			opc8wrl =  globals.AjustoLongitudCampo('','texto',16, ' ')
			//opc9wrl =  globals.AjustoLongitudCampo('','texto',16, ' ')	
			
			for (i = 1; i <= fs6.getSize(); i++) {
				fs6.setSelectedIndex(i)
				
				fs7 = databaseManager.getFoundSet("maestros", "tbc_imacodi")
				fs7.find()
				fs7['icodtiponom']      = fs6['idettiponom']
				fs7['icodcodinom']      = fs6['idetcodinom']
				fs7['icodimagendicom'] != 0
				fs7.search()
				if (fs7.getSize() > 0){
					fs8 = databaseManager.getFoundSet("maestros", "tbc_nomencla")
					fs8.find()
					fs8['nome_tipo']   = fs6['idettiponom']
					fs8['nome_codigo'] = fs6['idetcodinom']
					fs8.search()
					if (fs8.getSize() > 0){
						
						descr = globals.AjustoLongitudCampo(fs8['nome_descr'],'texto',120,' ')
						descrwrl = globals.AjustoLongitudCampo(fs8['nome_descr'],'texto',64,' ')
					}else{
						descr = globals.AjustoLongitudCampo('','texto',120,' ')
						descrwrl = globals.AjustoLongitudCampo('','texto',64,' ')
					}
					linea='';
					if (fs5['servworkl']==0||fs5['servworkl']==2){
						path  = estudio + '.txt'
						linea = paciente + '|' + apell + '|' + nombre + '|' + estudio + '|' + descr + '|' + modalidad + '|' + cobertura + '|' + '\r\n'
						plugins.file.appendToTXTFile(path, linea);
						plugins.UserManager.register( "Hypertelia", "q9SA5eCyb085cvATVO8s9onGe3iBzJyCTel8Y7J72BuG599wodOiU5OL26/pkKyv" );
						plugins.UserManager.copyFileToServer(path,vDirServer,true);
					}
					linea='';
					if (fs5['servworkl']==1||fs5['servworkl']==2){
						path  = estudio + '.txt'
						linea = zeroswrl + paciente + apeynomwrl + sexowrl + fecnacwrl + opc1wrl + estudiowrl + modalidadwrl + opc2wrl + opc3wrl + descrwrl + opc4wrl + opc5wrl + fecturwrl + horturwrl + accnumberwrl + institucionwrl + opc6wrl + opc7wrl + opc8wrl + opc9wrl +  '\r\n'
											
						plugins.file.writeTXTFile(path, linea);
					
						plugins.UserManager.register( "Hypertelia", "q9SA5eCyb085cvATVO8s9onGe3iBzJyCTel8Y7J72BuG599wodOiU5OL26/pkKyv" );
						plugins.UserManager.copyFileToServer(path,vDirServerWrl,true);
						//plugins.UserManager.copyFileToServer(path+'-wrl',vDirServer,true);
					}
				}
			}	
		}
		
		break;
		
		case 2:
		fs = databaseManager.getFoundSet("asistencial", "tbc_his_lectora")
		fs.find()
		fs['hlec_histclin'] = hclin
		fs['hlec_fec']      = fecha
		fs['hlec_hora']     = hora8
		fs.search()
		
		if (fs.getSize() > 0){
			if (fs['hlec_tiphistclin'] == 0){
				fs1 = databaseManager.getFoundSet("admisionscroll", "tbc_admision_scroll")
				fs1.find()
				fs1['adm_histclin'] = hclin
				fs1.search()
				if (fs1.getSize() > 0){
					apell  = globals.AjustoLongitudCampo(fs1['adm_apellido'],'texto',30,' ')
					nombre = globals.AjustoLongitudCampo(fs1['adm_nombre'],'texto',30,' ')
					apeynomwrl  = globals.AjustoLongitudCampo(fs1['adm_apelnom'],'texto',64,' ')
					fecnacwrl = fs1['adm_fecnac']
					if (fs1['adm_sexo']==1){
						sexowrl = globals.AjustoLongitudCampo('F','texto',3,' ')
					}else{
						sexowrl = globals.AjustoLongitudCampo('M','texto',3,' ')
					}
					
					paci  = hclin.toString()
					largo = paci.length
					paci  = paci.substr(0,largo-1) + '/' + paci.substr(largo-1,1)
					for (i = 0; i < 10 - paci.length; i++)
						relleno += ' '
					paciente = relleno + paci
					
					fs2 = databaseManager.getFoundSet("maestros", "tbc_obras")
					fs2.find()		
					fs2['obr_codigo'] = fs1['adm_obrsoc']
					fs2.search()
					if (fs2.getSize() > 0)
						cobertura = globals.AjustoLongitudCampo(fs2['obr_razonsoc'],'texto',30, ' ')
					else
						cobertura = globals.AjustoLongitudCampo('','texto',30,' ')
				}
				else {
					apell     = globals.AjustoLongitudCampo('','texto',30, ' ')
					nombre    = globals.AjustoLongitudCampo('','texto',30, ' ')
					paciente  = globals.AjustoLongitudCampo('','texto',10, ' ')
					cobertura = globals.AjustoLongitudCampo('','texto',30, ' ')
					apeynomwrl  = globals.AjustoLongitudCampo('','texto',64,' ')
					fecnacwrl = '00000000'
					sexowrl = '   '	
					
				}
			}
			else {
				if (fs['hlec_tiphistclin'] == 1){
					fs3 = databaseManager.getFoundSet("asistencial", "tbc_hist_cab_new")
					fs3.find()
					fs3['histcabnrounico'] = hclin
					fs3.search()
					
					if (fs3.getSize() > 0){
						apell    = globals.AjustoLongitudCampo(fs3['histcabapellido'],'texto',30,' ')
						nombre   = globals.AjustoLongitudCampo(fs3['histcabnombres'],'texto',30,' ')
						apeynomwrl  = globals.AjustoLongitudCampo(fs3['histcabapellnom'],'texto',64,' ')
						fecnacwrl = fs3['histcabfechanac']
						if (fs3['histcabsexo']==1){
							sexowrl = globals.AjustoLongitudCampo('F','texto',3,' ')
						}else{
							sexowrl = globals.AjustoLongitudCampo('M','texto',3,' ')
						}
						
						for (i = 0; i < 10 - hclin.toString().length; i++){
							relleno += ' '
						}
						paciente = relleno + hclin
						
						fs4 = databaseManager.getFoundSet("maestros", "tbc_obras")
						fs4.find()
						fs4['obr_codigo'] = fs3['histcabobra']
						fs4.search()
						if (fs4.getSize() > 0)
							cobertura = globals.AjustoLongitudCampo(fs4['obr_razonsoc'],'texto',30,' ')
						else
							cobertura = globals.AjustoLongitudCampo('','texto',30,' ')
					}
					else {
						apell     = globals.AjustoLongitudCampo('','texto',30,' ')
						nombre    = globals.AjustoLongitudCampo('','texto',30,' ')
						paciente  = globals.AjustoLongitudCampo('','texto',10,' ')
						cobertura = globals.AjustoLongitudCampo('','texto',30,' ')
						apeynomwrl  = globals.AjustoLongitudCampo('','texto',64,' ')
						fecnacwrl = '00000000'
						sexowrl = '  ' 
					}				
				}	
			}
			estudio = globals.AjustoLongitudCampo(fs['hlec_nropedunico'],'',10,'0')
			estudiowrl=globals.FormatearNroEstudio(fs['hlec_nropedunico'],16,' ')
			accnumberwrl=estudiowrl
			fs5 = databaseManager.getFoundSet("maestros", "tbc_servicios")
			fs5.find()
			fs5['servcodigo'] = servicio
			fs5.search()
			if (fs5.getSize() > 0){
				modalidad = globals.AjustoLongitudCampo(fs5['servmodalidadvisual'],'texto',2,' ')
				modalidadwrl = globals.AjustoLongitudCampo(fs5['servmodalidadvisual'],'texto',3,' ')
				if (fs5['servcodigo']==9){
					institucionwrl = globals.AjustoLongitudCampo('IONIC','texto',64,' ')
				}else{
					institucionwrl = globals.AjustoLongitudCampo('SANATORIO COLEGIALES','texto',64,' ')
				}
			}else{
				modalidad = '  '
				modalidadwrl = '   '
			}
			fs6 = databaseManager.getFoundSet("maestros", "tbc_nomencla")
			fs6.find()
			fs6['nome_tipo']   = 01
			fs6['nome_codigo'] = fs['hlec_nomencla']
			fs6.search()
			if (fs6.getSize() > 0){
				descr = globals.AjustoLongitudCampo(fs6['nome_descr'],'texto',120,' ')
				descrwrl = globals.AjustoLongitudCampo(fs6['nome_descr'],'texto',64,' ')
			}else{
				descr = globals.AjustoLongitudCampo('','texto',120,' ')
				descrwrl = globals.AjustoLongitudCampo('','texto',64,' ')
			}
			zeroswrl = globals.AjustoLongitudCampo('','texto',54, ' ')
			opc1wrl =  globals.AjustoLongitudCampo('','texto',64, ' ')
			opc2wrl =  globals.AjustoLongitudCampo('','texto',30, ' ')
			opc3wrl =  globals.AjustoLongitudCampo('','texto',30, ' ')
			opc4wrl =  globals.AjustoLongitudCampo('','texto',16, ' ')
			opc5wrl =  globals.AjustoLongitudCampo('','texto',64, ' ')
			opc6wrl =  globals.AjustoLongitudCampo('','texto',4, ' ')
			opc7wrl =  globals.AjustoLongitudCampo('','texto',30, ' ')
			opc8wrl =  globals.AjustoLongitudCampo('','texto',16, ' ')
			//opc9wrl =  globals.AjustoLongitudCampo('','texto',16, ' ')	
			linea='';
			if (fs5['servworkl']==0){
				path  = estudio + '.txt'
				linea = paciente + '|' + apell + '|' + nombre + '|' + estudio + '|' + descr + '|' + modalidad + '|' + cobertura + '|' + '\n'
									
				plugins.file.appendToTXTFile(path, linea);
			
				plugins.UserManager.register( "Hypertelia", "q9SA5eCyb085cvATVO8s9onGe3iBzJyCTel8Y7J72BuG599wodOiU5OL26/pkKyv" );
				plugins.UserManager.copyFileToServer(path,vDirServer,true);
			}
			linea='';
			if (fs5['servworkl']==1||fs5['servworkl']==2){
				path  = estudio + '.txt'
				linea = zeroswrl + paciente + apeynomwrl + sexowrl + fecnacwrl + opc1wrl + estudiowrl + modalidadwrl + opc2wrl + opc3wrl + descrwrl + opc4wrl + opc5wrl + fecturwrl + horturwrl + accnumberwrl + institucionwrl + opc6wrl + opc7wrl + opc8wrl + opc9wrl +  '\r\n'
									
				plugins.file.writeTXTFile(path, linea);
			
				plugins.UserManager.register( "Hypertelia", "q9SA5eCyb085cvATVO8s9onGe3iBzJyCTel8Y7J72BuG599wodOiU5OL26/pkKyv" );
				plugins.UserManager.copyFileToServer(path,vDirServerWrl,true);
			}
			
		}
		
		break;
		
		case 3:
		
		fs = databaseManager.getFoundSet("asistencial", "tbc_pracquiro")
		fs.find()
		fs['pracquiroghistclinica'] = hclin
		fs['pracquirogfechaingreso']   = fecha
		fs['pracquiroghoraingreso']  = hora4
		fs.search()		
		if (fs.getSize() > 0){
			fs1 = databaseManager.getFoundSet("asistencial", "tbc_hist_cab_new")
			fs1.find()
			fs1['histcabnrounico'] = hclin
			fs1.search()
			
			if (fs1.getSize() > 0){
				apell  = globals.AjustoLongitudCampo(fs1['histcabapellido'],'texto',30,' ')
				nombre = globals.AjustoLongitudCampo(fs1['histcabnombres'],'texto',30,' ')
				apeynomwrl  = globals.AjustoLongitudCampo(fs1['histcabapellnom'],'texto',64,' ')
				fecnacwrl = fs1['histcabfechanac']
				if (fs1['histcabsexo']==1){
					sexowrl = globals.AjustoLongitudCampo('F','texto',3,' ')
				}else{
					sexowrl = globals.AjustoLongitudCampo('M','texto',3,' ')
				}
				
				for (i = 0; i < 10 - hclin.toString().length; i++) {
					relleno += ' '
				}
				paciente = relleno + hclin

				fs2 = databaseManager.getFoundSet("maestros", "tbc_obras")
				fs2.find()
				fs2['obr_codigo'] = fs1['histcabobra']
				fs2.search()
				if (fs2.getSize() > 0){
					cobertura = globals.AjustoLongitudCampo(fs2['obr_razonsoc'],'texto',30,' ')
				}else{
					cobertura = globals.AjustoLongitudCampo('','texto',30,' ')
				}
				estudio = globals.AjustoLongitudCampo(fs['pracquironropedunico'],'',10,'0')
				for (i = 0; i < 16 - fs['pracquironropedunico'].toString().length; i++){
					relleno1 += ' '
				}
				estudiowrl = relleno1 + fs['pracquironropedunico']
				accnumberwrl = estudiowrl
				//estudiowrl = globals.AjustoLongitudCampo(fs['pracquironropedunico'],'',16,' ')
				//accnumberwrl = globals.AjustoLongitudCampo(fs['pracquironropedunico'],'',16,' ')
				fs3 = databaseManager.getFoundSet("maestros", "tbc_servicios")
				fs3.find()
				fs3['servcodigo'] = servicio
				fs3.search()
				if (fs3.getSize() > 0){
					modalidad = globals.AjustoLongitudCampo(fs3['servmodalidadvisual'],'texto',2,' ')
					modalidadwrl = globals.AjustoLongitudCampo(fs3['servmodalidadvisual'],'texto',3,' ')
					if (fs3['servcodigo']==9){
						institucionwrl = globals.AjustoLongitudCampo('IONIC','texto',64,' ')
					}else{
						institucionwrl = globals.AjustoLongitudCampo('SANATORIO COLEGIALES','texto',64,' ')
					}
				}else{
					modalidad = '  '
					modalidadwrl = '   '
				}
				fs4 = databaseManager.getFoundSet("asistencial", "tbc_resecod")
				fs4.find()
				fs4['resecodesp']  = fs['pracquiroresp']
				fs4['resecodmed']  = fs['pracquirormed']
				fs4['resecodfech'] = fs['pracquirorfech']
				fs4['resecodhora'] = fs['pracquirorhora']
				fs4.search()
				
				zeroswrl = globals.AjustoLongitudCampo('','texto',54, ' ')
				opc1wrl =  globals.AjustoLongitudCampo('','texto',64, ' ')
				opc2wrl =  globals.AjustoLongitudCampo('','texto',30, ' ')
				opc3wrl =  globals.AjustoLongitudCampo('','texto',30, ' ')
				opc4wrl =  globals.AjustoLongitudCampo('','texto',16, ' ')
				opc5wrl =  globals.AjustoLongitudCampo('','texto',64, ' ')
				opc6wrl =  globals.AjustoLongitudCampo('','texto',4, ' ')
				opc7wrl =  globals.AjustoLongitudCampo('','texto',30, ' ')
				opc8wrl =  globals.AjustoLongitudCampo('','texto',16, ' ')
				//opc9wrl =  globals.AjustoLongitudCampo('','texto',16, ' ')
				
				for (i = 1; i <= fs4.getSize(); i++) {
					fs4.setSelectedIndex(i)
					
					fs5 = databaseManager.getFoundSet("maestros", "tbc_imacodi")
					fs5.find()
					fs5['icodtiponom']      = fs4['resecodtipcod']
					fs5['icodcodinom']      = fs4['resecodnumcod']
					fs5['icodimagendicom'] != 0
					fs5.search()
					if (fs5.getSize() > 0){
						fs6 = databaseManager.getFoundSet("maestros", "tbc_nomencla")
						fs6.find()
						fs6['nome_tipo']   = fs4['resecodtipcod']
						fs6['nome_codigo'] = fs4['resecodnumcod']
						fs6.search()
						if (fs6.getSize() > 0){
							descr = globals.AjustoLongitudCampo(fs6['nome_descr'],'texto',120,' ')
							descrwrl = globals.AjustoLongitudCampo(fs6['nome_descr'],'texto',64,' ')
						}else{
							descr = globals.AjustoLongitudCampo('','texto',120,' ')
							descrwrl = globals.AjustoLongitudCampo('','texto',64,' ')
						}
						linea='';
						if (fs3['servworkl']==0){
							path  = estudio + '.txt'
							linea = paciente + '|' + apell + '|' + nombre + '|' + estudio + '|' + descr + '|' + modalidad + '|' + cobertura + '|' + '\n'
							plugins.file.appendToTXTFile(path,linea);
							plugins.UserManager.register( "Hypertelia", "q9SA5eCyb085cvATVO8s9onGe3iBzJyCTel8Y7J72BuG599wodOiU5OL26/pkKyv" );
							plugins.UserManager.copyFileToServer(path,vDirServer,true);
						}
						linea='';
						if (fs3['servworkl']==1||fs3['servworkl']==2){
							path  = estudio + '.txt'
							linea = zeroswrl + paciente + apeynomwrl + sexowrl + fecnacwrl + opc1wrl + estudiowrl + modalidadwrl + opc2wrl + opc3wrl + descrwrl + opc4wrl + opc5wrl + fecturwrl + horturwrl + accnumberwrl + institucionwrl + opc6wrl + opc7wrl + opc8wrl + opc9wrl+  '\r' +  '\n'
												
							plugins.file.appendToTXTFile(path, linea);
						
							plugins.UserManager.register( "Hypertelia", "q9SA5eCyb085cvATVO8s9onGe3iBzJyCTel8Y7J72BuG599wodOiU5OL26/pkKyv" );
							plugins.UserManager.copyFileToServer(path,vDirServerWrl,true);
						}
					}
				}
			}
		}
		break;
		
		default:
			
		fs = databaseManager.getFoundSet("asistencial", "tbc_pracquiro")
		fs.find()
		fs['pracquiroghistclinica'] = hclin
		fs['pracquirogfechaingreso']   = fecha
		fs['pracquiroghoraingreso']  = hora4
		fs.search()
		
		if (fs.getSize() > 0){
			fs1 = databaseManager.getFoundSet("asistencial", "tbc_hist_cab_new")
			fs1.find()
			fs1['histcabnrounico'] = hclin
			fs1.search()
			if (fs1.getSize() > 0){
				apell  = globals.AjustoLongitudCampo(fs1['histcabapellido'],'texto',30,' ')
				nombre = globals.AjustoLongitudCampo(fs1['histcabnombres'],'texto',30,' ')
				apeynomwrl  = globals.AjustoLongitudCampo(fs1['histcabapellnom'],'texto',64,' ')
				fecnacwrl = fs1['histcabfechanac']
				if (fs1['histcabsexo']==1){
					sexowrl = globals.AjustoLongitudCampo('F','texto',3,' ')
				}else{
					sexowrl = globals.AjustoLongitudCampo('M','texto',3,' ')
				}

				for (i = 0; i < 10 - hclin.toString().length; i++){
					relleno += ' '
				}
				paciente = relleno + hclin

				fs2 = databaseManager.getFoundSet("maestros", "tbc_obras")
				fs2.find()
				fs2['obr_codigo'] = fs1['histcabobra']
				fs2.search()
				if (fs2.getSize() > 0){
					cobertura = globals.AjustoLongitudCampo(fs2['obr_razonsoc'],'texto',30,' ')
				}else{
					cobertura = globals.AjustoLongitudCampo('','texto',30,' ')
				}
				estudio = globals.AjustoLongitudCampo(fs['pracquironropedunico'],'',10,'0')
				estudiowrl = globals.AjustoLongitudCampo(fs['pracquironropedunico'],'',16,' ')
				accnumberwrl = globals.AjustoLongitudCampo(fs['pracquironropedunico'],'',16,' ')
				
				fs3 = databaseManager.getFoundSet("maestros", "tbc_servicios")
				fs3.find()
				fs3['servcodigo'] = servicio
				fs3.search()
				if (fs3.getSize() > 0){
					modalidad = globals.AjustoLongitudCampo(fs3['servmodalidadvisual'],'texto',2,' ')
					modalidadwrl = globals.AjustoLongitudCampo(fs3['servmodalidadvisual'],'texto',3,' ')
					if (fs3['servcodigo']==9){
						institucionwrl = globals.AjustoLongitudCampo('IONIC','texto',64,' ')
					}else{
						institucionwrl = globals.AjustoLongitudCampo('SANATORIO COLEGIALES','texto',64,' ')
					}
				}else{
					modalidad = '  '
					modalidadwrl = '   '
				}
				
				fs4 = databaseManager.getFoundSet("asistencial", "tbc_prestguar")
				fs4.find()
				fs4['preghistclinica']  = fs['pracquiroghistclinica']
				fs4['pregfecing']    = fs['pracquirogfechaingreso']
				fs4['preghoraing']   = fs['pracquiroghoraingreso']
				fs4['pregtiponome'] != 99
				fs4.search()
				
				zeroswrl = globals.AjustoLongitudCampo('','texto',54, ' ')
				opc1wrl =  globals.AjustoLongitudCampo('','texto',64, ' ')
				opc2wrl =  globals.AjustoLongitudCampo('','texto',30, ' ')
				opc3wrl =  globals.AjustoLongitudCampo('','texto',30, ' ')
				opc4wrl =  globals.AjustoLongitudCampo('','texto',16, ' ')
				opc5wrl =  globals.AjustoLongitudCampo('','texto',64, ' ')
				opc6wrl =  globals.AjustoLongitudCampo('','texto',4, ' ')
				opc7wrl =  globals.AjustoLongitudCampo('','texto',30, ' ')
				opc8wrl =  globals.AjustoLongitudCampo('','texto',16, ' ')
				//opc9wrl =  globals.AjustoLongitudCampo('','texto',16, ' ')
				
				for (i = 1; i <= fs4.getSize(); i++) {
					fs4.setSelectedIndex(i)
					
					fs5 = databaseManager.getFoundSet("maestros", "tbc_nomencla")
					fs5.find()
					fs5['nome_tipo']   = fs4['pregtiponome']
					fs5['nome_codigo'] = fs4['pregcodnome']
					fs5.search()
					if (fs5.getSize() > 0){
						descr = globals.AjustoLongitudCampo(fs5['nome_descr'],'texto',120,' ')
						descrwrl = globals.AjustoLongitudCampo(fs5['nome_descr'],'texto',64,' ')
					}else{
						descr = globals.AjustoLongitudCampo('','texto',120,' ')
						descrwrl = globals.AjustoLongitudCampo('','texto',64,' ')
					}
					linea='';					
					if (fs3['servworkl']==0||fs3['servworkl']==2){
						path  = estudio + '.txt'
						linea = paciente + '|' + apell + '|' + nombre + '|' + estudio + '|' + descr + '|' + modalidad + '|' + cobertura + '|' + '\r\n'
						
						plugins.file.appendToTXTFile(path,linea);
						plugins.UserManager.register( "Hypertelia", "q9SA5eCyb085cvATVO8s9onGe3iBzJyCTel8Y7J72BuG599wodOiU5OL26/pkKyv" );
						plugins.UserManager.copyFileToServer(path,vDirServer,true);
					}
					linea='';
					if (fs3['servworkl']==1||fs3['servworkl']==2){
						path  = estudio + '.txt'
						linea = zeroswrl + paciente + apeynomwrl + sexowrl + fecnacwrl + opc1wrl + estudiowrl + modalidadwrl + opc2wrl + opc3wrl + descrwrl + opc4wrl + opc5wrl + fecturwrl + horturwrl + accnumberwrl + institucionwrl + opc6wrl + opc7wrl + opc8wrl + opc9wrl +  '\r\n'				
						plugins.file.appendToTXTFile(path, linea);
						plugins.UserManager.register( "Hypertelia", "q9SA5eCyb085cvATVO8s9onGe3iBzJyCTel8Y7J72BuG599wodOiU5OL26/pkKyv" );
						plugins.UserManager.copyFileToServer(path,vDirServerWrl,true);
					}
				}
			}
		 }	
			break;	
	}
}
/**
 * @param {Number} estudio
 * @param {Number} longitud
 * @param {String} reemplazo
 * @properties={typeid:24,uuid:"E5B330AD-1BA0-4506-B7A2-C26F68F557A1"}
 */
function FormatearNroEstudio(estudio, longitud, reemplazo) {
	var salida =''
	var entrada = ''
	entrada = estudio.toString()
	var largo = 0
	largo = entrada.length
	var l=0
	
	if (largo>longitud){
		return estudio.toString()
	}else{
		l=longitud-largo
	}
	
	for(var i=1;i<=l;i++){
		salida+=reemplazo
	}
	
	salida+=entrada.substr(0,largo)
	
	return salida
}
