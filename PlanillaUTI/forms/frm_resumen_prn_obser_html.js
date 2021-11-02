/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1D6410E2-68C0-4806-B5BB-801F8BE2EDA1"}
 */
var fHora = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2200266F-84A6-4A94-9F85-FC9AFFC46049"}
 */
var fObservacion = '';

/**
 * @properties={typeid:24,uuid:"58750371-2875-428E-B4AC-0D9D8FBEABB3"}
 * @AllowToRunInFind
 */
function sub_buildReport() {
	foundset.find();
	foundset.hiscli=globals.vHiscli;
	//foundset.fecha=globals.vFecha;
	foundset.search();
	if(foundset.getSize()>0){
		fObservacion+='<html><body>'
		for (var z=1;z<=foundset.getSize();z++){
			foundset.setSelectedIndex(z)
			var html = "";
			var largo_hora = foundset.hora.toString().length
			switch (largo_hora){
				case 1:fHora="0:0"+foundset.hora;break;
				case 2:fHora="0:"+foundset.hora;break;
				case 3:fHora=foundset.hora.toString().substr(0,1)+":"+foundset.hora.toString().substr(1,2)
				case 4:fHora=foundset.hora.toString().substr(0,2)+":"+foundset.hora.toString().substr(2,2)
			}
			if (foundset.hora<10){
				fHora="0:0"+foundset.hora
			}else{
				if(foundset.hora<100){
					fHora="0:"+foundset.hora
				}else{
					if(foundset.hora<1000){
						fHora=foundset.hora.toString().substr(0,1)+":"+foundset.hora.toString().substr(1,2)
					}else{
						fHora=foundset.hora.toString().substr(0,2)+":"+foundset.hora.toString().substr(2,2)
					}
				}
			}
			var largo_texto = 0
			if(foundset.getSize()>0){
				largo_texto = foundset.observacion.length
			}
			var cantidad_lineas = 0
			var div = 0
			var rem = 0
			if(largo_texto <= 130){
				if(largo_texto>0){
					cantidad_lineas = 1
				}else{
					cantidad_lineas = 0
				}
			}else{
				div = parseInt(largo_texto/130)
				rem = largo_texto % 130
				if (rem > 0){
					rem = 1
				}
				cantidad_lineas = div + rem
			}
	
			var desde_sub=0
			fObservacion+='Dia: '+foundset.fecha+'Hora: '+fHora+' - '
			if(cantidad_lineas > 0){
				for ( var i = 1 ; i <=cantidad_lineas ; i++ )
				{
					desde_sub = 130 * (i - 1)
					html=''
	
			//html += '<p class="f45">'+vs1_to_tbl_protoc_txt.texto.substr(desde_sub,78)+'.</p>'
		
					html += '<table width=100% cellpadding=1 cellspacing=0>'
					html += '<tr>'
					html += '<td width=100%>' + foundset.observacion.substr(desde_sub,130) + '</td>'
					html += '</tr>'
					html += '</table>'
					fObservacion+=html
				}
			}
			
				
		}
		fObservacion+= "</body></html>"
	}
}
