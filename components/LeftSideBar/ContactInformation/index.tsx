/** @jsx jsx */
import { Card, Elevation, FormGroup, H4, InputGroup, MultiSlider } from '@blueprintjs/core';
import { jsx } from '@emotion/core';
import React, { FormEvent, ChangeEvent,createRef,RefObject } from 'react';
import { IAdoptionForm } from '../../../pages';
import { positionLabel2 } from './style';
import { REGRESSION_CHART } from '@blueprintjs/icons/lib/esm/generated/iconNames';
import { normalizeKeyCombo } from '@blueprintjs/core/lib/esm/components/hotkeys/hotkeyParser';
import { NODATA } from 'dns';
import { getRegions, getCitysByRegion, getRegionNameByNum } from '../../../helpers/Inforegiones';

export interface IContactInformationProps {
  onChange: (key: keyof IAdoptionForm, value: any) => void;
  formValues: IAdoptionForm;
}

export default class ContactInformation extends React.Component<
  IContactInformationProps,
  any

 >  {
  state = {
    region: 0,
    regions: getRegions(),
    citys: getCitysByRegion(0)
  };
  




/* //onChangeHandler(e:any) {
  console.log('handler funcionando');
  
    const selection = e.target.value;
    this.setState({region_seleccionada:e.target.value})
    console.log('region seleccionada', this.state.region_seleccionada)


}   */


  render() {


   // let i = -1 
   // let  listaComunas = this.regiones[this.state.region_seleccionada]["comunas"]
    const { onChange, formValues } = this.props;

    const changeRegion = (e: any) => {
      const region = parseInt(e.target.value);
      console.log(region);
      let citys = getCitysByRegion(region);
      const nomreg = getRegionNameByNum(region);
      this.setState({
        region,
        citys
      });
      onChange('region', nomreg);
      setTimeout(() => { onChange('comuna', '') , 500})
    }
    
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
         
         <select 
            name="region" 
            onChange={changeRegion}
          >
            <option key={99} value={99}>Región</option>
            {
              this.state.regions.map((reg: any) => (
                <option 
                  key={reg.nro} 
                  value={reg.nro}
                >{ reg.nombre }
                </option>
              ))
            }
          </select>
          </FormGroup>    

<FormGroup label="Comuna *">       
<select 
            name="comuna"
            onChange={(e: any) => {
              onChange('comuna', e.currentTarget.value);
            }}
          >
            <option key="No informada" value="">Ciudad</option>
            {
              this.state.citys.map((c: any) => (
                <option key={c} value={c}>{ c }</option>
              ))
            }
          </select>


         
          </FormGroup>
        </div>
      </Card>
    );
  }
}
