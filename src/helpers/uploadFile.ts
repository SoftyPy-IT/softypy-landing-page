const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/auto/upload`

 

const uploadFile = async(file:File)=>{
    const formData = new FormData()
    formData.append('file',file)
    formData.append("upload_preset","muissa")

    const response = await fetch(url,{
        method : 'post',
        body : formData
    })
    const responseData = await response.json()


    return responseData
}

export default uploadFile