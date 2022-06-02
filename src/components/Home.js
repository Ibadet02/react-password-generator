import React, {useReducer} from "react"
import { StyledHome } from "./styles/Home.styled"
import { Container } from "./styles/Container"
import { StyledBox } from "./styles/Boxes.styled"
import { StyledResult } from "./styles/Result.styled"
const ACTIONS = ['Small letters', 'Capital letters', 'Numbers', 'Special characters']
const LETTERS = 'abcdefghijklmnopqrstuvwxyz'
const NUMBERS ='0123456789'
const CHARACTERS = '!@"#$;%^:&?*()_-+=/`~.,<>'
const reducer = (state, {type, payload}) =>{
    switch(type){
        case 'toggle':
            return {
                ...state,
                [ACTIONS[payload[0]].split(' ').join('').toLowerCase()]: {isChecked: payload[1].target.checked, length: state[Object.keys(state)[payload[0]]].length}
            }
        case 'change':
            if(payload[1].target.value < 1){
                return {...state}
            }
            return {
                ...state,
                [ACTIONS[payload[0]].split(' ').join('').toLowerCase()]: {isChecked: state[Object.keys(state)[payload[0]]].isChecked, length: payload[1].target.value}
            }
    }
}
export const Home = () =>{

    const [state, dispatch] = useReducer(reducer, {
        [ACTIONS[0].split(' ').join('').toLowerCase()]: {isChecked: true, length: 3},
        [ACTIONS[1].split(' ').join('').toLowerCase()]: {isChecked: true, length: 2},
        [ACTIONS[2].split(' ').join('').toLowerCase()]: {isChecked: true, length: 2},
        [ACTIONS[3].split(' ').join('').toLowerCase()]: {isChecked: false, length: 1}
    })
    return (
        <StyledHome>
            <Container flex_dr = 'column'>
                {ACTIONS.map((el,index)=>{
                    return (
                        <StyledBox key={index} isActive={state[Object.keys(state)[index]].isChecked}>
                            <label htmlFor={el}>{el}</label>
                            <input
                            onChange={(event)=>dispatch({type: 'toggle', payload: [index, event]})}
                            type={'checkbox'}
                            id={el}
                            checked={state[Object.keys(state)[index]].isChecked}
                            />
                            <input
                            disabled={!state[Object.keys(state)[index]].isChecked}
                            onChange={(event)=>dispatch({type: 'change', payload: [index, event]})}
                            value={state[Object.keys(state)[index]].length}
                            type={'number'}
                            />
                        </StyledBox>
                    )
                })}
                <StyledResult>
                    <span>
                        { 
                            Object.values(state).map(el =>{
                                if(el.isChecked)
                                    return el.length
                                else
                                    return 0
                            }).reduce((cur, acc)=>Number(cur)+Number(acc), 0)
                        }
                    </span>
                    <span>
                        {
                            Object.keys(state).map((el, index)=>{
                                switch(el){
                                    case 'smallletters':
                                        if(state.smallletters.isChecked){
                                            return new Array(Number(state.smallletters.length)).fill(null).map(el=>{
                                                const index = Math.floor(Math.random()*(LETTERS.length))
                                                {/* console.log('lowercase',index) */}
                                                return LETTERS[index].toLowerCase()
                                            }).join('')
                                        }
                                    case 'capitalletters':
                                        if(state.capitalletters.isChecked){
                                            return new Array(Number(state.capitalletters.length)).fill(null).map(el=>{
                                                const index = Math.floor(Math.random()*(LETTERS.length))
                                                {/* console.log('uppercase',index) */}
                                                return LETTERS[index].toUpperCase()
                                            }).join('')
                                        }
                                    case 'numbers':
                                        if(state.numbers.isChecked){
                                            return new Array(Number(state.numbers.length)).fill(null).map(el=>{
                                                const index = Math.floor(Math.random()*(NUMBERS.length))
                                                {/* console.log('numbers',index) */}
                                                return NUMBERS[index]
                                            }).join('')
                                        }
                                    case 'specialcharacters':
                                        if(state.specialcharacters.isChecked){
                                            return new Array(Number(state.specialcharacters.length)).fill(null).map(el=>{
                                                const index = Math.floor(Math.random()*(CHARACTERS.length))
                                                {/* console.log('CHARACTERS',index) */}
                                                return CHARACTERS[index]
                                            }).join('')
                                        }
                                }
                            }).join('')
                        }
                    </span>
                </StyledResult>
            </Container>
        </StyledHome>
    )
}