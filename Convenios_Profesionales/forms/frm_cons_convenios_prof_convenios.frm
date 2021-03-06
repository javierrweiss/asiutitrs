dataSource:"db:/desal/tbl_conv_prof",
extendsID:"-1",
items:[
{
formIndex:23,
location:"30,68",
size:"81,20",
text:"Especialidad :",
transparent:true,
typeid:7,
uuid:"11E71D1A-A196-4117-8335-EC3CFFFCF6EA"
},
{
borderType:"LineBorder,1,#000000",
items:[
{
containsFormID:"52933B38-011E-4916-A848-9F7A25E9F92F",
location:"106,210",
text:"frm_vacios_convenios_prof_convenios_aumentos",
typeid:15,
uuid:"2E9FB415-CC3A-404E-BCB4-1CD479EB8F51"
},
{
containsFormID:"005877D1-2A8A-418D-AC1D-E8ACFDA288E6",
location:"169,267",
text:"frm_scr_cons_convenios_prof_convenios",
typeid:15,
uuid:"DAA8BF2F-FB80-4F90-B0EB-21EEF67411F5"
}
],
location:"10,160",
name:"tabless",
printable:false,
scrollTabs:true,
size:"1227,425",
tabOrientation:-1,
tabSeq:11,
transparent:true,
typeid:16,
uuid:"133FD4DA-6F48-41DE-A33B-51BCFE788E86"
},
{
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"frm_nome_descripcion",
editable:false,
enabled:false,
formIndex:25,
location:"247,121",
name:"descripcion_nomenclador",
onActionMethodID:"-1",
onDataChangeMethodID:"-1",
onFocusLostMethodID:"-1",
selectOnEnter:true,
size:"295,20",
transparent:true,
typeid:4,
uuid:"13E9C45B-C6B2-4920-BF84-EDC406AE33DD"
},
{
anchors:11,
formIndex:36,
horizontalAlignment:0,
location:"0,0",
name:"lbl_titulo",
size:"1247,20",
styleClass:"title",
typeid:7,
uuid:"15723422-4044-4185-8E4C-F36626AF5777"
},
{
formIndex:10,
location:"557,121",
size:"122,20",
text:"Fec. vigencia desde :",
transparent:true,
typeid:7,
uuid:"163E8119-0DE7-44E5-925C-BDE9211D1755"
},
{
formIndex:22,
location:"557,68",
size:"77,20",
text:"Obra Social :",
transparent:true,
typeid:7,
uuid:"1B9B28E9-FE5C-4720-A942-784592D185E4"
},
{
borderType:"TitledBorder,Salir,2,6,Microsoft Sans Serif,0,12,#000000",
formIndex:1,
horizontalAlignment:0,
imageMediaID:"59FDE418-DC4A-423C-AA5C-75BEDA00BC79",
labelFor:"",
location:"1166,95",
mediaOptions:2,
name:"btn_salir",
onActionMethodID:"60B04907-DCBB-4922-822C-BB6048D71B23",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverImageMediaID:"EB315ED5-B087-4046-9FD9-F1A48C360B40",
showFocus:false,
size:"63,50",
tabSeq:10,
toolTipText:"Salir",
transparent:true,
typeid:7,
uuid:"1C612894-98B6-41C0-850C-B49DAF02A0B1"
},
{
height:595,
partType:5,
typeid:19,
uuid:"1ED52269-B572-419C-8AB1-E38B099C32C3"
},
{
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"frm_obra_descripcion",
editable:false,
enabled:false,
formIndex:28,
location:"719,68",
name:"descripcion_obra",
onActionMethodID:"-1",
onDataChangeMethodID:"-1",
onFocusLostMethodID:"-1",
selectOnEnter:true,
size:"321,20",
transparent:true,
typeid:4,
uuid:"23E49AF8-C43C-4E3D-8FFA-0489F6D1140E"
},
{
borderType:"TitledBorder,Limpiar,2,6,Microsoft Sans Serif,0,12,#000000",
displaysTags:true,
formIndex:8,
horizontalAlignment:0,
imageMediaID:"7B870691-D015-42FD-AE7F-0C7C7E20A98F",
location:"976,95",
mediaOptions:10,
name:"btn_limpiar",
onActionMethodID:"A993B5A7-0685-4AA5-A637-F2D7A713725B",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverImageMediaID:"FF6B193A-DB05-42FD-9D98-2654CFB506E1",
showFocus:false,
size:"63,50",
tabSeq:8,
toolTipText:"Quitar filtro",
transparent:true,
typeid:7,
uuid:"36A51136-45C2-4D5B-A707-B194FE31DEEF"
},
{
formIndex:14,
horizontalAlignment:0,
imageMediaID:"403B568B-A496-4820-969C-40DF8EB60EAC",
labelFor:"",
location:"688,68",
mediaOptions:10,
name:"bt_buscar_cober",
onActionMethodID:"E40E0C06-AF7E-47EF-9E42-F9FC8FA62A0F",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverImageMediaID:"AFD12FC7-9D52-46A6-AFA5-BCCE09A3EE31",
size:"23,20",
toolTipText:"Buscar",
transparent:true,
typeid:7,
uuid:"3D2248D5-897F-4BF2-8CE0-563E0C67E5DA"
},
{
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"frm_espe_descripcion",
editable:false,
enabled:false,
formIndex:29,
location:"195,68",
name:"descripcion_especialidad",
onActionMethodID:"-1",
onDataChangeMethodID:"-1",
onFocusLostMethodID:"-1",
selectOnEnter:true,
size:"321,20",
transparent:true,
typeid:4,
uuid:"432C9B96-056C-42D5-98E4-AE86DB45BB64"
},
{
dataProviderID:"scopes.globals.gbl_con_especial",
formIndex:32,
format:"|U",
horizontalAlignment:4,
location:"110,68",
name:"con_especialidad",
onActionMethodID:"70940DC4-8B3B-4E00-85BA-412FF64A1B85",
onDataChangeMethodID:"70940DC4-8B3B-4E00-85BA-412FF64A1B85",
selectOnEnter:true,
size:"55,20",
toolTipText:"C??digo de Especialidad",
typeid:4,
uuid:"4520CB90-9F9A-401A-B903-3417EBAE5969"
},
{
dataProviderID:"scopes.globals.gbl_fecha_desde",
displayType:5,
formIndex:31,
format:"dd/MM/yyyy|ddMMyyyy",
location:"680,121",
name:"con_fecha_desde",
onActionMethodID:"7298C033-F86C-4FD7-9EF0-AE1D8705EE11",
onDataChangeMethodID:"-1",
onFocusLostMethodID:"7298C033-F86C-4FD7-9EF0-AE1D8705EE11",
selectOnEnter:true,
size:"93,20",
toolTipText:"Fecha Desde",
typeid:4,
uuid:"70595D63-78BB-446A-9D0E-23E5B50D808A"
},
{
formIndex:10,
location:"30,42",
size:"63,20",
text:"Empresa :",
transparent:true,
typeid:7,
uuid:"718EF969-9395-420B-A6ED-B477CC190B9B"
},
{
dataProviderID:"scopes.globals.gbl_con_profesional",
formIndex:26,
format:"|U",
horizontalAlignment:4,
location:"630,43",
name:"con_profesional",
onActionMethodID:"926BC8B4-7078-4377-B2A0-129FE1689E24",
onDataChangeMethodID:"926BC8B4-7078-4377-B2A0-129FE1689E24",
onFocusLostMethodID:"-1",
selectOnEnter:true,
size:"55,20",
toolTipText:"C??digo de Profesional",
typeid:4,
uuid:"720B35FA-9EAD-47C8-8079-892A2BFA6692"
},
{
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"frm_prof_descripcion",
editable:false,
enabled:false,
formIndex:27,
location:"715,43",
name:"descripcion_profesional",
onActionMethodID:"-1",
onDataChangeMethodID:"-1",
onFocusLostMethodID:"-1",
selectOnEnter:true,
size:"321,20",
transparent:true,
typeid:4,
uuid:"814D17F4-8F34-4656-9562-AC3297766942"
},
{
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"frm_grup_nom_descripcion",
editable:false,
enabled:false,
formIndex:30,
location:"163,94",
name:"descripcion_grupo",
onActionMethodID:"-1",
onDataChangeMethodID:"-1",
onFocusLostMethodID:"-1",
selectOnEnter:true,
size:"270,20",
transparent:true,
typeid:4,
uuid:"86EB71CF-B1DB-4AC8-B4CC-010531ED4E7E"
},
{
formIndex:7,
location:"557,43",
size:"72,20",
text:"Profesional :",
transparent:true,
typeid:7,
uuid:"96DE12A0-8440-46C6-92A3-0A336585B7CF"
},
{
formIndex:11,
location:"29,121",
size:"130,20",
text:"C??digo Nomenclador :",
transparent:true,
typeid:7,
uuid:"A15CB43F-DE85-48B1-8EFE-59EDA331EA8D"
},
{
dataProviderID:"scopes.globals.gbl_con_grupo_nom",
formIndex:34,
format:"|U",
horizontalAlignment:4,
location:"77,94",
name:"con_grupo",
onActionMethodID:"5011D0E9-2D3A-4DF5-B774-F1106791CA8F",
onDataChangeMethodID:"5011D0E9-2D3A-4DF5-B774-F1106791CA8F",
selectOnEnter:true,
size:"55,20",
toolTipText:"Grupo Nomenclador",
typeid:4,
uuid:"BDF93180-0714-4199-ACEF-326754E912DD"
},
{
dataProviderID:"scopes.globals.gbl_con_empresa",
displayType:2,
formIndex:31,
format:"dd/MM/yyyy|ddMMyyyy",
location:"95,42",
name:"con_empresa",
onActionMethodID:"09227483-C2DE-4D98-81DB-6F6DDACAE3DB",
onDataChangeMethodID:"09227483-C2DE-4D98-81DB-6F6DDACAE3DB",
onFocusLostMethodID:"-1",
selectOnEnter:true,
size:"287,20",
toolTipText:"Empresa",
typeid:4,
uuid:"C40CB6C7-C481-4C25-B043-BF247EA8B5E4",
valuelistID:"CD015B9F-65E0-4407-A7CA-4F4EF94941BE"
},
{
borderType:"LineBorder,1,#000000",
formIndex:1,
horizontalAlignment:0,
labelFor:"Microsoft Sans Serif,2,18",
location:"547,286",
name:"lbl_procesando",
size:"150,26",
text:"Prosesando.....",
typeid:7,
uuid:"C4946E2D-2C6E-4ABA-BB81-63C3CF620606",
visible:false
},
{
dataProviderID:"scopes.globals.gbl_con_cobertura",
displaysTags:true,
formIndex:35,
format:"|U",
horizontalAlignment:4,
location:"634,68",
name:"con_cobertura",
onActionMethodID:"EC2EFF42-7640-4BE1-A74F-C81604EA9BBC",
onDataChangeMethodID:"EC2EFF42-7640-4BE1-A74F-C81604EA9BBC",
selectOnEnter:true,
size:"55,20",
toolTipText:"C??digo de Obra Social",
typeid:4,
uuid:"C7057DB2-6D02-48DF-9674-B94E3FFCFEFB"
},
{
borderType:"TitledBorder,Procesar,2,6,Microsoft Sans Serif,0,12",
formIndex:1,
horizontalAlignment:0,
imageMediaID:"95433A6D-F219-4961-BBE8-B3D2C3FBB1E0",
labelFor:"",
location:"913,95",
mediaOptions:2,
name:"btn_procesar",
onActionMethodID:"697F3C07-E411-4102-B6A2-23A93E5FB657",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverImageMediaID:"7A9D1952-E23B-402B-A100-352997F1B76E",
showFocus:false,
size:"63,50",
tabSeq:7,
toolTipText:"Procesar",
transparent:true,
typeid:7,
uuid:"C7897EC1-DB80-4776-949E-D27205541253"
},
{
formIndex:21,
location:"30,94",
size:"47,20",
text:"Grupo :",
transparent:true,
typeid:7,
uuid:"C87CAB72-E060-4891-A9F1-61FBFBA033E2"
},
{
formIndex:1,
horizontalAlignment:0,
imageMediaID:"403B568B-A496-4820-969C-40DF8EB60EAC",
labelFor:"",
location:"131,94",
mediaOptions:10,
name:"bt_buscar_grup",
onActionMethodID:"CF063CCC-4ADC-417D-92A7-8078C2B46403",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverImageMediaID:"AFD12FC7-9D52-46A6-AFA5-BCCE09A3EE31",
size:"23,20",
toolTipText:"Buscar",
transparent:true,
typeid:7,
uuid:"CDD2B27D-F2D8-4BD5-B013-4AAFFFF66378"
},
{
formIndex:16,
horizontalAlignment:0,
imageMediaID:"403B568B-A496-4820-969C-40DF8EB60EAC",
labelFor:"",
location:"684,42",
mediaOptions:10,
name:"bt_buscar_prof",
onActionMethodID:"F19ED16B-6837-4479-B10B-E4D21504CD59",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverImageMediaID:"AFD12FC7-9D52-46A6-AFA5-BCCE09A3EE31",
size:"23,20",
toolTipText:"Buscar",
transparent:true,
typeid:7,
uuid:"CDD2C567-E3AF-473D-8030-29BF0E2672F5"
},
{
dataProviderID:"scopes.globals.gbl_con_nomencla",
formIndex:24,
format:"|U",
horizontalAlignment:4,
location:"160,121",
name:"con_nomencla",
onActionMethodID:"2F0D5A0A-1D72-4808-B5C7-AAC807DD47E0",
onDataChangeMethodID:"2F0D5A0A-1D72-4808-B5C7-AAC807DD47E0",
onFocusLostMethodID:"-1",
selectOnEnter:true,
size:"55,20",
toolTipText:"C??digo de Nomenclador",
typeid:4,
uuid:"D9C84565-198F-4EE2-850D-BAC9D59B6B2E"
},
{
lineSize:1,
location:"10,25",
shapeType:1,
size:"1227,130",
typeid:21,
uuid:"DE4C065B-4C2A-40D8-986F-5B8871712083"
},
{
formIndex:15,
horizontalAlignment:0,
imageMediaID:"403B568B-A496-4820-969C-40DF8EB60EAC",
labelFor:"",
location:"214,121",
mediaOptions:10,
name:"bt_buscar_nom",
onActionMethodID:"436EF2FA-163D-47A0-9ACB-7B4CF7536EB8",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverImageMediaID:"AFD12FC7-9D52-46A6-AFA5-BCCE09A3EE31",
size:"23,20",
toolTipText:"Buscar",
transparent:true,
typeid:7,
uuid:"E063E0B4-F9EC-4B8D-A40E-C82BF5072FA2"
},
{
formIndex:13,
horizontalAlignment:0,
imageMediaID:"403B568B-A496-4820-969C-40DF8EB60EAC",
labelFor:"",
location:"164,68",
mediaOptions:10,
name:"bt_buscar_esp",
onActionMethodID:"29EB214D-0FD4-434F-B606-B15DE66DDDF3",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverImageMediaID:"AFD12FC7-9D52-46A6-AFA5-BCCE09A3EE31",
size:"23,20",
toolTipText:"Buscar",
transparent:true,
typeid:7,
uuid:"E65B9FDA-005C-4E02-B269-6B0CB00835F4"
},
{
borderType:"TitledBorder,PDF,2,6,Microsoft Sans Serif,0,12",
enabled:false,
formIndex:1,
horizontalAlignment:0,
imageMediaID:"4B74FAE0-4B1B-4CB6-8606-B060C749F215",
labelFor:"",
location:"1102,95",
mediaOptions:2,
name:"btn_pdf",
onActionMethodID:"DCE52FE4-7C02-4A8E-9AF4-D508CCEBC090",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverImageMediaID:"A9D709A2-0B71-4A5D-9864-C17D3FC96FD3",
showFocus:false,
size:"63,50",
toolTipText:"Exportar PDF",
transparent:true,
typeid:7,
uuid:"F59E1FB0-9955-4F26-A7E7-CFBF477E035C"
},
{
borderType:"TitledBorder,Imprimir,2,6,Microsoft Sans Serif,0,12",
enabled:false,
formIndex:1,
horizontalAlignment:0,
imageMediaID:"37C8E4D5-0849-4D80-B081-F092EB1771C3",
labelFor:"",
location:"1040,95",
mediaOptions:2,
name:"btn_imprimir",
onActionMethodID:"C27A60AB-E9E1-4B84-87EC-D23119F502AF",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverImageMediaID:"0B043C49-1B4A-492A-BBA2-03222E73B70F",
showFocus:false,
size:"63,50",
toolTipText:"Imprimir",
transparent:true,
typeid:7,
uuid:"F8887B94-D3AC-46BE-897D-EFC85A20C639"
}
],
name:"frm_cons_convenios_prof_convenios",
navigatorID:"-1",
onHideMethodID:"643FB66D-05F9-463F-A3D0-F658BE6E020A",
onShowMethodID:"AC3816A1-6784-49D2-81F3-3B546316D936",
showInMenu:false,
size:"1247,558",
styleName:"Sanatorio",
transparent:false,
typeid:3,
uuid:"56E601BD-4E97-4608-8184-DCBDF32C63E8"