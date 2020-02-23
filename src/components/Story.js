import React, { useState, useEffect, useRef } from 'react'
import './Story.scss'
import M from 'materialize-css/dist/js/materialize.min.js'

const Story = (props) => {
    const [pid, setPid] = useState(0)
    const [complete, setComplete] = useState(0)
    const [pause, setPause] = useState(false)

    const getComplete = (i) => {
        if (i === pid) {
            if (complete === 100) {
                carouselInstance.current.next();
                setPid(pid + 1);
                setComplete(0);
                if (pid == props.storyUrls.length -1) {
                    console.log('INNN')
                    props.sets(props.set + 1)
                }
            }
            return complete;
        }

        if (i < pid) {
            return 100;
        } else {
            return 0;
        }
    }

    useEffect(() => {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems, {});
    }, [])

    useEffect(() => {
        const progress = () => {
            if (pause == false) {
                setComplete((oldComplete) => {
                    return Math.min(oldComplete + 1, 100)
                })
            }
        }

        const time = setInterval(progress, 30);

        return () => {
            clearInterval(time);
        }
    }, [])

    const carouselRef = useRef(null)
    const carouselInstance = useRef(null)

    useEffect(() => {
        carouselInstance.current = M.Carousel.init(carouselRef.current, {
            fullWidth: true,
            noWrap: true,
            duration: 0
        })

        return () => {
            carouselInstance.current.destroy();
        }
    }, [])

    const previous = () => {
        carouselInstance.current.prev();
        setPid((old) => Math.max(0, old - 1));
        setComplete(0);
    }

    const nextone = () => {
        carouselInstance.current.next();
        setPid((old) => Math.min(props.storyUrls.length, old + 1));
        setComplete(0);
    }

    return (
        <div className="story-wrapper">
            <i className="material-icons left circle black-text" onClick={previous}>chevron_left</i>
            <div className="story">
                <div className="story-header collection blk">
                    <div class="collection-item avatar valign-wrapper blkk">
                        <img src={props.avatarUrl} alt="" class="circle" />
                        <span class="title">{props.name}</span>
                        <span class="ml10">1h</span>
                        <a href="#!" class="secondary-content">
                            <i className="material-icons more white-text modal-trigger" data-target="modal1">more_horiz</i>
                            <div id="modal1" className="modal" style={{ borderRadius: '25px', top: '50%' }}>
                                <ul class="collection blk" style={{ margin: '0px', borderRadius: '20px' }}>
                                    <a class="collection-item center white-text blkk">Report inappropriate</a>
                                    <a class="collection-item center white-text modal-close blkk">Cancel</a>
                                </ul>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="story-progress">
                    {
                        props.storyUrls.map((url, indx) =>
                            <div class="progress grey" key={indx} style={{ width: (100 / props.storyUrls.length) + '%' }}>
                                <div class="determinate white" style={{ width: getComplete(indx) + '%' }}></div>
                            </div>
                        )
                    }
                </div>
                <div className="story-content">
                    <div ref={carouselRef} class="carousel carousel-slider">
                        {
                            props.storyUrls.map((url, i) =>
                                <a key={i} class="carousel-item" href="#" onClick={() => setPause(!pause)}><img src={url} /></a>
                            )
                        }
                    </div>
                </div>
            </div>
            <i className="material-icons right r circle black-text" onClick={nextone}>chevron_right</i>
            <i className="material-icons x small" onClick={() => props.setC(!props.c)}>close</i>
        </div>
    )
}

export default Story;   