/**
 * @properties={type:12,typeid:36,uuid:"5E09E13D-8E54-493A-B2F3-2E97CAFC31C0"}
 */
function hcir_hora_cal()
{
	var hora=''
	switch (hcirhora.toString().length){
		case 4:hora=hcirhora.toString().substr(0,2)+":"+hcirhora.toString().substr(2,2);break;
		case 3:hora="0"+hcirhora.toString().substr(0,1)+":"+hcirhora.toString().substr(1,2);break;
		case 2:hora="00"+":"+hcirhora.toString().substr(0,2);break;
		case 1:hora="00"+":"+"0"+hcirhora.toString().substr(0,1);break;
	}
		
	return hora;
}

/**
 * @properties={type:12,typeid:36,uuid:"DC916D02-F5F0-4F13-957C-EFA65C8751AF"}
 */
function hcir_fecha_cal()
{
	var fecha = hcirfecha.toString().substr(6,2)+"/"+hcirfecha.toString().substr(4,2)+"/"+hcirfecha.toString().substr(0,4)
	return fecha;
}
