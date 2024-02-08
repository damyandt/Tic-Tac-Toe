import { useRef, useState } from "react";
import x_img from '../assets/x2.png'
import O_img from '../assets/O2.png'
let data = ["", "", "", "", "", "", "", "", ""];


export const TicTacToe = () => {

    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let titleRef = useRef(null);

    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);
    let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9]

    const checkWin = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            won(data[0])
        } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
            won(data[3])
        } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
            won(data[6])
        } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
            won(data[0])
        } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
            won(data[1])
        } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
            won(data[2])
        } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
            won(data[0])
        } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
            won(data[2])
        }
    }

    const won = (winner) => {
        setLock(true)
        if (winner === "x") {
            titleRef.current.innerHTML = `Congratulations: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg> Wins`
        } else {
            titleRef.current.innerHTML = `Congratulations: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg> Wins`

        }
    }

    const toggle = (e, num) => {
        if (!lock) {


            if (count % 2 === 0) {
                e.target.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>`
                // e.target.innerHTML = `<img src='${x_img}'>`
                setCount(++count)
                data[num] = "x";
            } else {
                e.target.innerHTML = `<div class="circle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg><div/>`
                // e.target.innerHTML = `<img src='${O_img}'>`
                setCount(++count)
                data[num] = "O";
            }
            checkWin()
        }
    }

    const reset = () => {
        setCount(0);
        setLock(false);
        titleRef.current.innerHTML = 'Tic Tac Toe Game In <span>React</span>';
        data = ["", "", "", "", "", "", "", "", ""];
        box_array.map((e) => {
            e.current.innerHTML = "";
        })
    }

    return (
        <div className="container">
            <h1 className="title" ref={titleRef}>Tic Tac Toe Game In <span>React</span></h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes" ref={box1} onClick={(e) => { toggle(e, 0) }}></div>
                    <div className="boxes" ref={box2} onClick={(e) => { toggle(e, 1) }}></div>
                    <div className="boxes" ref={box3} onClick={(e) => { toggle(e, 2) }}></div>
                </div>
                <div className="row2">
                    <div className="boxes" ref={box4} onClick={(e) => { toggle(e, 3) }}></div>
                    <div className="boxes" ref={box5} onClick={(e) => { toggle(e, 4) }}></div>
                    <div className="boxes" ref={box6} onClick={(e) => { toggle(e, 5) }}></div>
                </div>
                <div className="row3">
                    <div className="boxes" ref={box7} onClick={(e) => { toggle(e, 6) }}></div>
                    <div className="boxes" ref={box8} onClick={(e) => { toggle(e, 7) }}></div>
                    <div className="boxes" ref={box9} onClick={(e) => { toggle(e, 8) }}></div>
                </div>
            </div>
            <button className="reset" onClick={reset}>RESET</button>
        </div>
    )
}