import React, { Component } from 'react'
import '../styles/content.css'
import certified from '../assets/certified.png'
import axios from 'axios'

export default class content extends Component {

    state = {
        profiles: [],
        tmprofiles: []
    }

    componentDidMount(){
        this.loadData();
    }

    showAlert = (serchtxt) => {
        this.setState({profiles: this.state.tmprofiles})
        if(serchtxt.length>2){
            const resulPosts = []
            this.state.profiles.map(profile => {               
                if(profile.name.toLowerCase().indexOf(serchtxt.toLowerCase())> -1 || profile.description.toLowerCase().indexOf(serchtxt.toLowerCase())> -1){
                    resulPosts.push(profile);
                }
            })
            this.setState({profiles: resulPosts})
        }
        

    }


    
    async loadData() {
        const res = await axios.get('https://my-json-server.typicode.com/Wilopez95/bodyguards_json/companies');
        this.setState({profiles: res.data})
        this.setState({tmprofiles: res.data})
    }

    render() {
        return (
            <div className="bodyguard">
                <ul className="bodyguards__profiles">
                    {
                        this.state.profiles.map(profile => 
                        <li className="bodyguard__profile__details" key={profile.name}>
                            <div className="bodyguard__profile__tittle">
                                <h3 className="bodyguard__profile__tittle--name">{profile.name}</h3>
                                <div className="bodyguard__profile__certificate">
                                    {
                                        profile.isCertified ? 
                                        <div className="bodyguard__profile__certificate">
                                            <img src={certified} alt="" className="bodyguard__profile__certificate--certificate"/>
                                        </div> : <div></div>
                                    }
                                </div>                              
                            </div>
                            <div className="bodyguard__profile__body">
                                <img src={profile.image} alt="" className="bodyguard__profile__body--imagen"/>
                                <p className="bodyguard__profile__body--description">{profile.description}</p>
                            </div>
                            <div className="bodyguard__profile__options">
                                <h5 className="bodyguard__profile__options--price">Desde: ${profile.rate}/{profile.hours}</h5>
                                <div className="bodyguard__profile__options--btn">
                                    <button type="button">Contratar</button>
                                </div>
                            </div>

                        </li>)
                    }

                </ul>
            </div>
        )
    }
}

