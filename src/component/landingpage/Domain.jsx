import { Button , Drawer } from 'keep-react'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import styles from '../../styles/Styles'
import { categoriesData, brandingData } from '../../static/data'
const Domain = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [position, setPosition] = useState('right')
    const navigate = useNavigate();
  return (
    <div className='flex justify-center items-center'>
       <Button onClick={() => setIsOpen(!isOpen)} className="bg-metal-900" color="secondary">
        Toggle Drawer
      </Button>
        <Drawer position={position} isOpen = {isOpen} onClose={()=>setIsOpen(false)}>
        <Drawer.Content className="flex items-center justify-center">
        <div
        className={`${styles.section} bg-white p-6 rounded-lg mb-12`}
        id="categories"
      >
        <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
          {categoriesData &&
            categoriesData.map((i) => {
              const handleSubmit = (i) => {
                navigate(`/products?category=${i.title}`);
              };
              return (
                <div
                  className="w-full h-[100px] flex items-center justify-between cursor-pointer overflow-hidden"
                  key={i.id}
                  onClick={() => handleSubmit(i)}
                >
                  <h5 className={`text-[18px] leading-[1.3]`}>{i.title}</h5>
                  <img
                    src={i.image_Url}
                    className="w-[120px] object-cover"
                    alt=""
                  />
                </div>
              );
            })}
        </div>
      </div>
        </Drawer.Content>
        </Drawer>

    </div>
  )
}

export default Domain