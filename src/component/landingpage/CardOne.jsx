import React, { useEffect, useState } from "react";
import { Tabs } from "keep-react";
import frontVideo from '../../Assets/WhatsApp Video 2024-05-01 at 17.37.23.mp4';
import { Button } from "keep-react";
const CardOne = () => {

    return (
        <div className="h-[36rem] sm:h-[43rem] md:h-[32rem]  w-full lg:flex lg:justify-center bg-white">
            <Tabs activeLabel="one" className="mt-8">
                <Tabs.List className="space-x-9 sm:space-x-24 md:space-x-32 md:ml-12 lg:space-x-44 xl:space-x-60" >
                    <Tabs.Item label="one"> <span>abcde</span></Tabs.Item>
                    <Tabs.Item label="two" className=""><span>Abcdef</span></Tabs.Item>
                    <Tabs.Item label="three"><span>asdfsgf Acber</span></Tabs.Item>
                    <Tabs.Item label="four"><span>asdfds asdff</span></Tabs.Item>
                </Tabs.List>
                <div className="md:mt-12">
                    <Tabs.Content label="one" >
                    <div className=" md:flex md:flex-row">
                    <iframe className="w-full md:max-w-[32rem] aspect-video  " src={frontVideo}></iframe>
                    <div className="flex flex-col justify-center items-center">
                    <h3 className="text-center mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus similique, asperiores quis vero aspernatur facilis.</h3>
                    <Button size="md" color="primary" className='mt-12 max-w-40'>Get Started 4</Button>
                   </div>
                    </div>  
                        </Tabs.Content>
                    <Tabs.Content label="two"><div className=" md:flex md:flex-row">
                    <iframe className="w-full md:max-w-[32rem] aspect-video  " src={frontVideo}></iframe>
                    <div className="flex flex-col justify-center items-center">
                    <h3 className="text-center mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus similique, asperiores quis vero aspernatur facilis.</h3>
                    <Button size="md" color="primary" className='mt-12 max-w-40'>Get Started 4</Button>
                   </div>
                    </div>  
                    </Tabs.Content>
                    
                    <Tabs.Content label="three"><div className=" md:flex md:flex-row">
                    <iframe className="w-full md:max-w-[32rem] aspect-video  " src={frontVideo}></iframe>
                    <div className="flex flex-col justify-center items-center">
                    <h3 className="text-center mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus similique, asperiores quis vero aspernatur facilis.</h3>
                    <Button size="md" color="primary" className='mt-12 max-w-40'>Get Started 4</Button>
                   </div>
                    </div>  
                    </Tabs.Content>
                    <Tabs.Content label="four">
                    <div className=" md:flex md:flex-row">
                    <iframe className="w-full md:max-w-[32rem] aspect-video  " src={frontVideo}></iframe>
                    <div className="flex flex-col justify-center items-center">
                    <h3 className="text-center mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus similique, asperiores quis vero aspernatur facilis.</h3>
                    <Button size="md" color="primary" className='mt-12 max-w-40'>Get Started 4</Button>
                   </div>
                    </div>  

                    </Tabs.Content>
                    </div>
                   </Tabs>
        </div>
    );
};

export default CardOne;
