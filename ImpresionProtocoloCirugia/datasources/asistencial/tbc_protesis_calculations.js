/**
 * @properties={type:12,typeid:36,uuid:"E7C28E30-6B48-4DA5-8DF5-B573C9E7CD05"}
 */
function horsol2()
{
	var horing = prote_horasolic.toString();
	horing = horing.substr(0,2)+':'+horing.substr(2,2)
	return horing;
}

/**
 * @properties={type:12,typeid:36,uuid:"534492F7-3598-4AC8-A3C4-D3009B1D4E19"}
 */
function horimplan2()
{
	var horing = prote_horaimplante.toString();
	horing = horing.substr(0,2)+':'+horing.substr(2,2)
	return horing;
}

/**
 * @properties={type:12,typeid:36,uuid:"9CBC2671-24B8-4299-B1A1-CFE18C9D0E08"}
 */
function fecsol2()
{
	var fecing = prote_fecsolic.toString();
	fecing = fecing.substr(6,2)+'/'+fecing.substr(4,2)+'/'+fecing.substr(0,4);
	return fecing;
}

/**
 * @properties={type:12,typeid:36,uuid:"E6B57B46-8EA6-4135-873E-33089EEF450C"}
 */
function fecrecep2()
{
	var feccam = prote_fecrecepefec.toString();
	feccam = feccam.substr(6,2)+'/'+feccam.substr(4,2)+'/'+feccam.substr(0,4);
	return feccam;
}

/**
 * @properties={type:12,typeid:36,uuid:"7226C9E4-5AB8-4D81-A8C4-628DE5D68DD3"}
 */
function fecped2()
{
	var feccam = prote_fecpedido.toString();
	feccam = feccam.substr(6,2)+'/'+feccam.substr(4,2)+'/'+feccam.substr(0,4);
	return feccam;
}

/**
 * @properties={type:12,typeid:36,uuid:"FCA9C86C-9249-4F4A-86A5-2BDD7E160698"}
 */
function fecimplan2()
{
	var feccam = prote_fecimplante.toString();
	feccam = feccam.substr(6,2)+'/'+feccam.substr(4,2)+'/'+feccam.substr(0,4);
	return feccam;
}
