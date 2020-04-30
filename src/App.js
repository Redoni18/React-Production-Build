import React from 'react';

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';

import {fetchData} from './api';
import coronaImage from './image/image.png';

class App extends React.Component{

    state = {
        data: {},
        country: '',
    }

    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }

    handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country });
    }

    render(){
        const { data, country } = this.state;
        return(
            <div>
                <div className = {styles.firstContainer}>
                    <img className={styles.image} src={coronaImage} alt='Corona Logo'/>
                    <h3> Get the latest statistics about the pandemic </h3>
                    <div>
                        <h5 className = {styles.Readmore}> Scroll Down </h5>
                    </div>
                </div>
                <div className = {styles.secondContainer}>
                    <Cards data={data} />
                    <CountryPicker handleCountryChange={this.handleCountryChange}/>
                    <Chart data={data} country={country}/>
                </div>
            </div>
          
        )
    }
}

export default App;