gsap.registerPlugin(ScrollTrigger);

// color variables
const primary = '#018bc7'
const secondary = '#4b8007'


// boouncy padding animation
const bouncyA = (obj)=>{
    obj.onmouseenter = ()=>{
        gsap.to(obj, {
            duration: 1,
            padding: '1rem 2rem',
            ease: 'elastic.out(1.5,0.3)'
    })
}
obj.onmouseleave = ()=>{
    gsap.to(obj, {
        duration: 1,
        padding: '0.5rem 1rem',
        ease: 'elastic.out(1.5,0.5)'
    })
}
}
const seeM = document.querySelectorAll('.conc a')
seeM.forEach((ele=>{bouncyA(ele)}))



// fade from bottom animation
const fadeFB = (section, delay)=>{
    gsap.from(section, {
        duration:1,
        scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        delay: delay,
    })
}
fadeFB('#skills', 0)
fadeFB('#portfolio', 0.5)
fadeFB('#contact-me', 0)


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
const htext = new SplitType('.hp', { types: ['line', 'word', 'char'] })

const hp = (parent, trigger , del)=>{
    gsap.from(`${parent} .char`, {
        scrollTrigger: {
            trigger: trigger,
            start: 'top 75%',
            toggleActions: "play none none reverse",
        },
        duration: 1, 
        y: '5em',
        stagger: 0.05,
        delay: del,
        ease: "back.inOut(1.5)"
    });
}
hp('.hero', '.hero', 0)
hp('.skills h2', "#skills", 0)
hp('.portfolio h2', '#portfolio', 0)
hp('.contact-me h2', '#contact-me', 0)
const offc = new SplitType('.offcanvas a', { types: ['line', 'word', 'char'] })
document.querySelector('[navbtn]').onclick = ()=>{hp('.offcanvas', 0)}
// end

// OnHover Animation
document.querySelectorAll('.es .char').forEach(element => {
    
    
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






// Stretchy Bouncy Animation for letters on hover
const obj1 = new SplitType('[strb-anim]', {types:['char']})

const hq = document.querySelectorAll('[strb-anim] .char') 

hq.forEach(element => {
    element.onmouseenter = ()=>{
        gsap.to(element, {
            keyframes:[
                {
                    duration: 0.3,
                    transform: 'scale(1.24, 0.74)',
                    ease: "power4.in",
                },
                {
                    duration: 0.05,
                    transform: 'scale(1.26, 0.76)',
                    ease: "power4.in",
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
// gsap.to('[type-anim]', {
//     repeat: -1,
//     scrollTrigger: '[type-anim]',
//     keyframes : [
//         {
//             duration: 4,
//             text: {
//                 value: "dont click me",
//                 delimiter: "",
                
//             },
//             delay: 4
//         },
//         {
//             duration: 4,
//             text: {
//                 value: "ok, now click me",
//                 delimiter: "",
                
//             },
//             delay: 4
//         },
//         {
//             duration: 2,
//             text: {
//                 value: "Click",
//                 delimiter: "",
                
//             },
//             delay:2
//         },
//     ]
// });
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
            transform: 'scale(1.05)'
            
        })
    }
    element.onmouseleave = ()=>{
        gsap.to(element, {
            transform: 'scale(1)'
            
        })
    }
})

// fadein animation
const fadeinO = document.querySelectorAll('[fadein-anim]')
fadeinO.forEach(element=>{
    gsap.from(element, {
        duration:1,
        scrollTrigger: '[fadein-anim]',
        opacity:0,
        marginBottom: '-4rem'
    })
})

// bounce in Animation
gsap.fromTo('header', {
    marginTop:'-10rem',
    opacity: 0
},
{
    duration: 2,
    marginTop: '2.5rem',
    opacity:1
}
)


