items:[
{
anchors:11,
lineSize:1,
location:"10,41",
shapeType:1,
size:"1096,149",
transparent:true,
typeid:21,
uuid:"0BDD986A-2931-4C58-B24B-04D1B3A5875B"
},
{
formIndex:14,
location:"120,101",
size:"105,20",
text:"Fecha desde",
transparent:true,
typeid:7,
uuid:"0DCCA3D2-BE01-4E8A-B4D8-5D39AD30C45C"
},
{
anchors:3,
borderType:"TitledBorder,Imprimir,2,6,Microsoft Sans Serif,0,12",
enabled:false,
formIndex:18,
imageMediaID:"37C8E4D5-0849-4D80-B081-F092EB1771C3",
location:"964,125",
mediaOptions:10,
name:"btn_imprimir",
onActionMethodID:"34B0A551-3359-4ABD-BD59-372A913E53A2",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
rolloverImageMediaID:"0B043C49-1B4A-492A-BBA2-03222E73B70F",
showFocus:false,
size:"63,50",
tabSeq:12,
toolTipText:"Imprimir",
transparent:true,
typeid:7,
uuid:"187FCA0F-34BB-4BDC-9534-37ADFE0ADE99"
},
{
anchors:11,
borderType:"LineBorder,1,#000000",
formIndex:20,
horizontalAlignment:0,
items:[
{
containsFormID:"F2186D1C-300C-463E-9026-AA83FBA2880C",
location:"412,312",
text:"msg_bar_progress",
typeid:15,
uuid:"AD4D2552-7584-4595-8451-388DB0D03553"
}
],
location:"412,282",
name:"tabless_1",
printable:false,
size:"290,70",
tabOrientation:-1,
tabSeq:11,
transparent:true,
typeid:16,
uuid:"19C86B10-6972-4032-AB5D-0D3F83677E9B",
visible:false
},
{
formIndex:16,
location:"120,49",
size:"105,20",
text:"Profesional",
transparent:true,
typeid:7,
uuid:"24092D9E-61D1-4CDA-94EC-65F9C1E2296E"
},
{
dataProviderID:"scopes.globals.gbl_con_tipo_histcli",
displayType:2,
editable:false,
formIndex:1,
format:"0|#(2)",
location:"244,75",
name:"con_tipo_histcli",
onActionMethodID:"-1",
onDataChangeMethodID:"-1",
onFocusLostMethodID:"-1",
size:"116,20",
tabSeq:3,
toolTipText:"Tipo de Historia Clínica",
typeid:4,
uuid:"3975B5A2-DADE-4672-8488-E557BAD33E3E",
valuelistID:"E3B9AA46-8D25-4D16-9356-51792BA376A8"
},
{
borderType:"SpecialMatteBorder,0.0,0.0,0.0,0.0,#000000,#000000,#000000,#000000,0.0,",
formIndex:24,
horizontalAlignment:4,
location:"0,482",
size:"1116,1",
text:"",
transparent:true,
typeid:7,
uuid:"511E0BBF-3124-4E6F-80A8-DF51601DE35D"
},
{
dataProviderID:"scopes.globals.gbl_con_fecha_desde",
displayType:5,
formIndex:1,
format:"dd/MM/yyyy|ddMMyyyy",
location:"244,101",
name:"con_fecha_desde",
size:"106,20",
tabSeq:4,
toolTipText:"Fecha Desde",
typeid:4,
uuid:"58042956-4EB5-4AAB-A579-2E71AF79362F"
},
{
anchors:3,
borderType:"TitledBorder,Exportar,2,6,Microsoft Sans Serif,0,12",
enabled:false,
formIndex:18,
imageMediaID:"74F5589C-BDA8-4D9D-BB18-6F31A450F681",
location:"1027,125",
mediaOptions:2,
name:"btn_exportar",
onActionMethodID:"660BBF18-CF19-465A-A86C-0E7F74985B80",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
rolloverImageMediaID:"EEB8FFA1-75DB-422D-B73F-FCB0AB05DEE9",
showFocus:false,
size:"63,50",
tabSeq:13,
toolTipText:"Exportar a Excel",
transparent:true,
typeid:7,
uuid:"623C5F2E-E187-493E-A0E2-E474762E69E4"
},
{
anchors:11,
foreground:"#ffffff",
horizontalAlignment:0,
location:"0,0",
size:"1116,20",
styleClass:"title",
text:"Cirugías Suspendidas",
typeid:7,
uuid:"6309D444-2F6B-474D-A795-F62A3C0ADC03"
},
{
dataProviderID:"scopes.globals.gbl_con_cobertura",
formIndex:2,
format:"|U",
location:"244,156",
name:"con_cobertura",
onActionMethodID:"5B03E3E4-ADE2-455B-8058-DCB7016E85E7",
onDataChangeMethodID:"5B03E3E4-ADE2-455B-8058-DCB7016E85E7",
onFocusLostMethodID:"-1",
size:"55,20",
tabSeq:8,
toolTipText:"Código Cobertura",
typeid:4,
uuid:"726C8A8E-6DB5-480A-AE6A-E572B1EE4522"
},
{
formIndex:12,
location:"120,126",
size:"105,20",
text:"Motivo",
transparent:true,
typeid:7,
uuid:"7C62FB33-4971-4F8F-BE00-092C1E8D8A91"
},
{
formIndex:1,
imageMediaID:"403B568B-A496-4820-969C-40DF8EB60EAC",
location:"300,156",
name:"btn_buscar_cober",
onActionMethodID:"3B078856-7B91-47D9-B839-52F7CAA41469",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
rolloverImageMediaID:"AFD12FC7-9D52-46A6-AFA5-BCCE09A3EE31",
size:"30,20",
tabSeq:9,
toolTipText:"Buscar Cobertura",
typeid:7,
uuid:"7EA26D70-F78E-4FA2-8E80-CA352C943B1E"
},
{
dataProviderID:"scopes.globals.gbl_con_profesional",
formIndex:13,
format:"|U",
location:"244,50",
name:"con_profesional",
onActionMethodID:"1C862186-5C38-4BD3-A862-735803F34595",
onDataChangeMethodID:"1C862186-5C38-4BD3-A862-735803F34595",
onFocusLostMethodID:"-1",
size:"85,20",
tabSeq:1,
toolTipText:"Código Profesional",
typeid:4,
uuid:"7F29ED12-B613-4800-8D9E-B67C033DDD1A"
},
{
anchors:15,
borderType:"LineBorder,1,#000000",
horizontalAlignment:0,
items:[
{
containsFormID:"080AA775-6826-4798-AE9B-7EB412069E5C",
location:"40,252",
text:"Consulta",
typeid:15,
uuid:"674AC3EC-7B89-4685-9B59-43A842CF70E9"
}
],
location:"10,204",
name:"tabless",
printable:false,
size:"1096,273",
tabSeq:-2,
transparent:true,
typeid:16,
uuid:"81028B01-86BA-4E72-B207-5C5A0DEBA4F5"
},
{
height:489,
partType:5,
typeid:19,
uuid:"89908A17-A24B-4072-97B9-7626F30076F1"
},
{
anchors:3,
borderType:"TitledBorder,Procesar,2,6,Microsoft Sans Serif,0,12",
formIndex:18,
imageMediaID:"95433A6D-F219-4961-BBE8-B3D2C3FBB1E0",
location:"901,125",
mediaOptions:10,
name:"btn_procesa",
onActionMethodID:"5C86E812-2602-4200-8B6F-D4C62A8E6C6F",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
rolloverImageMediaID:"7A9D1952-E23B-402B-A100-352997F1B76E",
showFocus:false,
size:"63,50",
tabSeq:10,
toolTipText:"Procesar",
transparent:true,
typeid:7,
uuid:"8A7BF873-5E36-4DAC-BBC0-B5C8B0D13B2B"
},
{
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"scopes.globals.gbl_con_profesional_apeynom",
editable:false,
enabled:false,
fontType:"Trebuchet MS,1,12",
formIndex:19,
location:"375,50",
name:"con_profesional_apeynom",
size:"216,20",
tabSeq:-2,
transparent:true,
typeid:4,
uuid:"8D5CB17B-FD9A-4F25-B734-02DF961D95BA"
},
{
dataProviderID:"scopes.globals.gbl_con_fecha_hasta",
displayType:5,
formIndex:7,
format:"dd/MM/yyyy|ddMMyyyy",
location:"503,101",
name:"con_fecha_hasta",
onActionMethodID:"0831D0B2-5823-43E9-B8AC-61BCF1E063CA",
onDataChangeMethodID:"0831D0B2-5823-43E9-B8AC-61BCF1E063CA",
onFocusLostMethodID:"-1",
size:"105,20",
tabSeq:5,
toolTipText:"Fecha Hasta",
typeid:4,
uuid:"90AB7BD0-EA56-4479-A737-15F9336B6CB5"
},
{
dataProviderID:"scopes.globals.gbl_con_motivo_sus",
formIndex:7,
format:"|U",
location:"244,126",
name:"con_motivo_sus",
onActionMethodID:"F62451B4-5E0A-49E6-80AE-C244858DA608",
onDataChangeMethodID:"F62451B4-5E0A-49E6-80AE-C244858DA608",
onFocusLostMethodID:"-1",
size:"55,20",
tabSeq:6,
toolTipText:"Motivo Suspención",
typeid:4,
uuid:"CC1C2B7A-8D5E-4D13-8EFE-9C66D9BA9E61"
},
{
formIndex:12,
location:"387,101",
size:"101,20",
text:"Fecha hasta",
transparent:true,
typeid:7,
uuid:"CE756531-4808-4118-ACC3-17BC3CC2632D"
},
{
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"scopes.globals.gbl_con_cobertura_nombre",
editable:false,
enabled:false,
fontType:"Trebuchet MS,1,12",
formIndex:19,
location:"345,156",
name:"con_cobertura_apeynom",
size:"216,20",
tabSeq:-2,
transparent:true,
typeid:4,
uuid:"D94E3C13-8754-4061-944C-F07276328DA6"
},
{
formIndex:1,
imageMediaID:"403B568B-A496-4820-969C-40DF8EB60EAC",
location:"330,49",
name:"btn_buscar_prof",
onActionMethodID:"DC3FD64E-08E4-4284-8CE9-C37441C9A804",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
rolloverImageMediaID:"AFD12FC7-9D52-46A6-AFA5-BCCE09A3EE31",
size:"30,20",
tabSeq:2,
toolTipText:"Buscar Profesional",
typeid:7,
uuid:"D96714EC-9344-4B7E-AB70-D6CD4C34037A"
},
{
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"scopes.globals.gbl_con_motivo_nombre",
editable:false,
enabled:false,
fontType:"Trebuchet MS,1,12",
formIndex:19,
location:"345,126",
name:"con_motivo_descripcion",
size:"216,20",
tabSeq:15,
transparent:true,
typeid:4,
uuid:"DEA92A62-981F-4116-90CD-C5D98210428C"
},
{
formIndex:9,
location:"120,156",
size:"105,20",
text:"Cobertura",
transparent:true,
typeid:7,
uuid:"F59A9F6D-C7F7-4BFC-9D01-FDB30E2F2E48"
},
{
formIndex:1,
imageMediaID:"403B568B-A496-4820-969C-40DF8EB60EAC",
location:"300,126",
name:"btn_buscar_motivo",
onActionMethodID:"BBE6E56D-1BF1-45F3-82A0-208D72F5807E",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
rolloverImageMediaID:"AFD12FC7-9D52-46A6-AFA5-BCCE09A3EE31",
size:"30,20",
tabSeq:7,
toolTipText:"Buscar Motivo",
typeid:7,
uuid:"F8010569-79E9-4067-B184-6D869DA6DA72"
},
{
formIndex:14,
location:"120,75",
size:"105,20",
text:"Tipo Hist. Clin.",
transparent:true,
typeid:7,
uuid:"FFAE9354-F6AD-4E30-84E8-4BE67898B9FD"
}
],
name:"frm_cons_cirugias_suspendidas_1869",
navigatorID:"-1",
onElementFocusLostMethodID:"-1",
onHideMethodID:"-1",
onShowMethodID:"0CF9C64D-0729-4807-883B-29A9CA5C83A6",
onUnLoadMethodID:"75F022ED-EC26-4918-A479-9B31B3D00725",
scrollbars:36,
size:"1116,478",
styleName:"Sanatorio",
typeid:3,
uuid:"264C26AA-BBA9-44BB-8A19-D69A4EECB390"