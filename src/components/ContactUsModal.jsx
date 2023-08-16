import styles from '../styles/ContactUsModal.module.scss'
import diamond from '../img/diamond.png'
import {Link} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
import { useState } from 'react';
import axios from 'axios'

export default function ContactUsModal({setIsOpen}) {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [message , setMessage] = useState('')
    const [nameDirty, setNameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [messageDirty, setMessageDirty] = useState(false)
    const [nameError, setNameError] = useState('Please, type your full name.')
    const [emailError, setEmailError] = useState('Please, type your email.')
    const [messageError, setMessageError] = useState('Please, type your message.')

    
    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Incorect email')
        } else {
            setEmailError('')
        }
    }
    const nameHandler = (e) => {
        setName(e.target.value)
            if (!e.target.value) {
                setNameError("Please, type your name")
            }
         else {
                setNameError('')
            }
    }
    const messageHandler = (e) => {
        setMessage(e.target.value)
            if (!e.target.value) {
                setMessageError("Please, type your message")
            }
         else {
                setMessageError('')
            }
    }
    const Check = () =>{
        setEmailDirty(true)
        setNameDirty(true)
        setMessageDirty(true)
        setEmailError('Please, type your email')
        setNameError('Please, type your name')
        setMessageError('Please, type your message')
    }
    const BlurHandle = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'name':
                setNameDirty(true)
                break
            case 'message':
                setMessageDirty(true)
                break    
        }
    }
    async function SendMessage(){
        try{
            const result = await axios.post('http://localhost:5000/api/contact' , {name , message , email});
            setIsOpen(false)
            return result
        }
        catch(e){
            console.log(e)
        }
    }

    return(
        <AnimatePresence>
            <motion.div className={styles.modal}         
            initial={{ opacity: 0.6 , y: 50 }}
            animate={{ opacity: 1 , y: 0 }}
            exit={{ opacity: 0 }}
            transition={{duration: 0.3}}
            >
                <button className={styles.closeButton} onClick={()=>setIsOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                </svg>
                </button>
                <div className={styles.logo}>
                <img src={diamond} alt="logo"/>
                <h3>DIAMONDCALL</h3>
                </div>
                <form autoComplete='true' style={{width:'100%' , display:'flex',alignItems:'center', justifyContent:'center' , flexDirection:'column' , gap:'15px'}}>
                    <div className={styles.nameInput}>
                        <label className={styles.label}>Full name</label>
                        <input type="text" onBlur={e => BlurHandle(e)} name='name' onChange={(e) => nameHandler(e)} placeholder="Type your full name"/>
                        {
                                nameDirty && nameError && <div className={styles.Errors}>{nameError}</div>
                        }
                    </div>
                    <div className={styles.nameInput}>
                        <label className={styles.label}>Email</label>
                        <input type="text" name='email' onBlur={e => BlurHandle(e)} onChange={(e) => emailHandler(e)} placeholder="Type your email"/>
                        {
                                emailDirty && emailError && <div className={styles.Errors}>{emailError}</div>
                        }
                    </div>
                    <div className={styles.nameInput}>
                        <label className={styles.label}>Message</label>
                        <textarea type="text" name='message'  onBlur={e => BlurHandle(e)} onChange={(e) => messageHandler(e)}  id="defaultFormControlInput" placeholder="Type your message" />
                        {
                                messageDirty && messageError && <div className={styles.Errors}>{messageError}</div>
                        }
                    </div>
                </form>
                {
                    !emailError && !nameError  && !messageError ? <button onClick={SendMessage} className={styles.sendButton}>Send</button>
                    : <button className={styles.sendButton} onClick={Check}>Send</button>

                }
            </motion.div>
        </AnimatePresence>
    )
}