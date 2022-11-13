gsap.registerPlugin(ScrollTrigger);

// color variables
const primary = '#018bc7'
const secondary = '#4b8007'



// Reveal by word Animation
const hh = (parent)=>{
    gsap.from('[rbword]', {
        scrollTrigger: `${parent}`,
        duration: 1, 
        y: '5em',
        stagger: 1
    });
}
hh('.hero')
// end

// Reveal by letter animation
const htext = new SplitType('.hp', { types: ['line', 'chars'] })

const hp = (parent)=>{
    gsap.from(`${parent} .char`, {
        scrollTrigger: {
            trigger: `${parent}`,
        },
        duration: 1, 
        y: '5em',
        stagger: 0.05,
        delay: 0.7,
        ease: "back.inOut(1.5)"
    });
}
hp('.hero')
// end

// OnHover Animation
document.querySelectorAll('.char').forEach(element => {
    
    
    element.onmouseenter = ()=>{
        const charhv = gsap.to(element, {
            duration: 0.5,
            y: '15%',
            color: primary,
        })
        
        
    } 
    element.onmouseleave = ()=>{
        const charhv = gsap.to(element, {
            duration: 0.5,
            y: '0%',
            color: 'green',
        })
        
    } 
});
// control Button test
const btn1 = document.querySelector('[btn]')
btn1.onclick = ()=>{
    hp.reverse()
    hh.reverse()
}
const btn2 = document.querySelector('[btn1]')
btn2.onclick = ()=>{
    hp.play()
    hh.play()
}





// Stretchy Bouncy Animation for letters on hover
const obj = new SplitType('[strb-anim]', {types:['char']})
const hq = document.querySelectorAll('[strb-anim] .char') 

hq.forEach(element => {
    element.onmouseenter = ()=>{
        gsap.to(element, {
            keyframes:[
                {
                    duration: 0.3,
                    transform: 'scale(1.25, 0.75)',
                    ease: 'ease: "power4.in"',
                },
                {
                    duration: 1,
                    transform: 'scale(1, 1)',
                    ease: "elastic.out(2.5, 0.3)",

                },
            ]
        })
    }
});



// Typing Animation with cursor
gsap.to('[type-anim]', {
    repeat: -1,
    keyframes : [
        {
            duration: 4,
            text: {
                value: "dont click me",
                newClass: "class2",
                delimiter: "",
                
            },
            delay: 4
        },
        {
            duration: 4,
            text: {
                value: "ok, now click me",
                newClass: "class2",
                delimiter: "",
                
            },
            delay: 4
        },
        {
            duration: 2,
            text: {
                value: "Click",
                newClass: "class2",
                delimiter: "",
                
            },
            delay:2
        },
    ]
});
// end




const box = document.querySelector('.box')
box.onmouseenter = ()=>{
    gsap.to(box, {
        duration: 1,
        height: '5rem',
        ease: 'elastic.out(2, 1)',

    })
}
box.onmouseleave = ()=>{
    gsap.to(box, {
        duration: 1,
        height: '2rem',
        ease: 'elastic.out(1, 1)',

    })
}




// Scale up animation
document.querySelectorAll('[scaleup-anim]').forEach((element)=>{
    element.onmouseenter = ()=>{
        gsap.to(element, {
            transform: 'scale(1.1)'
            
        })
    }
    element.onmouseleave = ()=>{
        gsap.to(element, {
            transform: 'scale(1)'
            
        })
    }
})


// fadeinfromleft Animation
const fadeLeft = document.querySelectorAll('[fadeLeft]').forEach(element=>{
    gsap.from(element, {
        scrollTrigger: element,
    })
})
