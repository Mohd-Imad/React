import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import  {Modal, ModalBody, ModalHeader } from 'reactstrap'

const Popup = () => {

    let [modal,setModal] = useState(false)
    
    useEffect(()=>{
      setModal(true)
    },[])

  return <>
  <div>
    <Modal size='md' isOpen={modal} style={{marginTop:"200px"}}>
        <ModalHeader toggle={()=>{setModal(!modal)}}>PopUp Message</ModalHeader>
        <ModalBody>Enter Name or Designation to search</ModalBody>
    </Modal>
  </div>
       {/* <button className='btn btn-warning mt-3' style={{margin:"45vw"}} onClick={()=>{setModal(true)}}>Open PopUp</button> */}
    </>
}

export default Popup
