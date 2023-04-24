import { observer } from 'mobx-react-lite';
import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import star from '../assets/star.png'
import { useNavigate } from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts';


const DeviceItem = observer(({device}) => {
    const navigate = useNavigate()

    return (
        <Col md={3} className='mt-3' onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{with: 150, cursor: 'pointer'}} border='light'>
                <Image src={process.env.REACT_APP_API_URL + device.img} width={150} height={150}/>
                <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center'>
                    <div>Samsung..</div>
                    <div className='d-flex align-items-center'>
                        <div>{device.rating }</div>
                        <Image height={20} width={20} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    )
})

export default DeviceItem