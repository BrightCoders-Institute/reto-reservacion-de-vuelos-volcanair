import { View, Text } from 'react-native'
import React, { Dispatch } from 'react'
import SelectDropDown from 'react-native-select-dropdown';
import { Flight } from '../../../Schemas/Flight';

type selectCiudadProps = {
    DataFlight: Flight;
    setDataFlight: Dispatch<Flight>;
}
export default function SelectCiudad({DataFlight, setDataFlight}: selectCiudadProps): JSX.Element {
    const countries = ["Colima", "Guadalajara", "Torreon", "CDMX"];
    return (

        <SelectDropDown
            data={countries}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem);
                setDataFlight({
                    ...DataFlight,
                    origin_city: {
                        name: selectedItem,
                        code: "CODE"
                    }
                })
            }}
        />

    )
}