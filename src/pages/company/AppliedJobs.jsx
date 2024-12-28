import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const AppliedJobs = () => {
    let userStore = useSelector((state)=>state.user)
    const getApplied = async()=>{
        let res = await axios.get('http://localhost:8080/applicant/getApplicants',{
            headers:{
                'Authorization':userStore.token
            }
        })
        let data = res.data
        console.log(data)
    }

    useEffect(()=>{
        getApplied()
    },[])
  return (
    <div>
      applied job page
    </div>
  )
}

export default AppliedJobs
