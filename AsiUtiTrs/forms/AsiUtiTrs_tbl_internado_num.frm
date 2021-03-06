dataSource:"db:/admisionscroll/tbc_admision_scroll",
extendsID:"-1",
initialSort:"adm_histclin asc",
items:[
{
borderType:"LineBorder,1,#c0c0c0",
dataProviderID:"adm_apelnom",
fontType:"Microsoft Sans Serif,0,12",
horizontalAlignment:2,
location:"116,25",
margin:"0,5,0,0",
name:"adm_apelnom",
onActionMethodID:"CFBC0A31-2B66-4EB3-AA46-74FCC47FE9CA",
onDoubleClickMethodID:"A7FDA833-132A-415F-A661-089C0584E62B",
onRenderMethodID:"-1",
showClick:false,
showFocus:false,
size:"300,20",
typeid:7,
uuid:"33FD95E9-8A72-46DC-A617-5A6498D52FFA"
},
{
background:"#c0c0c0",
labelFor:"btn_seleccionar",
location:"416,7",
size:"22,20",
typeid:7,
uuid:"7B752C69-E716-4B1D-BD41-659241BBF7C1"
},
{
horizontalAlignment:0,
imageMediaID:"9F8CE6FE-D887-49F2-932E-C2C49EC742A2",
location:"416,27",
name:"btn_seleccionar",
onActionMethodID:"A7FDA833-132A-415F-A661-089C0584E62B",
size:"22,20",
tabSeq:1,
typeid:7,
uuid:"AC8DEB63-C4BA-4FE6-A1AA-22103591C191"
},
{
height:52,
partType:5,
typeid:19,
uuid:"BF6B5A33-771C-4C1D-9430-16BDD6AE5428"
},
{
background:"#c0c0c0",
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
horizontalAlignment:0,
labelFor:"adm_apelnom",
location:"116,6",
size:"300,20",
text:"Apellido y Nombre del Paciente",
typeid:7,
uuid:"E05D3FB3-E457-4123-853C-2B629D1719D6"
},
{
background:"#c0c0c0",
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
horizontalAlignment:0,
labelFor:"adm_histclin",
location:"0,5",
size:"116,20",
text:"Nro.Internacion",
typeid:7,
uuid:"F9B78EFE-F1A6-4A43-9A94-F5C3D18AADF0"
},
{
borderType:"LineBorder,1,#c0c0c0",
dataProviderID:"adm_histclin",
fontType:"Microsoft Sans Serif,0,12",
format:"{\"converter\":{\"name\":\"GlobalMethodConverter\",\"properties\":{\"fromObjectMethodName\":\"\",\"toObjectMethodName\":\"scopes.globals.formatearHistclin\",\"type\":\"TEXT\"}}}",
horizontalAlignment:0,
location:"0,25",
name:"adm_histclin",
onActionMethodID:"CFBC0A31-2B66-4EB3-AA46-74FCC47FE9CA",
onDoubleClickMethodID:"A7FDA833-132A-415F-A661-089C0584E62B",
onRenderMethodID:"-1",
showClick:false,
showFocus:false,
size:"116,20",
typeid:7,
uuid:"FBB33C8A-6265-4215-AE8E-0354C1CD1883"
}
],
name:"AsiUtiTrs_tbl_internado_num",
onLoadMethodID:"-1",
onRecordSelectionMethodID:"-1",
onShowMethodID:"-1",
scrollbars:32,
showInMenu:false,
size:"438,52",
typeid:3,
uuid:"DCB5FB59-11E1-4D2C-BAB9-7CB188699DCA",
view:3