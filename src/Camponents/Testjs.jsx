import React from 'react';
import './test.css';

export const Testjs = () => {
  return (
    <div className='main'>
        <div className='mainDiv' style={{marginBottom: '40px'}}> 
            <div className='adiv'>
                <div className='indDiv'>A</div>
            </div>
            <div className='adiv'>
                <div className='indDiv'>B</div>
            </div>
        </div>

        <div className='grid-container' style={{marginBottom: '40px'}}>
            <div className='item1'>Header</div>
            <div className='item2'>Manu</div>
            <div className='item3'>Main</div>
            <div className='item4'>Aside</div>
            <div className='item5'>Left</div>
            <div className='item6'>right</div>
            <div className='item7'>Footer</div>
        </div>

        <table  style={{marginBottom: '40px'}}>
            <tbody>
                <tr>
                    <td colSpan='2'>Peter</td>
                    <td rowSpan='2'>Griffin</td>
                </tr>
                <tr>
                    <td>Lois</td>
                    <td>Griffin</td>
                </tr>
            </tbody>
        </table>

    </div>
  )
}