let lasty = window.scrollY
let fi = document.querySelector('.following_icons')

let load_icon = document.querySelectorAll('.loading_icon')
let after_load = document.querySelectorAll('.after_load_icon')
let video_icons = document.querySelectorAll('.homes')
let scrollbar = document.querySelector('.scroll_withjs')
let vi = document.querySelectorAll('.video_icons')
let hicon = document.querySelector('.hes_icon')
let hes_text = document.querySelectorAll('.hes_text')
let subhead = document.querySelector('#special_subhead')
let home_container =  document.querySelector('.home_container')
let key = -1
let py = 0
let current_axis = 0
let load_f = 0
let close_mobonly = document.querySelector('.close_mobonly')
let mob_only = document.querySelector('.mob_only_header') 
let u_axis = 0
let padding
let scrollani = 0
let animeation_f = 0
let searchbar = document.querySelector('.search_bar')
let scrolling_bar = document.querySelectorAll('.scrollbar')
let lr_arrow = document.querySelectorAll('.double_arrow_container')

let sliding_bar = document.createElement('span')
sliding_bar.classList.add('slidingbar')
sliding_bar.style.height = '3px'
sliding_bar.style.position = 'absolute'
sliding_bar.style.backgroundColor = 'black'
hicon.appendChild(sliding_bar)
console.log(subhead)
console.log('type vi',typeof(vi))

let flexible_heading = document.createElement('div')
flexible_heading.classList.add('flexible_heading')


console.log('check 1')
function scrollcheck() {
    // console.log('curret y',scrollY,'past y',py)
    //mobile scroll check
    if (key === 1) {
        if(scrollY>10)
        {
         vi.forEach(element => 
            {
                let sl = Math.max(0.4,1-(scrollY/100)*(1-0.4))
                let tl = Math.max(-3,(scrollY/100)*-3)
                element.style.transform = `scale(${sl}) translate(${tl}px)`
                element.style.opacity = (1 - scrollY/100 * 1)
                let cchild = element.children
                // console.log('cchild',typeof(cchild))
                if(sl==0.4)
                {
                    for(i=0;i<cchild.length;i++)
                    {
                    // console.log(cchild[i])
                    } 
                }         
            }) 
        }
        else
        {
            vi.forEach(element => 
            {
                element.style.transform = ''
                element.style.opacity = ''
                element.style.position = ''
                let cchild = element.children
                // console.log('cchild',typeof(cchild))
                for(i=0;i<cchild.length;i++)
                {
                    // console.log(cchild[i])
                    cchild[i].style.position = ''
                }
                        searchbar.style.justifyContent = 'center'
            }); 
        }

        console.log((hes_text[0].getBoundingClientRect().y)-70)

        if((hes_text[0].getBoundingClientRect().y-79)<=0&&scrollY>hicon.getBoundingClientRect().bottom)
        {
            console.log('entered')
            hicon.style.position = 'fixed'
            hicon.style.top = 35-vi[0].getBoundingClientRect().height
            hicon.style.zIndex = 10
            hicon.style.width = '100%'
            subhead.style.marginTop = '117px'

            hes_text.forEach(txt =>
            {
                txt.style.marginTop = '-3px' 
                txt.style.marginBottom = '3px'
            })
            padding = 8
            updateaxis()
        }
        else if(scrollY<hicon.getBoundingClientRect().bottom)
        {
            console.log('exit')
            hicon.style.position = ''
            hicon.style.top = ''
            hicon.style.zIndex = ''
            hicon.style.width = ''
            subhead.style.marginTop = ''
            hes_text.forEach(txt =>
            {
                txt.style.marginTop = '' 
                txt.style.marginBottom = ''
            })
            padding = 5
        }

        close_mobonly.addEventListener('click',()=>
        {
            console.log(mob_only)
            mob_only.classList.toggle('close_mob')
        })
        py=scrollY
    }
    else if(key===2||key==3)
    {
        console.log('working scroll check')
        if(scrollY>0&&scrollani==0)
        {
            // let Scroll_count = scrollY
            let Scroll_count = 16
            for(let i=0;i<=Scroll_count;i++)
            {
                console.log(Scroll_count)
                setTimeout(()=>{
                    console.log('hi')
                    let tl = Math.max(-(home_container.getClientRects()[0].height+25),(i/Scroll_count)*-(home_container.getClientRects()[0].height+25))
                    home_container.style.transform = `translate(0,${tl}px)`
                    home_container.style.opacity = (1 - i/Scroll_count)
                    updateaxis()
                    
                    searchbar.style.margin = 0
                    for(let j=3;j<=8;j++)
                    {
                        let ce = searchbar.querySelector(`div:nth-child(${j})`)
                        console.log('height:',Math.max(46,120-((120-46)*i/Scroll_count)))
                        searchbar.style.height = `${Math.max(46,120-((120-46)*i/Scroll_count))}`
                        searchbar.style.width = 'min-content'
                        console.log(j,'is',ce)
                        ce.style.setProperty('font-weight','500','important')
                        ce.style.setProperty('font-size','14','important')
                        if(j<5)
                        {
                            ce.style.setProperty('display','flex','important')
                        }
                        else if(j<8)
                        {
                            ce.style.setProperty('display','none','important')
                        }
                        else{
                            ce.style.setProperty('flex-grow','0','important')
                            ce.style.setProperty('margin','0','important')
                            ce.querySelector('span:first-child').style.setProperty('display','none','important') 
                            ce.querySelector('span:nth-child(2)').style.setProperty('font-weight','500','important')
                            // u:1 - not working, check why? u:2- no fix needed, still check and find the issue
                            ce.querySelector('span:nth-child(2)').style.setProperty('font-family','abnb1','important')
                            ce.querySelector('span:nth-child(2)').style.setProperty('color','rgb(34,34,34)','important')
                            console.log('padding')
                            ce.querySelector('span:nth-child(2)').style.setProperty('padding-right',`${Math.max(21,32-(32-21)*i/Scroll_count)}px`,'important')
                            ce.querySelector('span:nth-child(2)').style.setProperty('padding-left',`${Math.max(14,32-(32-14)*i/Scroll_count)}px`,'important')
                            ce.querySelector('span:nth-child(2)').style.setProperty('width','min-content','important')
                            ce.querySelector('div:nth-child(3)').style.setProperty('padding',`${Math.max(10,16-(32-10)*i/Scroll_count)}px`,'important')
                            ce.querySelector('div:nth-child(3)>svg').style.setProperty('height','12px','important')
                            ce.querySelector('div:nth-child(3)>svg').style.setProperty('width','12px','important')
                            ce.querySelector('div:nth-child(3)').style.setProperty('right','6px','important')
                            if(key===3)
                            {
                                ce.querySelector('div:nth-child(3)').style.setProperty('right','-74px','important')
                                ce.querySelector('span:nth-child(2)').style.setProperty('padding-right',`${Math.max(25,32-(32-25)*i/Scroll_count)}px`,'important')
                            }
                            if(!animeation_f)
                            {
                                requestAnimationFrame(()=>{    
                                console.log('s',ce.querySelector('span:nth-child(2)').getClientRects()[0].width+'px')                                
                                ce.style.setProperty('width',`${ce.querySelector('span:nth-child(2)').getClientRects()[0].width-10+'px'}`,'important')
                                animeation_f = 1
                            })
                            }
                            searchbar.style.transform = `translate(0,-${i/Scroll_count*64}px)`
                            scrollbar.style.height = 'min-content'
                            if(Math.max(48,120-((120-48)*i/Scroll_count))==48)
                            {
                                scrollbar.style.position = 'absolute'
                                scrollbar.style.top = '81px'
                                if(key===2)
                                {
                                    ce.style.setProperty('width',`${ce.querySelector('span:nth-child(2)').getClientRects()[0].width+34+'px'}`,'important')
                                }
                                else if(key===3)
                                {
                                    console.log(key)
                                    ce.style.setProperty('width',`${ce.querySelector('span:nth-child(2)').getClientRects()[0].width+29+'px'}`,'important')
                                } 
                            }
                        }
                    }
                },i*16) 
            }
            scrollani=1
        }
        else if(scrollani===1&&scrollY===0)
        {
                home_container.style.transform = ''
                home_container.style.opacity = ''
                updateaxis() 
                searchbar.style.margin = ''
                for(let j=3;j<=8;j++)
                {
                    let ce = searchbar.querySelector(`div:nth-child(${j})`)
                    // console.log('height:',Math.max(48,120-((120-48)*i/Scroll_count)))
                    searchbar.style.height = ``
                    searchbar.style.width = ''
                    searchbar.style.justifyContent = ''
                    // console.log(j,'is',ce)
                    ce.style.setProperty('font-weight','','important')
                    ce.style.setProperty('font-size','','important')
                    if(j<5)
                    {
                        ce.style.setProperty('display','','important')
                    }
                    else if(j<8)
                    {
                        ce.style.setProperty('display','','important')
                    }
                    else{
                        ce.style.setProperty('flex-grow','','important')
                        ce.style.setProperty('margin','','important')
                        ce.querySelector('span:first-child').style.setProperty('display','','important') 
                        ce.querySelector('span:nth-child(2)').style.setProperty('font-weight','','important')
                        // update:1 - ot working check why? update:2- not needed still check and find the issue
                        ce.querySelector('span:nth-child(2)').style.setProperty('font-family','','important')
                        ce.querySelector('span:nth-child(2)').style.setProperty('color','','important')
                        // console.log('padding')
                        ce.querySelector('span:nth-child(2)').style.setProperty('padding',``,'important')
                        ce.querySelector('span:nth-child(2)').style.setProperty('width','','important')
                        ce.querySelector('div:nth-child(3)').style.setProperty('padding',``,'important')
                        ce.querySelector('div:nth-child(3)>svg').style.setProperty('height','16px','important')
                        ce.querySelector('div:nth-child(3)>svg').style.setProperty('width','16px','important')
                        ce.querySelector('div:nth-child(3)').style.setProperty('right','','important')
                        if(animeation_f)
                        {
                            requestAnimationFrame(()=>{    
                            // console.log('s',ce.querySelector('span:nth-child(2)').getClientRects()[0].width+'px')                                
                            ce.style.setProperty('width',``,'important')
                            animeation_f = 0
                        })
                        }
                        searchbar.style.transform = ``
                        scrollbar.style.height = ''
                        scrollbar.style.position = ''
                    }
                }

                scrollani = 0
        }
    }
    updateaxis()
}


function update_slidepos()
{
    scrolling_bar.forEach((element,index) => {
    console.log(element)
    console.log(element.scrollLeft)
    element.addEventListener('scroll',()=>{
        if(element.scrollLeft>0)
        {
            lr_arrow[index].firstElementChild.style.opacity = 1
            lr_arrow[index].firstElementChild.style.border = 'none'
            lr_arrow[index].firstElementChild.style.backgroundColor = 'rgb(242, 242, 242)'
            lr_arrow[index].firstElementChild.children[0].children[0].style.setProperty('stroke','rgb(34,34,34)') 
        }
        else
        {
            lr_arrow[index].firstElementChild.style.opacity = ''
            lr_arrow[index].firstElementChild.style.border = ''
            lr_arrow[index].firstElementChild.style.backgroundColor = ''
            lr_arrow[index].firstElementChild.children[0].children[0].style.setProperty('stroke','')
        }
        if(element.scrollLeft+element.getClientRects()[0].width==element.scrollWidth)                
        {
            console.log("scroll end")
            lr_arrow[index].lastElementChild.style.opacity = 0.5
            lr_arrow[index].lastElementChild.style.border = '1px solid rgb(193, 193, 193)'
            lr_arrow[index].lastElementChild.style.backgroundColor = 'rgb(255, 255, 255)'
            lr_arrow[index].lastElementChild.children[0].children[0].style.setProperty('stroke','rgb(193, 193, 193)')
        }
        else
        {
            lr_arrow[index].lastElementChild.style.opacity = ''
            lr_arrow[index].lastElementChild.style.border = ''
            lr_arrow[index].lastElementChild.style.backgroundColor = ''
            lr_arrow[index].lastElementChild.children[0].children[0].style.setProperty('stroke','')
        }
        console.log('slide',element.scrollLeft)
    })
    });
}

function slide_Check()
{
    lr_arrow.forEach((element,index) => {
        element.addEventListener('click',(e)=>{
            console.log('check 1')
            if(e.target.closest('.l_arrow, .r_arrow')===document.getElementsByClassName('r_arrow')[index]&&scrolling_bar[index].scrollLeft+element.getClientRects()[0].width!==scrolling_bar[index].scrollWidth)
            { 
                console.log('check 2.1')
                console.log(e.target.closest('.l_arrow, .r_arrow'))
                scrolling_bar[index].scrollBy(scrolling_bar[index].scrollWidth,0)  
            }
            else if(e.target.closest('.l_arrow, .r_arrow')===document.getElementsByClassName('l_arrow')[index]&&scrolling_bar[index].scrollLeft!==0)
            {
                console.log('check 2.2')
                console.log(e.target.closest('.l_arrow, .r_arrow'))
                scrolling_bar[index].scrollBy(-scrolling_bar[index].scrollWidth,0) 
            }
    })
    });
    update_slidepos()
}

function create_flexhead()
{
    flexible_heading.append(scrollbar,hicon)
    document.querySelector('main').prepend(flexible_heading)
}

function checkscreensize() {
    if (window.matchMedia('(max-width:767px)').matches) {
        key = 1
        console.log('mobilez')
        padding = 5
        scrollcheck()
        window.addEventListener('scroll', scrollfunc)
        updateaxis()
    }
    else if (window.matchMedia('(max-width:1023px)').matches) {
        key = 2
        padding = 4
        console.log('tabzzz')
        create_flexhead()
        scrollcheck()
        slide_Check()
        updateaxis()
    }
    else if (window.matchMedia('(min-width:1024px)').matches) {
        key = 3
        padding = 4
        create_flexhead()
        scrollcheck()
        slide_Check()
        console.log('pczzzz')
        updateaxis()
    }
}


checkscreensize()

function updateaxis()
{
    console.log(u_axis)    
    if(key===1)
    {
        console.log('getc',hes_text[u_axis].getClientRects()[0].bottom+5)
        // console.log('2',hes_text[u_axis].getClientRects()[0].width)
        let cords =  hes_text[u_axis].offsetTop+hes_text[u_axis].getClientRects()[0].height
        hes_text[u_axis].style.fontWeight = 600
        sliding_bar.style.width = hes_text[u_axis].getClientRects()[0].width
        sliding_bar.style.top = cords+padding
        sliding_bar.style.left = hes_text[u_axis].getClientRects()[0].x
    }
    else if(key==2)
    {
        console.log('working update axis 2')
        let cords = video_icons[u_axis].getClientRects()[0].y+video_icons[u_axis].getClientRects()[0].height
        console.log('cords',cords)
        hes_text[u_axis].style.fontWeight = 600
        hes_text[u_axis].style.color = 'rgb(36,36,36)'
        sliding_bar.style.width = (video_icons[u_axis].getClientRects()[0].width)+7
        sliding_bar.style.top = cords+padding
        sliding_bar.style.left = (video_icons[u_axis].getClientRects()[0].x)-7
    }
    else if(key==3)
    { 
        console.log('working update axis 3')
        let cords = video_icons[u_axis].getClientRects()[0].y+video_icons[u_axis].getClientRects()[0].height
        console.log('cords',cords)
        hes_text[u_axis].style.fontWeight = 600
        hes_text[u_axis].style.color = 'rgb(36,36,36)'
        sliding_bar.style.width = (video_icons[u_axis].getClientRects()[0].width)+7
        sliding_bar.style.top = cords+padding
        sliding_bar.style.left = (video_icons[u_axis].getClientRects()[0].x)-7
    }
}

updateaxis()

function scrollfunc() {
    // console.log("window.scrollY",window.scrollY)
    // console.log("scrollY",scrollY)
    // console.log("window.innerHeight",window.innerHeight)
    // console.log("document.documentElement.scrollHeight",document.documentElement.scrollHeight)
    if (scrollY > lasty) {
        // console.log(1)
        fi.style.display = 'none'
    }
    else {
        // console.log(2)
        fi.style.display = ''
    }
    if (scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        // console.log(3)
        fi.style.display = ''
    }

    lasty = window.scrollY
}

window.addEventListener('load', () => {
    for (let i = 0; i < load_icon.length; i++) {
        load_icon[i].style.display = 'inline'
        after_load[i].style.display = 'none'
        console.log(load_icon[i])
        console.log(after_load[i])
        video_icons[i].addEventListener('click', (e) => {
        for(j=0;j<load_icon.length;j++)
        {
            load_icon[j].style.display= 'inline'
            after_load[j].style.display= 'none'
            hes_text[j].style.fontWeight = ''
        }
        console.log('setting display')
        u_axis = Number(e.currentTarget.getAttribute('id'))
        console.log(u_axis)
        let ctnow =  e.currentTarget.childNodes[1]
        ctnow.children[ctnow.children.length-1].style.display = ''
        ctnow.children[ctnow.children.length-2].style.display = ''
        ctnow.children[ctnow.children.length-1].load()
        updateaxis()
    })}
})


window.addEventListener('resize', () => {
    console.log('change')
    checkscreensize()
})

window.addEventListener('scroll', scrollcheck)