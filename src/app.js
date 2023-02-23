const radiusInput =document.querySelector('#radius');
const heightInput =document.querySelector('#height');
const areaInput   =document.querySelector('#area');
const calcButton  =document.querySelector('#calcButton');

calcButton.addEventListener('click',()=>{
    
    console.log('működik')
    const radius = radiusInput.value;    
    const height = heightInput.value;    
        
    let area = (1.0/3.0)*Math.pow(radius, 2)*Math.PI*height
    areaInput.value = area
    console.log (area)
})

