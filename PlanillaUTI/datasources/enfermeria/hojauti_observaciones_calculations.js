/**
 * @properties={type:12,typeid:36,uuid:"88F4A1F8-5C0F-4707-9BCA-7E2F459DAFFB"}
 */
function cObservacion()
{
	var mes=0
	var mes_ed=''
	var dia =0
	var dia_ed=''
	mes=fecha.getMonth()+1
	dia=fecha.getDate()
	if(mes<10){
		mes_ed='0'+mes
	}else{
		mes_ed=mes
	}
	if(dia<10){
		dia_ed='0'+dia
	}else{
		dia_ed=dia
	}
	var Observacion=''
	Observacion+='<html><body>'
	var html = "";
	var largo_hora = hora.toString().length
	var Hora=''
	switch (largo_hora){
			case 1:Hora="0:0"+hora;break;
			case 2:Hora="0:"+hora;break;
			case 3:Hora=hora.toString().substr(0,1)+":"+hora.toString().substr(1,2)
			case 4:Hora=hora.toString().substr(0,2)+":"+hora.toString().substr(2,2)
	}
	if (hora<10){
			Hora="0:0"+hora
	}else{
		if(hora<100){
				Hora="0:"+hora
		}else{
			if(hora<1000){
					Hora=hora.toString().substr(0,1)+":"+hora.toString().substr(1,2)
			}else{
					Hora=hora.toString().substr(0,2)+":"+hora.toString().substr(2,2)
			}
		}
	}
	var largo_texto = 0
	largo_texto = observacion.length
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
	Observacion+='Dia: '+dia_ed+'/'+mes_ed+'/'+fecha.getFullYear()+'  Hora: '+Hora+' - '
	if(cantidad_lineas > 0){
			for ( var i = 1 ; i <=cantidad_lineas ; i++ )
			{
				desde_sub = 130 * (i - 1)
				html=''

		//html += '<p class="f45">'+vs1_to_tbl_protoc_txt.texto.substr(desde_sub,78)+'.</p>'
	
				html += '<table width=100% cellpadding=1 cellspacing=0>'
				html += '<tr>'
				html += '<td width=100%>' + observacion.substr(desde_sub,130) + '</td>'
				html += '</tr>'
				html += '</table>'
				Observacion+=html
			}
	}else{
		Observacion+=observacion
			
	}
	Observacion+= "</body></html>"
	return Observacion;
}
