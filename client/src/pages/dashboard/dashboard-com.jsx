import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'primereact/button';

import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';

import { Accordion, AccordionTab } from 'primereact/accordion';

import './test.css';
import { Redirect } from 'react-router';
import { TabView, TabPanel } from 'primereact/tabview';
import UpdateGeneral from '../../components/updateGeneral/updateGeneral';
import UpdateSecurity from '../../components/updateSecurity/updateSecurity';

const Dashboard = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!currentUser) {
    return <Redirect to='/login' />;
  }
  return (
    <TabView>
      <TabPanel header='General'>
        <div
          style={{
            display: 'flow-root',
          }}
        >
          <UpdateGeneral field_title='name' />
          <UpdateGeneral field_title='age' />
          <UpdateGeneral field_title='email' />
        </div>
      </TabPanel>

      {/* <TabPanel header='Change Password'>
        <div className='p-fluid p-formgrid p-grid'>
          <div className='p-field p-col-12 p-md-6'>
            <label htmlFor='firstname6'>Firstname</label>
            <InputText id='firstname6' type='text' />
          </div>
          <div className='p-field p-col-12 p-md-6'>
            <label htmlFor='lastname6'>Lastname</label>
            <InputText id='lastname6' type='text' />
          </div>
          <div className='p-field p-col-12'>
            <label htmlFor='address'>Address</label>
            <InputTextarea id='address' type='text' rows='4' />
          </div>
          <div className='p-field p-col-12 p-md-6'>
            <label htmlFor='city'>City</label>
            <InputText id='city' type='text' />
          </div>
          <div className='p-field p-col-12 p-md-3'>
            <label htmlFor='state'>State</label>
            <Dropdown inputId='state' placeholder='Select' optionLabel='name' />
          </div>
          <div className='p-field p-col-12 p-md-3'>
            <label htmlFor='zip'>Zip</label>
            <InputText id='zip' type='text' />
          </div>
        </div>
      </TabPanel> */}
      <TabPanel header='Security'>
        <UpdateSecurity />
      </TabPanel>
    </TabView>
  );
};

export default Dashboard;
