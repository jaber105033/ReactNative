import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomText from '../Components/CustomText'
import CustomHeaderButton from '../Components/HeaderButton'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'

const HostpitalDetail = props => {
    const {navigation} = props
    React.useEffect(()=> {
        navigation.setOptions({
            headerRight : ()=>  
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title="Menu"  iconName="ios-star" 
                        // onPress={}
                    />
            </HeaderButtons>
        })
    },[navigation])
    return (
        
        <View style={styles.container} >
            <View style={styles.textContainer}>
                <CustomText style={styles.header}>{props.route.params.hospital.title}</CustomText>
            </View>
            <View style={[styles.textContainer,styles.addressContainer]}>
                <CustomText style={{color:'white'}}>{props.route.params.hospital.address}</CustomText>
            </View>
            <View style={[styles.textContainer,styles.phoneNoContainer]}>
                <CustomText>شماره تماس :  {props.route.params.hospital.phoneNo}</CustomText>
            </View>
        </View>
    )
}
export default HostpitalDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-end',
    },
    textContainer: {
        padding: 10,

    },
    addressContainer : {
        backgroundColor : 'olive',
        width:'100%',
        height : 200,
        textAlign:'right',
        justifyContent : 'center',
        alignItems : 'center'
    },
    header: {
        fontSize:35,
        textAlign: 'right'
    },
    phoneNoContainer : {
        justifyContent : 'flex-start',
        width:'100%',
    }
})