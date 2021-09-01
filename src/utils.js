export const drawBB=(detection,ctx)=>{
    detection.forEach(pred=>{
        const [x,y,width,height] = pred['bbox'];
        const label = pred['class'];

        const color = 'red'
        ctx.strokeStyle = color;
        ctx.font = '20px Arial'
        ctx.fillStyle = color

        ctx.beginPath();
        ctx.fillText(label,x,y)
        ctx.rect(x,y,width,height)
        ctx.stroke();
    })
}