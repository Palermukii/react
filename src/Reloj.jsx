import React, { useEffect, useState } from 'react';
// import './Reloj.css';

export default function Reloj () {

    const date = new Date();

    const [dataTime, setDataTime] = useState({
        horas: date.getHours(),
        minutos: date.getMinutes(),
        segundos: date.getSeconds()
    });


    useEffect(() => {
        
        const timer = setInterval(() => {
            
            const date = new Date();
            setDataTime({
                horas: date.getHours(),
                minutos: date.getMinutes(),
                segundos: date.getSeconds(),
            });
            
        }, 1000);
        

        return () => clearInterval(timer);

    }, []);

    return (
        <>
                    <p >
                        {dataTime.horas < 10 ?  '0${dataTime.horas}' : dataTime.horas} h : {dataTime.minutos < 10 ? `0${dataTime.minutos}` : dataTime.minutos} min : {dataTime.segundos < 10 ? ` ${dataTime.segundos}` : dataTime.segundos} seg
                    </p>
        </>
    )
}