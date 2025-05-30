import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
export default function Adminprofile(){
    const navigate = useNavigate()
    let admintoken = localStorage.getItem("admintoken")

    async function verifyToken(){
       
        console.log("admintoken from  admin profile",admintoken)
        let response = await fetch("/adminprofile",{
            method:"GET",
            headers:{
                'authorization':`Bearer ${admintoken}`,
                'content-type':'application/json',
            },
        })
        console.log(response)
        let data = await response.json()
        console.log("data from admin profile", data[0].admin_email)
        let adminrole = data.role
        localStorage.setItem("adminrole",adminrole)
    }

    useEffect(()=>{
        console.log("usereffect in admin profile")
        if(!admintoken){
            navigate("/adminsignin")
        }
        verifyToken()
    },[])


    return(
        <>
        </>
    )
}