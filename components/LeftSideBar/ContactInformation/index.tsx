/** @jsx jsx */
import { Card, Elevation, FormGroup, H4, InputGroup, MultiSlider } from '@blueprintjs/core';
import { jsx } from '@emotion/core';
import React, { FormEvent, ChangeEvent,createRef,RefObject } from 'react';
import { IAdoptionForm } from '../../../pages';
import { positionLabel2 } from './style';
import { REGRESSION_CHART } from '@blueprintjs/icons/lib/esm/generated/iconNames';
import { normalizeKeyCombo } from '@blueprintjs/core/lib/esm/components/hotkeys/hotkeyParser';
import { NODATA } from 'dns';

export interface IContactInformationProps {
  onChange: (key: keyof IAdoptionForm, value: any) => void;
  formValues: IAdoptionForm;
}

export default class ContactInformation extends React.Component<
  IContactInformationProps,
  any

 >  {
  constructor(props: any) {
    super(props);
    console.log(this.regiones);     
    this.state={
        region_seleccionada:0
    }
    this.onChangeHandler=this.onChangeHandler.bind(this);
}
   regiones = [

    {
    "nombre": "Arica y Parinacota",
    "comunas": ["Arica", "Camarones", "Putre", "General Lagos"]
    },
    {
    "nombre": "Tarapacá",
    "comunas": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
    },
    {
    "nombre": "Antofagasta",
    "comunas": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]
    },
    {
    "nombre": "Atacama",
    "comunas": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
    },
    {
    "nombre": "Coquimbo",
    "comunas": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
    },
    {
    "nombre": "Valparaíso",
    "comunas": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
    }
]

onChangeHandler(e:any) {
  console.log('handler funcionando');
  
    const selection = e.target.value;
    this.setState({region_seleccionada:e.target.value})
    //this.state.region_seleccionada = selection
    console.log('region seleccionada', this.state.region_seleccionada)


}  


  render() {


    let i = -1 
    let  listaComunas = this.regiones[this.state.region_seleccionada]["comunas"]
    const { onChange, formValues } = this.props;
    return (
      <Card elevation={Elevation.ONE} className="mt-3">
        <H4>Datos de contacto</H4>
        <label className="position-absolute" css={positionLabel2}>2</label>
        <div>
          <FormGroup label="Nombre *">
            <InputGroup
              placeholder="Nombre"
              name="contact-name"
              required
              value={formValues['contact-name']}
              onChange={ (e: FormEvent<HTMLInputElement>) : void => {
                onChange('contact-name', e.currentTarget.value);
              }}
              leftIcon='person'
              
              />
              </FormGroup>
            </div>
            <div>
              
          <FormGroup label="Teléfono *">
            <InputGroup
              placeholder="Teléfono"
              name="contact-phone"
              value={formValues['contact-phone']}
              onChange={(e: ChangeEvent<HTMLInputElement>) : void => {
                onChange('contact-phone', e.currentTarget.value);
              }}
              leftIcon='mobile-phone'
              required
            />
          </FormGroup>
        </div>
        <div>
          <FormGroup label="Email *">
            <InputGroup
              name="Email"
              type="email"
              placeholder="Email"
              value={formValues['contact-email']}
              onChange={(e: FormEvent<HTMLInputElement>) : void => {
                onChange('contact-email', e.currentTarget.value);
              }}
              leftIcon='inbox'
            />
          </FormGroup>
        </div>
        <div>
         <FormGroup label="Región *">
         
<select onChange={this.onChangeHandler} value={this.state.region_seleccionada}>
<option selected value="Selecciona una region">Selecciona una region</option> 
{this.regiones.map((region => {
          i++
           return(<option key={region.nombre} value={i}>{region.nombre} </option>

           )
}))}

</select>      
        
<select onChange={this.onChangeHandler} value={this.state.region_seleccionada}>
<option selected value="Selecciona una comuna">Selecciona una Comuna</option>
{listaComunas.map(comuna => {
           return(
           <option>{comuna}</option>
           )
        })}

</select>



          </FormGroup>
        </div>
      </Card>
    );
  }
}
