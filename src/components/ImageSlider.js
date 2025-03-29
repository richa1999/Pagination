import React, {useState, useEffect} from 'react'

const ImageSlider = () => {
    const data = [
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg",
        "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
        "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            loadNextImage();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const loadNextImage = () => {
        setCurrentIndex(prevIndex => prevIndex === data.length - 1 ? 0: prevIndex + 1);
    }

    const loadPrevImage = () => {
        setCurrentIndex(prevIndex => prevIndex === 0 ? data.length - 1 : prevIndex - 1);
    }
  return (
    <div className='flex justify-center items-center'>
        <img src='https://cdn-icons-png.flaticon.com/512/271/271220.png' alt="Image 1" className='absolute w-36 h-36 left-0 cursor-pointer' onClick={loadPrevImage} />
        <img src={data[currentIndex]} alt="Image 1" className='w-[100%] h-[800px]' />
        <img src='https://cdn-icons-png.flaticon.com/512/32/32213.png' alt="Image 1" className='absolute w-36 h-36 right-0 cursor-pointer' onClick={loadNextImage}/>
    </div>
  )
}

export default ImageSlider