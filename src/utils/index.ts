import toast from "react-hot-toast"

// create imgBB file uploader function
export const uploadSingleImg = async (img: File) => {
    // create image form data 
    const formData = new FormData()
    formData.append("file", img)
    formData.append('upload_preset', 'unsighn_upload')
    console.log(img)

    // uploading img
    const res = await fetch("https://api.cloudinary.com/v1_1/dqnrwhshc/image/upload", { cache: "no-store", method: "POST", body: formData });

    if(res.status < 400){

        return res.json()
    }

    toast.error("Image upload failed!")

}