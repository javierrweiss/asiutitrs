/**
 * @properties={type:12,typeid:36,uuid:"BDF5EA84-32DC-415F-B86E-089B445FA43F"}
 */
function fecha_cas()
{
	var fec_cas='';
	fec_cas=car7.toString().substr(6,2)+'/'+car7.toString().substr(4,2)+'/'+car7.toString().substr(0,4);
	return fec_cas;
}

/**
 * @properties={type:12,typeid:36,uuid:"0DFA451E-1498-47AC-A2F6-C48AFDE001CF"}
 */
function fecha_nac()
{
	var fec_nac='';
	fec_nac=car4.toString().substr(6,2)+'/'+car4.toString().substr(4,2)+'/'+car4.toString().substr(0,4);
	return fec_nac;
}
