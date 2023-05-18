import styles from "./Carosal.module.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Textarea from '@mui/material/Box';
import { GrNext } from 'react-icons/gr'
import { GrPrevious } from 'react-icons/gr'
import { BsFillPauseCircleFill, BsFillPlayCircleFill } from 'react-icons/bs'
import images from "./data"
import { useState, useEffect } from "react"



function Carosal() {

    const [image, setImage] = React.useState<number>(0)
    const [play, setPlay] = React.useState<Boolean>(false)

    return (
        <>
            <h1>Image Gallary</h1>
            <Box
                sx={{
                    width: 1200,
                    height: 700,
                    m: 'auto',
                    display: 'flex'
                }}
            >

                <Box
                    sx={{
                        width: 800,
                        height: 700,
                    }}
                >
                    <Box
                        sx={{
                            width: 800,
                            height: 400,
                        }}
                    >
                        <img
                            src={images[image].img}
                            alt={images[1].title}
                            loading="lazy"
                            width={800}
                            height={400}
                        />
                    </Box>


                    <Box
                        sx={{
                            width: 800,
                            height: 200,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: "space-around"
                        }}
                    >


                        <Box> <GrPrevious
                            fontSize="30"
                            cursor='pointer'
                            color="white"
                            onClick={() => image == 0 ? setImage(images.length - 1) : setImage(image - 1)} /></Box>


                        {
                            images.map((el, i) => (
                                <img

                                    src={el.img}
                                    key={i}
                                    alt={images[1].title}
                                    loading="lazy"
                                    //cursor='pointer'
                                    width={150}
                                    height={200}
                                    onClick={() => setImage(i)}
                                    style={{
                                        filter: i !== image ? "grayscale(100%)" : "none"
                                    }}
                                />
                            ))
                        }
                        <Box>
                            <GrNext
                                fontSize="30"
                                cursor='pointer'
                                color="white"
                                onClick={() => image == images.length - 1 ? setImage(0) : setImage(image + 1)} />
                        </Box>


                    </Box>

                </Box>

                < Box >
                    <h2>{images[image].title}</h2>
                    <Textarea padding={2}>
                        Lorem ipsum dolor sit amet,  urient montes, nascetur ridiculus mus.   rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                    </Textarea>
                    {
                        play ? <BsFillPlayCircleFill fontSize={50} onClick={() => {
                            setPlay(!play)
                        }} cursor='pointer' /> :
                            <BsFillPauseCircleFill fontSize={50} onClick={() => {
                                setPlay(!play)
                            }} cursor='pointer' />
                    }
                </Box >



            </Box>

        </>
    )
}

export default Carosal


