import React, { Component } from 'react'
import Emoji from './Emoji.json'
import './App.css'
class SearchEmoji extends Component {
    constructor() {
        super()
        this.state = {
            searchData: '',
        }
    }
    search = (event) => {
        this.setState({
            searchData: event.target.value
        })
    }
    render() {
        return (
            <div>
                <h1 className="head">Emoji  Search</h1>
                <input type="text" className='search_bar' onChange={this.search} placeholder="  SEARCH THE EMOJI..." />
                {Emoji.filter((data) => {
                    return (data.symbol.toLowerCase().includes(this.state.searchData.toLowerCase())
                       ||data.keywords.toLocaleLowerCase().includes(this.state.searchData.toLowerCase())
                       ||data.title.toLowerCase().includes(this.state.searchData.toLowerCase()))
                })
                .map(data => {
                    return (
                        <div className="font">
                        <ul className='page'>
                            {/* <div key={data.symbol} > */}
                                {data.symbol}
                                {data.title}
                            {/* </div> */}
                        </ul>
                    </div>
                        )
                })}
            </div>

        )
    }
}
export default SearchEmoji;

































































